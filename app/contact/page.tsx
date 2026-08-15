import { Clock3, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { MechanicalMark } from '@/components/MechanicalVisuals';
import { ServiceJourney, ServicePathways } from '@/components/ServiceJourney';
import { firstConversation } from '@/lib/serviceModel';

export const metadata = { title: 'Contact' };

export default function Contact() {
  return <>
    <section className="contact-page contact-page-expanded">
      <div className="contact-intro">
        <span className="kicker">Start a conversation</span>
        <h1>What could move<br/><em>more smoothly?</em></h1>
        <p>Tell us where work slows down, what you want to build or what decision you are trying to make. The first consultation is free, practical and designed to leave you with a clearer next step.</p>
        <MechanicalMark label="A clear route forward"/>
        <div className="contact-facts">
          <div><Mail/><span>Email us<a href="mailto:quietgearsai@gmail.com">quietgearsai@gmail.com</a></span></div>
          <div><MapPin/><span>Based in<b>4 Foscote Mews, London · Servicing Nationwide</b></span></div>
          <div><Clock3/><span>We usually reply<b>Within one working day</b></span></div>
        </div>
        <div className="first-conversation">
          <span className="kicker">After you press send</span>
          {firstConversation.map((step) => <article key={step.number}><b>{step.number}</b><div><h3>{step.title}</h3><p>{step.detail}</p></div></article>)}
        </div>
      </div>
      <div className="form-wrap contact-form-panel">
        <div className="form-panel-heading"><span className="kicker">Project enquiry</span><h2>Give us enough context<br/>to make the reply useful.</h2><p>You do not need a finished brief. A clear description of the constraint, the people affected and the result you want is the best starting point.</p></div>
        <ContactForm/>
      </div>
    </section>
    <ServicePathways/>
    <ServiceJourney compact/>
  </>;
}

