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
    const referred = body.referred === 'yes';
    const referralSource = clean(body.referralSource, 100);
    const referralName = clean(body.referralName, 150);

    if (
      !/^\S+@\S+\.\S+$/.test(email) ||
      !interest ||
      !companySize ||
      !budget ||
      message.length < 10 ||
      !body.consent ||
      (referred && (!referralSource || !referralName))
    ) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Email delivery is not configured. Please email quietgearsai@gmail.com directly.' },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const configuredFrom = process.env.CONTACT_FROM_EMAIL?.trim();
    const from = configuredFrom || 'Quiet Gears <onboarding@resend.dev>';
    const to = process.env.CONTACT_TO_EMAIL?.trim() || 'quietgearsai@gmail.com';
    const referral = referred
      ? `${referralSource}, ${referralName}`
      : 'Not referred';

    const enquiry = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New enquiry: ${interest}`,
      text: `Email: ${email}\nCompany size: ${companySize}\nBudget: ${budget}\nInterest: ${interest}\nReferral: ${referral}\n\n${message}`,
    });

    if (enquiry.error) {
      console.error('Contact enquiry delivery failed', enquiry.error);
      return NextResponse.json(
        { error: 'Email delivery is temporarily unavailable. Please email quietgearsai@gmail.com directly.' },
        { status: 502 },
      );
    }

    if (configuredFrom) {
      const confirmation = await resend.emails.send({
        from: configuredFrom,
        to: email,
        subject: 'We received your Quiet Gears enquiry',
        text: 'Thanks for getting in touch. We have received your message and will reply within one working day.\n\nQuiet Gears\n4 Foscote Mews, London · Servicing Nationwide',
      });

      if (confirmation.error) {
        console.error('Contact confirmation delivery failed', confirmation.error);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form request failed', error);
    return NextResponse.json(
      { error: 'Unable to send your enquiry. Please email quietgearsai@gmail.com directly.' },
      { status: 500 },
    );
  }
}
