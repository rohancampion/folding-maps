import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'field-service-planning',
  image: '/images/news-industries.svg',
  sector: 'Field services',
  title: 'Field planning that protects customer commitments',
  summary: 'A regional service operator is testing faster replanning for urgent jobs without invalid assignments or hidden disruption for other customers.',
  status: 'Anonymised',
  brief: 'A planning service filters invalid assignments and shows dispatchers the customer, travel and overtime effect of each feasible option.',
  metrics: [
    { value: '6 weeks', label: 'work-order sample requested', detail: 'One region, awaiting supply' },
    { value: '3', label: 'hard condition groups', detail: 'Certification, working limits and parts' },
    { value: '0', label: 'uncalibrated preference weights', detail: 'No percentages before operating data' },
  ],
  phases: [
    { label: 'Measure', detail: 'Compare jobs, published plans, changes and actual work.' },
    { label: 'Filter', detail: 'Remove assignments that breach a hard condition.' },
    { label: 'Show', detail: 'State the customer and travel effect of each feasible option.' },
    { label: 'Test', detail: 'Run beside dispatch and review every disagreement.' },
  ],
  code: {
    title: 'Urgent job to dispatcher choice',
    lines: ['inputs = check(jobs, engineers, parts, commitments)', 'feasible = conditions.apply(inputs)', 'options = customerImpact.describe(feasible)', 'choice = dispatcher.publish(options)', 'review = compare(choice, actualWork, reason)'],
    nodes: ['Work orders', 'Condition check', 'Feasible options', 'Customer impact', 'Dispatcher choice'],
  },
  nextSteps: ['Supply the six-week sample for one region', 'Agree hard conditions and customer measures', 'Run shadow planning with coded reasons', 'Use feasibility and service results to decide live use'],
  visuals: [
    { src: '/images/cases/field-service-planning/morning-dispatch-wide.png', alt: 'Engineers loading service vans at a regional depot in the morning', caption: 'Morning dispatch at a regional depot', width: 1536, height: 1024 },
    { src: '/images/cases/field-service-planning/service-kit-portrait.png', alt: 'An engineer checking tools and parts inside a service van', caption: 'Tools and parts prepared for the day', width: 1024, height: 1536 },
  ],
};

export const editorial: CaseEditorial = {
  statusStatement: 'The operator requested anonymity. The work-order sample has not been supplied, so this page reports no result from the operation. Travel, overtime, planning effort and customer-service improvements remain untested targets.',
  thesis: 'An urgent job forces dispatchers to balance skill, parts, travel, working limits and promises already made to customers. The intervention removes invalid assignments and shows the disruption attached to each feasible choice. Dispatchers keep control of the published plan, and shadow use will show whether the service helps under real morning pressure.',
  sceneLabel: 'A representative urgent job',
  openingTitle: 'An urgent job changes a plan already sent to customers',
  openingParagraphs: [
    'The day’s plan has gone to engineers and customers when an urgent job arrives. The dispatcher needs someone with the right certification, the right part, enough working time and a route that meets the response target.',
    'Finding an engineer solves only half the problem. Making space can delay another appointment, increase travel, create overtime or move a customer who has already been moved once that week. The dispatcher must weigh those effects within minutes.',
    'The engagement uses this urgent job as its business test. The operator wants a short list of valid choices and a clear account of the customer impact before the dispatcher changes the day.',
  ],
  centralQuestion: 'Can dispatchers absorb urgent work faster while protecting safety, customer commitments and the stability of the working day?',
  sections: [
    {
      heading: 'Urgent jobs can spread disruption across the day',
      paragraphs: [
        { text: 'The operator manages a regional field force with different certifications, parts, customer windows and working-hour limits. Plans leave early. New faults, cancellations and overruns then change the choices available to dispatch.' },
        { text: 'Dispatchers absorb the first cost. They search several screens, call engineers and rely on local knowledge while the response clock runs. Engineers receive late changes. Customers receive revised arrival times with little context, and some customers absorb repeated disruption.' },
        { text: 'The business cost can include excess travel, overtime, missed service targets and repeat visits caused by the wrong assignment. A vendor benchmark links failed first visits with more visits and longer resolution, but its figures do not set a target for this operator. UK government analysis also found an average of about 11,000 online adverts a year for field service engineers from 2021 to 2024, with the job title rising eleven places compared with 2012 to 2015. Scarce technical capacity raises the cost of a poor assignment.', sources: [1, 5] },
        { text: 'The requested six-week sample will measure missing job details, invalid skills or parts matches, planned and actual duration, travel, reassignments, customer-window breaches, overtime, changes after publication and dispatcher preparation time. Routing research supports treating valid assignment as a separate problem before comparing preferences.', sources: [0] },
      ],
    },
    {
      heading: 'Management prioritised valid assignment',
      transition: 'The service must remove unsafe or impossible choices before it describes the trade-offs.',
      paragraphs: [
        { text: 'The operator put first-time completion and customer promises ahead of travel savings. Each option must match the engineer’s certification, available parts, working-hour limits and the customer’s service window. The service removes any assignment that breaches one of those conditions and states the reason.' },
        { text: 'For each feasible option, the service shows moved appointments, delay, added travel, overtime risk, prior disruption for each customer and any missing input. It publishes no preference percentages until the operator has enough real decisions to calibrate them.' },
        { text: 'The dispatcher chooses and publishes the plan. Each disagreement with the suggested options receives a short reason, such as missing local knowledge, unrealistic duration, customer sensitivity or an unmodelled condition. Completed work then supplies actual duration, travel and service effects for review.' },
        { text: 'Dispatchers remain responsible for the published plan. During shadow use, no suggestion reaches engineers or customers. The operator can compare options under live morning pressure without changing the service customers receive.' },
      ],
    },
    {
      heading: 'The operator has prepared a shadow test',
      paragraphs: [
        { text: 'Dispatch leaders have defined the six-week sample, three hard condition groups and the information needed for each option. They removed the earlier uncalibrated preference weights. These decisions define the pilot and provide no operating improvement. A Deloitte survey of 900 leaders at organisations with at least 1,000 staff and $500 million in annual revenue found a 73 percent first-time-fix rate among higher-maturity organisations and 64 percent among lower-maturity organisations. That large-enterprise association supplies context and no causal forecast for this operator.', sources: [6] },
        { text: 'Missing duration estimates, stale parts information and inaccurate travel assumptions could produce poor options. Customer factors may also exist only in staff memory, and too many changes after publication can disrupt the day. Repeated poor suggestions could make dispatchers ignore useful options.' },
        { text: 'Historical replay will test the hard conditions against assignments the operator accepted. Shadow use will then produce options beside the live plan while dispatchers continue their current work. Research on algorithm aversion supports close review of disagreement reasons because explanation alone does not ensure trust or use.', sources: [2] },
      ],
    },
    {
      heading: 'Live use depends on feasible options',
      role: 'conclusion',
      transition: 'The operator will decide live use from feasible assignments, customer effects and dispatcher behaviour.',
      paragraphs: [
        { text: 'The pilot will measure hard-condition breaches, invalid inputs, option acceptance, disagreement reasons, planned and actual duration, travel, customer-window breaches, overtime, schedule changes, repeated disruption and dispatcher preparation time.' },
        { text: 'Every suggested assignment must satisfy the agreed hard conditions. The remaining options must make customer effects clear enough for dispatchers to use under morning pressure. The operator will agree acceptable limits for disruption, travel and overtime before shadow use starts.' },
        { text: 'A valid live release requires feasible choices, useful customer-impact information and disagreements that point to known information or policy gaps. If the filter rejects valid work or admits a stated breach, the work returns to the condition rules. NIST guidance supports continued review after any release.', sources: [3] },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [
  { statistic: 'NP-hard', finding: 'Finding a feasible solution to the vehicle routing problem with time windows is NP-hard, and constructing a feasible single-vehicle route under time windows is already NP-hard', implication: 'Dispatchers need valid assignments before they compare travel or service preferences.', source: 'Savelsbergh, Local search in routing problems with time windows, Annals of Operations Research, 1985', href: 'https://link.springer.com/article/10.1007/BF02022044' },
  { statistic: '2 visits', finding: 'A failed first visit adds two further visits on average and extends resolution by fourteen days', implication: 'The vendor study supports measuring repeat work and elapsed resolution after assignment changes, but it sets no target for this operator.', source: 'Aquant, 2025 Field Service Benchmark Report (vendor study)', href: 'https://www.globenewswire.com/news-release/2025/02/13/3026225/0/en/Aquant-s-2025-Field-Service-Benchmark-Report-Reveals-AI-Enabling-39-Faster-Machinery-Repairs-and-More.html' },
  { statistic: 'Aversion', finding: 'A systematic review of algorithm aversion finds that models users can inspect are sometimes overruled more often than opaque ones', implication: 'Clear explanations do not guarantee use, so the pilot should capture and review every dispatcher disagreement.', source: 'Mahmud and others, What influences algorithmic decision-making? A systematic literature review on algorithm aversion, Technological Forecasting and Social Change, 2021', href: 'https://www.sciencedirect.com/science/article/pii/S0040162521008210' },
  { statistic: 'Lifecycle', finding: 'NIST risk guidance expects measurement and management throughout the operating life of a system', implication: 'The operator should keep reviewing disagreement reasons, actual durations and failed visits after launch.', source: 'NIST AI Risk Management Framework', href: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  { statistic: 'Known good', finding: 'NCSC recommends schema-based validation at operational trust boundaries', implication: 'Input checks need to cover work orders, staff availability and duration estimates before dispatchers see a choice.', source: 'NCSC, Standardised and secure OT protocols, 2026', href: 'https://www.ncsc.gov.uk/collection/operational-technology/secure-connectivity/principle-4' },
  { statistic: '11,000 a year', finding: 'UK government analysis found an average of about 11,000 online adverts a year for field service engineers from 2021 to 2024, with the job title rising eleven places compared with 2012 to 2015', implication: 'Scarce technical capacity increases the cost of sending the wrong engineer or creating avoidable repeat work.', source: 'Migration Advisory Committee, Professionals in IT and Engineering, 2025', href: 'https://www.gov.uk/government/publications/professionals-in-it-and-engineering-review/professionals-in-it-and-engineering-accessible' },
  { statistic: '73% / 64%', finding: 'A survey of 900 field-service leaders at organisations with at least 1,000 staff and $500 million in annual revenue found a 73 percent first-time-fix rate among higher-maturity organisations and 64 percent among lower-maturity organisations', implication: 'The large-enterprise association supports measuring first-time completion and cost to serve, but it does not predict the effect of this intervention.', source: 'Deloitte Digital, Technological maturity fuels field service results, 2026', href: 'https://www.deloittedigital.com/us/en/insights/research/field-service.html' },
];
