import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, title, organisation, email, topic, message } = await req.json()

    await resend.emails.send({
      from: 'StrategyEdge Website <onboarding@resend.dev>',
      to: 'admin@stratedgecnt.com',
      reply_to: email,
      subject: `New Enquiry: ${topic || 'General'} — ${organisation}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #0A1628;">
          <h2 style="margin-bottom: 4px;">New Enquiry via StrategyEdge Website</h2>
          <hr style="border: none; border-top: 1px solid #C5D5E8; margin: 16px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #4A6A8A; width: 140px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #4A6A8A;">Title</td><td style="padding: 8px 0;">${title || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #4A6A8A;">Organisation</td><td style="padding: 8px 0;">${organisation}</td></tr>
            <tr><td style="padding: 8px 0; color: #4A6A8A;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0A1628;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #4A6A8A;">Area of Interest</td><td style="padding: 8px 0;">${topic || '—'}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #C5D5E8; margin: 16px 0;" />
          <p style="color: #4A6A8A; margin-bottom: 8px;">Message</p>
          <p style="white-space: pre-wrap;">${message || '—'}</p>
          <hr style="border: none; border-top: 1px solid #C5D5E8; margin: 16px 0;" />
          <p style="font-size: 12px; color: #9EB3C8;">Sent from stratedgecnt.com contact form. Reply directly to respond to ${name}.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
