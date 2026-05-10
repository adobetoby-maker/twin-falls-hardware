import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const {
    businessName,
    licenseNumber,
    licenseType,
    yearsInBusiness,
    contactName,
    phone,
    email,
    monthlySpend,
  } = body

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Twin Falls Hardware <accounts@twinfallshardware.worker-bee.app>',
      to: 'info@twinfallshardware.com',
      replyTo: email,
      subject: `Contractor Account Application: ${businessName}`,
      text: `New contractor account application\n\nBusiness: ${businessName}\nLicense #: ${licenseNumber} (${licenseType})\nYears in Business: ${yearsInBusiness}\n\nContact: ${contactName}\nPhone: ${phone}\nEmail: ${email}\nEstimated Monthly Spend: ${monthlySpend}`,
    })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contractor app email error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
