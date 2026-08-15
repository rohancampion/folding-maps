import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const clean = (value: unknown, max = 3000) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (clean(body.website)) return NextResponse.json({ ok: true });

    const email = clean(body.email, 254);
    const interest = clean(body.interest, 100);
    const companySize = clean(body.companySize, 30);
    const budget = clean(body.budget, 50);
    const message = clean(body.message);
    const referred = clean(body.referred, 3);
    const referralSource = clean(body.referralSource, 100);
    const referralName = clean(body.referralName, 150);
    const referralIsValid =
      referred === 'no' ||
      (referred === 'yes' && Boolean(referralSource && referralName));

    if (
      !/^\S+@\S+\.\S+$/.test(email) ||
      !interest ||
      !companySize ||
      !budget ||
      message.length < 10 ||
      !body.consent ||
      !referralIsValid
    ) {
      return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const referral = referred === 'yes'
      ? `${referralSource}, ${referralName}`
      : 'Not referred';

    await Promise.all([
      resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'Quiet Gears <enquiries@quietgears.co.uk>',
        to: 'quietgearsai@gmail.com',
        replyTo: email,
        subject: `New enquiry: ${interest}`,
        text: `Email: ${email}\nCompany size: ${companySize}\nBudget: ${budget}\nInterest: ${interest}\nReferral: ${referral}\n\n${message}`,
      }),
      resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL || 'Quiet Gears <enquiries@quietgears.co.uk>',
        to: email,
        subject: 'We received your Quiet Gears enquiry',
        text: 'Thanks for getting in touch. We have received your message and will reply within one working day.\n\nQuiet Gears\n4 Foscote Mews, London · Servicing Nationwide',
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unable to send your enquiry.' }, { status: 500 });
  }
}
