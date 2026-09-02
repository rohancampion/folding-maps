import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'professional-services-intake',
  image: '/images/news-legal.svg',
  sector: 'Professional services',
  title: 'Streamlining Professional Services advisories with AI Customer Support',
  summary: 'An AI customer-support service answers routine questions, captures advisory context and routes complex requests to the right professional.',
  status: 'Anonymised',
  brief: 'Professional confidentiality keeps the firm unnamed. AI handles approved routine questions, prepares an advisory brief and transfers requests that need professional judgement. The first-pass sample has not been supplied, so this case reports no measured result.',
  metrics: [
    { value: '24/7', label: 'support availability', detail: 'Pilot service design' },
    { value: '4', label: 'support routes', detail: 'Answer, clarify, escalate or book' },
    { value: '1', label: 'professional owner', detail: 'For each advisory handover' },
  ],
  phases: [
    { label: 'Understand', detail: 'Identify the request and permitted customer context.' },
    { label: 'Answer', detail: 'Retrieve approved material and cite the source.' },
    { label: 'Prepare', detail: 'Draft a handover brief and surface open questions.' },
    { label: 'Transfer', detail: 'Route advisory work to a responsible professional.' },
  ],
  code: {
    title: 'Customer request to professional handover',
    lines: ['request = support.validate(message)', 'sources = knowledge.retrieve(request)', 'answer = model.draft(request, sources)', 'route = policy.resolve(answer, confidence)', 'owner = advisers.assign(route, transcript)'],
    nodes: ['Customer channels', 'Approved knowledge', 'Support assistant', 'Handover policy', 'Adviser workspace'],
  },
  nextSteps: ['Map routine questions and escalation points', 'Approve the knowledge and data boundary', 'Build a redacted support test set', 'Pilot one service line with weekly professional review'],
};

export const editorial: CaseEditorial = {
  statusStatement: 'Professional confidentiality keeps the firm unnamed. The firm has not supplied the first-pass sample, so this page reports no result. Time, completeness and acceptance measures remain pilot targets.',
  thesis: 'Clients send routine questions and advisory requests through the same channels. The AI support service answers from approved material, gathers missing context and presents one clear handover to the qualified professional who advises.',
  sceneLabel: 'A representative customer-support request',
  openingTitle: 'A client question crosses the boundary into professional advice',
  openingParagraphs: [
    'A trusted contact sends an urgent referral on Thursday afternoon. The message names the prospective client and describes the issue, but it omits the counterparty, funding basis and a key document.',
    'A partner searches old correspondence while an assistant drafts questions. The firm wants to respond quickly, but it cannot complete its mandatory checks or decide whether the matter fits the service. By Monday, senior time has gone into gathering facts that the first request could have identified.',
    'The engagement focuses on the work before the professional decision. The firm wants complete facts, consistent checks and a faster answer for the prospective client or referrer.',
  ],
  centralQuestion: 'Can the firm shorten customer response while protecting confidentiality and keeping professional advice with a qualified person?',
  sections: [
    {
      heading: 'Incomplete referrals cost time and suitable work',
      paragraphs: [
        { text: 'Specialist advisory firms receive work through email, telephone and trusted introductions. Referral quality varies. One message may contain everything needed for an initial decision. Another may describe urgency and commercial value while omitting the people, documents and funding details needed for mandatory checks.' },
        { text: 'The cost reaches both sides. Senior professionals repeat searches and questions before they can apply judgement. Assistants manage several rounds of clarification. Referrers wait without knowing the size of the request. Prospective clients may receive a late decline after days of effort. A commercial service provider’s 2025 mystery-shopping study covered 430 enquiries across 219 professional-services firms. Only 13 percent received follow-up, and the enquiry-stage Net Promoter Score was minus 44. The firm can treat those figures as a market warning; its internal pilot must establish the result.', sources: [5] },
        { text: 'The planned baseline covers one service line. Reviewers will assess each referral as received against five required items: prospective-client identity, full counterparty names, referenced documents, funding basis and enough scope to choose a service route. They will count clarification rounds, preparation time, queue age and the final decision.' },
        { text: 'SRA file review found missing source-of-funds checks and supporting material gathered without scrutiny. Legal-sector guidance also requires demonstrable due diligence and conflict checks before the firm opens a matter. These findings support complete, reproducible checks and do not establish a result for this firm.', sources: [0, 1, 2] },
      ],
    },
    {
      heading: 'Management redesigned the first response',
      transition: 'The firm can reduce delay by naming missing items before senior review starts.',
      paragraphs: [
        { text: 'The firm will improve the first response before investing in broader marketing or automatic acceptance. It names the five facts required for initial review and asks only for missing items. Referrers can see the size of the request, and the firm can respond before senior staff spend time reconstructing the matter.' },
        { text: 'Staff then complete four mandatory checks covering identity, conflict, funding and eligibility. Each check uses approved facts and includes the source, date, outcome and person who reviewed any exception. A qualified professional resolves ambiguity.' },
        { text: 'A language service may propose structured facts and draft a summary. It cannot reverse a failed check, hide an unanswered question or accept a matter. The qualified professional sees the original referral, supplied facts, check results, open questions and draft summary before deciding to accept, decline or hold.' },
        { text: 'The pilot covers one service line. Unusual matters keep a direct human route from the first contact. Partners will approve collection, access, processing and retention rules before the pilot because referral material may concern people who never become clients.' },
      ],
    },
    {
      heading: 'The firm has set a supervised pilot',
      paragraphs: [
        { text: 'Partners have defined five required items, four mandatory checks and the professional decision point. They have also defined the baseline and a redacted test set with missing documents, conflicting facts, ambiguous referrals and attempts to bypass required questions.' },
        { text: 'Current work has not shown faster decisions, higher first-pass completeness or fewer clarification rounds. The firm has not tested summary accuracy with its referrals. Those outcomes depend on the starting sample and supervised use.' },
        { text: 'Confidentiality loss and incorrect identity matching could harm prospective clients. Inconsistent rules, overstated summaries or unnecessary collection could undermine professional judgement. Faster preparation could also create a longer professional review queue. ICO and NIST guidance support testing and continued review, but the firm’s pilot must supply the business answer.', sources: [3, 4] },
      ],
    },
    {
      heading: 'A sound decision must arrive sooner',
      role: 'conclusion',
      transition: 'One service line will provide a clear comparison before the firm widens use.',
      paragraphs: [
        { text: 'Reviewers will measure first-pass completeness, clarification rounds, time to a substantive decision, check consistency, blocked bypass attempts, summary corrections, professional queue age, referrer response and abandonment. A second reviewer will compare a sample of summaries with the original referrals.' },
        { text: 'Success requires consistent mandatory checks, no material summary errors above the agreed tolerance, lower reconstruction effort and no marked loss of suitable referrals. The professional must continue to inspect source material and sign every acceptance decision.' },
        { text: 'A different check result on the same facts triggers immediate review. A material summary error can remove assisted drafting while the focused request and fixed checks remain. A fall in referral quality or volume sends the opening request back for revision. The firm will expand only after the pilot improves intake without weakening professional care.' },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [
  { statistic: '5,873 files', finding: 'SRA work found that 11 percent of 5,026 relevant files had no source-of-funds check and 18 percent lacked adequate scrutiny', implication: 'Collection and assessment are separate acts. Each mandatory check should include the supporting material and the reviewer’s conclusion.', source: 'Solicitors Regulation Authority, Source of funds and wealth compliance review, 2025', href: 'https://www.sra.org.uk/sra/research-publications/thematic-review-source-funds-wealth-compliance/' },
  { statistic: 'Risk-based', finding: 'Legal sector guidance requires client due diligence before a business relationship is established, applied on a risk-sensitive basis and capable of being demonstrated', implication: 'Each mandatory test needs the relevant facts and a clear account of the conclusion.', source: 'Legal Sector Affinity Group, Anti-money laundering guidance for the legal sector, 2025', href: 'https://www.lawsociety.org.uk/topics/anti-money-laundering/anti-money-laundering-guidance' },
  { statistic: 'Before opening', finding: 'SRA conduct rules require firms to have systems that identify conflicts of interest before a matter is opened', implication: 'Full counterparty names belong in the first request because the conflict check depends on them.', source: 'Solicitors Regulation Authority, Conflict of interest guidance', href: 'https://www.sra.org.uk/solicitors/guidance/conflict-of-interest/' },
  { statistic: '3 outputs', finding: 'ICO guidance combines audit methodology, organisational guidance and practical tools', implication: 'Design decisions, tests and operating review need to demonstrate the firm’s privacy controls.', source: 'ICO, Guidance on AI and data protection', href: 'https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/about-this-guidance/' },
  { statistic: 'Lifecycle', finding: 'NIST treats generative AI risk as an issue across design, deployment, operation and review', implication: 'The team needs to test intake support before launch and review it as referrals, services and tools change.', source: 'NIST, Generative AI Profile', href: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence' },
  { statistic: '13%', finding: 'A 2025 mystery-shopping study of 430 enquiries across 219 professional-services firms found that only 13 percent received follow-up and the enquiry-stage Net Promoter Score was minus 44', implication: 'Slow or weak first contact can lose suitable work before a professional has assessed it, so the pilot should measure response and follow-up.', source: 'Insight6, Professional Client Journey Study 2025', href: 'https://www.insight6.com/professional-client-journey-study/' },
];
