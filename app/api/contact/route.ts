import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy init — avoids build-time crash when RESEND_API_KEY is not set
let _resend: Resend | null = null
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

export async function POST(req: NextRequest) {
  const { name, phone, email, questionType, message } = await req.json()

  try {
    await getResend().emails.send({
      from: 'Twin Falls Hardware <contact@twinfallshardware.worker-bee.app>',
      to: 'info@twinfallshardware.com',
      replyTo: email,
      subject: `[${questionType}] Message from ${name}`,
      text: `From: ${name}\nPhone: ${phone || 'Not provided'}\nEmail: ${email}\nType: ${questionType}\n\n${message}`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
