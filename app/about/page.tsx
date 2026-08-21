import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PrecisionLabel } from '@/components/PrecisionLabel';
import { Reveal } from '@/components/Reveal';
import styles from './about.module.css';

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

const leadConsultants = ['Luc Balonwu', 'Rohan Campion'];

export default function About() {
  return (
    <>
      <section className="page-hero code-waterfall">
        <div className="code-rain" aria-hidden="true">
          01&nbsp;&nbsp;SYSTEM.READY&nbsp;&nbsp;BUILD.BETTER<br />
          10&nbsp;&nbsp;CONNECT → AUTOMATE → LEARN<br />
          11&nbsp;&nbsp;HUMAN.IN.THE.LOOP&nbsp;&nbsp;01&nbsp;&nbsp;SHIP
        </div>
        <PrecisionLabel index="QG–AB" label="About Quiet Gears" detail="London / strategy / engineering" />
        <h1>Specialist thinking.<br /><em>Lean delivery.</em></h1>
        <p>
          Quiet Gears is a London consultancy helping ambitious UK SMEs turn operational friction into useful AI systems and software. Lean by design, senior-led and accountable from the first decision to a working release.
        </p>
      </section>

      <section className={styles.story}>
        <Reveal className={styles.instrumentWrap}>
          <div className={styles.instrumentPlate} aria-hidden="true">
            <i/><i/><i/>
            <span>QG / DATUM 2026</span>
            <b>51.5072° N<br/>0.1276° W</b>
          </div>
        </Reveal>
        <Reveal className={styles.storyCopy}>
          <PrecisionLabel index="01" label="Why we exist" />
          <h2>Good technology should make work feel lighter.</h2>
          <p>
            Established businesses often know exactly where friction lives: the spreadsheet passed between teams, the enquiry that waits too long, or the repetitive task that consumes a skilled person&apos;s day. What they lack is protected capacity to solve it well.
          </p>
          <p>
            Quiet Gears closes that gap. We combine advisory discipline with practical engineering, giving leadership teams a specialist, accountable partner from opportunity assessment through delivery and adoption.
          </p>
        </Reveal>
      </section>

      <section className={styles.leanModel}>
        <div className={styles.leanHeading}>
          <div>
            <PrecisionLabel index="02" label="The lean specialist model" />
            <h2>Less distance between<br /><em>insight and impact.</em></h2>
          </div>
          <p>A deliberately focused operating model gives clients more direct expertise, faster learning and clearer accountability.</p>
        </div>
        <div className={styles.advantageField}>
          {leanAdvantages.map((item, index) => (
            <article key={item.number}>
              <PrecisionLabel index={item.number} label={index % 2 === 0 ? 'Delivery principle' : 'Operating principle'} />
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.doctrine}>
        <PrecisionLabel index="03" label="What guides us" detail="Quality / intent / ownership" />
        <h2>Principles built<br /><em>for the long run.</em></h2>
        <div className={styles.doctrineCopy}>
          <p><strong>Think beyond the launch.</strong> A system only succeeds if it is adopted, maintained and still valuable a year from now. Thoughtful architecture and careful execution cost less than fragile shortcuts in the long run.</p>
          <p><strong>Move with intent.</strong> Speed matters because it brings evidence forward. We use it to test reality sooner—supported by clear language, direct access and an honest view of what technology can and cannot do.</p>
        </div>
      </section>

      <section className={styles.consultants}>
        <PrecisionLabel index="04" label="Lead consultants" detail="Strategy / engineering / adoption" />
        <div className={styles.consultantList}>
          {leadConsultants.map((name, index) => (
            <article key={name}>
              <span aria-hidden="true">0{index + 1}</span>
              <h2>{name}</h2>
              <p>Lead consultant</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.careers}>
        <PrecisionLabel index="05" label="Work with us" />
        <h2>Exceptional specialists.<br />Direct client responsibility.</h2>
        <p>
          We are building a focused network of strategic thinkers and practical makers who value excellent craft, direct collaboration and measurable outcomes. We have no open roles today, but we welcome thoughtful introductions from experienced specialists.
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

