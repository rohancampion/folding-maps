import Image from 'next/image';
import { articles } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

type Section = { heading: string; paragraphs: string[] };
type Source = { label: string; href: string };
const bodies: Record<string, { sections: Section[]; sources: Source[] }> = {
  'open-weight-price-war': {
    sections: [
      { heading: 'Capability is becoming cheaper', paragraphs: ['The economics of artificial intelligence are shifting quickly. Open-weight model families now compete across coding, reasoning, extraction and multilingual work. The practical result is not simply a busier leaderboard. It is a lower cost of testing useful business applications.', 'Stanford’s 2025 AI Index reports a steep fall in the cost of querying a model at the capability level associated with GPT-3.5. That change makes classification, document processing, retrieval and structured drafting realistic experiments for firms that could not justify them two years ago.'] },
      { heading: 'The model is only one line in the budget', paragraphs: ['Cheap inference does not create a business case by itself. Reliable systems still need process design, clean access to information, security controls, evaluation and training. For many SMEs, the most valuable effect of lower model prices is the freedom to spend more of the budget on those lasting foundations.', 'A sensible pilot starts with a bounded task and a baseline. Record the current time, error rate and cost. Build a representative evaluation set before comparing providers. A model that looks inexpensive per token can become costly if its errors create repeated review or rework.'] },
      { heading: 'Design for choice', paragraphs: ['Leaders should avoid tying an operating process permanently to one provider. Keep prompts, retrieval logic, evaluation cases and business rules outside the model where practical. This makes it easier to compare quality, latency, hosting and price as the market changes.', 'Open weights can provide greater deployment control, but control creates responsibility. Teams must understand licensing, model provenance, data handling and the operational burden of hosting. NIST’s AI Risk Management Framework provides a useful structure for governing those decisions without treating every use case as equally risky.'] },
      { heading: 'A practical next step', paragraphs: ['Choose one high-volume task where output can be checked quickly. Test two model families against the same examples, including awkward edge cases. Compare total workflow cost rather than headline token price. The winning design is the one that produces dependable value and remains easy to change.'] }
    ],
    sources: [
      { label: 'Stanford HAI, 2025 AI Index Report', href: 'https://hai.stanford.edu/ai-index/2025-ai-index-report' },
      { label: 'NIST, AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { label: 'UK Government, AI Activity in UK Businesses', href: 'https://www.gov.uk/government/publications/ai-activity-in-uk-businesses' }
    ]
  },
  'automation-before-agents': {
    sections: [
      { heading: 'Start with the work, not the agent', paragraphs: ['AI agents are often presented as ready-made digital employees. In practice, reliability depends on the process around them. A vague workflow produces vague automation, while an unstable process gives an agent more ways to fail.', 'Follow a real item of work from arrival to completion. Note where information enters, which decisions need judgement, what exceptions stop progress and who is accountable. This map reveals whether the constraint is interpretation, missing data, unclear ownership or an ordinary integration problem.'] },
      { heading: 'Use the least complex reliable tool', paragraphs: ['Conventional automation remains better for deterministic steps such as moving validated fields, applying fixed calculations or sending a known notification. Use AI where language, variation or interpretation makes it useful. Combining both approaches is usually more dependable than asking one agent to improvise the whole process.', 'Separate actions by consequence. Drafting a summary can tolerate review. Releasing a payment, changing a customer record or sending regulated advice requires explicit approval and a durable audit trail. The system should make uncertainty visible rather than concealing it behind confident prose.'] },
      { heading: 'Build an evaluation loop', paragraphs: ['Create examples of normal work, edge cases and known failures. Define what a good result means before launch. Track task completion, corrections, time saved and exceptions that reach a person. A small evaluation set used every week is more useful than a one-off demonstration.', 'NIST describes trustworthy AI through characteristics including validity, safety, security, transparency and accountability. Those qualities become practical when each automated step has an owner, a test and a clear route for intervention.'] },
      { heading: 'Earn autonomy gradually', paragraphs: ['Begin with recommendation or drafting, then expand authority only when evidence supports it. The best first system is rarely the most autonomous. It is the one the team can understand, trust and improve without depending on a vendor demonstration.'] }
    ],
    sources: [
      { label: 'NIST, AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
      { label: 'NIST, Generative AI Profile', href: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence' },
      { label: 'UK Government, Introduction to AI Assurance', href: 'https://www.gov.uk/government/publications/introduction-to-ai-assurance' }
    ]
  },
  'cold-chain-collaboration': {
    sections: [
      { heading: 'From readings to decisions', paragraphs: ['Quiet Gears has begun a collaboration focused on information flow in temperature-controlled operations. Cold-chain environments generate a steady stream of readings, checks, maintenance notes and exceptions. The challenge is ensuring that important change produces a timely, accountable response.', 'Temperature data has value only when teams can interpret it in context. A short excursion during loading may require a different response from a persistent rise in a sealed unit. Useful software brings readings, equipment state, operating thresholds and human notes into one coherent timeline.'] },
      { heading: 'Design around exceptions', paragraphs: ['Our early work is exploring an exception-led workflow. Instead of asking staff to repeatedly assemble routine reports, the system can identify unusual activity, collect relevant context and prepare a concise summary for review. People remain responsible for decisions while spending more time on situations that need their expertise.', 'The Food Standards Agency advises food businesses to check and record temperatures as part of food safety management. Digital records can make this evidence easier to retrieve, but the design must reflect the operator’s actual checks, escalation routes and retention needs.'] },
      { heading: 'Infrastructure matters', paragraphs: ['Monitoring cannot compensate for poor sensors, unreliable connectivity or unclear maintenance. Discovery therefore includes the physical estate: sensor placement, calibration, gateways, network gaps and the behaviour of each refrigeration asset. The software layer should report missing or implausible data rather than quietly treating it as normal.', 'Security also matters when operational equipment becomes connected. Access should be limited, changes should be logged and monitoring services should be separated from direct equipment control unless a carefully assessed need exists.'] },
      { heading: 'Small, measurable releases', paragraphs: ['The engagement reflects our wider approach: understand operational reality first, establish a trustworthy data path, then deliver the smallest useful combination of software, automation and AI. Initial measures include reporting time, alert quality, response time and the proportion of exceptions resolved with complete evidence.'] }
    ],
    sources: [
      { label: 'Food Standards Agency, Chilling Food Correctly', href: 'https://www.food.gov.uk/business-guidance/chilling-food-correctly-in-your-business' },
      { label: 'UK Government, Temperature Control Legislation Guidance', href: 'https://www.legislation.gov.uk/uksi/2006/14/contents/made' },
      { label: 'NCSC, Connected Places Cyber Security Principles', href: 'https://www.ncsc.gov.uk/collection/connected-places-security-principles' }
    ]
  },
  'small-teams-ai-advantage': {
    sections: [
      { heading: 'Speed comes from proximity', paragraphs: ['Large organisations may have more capital and data, but smaller firms possess advantages that matter when adopting AI: short decision lines, less legacy infrastructure and close knowledge of the customer. A specialist team can observe a problem, test a change and hear the consequences quickly.', 'That proximity reduces the translation loss between leadership, operations and delivery. The person who understands the exception can sit beside the person building the system. Decisions that might require several committees in a large organisation can be tested in days with the right safeguards.'] },
      { heading: 'Focus is the constraint', paragraphs: ['Trying tools across every department creates activity without capability. Choose one valuable workflow, define the desired operational change and give a small cross-functional group authority to deliver it. The use case should be frequent enough to measure and bounded enough to understand.', 'The UK Government’s research into AI activity in UK businesses identifies skills, cost and uncertainty among adoption barriers. A focused first project helps address all three by linking learning to a real commercial outcome rather than abstract training.'] },
      { heading: 'Create foundations that compound', paragraphs: ['A good pilot leaves more than an application. It creates clearer data ownership, a reusable evaluation method, a practical view of risk and colleagues who understand how to improve an AI-enabled workflow. Those capabilities lower the cost of the next project.', 'Document decisions and keep interfaces replaceable. Assign an operational owner, not only a technical owner. Review whether the system still saves time and produces acceptable outcomes after the novelty has faded.'] },
      { heading: 'Learn faster, responsibly', paragraphs: ['Small teams do not need to imitate an enterprise transformation programme. They need a repeatable rhythm: select, baseline, test, review and expand. Responsible adoption is not a brake on speed. Clear boundaries and evidence are what make confident iteration possible.'] }
    ],
    sources: [
      { label: 'UK Government, AI Activity in UK Businesses', href: 'https://www.gov.uk/government/publications/ai-activity-in-uk-businesses' },
      { label: 'Office for National Statistics, Business Insights and Impact on the UK Economy', href: 'https://www.ons.gov.uk/businessindustryandtrade/business/businessservices/bulletins/businessinsightsandimpactontheukeconomy/latest' },
      { label: 'NIST, AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' }
    ]
  }
};

export function generateStaticParams() { return articles.map(article => ({ slug: article.slug })); }
export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  const body = bodies[slug];
  if (!article || !body) notFound();
  return <article className="article-detail"><Link className="back" href="/news"><ArrowLeft size={16}/> All news</Link><span className="kicker">{article.tag} · {article.date} · {article.read}</span><h1>{article.title}</h1><p className="lede">{article.intro}</p><div className="article-hero-image"><Image src={article.image} alt="" fill priority sizes="(max-width: 1000px) 100vw, 860px"/><span>{article.artLabel}</span></div><div className="prose">{body.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}<aside className="references"><h2>References and further reading</h2><ol>{body.sources.map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label} <ArrowUpRight size={14}/></a></li>)}</ol></aside></div></article>;
}
