import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Lazy init — avoids build-time crash when RESEND_API_KEY is not set
let _resend: Resend | null = null
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY)
  return _resend
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, phone, email, deliveryType, notes, items } = body

  // Format cart items
  const itemsList = items
    .map(
      (i: { name: string; quantity: number; price: number; unit: string }) =>
        `- ${i.name} x${i.quantity} @ $${i.price.toFixed(2)}/${i.unit}`
    )
    .join('\n')

  const total = items.reduce(
    (sum: number, i: { price: number; quantity: number }) => sum + i.price * i.quantity,
    0
  )

  try {
    await getResend().emails.send({
      from: 'Twin Falls Hardware <quotes@twinfallshardware.worker-bee.app>',
      to: 'orders@twinfallshardware.com',
      replyTo: email,
      subject: `Quote Request from ${name}`,
      text: `New quote request from ${name}\n\nContact:\nPhone: ${phone}\nEmail: ${email}\n\nFulfillment: ${deliveryType}\n\nItems:\n${itemsList}\n\nSubtotal: $${total.toFixed(2)}\n\nNotes: ${notes || 'None'}`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Quote email error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
