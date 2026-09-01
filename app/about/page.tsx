import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { FullBleedHero } from '@/components/FullBleedHero';
import { createPageMetadata } from '@/lib/seo';
import styles from './about.module.css';

export const metadata = createPageMetadata({
  title: 'About Quiet Gears',
  description: 'Quiet Gears is a London AI consultancy and engineering studio for UK SMEs. Senior consultants advise, build software and help teams use AI with control.',
  path: '/about',
});

const capabilities = [
  { number: '01', title: 'Advise', text: 'We examine the operation, test the case for investment and set a plan tied to a business result. Leaders get a clear view of cost and risk before committing funds.', href: '/services/ai-strategy' },
  { number: '02', title: 'Build', text: 'We design and engineer focused AI systems, workflow software and integrations. Each release has a defined job, acceptance tests and a responsible person inside the client team.', href: '/services/ai-implementation' },
  { number: '03', title: 'Enable', text: 'We help staff use AI within clear limits. Training, evaluation methods and operating guidance give the client team the skill to run and improve the work after launch.', href: '/services/enterprise-ai' },
];

const workingPrinciples = [
  { number: '01', title: 'Senior attention', text: 'A lead consultant stays involved from the first discussion through delivery. Clients speak with the people who analyse the problem and make the software.' },
  { number: '02', title: 'Operational evidence', text: 'We study real records, hand-offs, exceptions and decisions. That evidence defines the scope and gives the team a baseline for measuring change.' },
  { number: '03', title: 'Focused releases', text: 'We reduce a broad ambition to a useful first release. Short feedback cycles expose weak assumptions before they consume the budget.' },
  { number: '04', title: 'Clear control', text: 'People retain authority over material decisions. Access rules, review steps and audit records form part of the design from the first release.' },
];

const engagementSteps = [
  { number: '01', title: 'Examine the work', text: 'We trace the current process, its data, its delays and the decisions that need judgement.' },
  { number: '02', title: 'Set the case', text: 'We define the result, delivery boundary, controls and measures before selecting the technical approach.' },
  { number: '03', title: 'Make the release', text: 'We build with representative data, test difficult cases and involve the staff who will use the system.' },
  { number: '04', title: 'Support the team', text: 'We document the system, train its users and review performance against the agreed measures.' },
];

const leadConsultants = [
  { name: 'Luc Balonwu', role: 'Lead consultant' },
  { name: 'Rohan Campion', role: 'Lead consultant' },
];

export default function About() {
  return <>
    <FullBleedHero
      desktopSrc="/images/rebrand/studio-table-desktop.webp"
      mobileSrc="/images/rebrand/studio-table-mobile.webp"
      eyebrow="About Quiet Gears"
      title="AI consulting and engineering for practical business change."
      summary="Quiet Gears helps UK SMEs make sound technology decisions, build useful software and give staff the confidence to use it."
      focalPosition="50% 50%"
    />

    <section className={styles.introduction} aria-labelledby="company-title">
      <p className={styles.label}>The company</p>
      <div className={styles.introductionCopy}>
        <h2 id="company-title">A senior-led studio based in London.</h2>
        <p>Quiet Gears works with UK SMEs facing operational strain or technology uncertainty. A process may depend on repeated manual work. Customer information may sit across several systems. A leadership team may see potential in AI and lack a credible route from interest to a working service.</p>
        <p>We bring management advice and software engineering into one engagement. The same team can assess the case, design the service and build the release. This keeps commercial reasoning connected to technical choices throughout the work.</p>
        <p>Our size shapes the service. Clients have access to senior consultants and short decision lines. The team can adapt the work as evidence changes. We accept a limited number of engagements so each project receives sustained attention.</p>
      </div>
    </section>

    <section className={styles.purpose} aria-labelledby="purpose-title">
      <div className={styles.sectionHeading}>
        <p className={styles.label}>Our purpose</p>
        <h2 id="purpose-title">Turn technical potential into useful work.</h2>
      </div>
      <div className={styles.purposeGrid}>
        <p>AI creates value through a process that staff can use, inspect and improve. That requires sound data and clear responsibility. Staff also need software fitted to the operation.</p>
        <p>Quiet Gears gives smaller firms access to combined advisory and engineering support. We keep the engagement proportionate to the client and the expected result.</p>
      </div>
    </section>

    <section className={styles.capabilities} aria-labelledby="capabilities-title">
      <div className={styles.sectionHeading}>
        <p className={styles.label}>Our work</p>
        <h2 id="capabilities-title">Advice and software, backed by team capability.</h2>
      </div>
      <div className={styles.capabilityGrid}>
        {capabilities.map((capability) => <Link href={capability.href} className={styles.capability} key={capability.title}>
          <span>{capability.number}</span>
          <h3>{capability.title}</h3>
          <p>{capability.text}</p>
          <ArrowUpRight size={18} aria-hidden="true" />
        </Link>)}
      </div>
    </section>

    <section className={styles.principles} aria-labelledby="principles-title">
      <div className={styles.sectionHeading}>
        <p className={styles.label}>Working principles</p>
        <h2 id="principles-title">The standards behind each engagement.</h2>
      </div>
      <div className={styles.principleGrid}>
        {workingPrinciples.map((principle) => <article key={principle.title}>
          <span>{principle.number}</span>
          <h3>{principle.title}</h3>
          <p>{principle.text}</p>
        </article>)}
      </div>
    </section>

    <section className={styles.engagement} aria-labelledby="engagement-title">
      <div className={styles.sectionHeading}>
        <p className={styles.label}>An engagement</p>
        <h2 id="engagement-title">From operating problem to supported release.</h2>
      </div>
      <div className={styles.engagementList}>
        {engagementSteps.map((step) => <article key={step.title}>
          <span>{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>)}
      </div>
    </section>

    <section className={styles.people} aria-labelledby="people-title">
      <div className={styles.peopleIntro}>
        <p className={styles.label}>People</p>
        <div>
          <h2 id="people-title">The lead consultants stay close to the work.</h2>
          <p>Quiet Gears keeps a small core team and brings in specialist support to suit the engagement. A lead consultant remains accountable for the client relationship and the quality of delivery.</p>
        </div>
      </div>
      <div className={styles.consultantList}>
        {leadConsultants.map((consultant, index) => <article key={consultant.name}>
          <span>0{index + 1}</span>
          <h3>{consultant.name}</h3>
          <p>{consultant.role}</p>
        </article>)}
      </div>
    </section>

    <section className={styles.fit} aria-labelledby="fit-title">
      <p className={styles.label}>Client fit</p>
      <div>
        <h2 id="fit-title">Built for leaders with a material problem to solve.</h2>
        <p>Our clients tend to have a clear operational concern and access to the staff who understand it. They also have the authority to change the process. They value direct advice and evidence over theatre.</p>
        <p>A first discussion tests the problem, its business effect and the practical conditions for progress. If specialist support would serve the need better, we say so.</p>
      </div>
    </section>

    <section className={`${styles.cta} contact-band`} aria-labelledby="about-cta-title">
      <h2 id="about-cta-title">Discuss the work that needs attention.</h2>
      <Link href="/contact">Start a conversation <ArrowRight size={17} aria-hidden="true" /></Link>
    </section>
  </>;
}
