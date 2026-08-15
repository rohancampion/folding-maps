import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { GearSystem } from '@/components/GearSystem';
import { Reveal } from '@/components/Reveal';
import { ServiceJourney, ServicePathways } from '@/components/ServiceJourney';

export const metadata = { title: 'About' };

const leanAdvantages = [
  {
    number: '01',
    title: 'Specialist by design',
    copy: 'A focused combination of strategy, engineering and adoption expertise is assembled around the problem, without layers of generalist delivery overhead.',
  },
  {
    number: '02',
    title: 'Senior attention throughout',
    copy: 'The people shaping the recommendation stay close to the build, the operating reality and the outcomes that matter to leadership.',
  },
  {
    number: '03',
    title: 'Direct and accountable',
    copy: 'One clear line from decision to delivery reduces handoffs, shortens feedback loops and makes ownership visible at every stage.',
  },
  {
    number: '04',
    title: 'Built for momentum',
    copy: 'Lean working practices concentrate investment on evidence, useful software and adoption instead of ceremony or unnecessary coordination.',
  },
];

const principles = [
  ['01', 'Think beyond the launch', 'A system only succeeds if it is adopted, maintained and still valuable a year from now.'],
  ['02', 'Quality pays its way', 'Thoughtful architecture and careful execution cost less than fragile shortcuts in the long run.'],
  ['03', 'Move with intent', 'Speed matters. We use it to test reality sooner, never as an excuse for careless work.'],
  ['04', 'Be easy to work with', 'Clear language, direct access and an honest view of what technology can and cannot do.'],
];

export default function About() {
  return (
    <>
      <section className="page-hero code-waterfall">
        <div className="code-rain" aria-hidden="true">
          01&nbsp;&nbsp;SYSTEM.READY&nbsp;&nbsp;BUILD.BETTER<br />
          10&nbsp;&nbsp;CONNECT → AUTOMATE → LEARN<br />
          11&nbsp;&nbsp;HUMAN.IN.THE.LOOP&nbsp;&nbsp;01&nbsp;&nbsp;SHIP
        </div>
        <span className="kicker">About Quiet Gears</span>
        <h1>Specialist thinking.<br /><em>Lean delivery.</em></h1>
        <p>
          Quiet Gears is a London consultancy helping ambitious UK SMEs turn operational friction into useful AI systems and software. Lean by design, senior-led and accountable from the first decision to a working release.
        </p>
      </section>

      <section className="partners">
        <span>Companies we work with</span>
        <div className="logo-grid">
          <div className="partner-logo transkold"><i>◫</i>TRANSKOLD</div>
          <div className="partner-logo ocean"><i>≈</i><strong>ocean to ocean</strong></div>
          <div className="partner-logo placeholder"><i>◒</i>NORTHSTAR</div>
          <div className="partner-logo placeholder"><i>✦</i>FIELDWORK</div>
          <div className="partner-logo placeholder"><i>///</i>PARALLEL</div>
        </div>
      </section>

      <section className="split-story">
        <Reveal>
          <div className="abstract-panel gear-panel">
            <GearSystem />
            <span>Established<br /><b>2026 · London</b></span>
          </div>
        </Reveal>
        <Reveal>
          <span className="kicker">Why we exist</span>
          <h2>Good technology should make work feel lighter.</h2>
          <p>
            Established businesses often know exactly where friction lives: the spreadsheet passed between teams, the enquiry that waits too long, or the repetitive task that consumes a skilled person&apos;s day. What they lack is protected capacity to solve it well.
          </p>
          <p>
            Quiet Gears closes that gap. We combine advisory discipline with practical engineering, giving leadership teams a specialist, accountable partner from opportunity assessment through delivery and adoption.
          </p>
        </Reveal>
      </section>

      <section className="lean-model">
        <div className="section-heading">
          <div>
            <span className="kicker">The lean specialist model</span>
            <h2>Less distance between<br /><em>insight and impact.</em></h2>
          </div>
          <p>A deliberately focused operating model gives clients more direct expertise, faster learning and clearer accountability.</p>
        </div>
        <div className="lean-grid">
          {leanAdvantages.map((item) => (
            <article key={item.number}>
              <div className="lean-card-top"><span>{item.number}</span><Check size={17} /></div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceJourney />
      <ServicePathways />

      <section className="values">
        <div className="section-heading">
          <div>
            <span className="kicker">What guides us</span>
            <h2>Principles built<br /><em>for the long run.</em></h2>
          </div>
        </div>
        <div className="value-grid">
          {principles.map((item) => (
            <div className="value" key={item[0]}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="careers">
        <span className="kicker">Work with us</span>
        <h2>Exceptional specialists.<br />No big-firm baggage.</h2>
        <p>
          We are building a focused network of strategic thinkers and practical makers who value excellent craft, direct collaboration and measurable outcomes. We have no open roles today, but always welcome a thoughtful introduction.
        </p>
        <a className="button outline" href="mailto:quietgearsai@gmail.com?subject=Working%20with%20Quiet%20Gears">
          Introduce yourself <ArrowRight size={17} />
        </a>
      </section>

      <section className="cta-band">
        <h2>Have a stubborn problem<br />worth solving?</h2>
        <Link className="button lime" href="/contact">Start a conversation <ArrowRight size={17} /></Link>
      </section>
    </>
  );
}

