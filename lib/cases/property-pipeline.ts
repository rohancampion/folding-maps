import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'property-pipeline',
  image: '/images/case-property.svg',
  sector: 'Real estate development',
  title: 'Custom Financing Software for Real Estate Developers',
  summary: 'A custom financing workspace connects development appraisals, lender material, approvals and drawdown actions.',
  status: 'Anonymised',
  brief: 'The client requested anonymity. The custom software links each development appraisal to lender requirements, supporting documents, approval conditions and drawdown actions. The proposed six-week pilot has no measured result.',
  metrics: [
    { value: '4', label: 'financing stages', detail: 'Appraise, document, approve and draw' },
    { value: '5', label: 'funding-condition categories', detail: 'Defined for the starting sample' },
    { value: '6 weeks', label: 'planned pilot', detail: 'One financing route' },
  ],
  phases: [
    { label: 'Appraise', detail: 'Capture the development, capital need and core assumptions.' },
    { label: 'Document', detail: 'Collect lender documents and validate the financing figures.' },
    { label: 'Approve', detail: 'Coordinate credit decisions, conditions and external parties.' },
    { label: 'Draw', detail: 'Confirm readiness and manage drawdown documents.' },
  ],
  code: {
    title: 'Development appraisal to funded next action',
    lines: ['facility = finance.open(development)', 'material = documents.index(facility)', 'gate = funding.review(facility, material)', 'action = assign(gate.conditions, colleague, dueDate)', 'status = team.summarise(facility, action)'],
    nodes: ['Development appraisal', 'Financing view', 'Lender documents', 'Named condition', 'Funding summary'],
  },
  nextSteps: ['Agree the documents for each funding gate', 'Complete the starting sample check', 'Run one financing route for six weeks', 'Use condition visibility and staff effort to decide expansion'],
};

export const editorial: CaseEditorial = {
  statusStatement: 'The client requested anonymity because naming the business could identify developments and counterparties. The client has not supplied the completed starting sample. This page describes the financing intervention and reports no production result.',
  thesis: 'A development can appear ready to fund while lender conditions and approvals remain hidden across spreadsheets, messages and documents. The custom workspace gives the team one view of appraisal assumptions, funding material and named actions.',
  sceneLabel: 'A representative development-finance review',
  openingTitle: 'A drawdown rests on one missing approval',
  openingParagraphs: [
    'A commercial property transaction has accumulated calls, reports and revised documents. The team believes it has moved into review. During the weekly meeting, a colleague asks for the approval that allowed the work to leave the prior stage. Nobody can produce it.',
    'The team may find the approval in an inbox, or discover that no authorised colleague gave it. A related question arrived weeks earlier and reached two people, but neither person received a clear action or due date. The transaction kept moving while the blocker remained hidden.',
    'The engagement focuses on that gap between activity and readiness. The firm needs to see what each stage requires, what remains missing and who will resolve it.',
  ],
  centralQuestion: 'Can the developer expose missing funding conditions early enough to protect drawdown dates without placing an excessive burden on staff?',
  sections: [
    {
      heading: 'Late blockers consume time and threaten completion',
      paragraphs: [
        { text: 'Commercial property work crosses customers, agents, surveyors, solicitors, lenders and counterparties. Each participant contributes messages, documents, approvals and deadlines. A busy file can look healthy because people keep working even when one item prevents the next major decision.' },
        { text: 'The cost appears late. A weekly meeting turns into a search across email and shared folders. A colleague chases an approval under time pressure. Management receives an optimistic status because the underlying blocker has not reached the team’s main view. The firm then spends senior time resolving a problem that first appeared weeks earlier.' },
        { text: 'The planned discovery sample covers live and recently closed transactions in one asset class. Reviewers will compare the stated stage with the documents, facts and approvals required for that stage. Each gap will enter one of five categories: approval absent, current document unclear, unanswered question with no named colleague, third-party reply not filed or deadline held in one place.' },
        { text: 'HM Land Registry reports that 815,000 of more than 4.4 million applications in 2024 to 2025 needed further information, adding about fifteen working days to an affected registration. Government figures put the average home purchase at 120 days and about one sale in three falling through, with £400 million in annual seller cost. These figures concern other parts of the property market and provide context only.', sources: [0, 1] },
      ],
    },
    {
      heading: 'Management chose earlier blocker visibility',
      transition: 'The team needs a simple view that connects each stage with the items required to move forward.',
      paragraphs: [
        { text: 'Management chose earlier blocker visibility before buying a broad customer platform or increasing weekly reporting. For each of four stages, the team will agree a short list of required facts, documents and approvals. A transaction can move when those items are present or when an authorised colleague approves a stated exception.' },
        { text: 'The shared view shows the current stage, the material supporting it, unanswered questions, the colleague responsible for each action and the due date. Messages and documents link to the transaction so staff can inspect the source. The weekly meeting uses this same view, which removes the need to assemble a separate management summary.' },
        { text: 'AI can read incoming reports and point out possible dates, parties or restrictions. A qualified colleague checks each material item and every stage change. AI shortens the first review; the qualified colleague decides whether a transaction is ready. RICS reports frequent experimentation and limited widespread integration in commercial property, so the firm will test this assistance under supervision.', sources: [2] },
        { text: 'Staff retain control over professional and commercial decisions. Each exception includes a reason, approver and review date. Access follows transaction role and document sensitivity. The first pilot covers one transaction type to keep variation manageable.' },
      ],
    },
    {
      heading: 'The firm has defined a six-week test',
      paragraphs: [
        { text: 'Management has agreed four stages, five blocker categories and the shape of the shared transaction view. Each open question also needs a named colleague and due date. These decisions define the intervention but show no improvement.' },
        { text: 'Staff burden and trust will decide whether the intervention lasts. A long checklist could slow straightforward work. Staff could approve weak exceptions to move faster, while document suggestions could contain errors. Private spreadsheets could continue if the shared view takes too long to update.' },
        { text: 'The weekly review will track old questions, stage reversals, exceptions, corrections and continued use of private trackers. These measures will show whether the new view exposes blockers before the team commits to a completion date.' },
      ],
    },
    {
      heading: 'Expansion depends on fewer late surprises',
      role: 'conclusion',
      transition: 'The same sample check will run before the pilot and after six weeks of live use.',
      paragraphs: [
        { text: 'The comparison will measure unsupported stages, missing items by stage, age of unanswered questions, late escalations, stage reversals, corrections to proposed document values, manual searches, preparation time for the weekly meeting and use of private trackers.' },
        { text: 'Pilot costs include time spent clearing each stage, exceptions raised and exceptions still open after a week. Management will agree acceptance thresholds before launch, including an acceptable level of staff effort.' },
        { text: 'Expansion requires fewer hidden blockers, earlier action on open questions and a workload staff can sustain without a second tracking tool. Weak blocker results send the stage definitions back for revision. Excessive staff effort sends the minimum requirements and screen design back for revision.' },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [
  { statistic: '19%', finding: 'HM Land Registry requested further information on more than 815,000 of over 4.4 million applications in 2024 to 2025, adding about fifteen working days to an affected registration', implication: 'Missing items create measurable delay in UK property work, so the pilot will count blockers before and after use.', source: 'HM Land Registry, Annual Report and Accounts 2024 to 2025, Performance report', href: 'https://www.gov.uk/government/publications/hm-land-registry-annual-report-and-accounts-2024-to-2025/performance-report' },
  { statistic: '1 in 3', finding: 'Government figures put the average home purchase at around 120 days and one sale in three falling through, at an annual cost of about £400 million to sellers', implication: 'The wider market context supports earlier information gathering but does not predict a result for this commercial property firm.', source: 'MHCLG, Homebuying shake-up to slash delays, cut costs and stop sales falling through, June 2026', href: 'https://www.gov.uk/government/news/homebuying-shake-up-to-slash-delays-cut-costs-and-stop-sales-falling-through' },
  { statistic: '6%', finding: 'RICS surveyed 3,148 chartered surveyors and found around 6 percent of commercial property respondents reporting widespread AI integration, against more than three quarters reporting some use', implication: 'Qualified staff need to test proposed document values before the firm depends on them.', source: 'RICS, AI in commercial property and construction report 2026', href: 'https://www.rics.org/news-insights/ai-in-commercial-property-and-construction-report-2026' },
  { statistic: '8%', finding: 'The Digital Property Market Steering Group attributes up to 8 percent of failed transactions to missing upfront information alone', implication: 'Some transaction failures begin with information that was unavailable at the decision point, which supports measuring missing items early.', source: 'Digital Property Market Steering Group, Smart Property Data Trust Framework', href: 'https://www.rics.org/content/dam/ricsglobal/documents/latest-news/DPMSG-Smart-Property-Data-Trust_V2.pdf' },
  { statistic: '4 functions', finding: 'NIST structures AI risk activity around govern, map, measure and manage', implication: 'The pilot needs clear management, a defined context, agreed measures and a route for handling poor results.', source: 'NIST AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
];
