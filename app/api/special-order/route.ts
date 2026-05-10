import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, itemDescription, quantity, neededBy, notes } = body

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Twin Falls Hardware <orders@twinfallshardware.worker-bee.app>',
      to: 'orders@twinfallshardware.com',
      replyTo: undefined,
      subject: `Special Order Request: ${itemDescription?.slice(0, 60) ?? 'New Request'}`,
      text: `New special order request\n\nName: ${name}\nPhone: ${phone}\n\nItem Description:\n${itemDescription}\n\nQuantity: ${quantity}\nNeeded By: ${neededBy}\n\nAdditional Notes: ${notes || 'None'}`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Special order email error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
