'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type ReferralChoice = '' | 'yes' | 'no';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [referred, setReferred] = useState<ReferralChoice>('');

  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!referred) {
      setState('error');
      return;
    }

    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    setState(response.ok ? 'done' : 'error');
  }

  if (state === 'done') {
    return <div className="form-success"><Check/><h2>Thank you.</h2><p>Your message is in the gears. We&apos;ll reply within one working day.</p></div>;
  }

  return (
    <form onSubmit={send} className="contact-form">
      <label>Email<input required type="email" name="email" placeholder="you@company.co.uk"/></label>
      <div className="form-row">
        <label>What can we help with?<select required name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>AI strategy</option><option>Workflow automation</option><option>AI agents & integration</option><option>Website or application</option><option>Training</option><option>Something else</option></select></label>
        <label>Company size<select required name="companySize" defaultValue=""><option value="" disabled>Select a range</option><option>1–10</option><option>11–50</option><option>51–250</option><option>250+</option></select></label>
      </div>
      <label>Indicative budget<select required name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>£2,000–£5,000</option><option>£5,000–£15,000</option><option>£15,000–£50,000</option><option>£50,000+</option><option>Not sure yet</option></select></label>
      <label>Tell us about the opportunity<textarea required name="message" rows={6} placeholder="What would you like to improve, automate or build?"/></label>
      <fieldset className="referral-field">
        <legend>Were you referred to Quiet Gears?</legend>
        <input type="hidden" name="referred" value={referred}/>
        <div className="form-row">
          <button type="button" className={`button ${referred === 'yes' ? 'dark' : ''}`} aria-pressed={referred === 'yes'} onClick={() => { setReferred('yes'); setState('idle'); }}>Yes, I was referred</button>
          <button type="button" className={`button ${referred === 'no' ? 'dark' : ''}`} aria-pressed={referred === 'no'} onClick={() => { setReferred('no'); setState('idle'); }}>No, I found you myself</button>
        </div>
      </fieldset>
      {referred === 'yes' && (
        <div className="form-row">
          <label>How were you referred?<input required name="referralSource" placeholder="Partner, event, recommendation…"/></label>
          <label>Who referred you?<input required name="referralName" placeholder="Name or organisation"/></label>
        </div>
      )}
      <label className="consent"><input required type="checkbox" name="consent"/> I agree to Quiet Gears using my details to respond to this enquiry.</label>
      <button disabled={state === 'sending'} className="button dark" type="submit">{state === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowRight size={17}/></button>
      {state === 'error' && <p className="error">{referred ? 'Something went wrong. Please email us directly.' : 'Please tell us whether you were referred.'}</p>}
      <small>Protected by a hidden honeypot field and server-side validation.</small>
      <input className="trap" name="website" tabIndex={-1} autoComplete="off"/>
    </form>
  );
}
