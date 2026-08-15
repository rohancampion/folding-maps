'use client';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [referred, setReferred] = useState(false);

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    setState(response.ok ? 'done' : 'error');
  }

  if (state === 'done') return <div className="form-success"><Check/><h2>Thank you.</h2><p>Your message is in the gears. We&apos;ll reply within one working day.</p></div>;

  return <form onSubmit={send} className="contact-form">
    <label>Email<input required type="email" name="email" placeholder="you@company.co.uk"/></label>
    <div className="form-row">
      <label>What can we help with?<select required name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>AI strategy</option><option>Workflow automation</option><option>AI agents & integration</option><option>Website or application</option><option>Training</option><option>Something else</option></select></label>
      <label>Company size<select required name="companySize" defaultValue=""><option value="" disabled>Select a range</option><option>1–10</option><option>11–50</option><option>51–250</option><option>250+</option></select></label>
    </div>
    <label>Indicative budget<select required name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>£2,000–£5,000</option><option>£5,000–£15,000</option><option>£15,000–£50,000</option><option>£50,000+</option><option>Not sure yet</option></select></label>
    <fieldset className="referral-field"><label className="consent"><input type="checkbox" name="referred" checked={referred} onChange={event => setReferred(event.target.checked)}/> I was referred to Quiet Gears</label>{referred && <div className="referral-details"><label>How were you referred?<select required name="referralSource" defaultValue=""><option value="" disabled>Select an option</option><option>Client or colleague</option><option>Professional adviser</option><option>Industry event</option><option>Other</option></select></label><label>Referrer&apos;s name<input required name="referralName" placeholder="Name of person or organisation"/></label></div>}</fieldset>
    <label>Tell us about the opportunity<textarea required name="message" rows={6} placeholder="What would you like to improve, automate or build?"/></label>
    <label className="consent"><input required type="checkbox" name="consent"/> I agree to Quiet Gears using my details to respond to this enquiry.</label>
    <button disabled={state === 'sending'} className="button dark" type="submit">{state === 'sending' ? 'Sending…' : 'Send enquiry'} <ArrowRight size={17}/></button>
    {state === 'error' && <p className="error">Something went wrong. Please email us directly.</p>}
    <small>Protected by a hidden honeypot field and server-side validation.</small><input className="trap" name="website" tabIndex={-1} autoComplete="off"/>
  </form>;
}
