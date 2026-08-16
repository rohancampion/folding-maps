export type EvidencePoint = {
  label: string;
  value: number;
  display: string;
  detail: string;
};

export type EvidenceView = {
  label: string;
  title: string;
  summary: string;
  source: string;
  href?: string;
  points: EvidencePoint[];
};

export const newsEvidenceViews: Record<string, EvidenceView[]> = {
  'ai-integration-gap': [
    {
      label: 'Adoption context',
      title: 'Use has spread further than operating integration',
      summary: 'These figures use different respondent bases. The contrast is useful as context, not as a conversion funnel.',
      source: 'UK Business Data Survey 2026',
      href: 'https://www.gov.uk/government/statistics/uk-business-data-survey-2026/uk-business-data-survey-2026',
      points: [
        { label: 'AI use among data-handling firms', value: 41, display: '41%', detail: 'Share of businesses handling digitised data that reported using AI for any purpose.' },
        { label: 'System integration among AI users', value: 21, display: '21%', detail: 'Share of AI-using businesses that reported integration with an existing business system.' },
        { label: 'Comfort with external model training', value: 18, display: '18%', detail: 'Share comfortable with business data being used to train an external AI model.' },
      ],
    },
    {
      label: 'Integration by size',
      title: 'Scale still buys an integration advantage',
      summary: 'Among businesses already using AI, larger firms report materially higher integration with existing systems.',
      source: 'UK Business Data Survey 2026',
      href: 'https://www.gov.uk/government/statistics/uk-business-data-survey-2026/uk-business-data-survey-2026',
      points: [
        { label: 'Sole traders', value: 18, display: '18%', detail: 'Reported system integration among sole traders already using AI.' },
        { label: 'Micro businesses', value: 27, display: '27%', detail: 'Reported system integration among AI-using micro businesses.' },
        { label: 'Small businesses', value: 31, display: '31%', detail: 'Reported system integration among AI-using small businesses.' },
        { label: 'Medium businesses', value: 31, display: '31%', detail: 'Reported system integration among AI-using medium businesses.' },
        { label: 'Large businesses', value: 57, display: '57%', detail: 'Reported system integration among AI-using large businesses.' },
      ],
    },
  ],
  'open-weight-price-war': [
    {
      label: 'Query economics',
      title: 'Equivalent-capability inference became dramatically cheaper',
      summary: 'The comparison uses the lowest-priced model exceeding a GPT-3.5-level MMLU threshold in each period.',
      source: 'Stanford HAI, AI Index 2025',
      href: 'https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts',
      points: [
        { label: 'November 2022', value: 20, display: '$20.00', detail: 'Approximate cost per million tokens at the stated capability threshold.' },
        { label: 'October 2024', value: 0.07, display: '$0.07', detail: 'Approximate cost per million tokens for Gemini 1.5 Flash 8B at the same threshold.' },
      ],
    },
    {
      label: 'Open-weight gap',
      title: 'Open-weight models narrowed part of the benchmark gap',
      summary: 'A smaller benchmark gap expands buyer choice, but it does not remove deployment, evaluation or licensing obligations.',
      source: 'Stanford HAI, AI Index 2025',
      href: 'https://hai.stanford.edu/assets/files/hai_ai_index_report_2025.pdf',
      points: [
        { label: 'Earlier reported gap', value: 8, display: '8.0 pts', detail: 'Reported closed versus open-weight performance difference on selected benchmarks.' },
        { label: '2024 reported gap', value: 1.7, display: '1.7 pts', detail: 'The narrowed difference reported by Stanford on selected benchmarks.' },
      ],
    },
  ],
  'automation-before-agents': [
    {
      label: 'Productivity evidence',
      title: 'The empirical record is positive, negative and highly task-specific',
      summary: 'Results come from different studies, tasks and populations. They should not be averaged or treated as a forecast for another workflow.',
      source: 'OECD research synthesis and METR, 2025',
      href: 'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',
      points: [
        { label: 'Customer-support study', value: 114, display: '+14%', detail: 'Reported performance uplift in a customer-support setting cited by the OECD.' },
        { label: 'Consulting-task study', value: 140, display: 'nearly +40%', detail: 'Reported performance uplift on selected consulting tasks cited by the OECD.' },
        { label: 'Programming-task study', value: 150, display: 'over +50%', detail: 'Reported uplift in a bounded programming experiment cited by the OECD.' },
        { label: 'Experienced developers', value: 81, display: '-19%', detail: 'METR found experienced open-source developers took longer with early-2025 tools on their own repositories.' },
      ],
    },
    {
      label: 'Adoption maturity',
      title: 'Agentic systems remain a minority use case',
      summary: 'Language use dominates current adoption, while agentic systems remain relatively uncommon in the UK research sample.',
      source: 'DSIT, AI Adoption Research 2026',
      href: 'https://www.gov.uk/government/publications/ai-adoption-research/ai-adoption-research',
      points: [
        { label: 'Text and language use', value: 85, display: '85%', detail: 'Share of adopting organisations reporting text generation or natural-language processing.' },
        { label: 'Agentic AI use', value: 7, display: '7%', detail: 'Share reporting agentic AI, the least adopted category in the study.' },
      ],
    },
  ],
  'cold-chain-collaboration': [
    {
      label: 'Evidence model',
      title: 'A useful exception combines signal and operating context',
      summary: 'This is an illustrative design weighting. It shows how a case can become more decision-ready without pretending that every input is equally important.',
      source: 'Quiet Gears illustrative service design informed by FSA and NCSC guidance',
      points: [
        { label: 'Temperature and duration', value: 100, display: 'Core', detail: 'The observed excursion and its duration establish the initial operational question.' },
        { label: 'Asset operating state', value: 78, display: 'Material', detail: 'Defrost cycles, loading and equipment state can change the interpretation of a reading.' },
        { label: 'Product and location context', value: 66, display: 'Material', detail: 'Product sensitivity and sensor location influence consequence and priority.' },
        { label: 'Operator evidence', value: 48, display: 'Supporting', detail: 'Notes, inspection and corrective action complete the decision record.' },
      ],
    },
    {
      label: 'Control sequence',
      title: 'The value chain fails if any control stage is skipped',
      summary: 'An illustrative control profile based on the article thesis. Equal weighting reflects dependency, not measured contribution.',
      source: 'Quiet Gears synthesis of FSA, NCSC and NIST guidance',
      points: [
        { label: 'Validate signal', value: 100, display: 'Required', detail: 'Missing, stale or implausible readings must remain visible.' },
        { label: 'Classify context', value: 100, display: 'Required', detail: 'Threshold, duration, asset and product context establish materiality.' },
        { label: 'Assign response', value: 100, display: 'Required', detail: 'Every qualifying exception needs a named owner and response expectation.' },
        { label: 'Evidence closure', value: 100, display: 'Required', detail: 'Closure should preserve decision, corrective action and recovery evidence.' },
      ],
    },
  ],
  'small-teams-ai-advantage': [
    {
      label: 'SME workforce',
      title: 'Adoption is meaningful, while labour effects remain nuanced',
      summary: 'The OECD survey spans seven countries. Each measure has its own respondent base and should be read separately.',
      source: 'OECD, Generative AI and the SME Workforce, 2025',
      href: 'https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en/full-report.html',
      points: [
        { label: 'SMEs using generative AI', value: 31, display: '31%', detail: 'Nearly one third of surveyed SMEs reported generative AI use.' },
        { label: 'Skills-gap relief', value: 39, display: '39%', detail: 'Share of relevant AI-using SMEs reporting that generative AI helped compensate for a recent skills gap.' },
        { label: 'No change in staff need', value: 83, display: '83%', detail: 'Most surveyed SME users reported no change in overall staffing need.' },
      ],
    },
    {
      label: 'UK readiness',
      title: 'Interest exceeds implementation readiness',
      summary: 'Readiness is a management capability question, not simply a technology-purchasing question.',
      source: 'DSIT, AI Adoption Research 2026',
      href: 'https://www.gov.uk/government/publications/ai-adoption-research/ai-adoption-research',
      points: [
        { label: 'Businesses currently using AI', value: 16, display: '16%', detail: 'Around one in six UK businesses reported current use of at least one AI technology.' },
        { label: 'Prospective adopters ready to implement', value: 33, display: '1 in 3', detail: 'Only about one third of businesses planning adoption reported readiness to implement.' },
        { label: 'Current users ready to scale', value: 54, display: '54%', detail: 'Just over half of current users felt ready to scale their use.' },
      ],
    },
  ],
  'measure-automation-value': [
    {
      label: 'Observed outcomes',
      title: 'Productivity effects can point in opposite directions',
      summary: 'The two studies cover different occupations, tasks and operating contexts. The comparison demonstrates heterogeneity, not relative model quality.',
      source: 'Quarterly Journal of Economics, 2025 and METR, 2025',
      href: 'https://academic.oup.com/qje/article/140/2/889/7990658',
      points: [
        { label: 'Customer-support agents', value: 115, display: '+15%', detail: 'Issues resolved per hour increased in a field study of 5,172 support agents.' },
        { label: 'Experienced developers', value: 81, display: '-19%', detail: 'Completion time worsened in the METR randomised study of experienced developers on familiar repositories.' },
      ],
    },
    {
      label: 'Value bridge',
      title: 'Gross time released contracts before it becomes financial value',
      summary: 'An illustrative bridge showing why adoption, exceptions and redeployment must be observed before a cash claim is made.',
      source: 'Quiet Gears illustrative benefits model',
      points: [
        { label: 'Gross task time released', value: 100, display: '100 hours', detail: 'The theoretical saving before real operating friction is counted.' },
        { label: 'After adoption and exceptions', value: 72, display: '72 hours', detail: 'Capacity remaining after usage, review and rescue effort.' },
        { label: 'Redeployed to measured work', value: 48, display: '48 hours', detail: 'Capacity deliberately redirected to activity with an observed output.' },
        { label: 'Converted to cash impact', value: 20, display: '20 hours eq.', detail: 'Illustrative portion linked to cost removed, avoided or verified contribution.' },
      ],
    },
  ],
};
