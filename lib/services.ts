export type ServiceUseCase = {
  title: string;
  problem: string;
  example: string;
  path: [string, string, string, string];
};

export type Service = {
  slug: string;
  number: string;
  group: 'Advise' | 'Build' | 'Embed';
  title: string;
  shortTitle: string;
  promise: string;
  summary: string;
  explanation: string;
  technologies: string[];
  stages: { label: string; detail: string }[];
  useCases: ServiceUseCase[];
  provisions: string[];
  safeguards: string[];
  idealFor: string[];
  poorFit: string;
  clientInputs: string[];
  measures: string[];
};

type ServiceCore = Omit<Service, 'idealFor' | 'poorFit' | 'clientInputs' | 'measures'>;
type ServiceDepth = Pick<Service, 'idealFor' | 'poorFit' | 'clientInputs' | 'measures'>;

const serviceDemandOrder = [
  'ai-strategy',
  'workflow-automation',
  'claude-implementation',
  'chatgpt-training-for-teams',
  'ai-chatbot',
  'ai-implementation',
  'secure-ai-systems',
  'enterprise-ai',
  'agentic-ai',
  'legacy-modernisation',
] as const;

const serviceCatalogue: ServiceCore[] = [
  {
    slug: 'ai-strategy', number: '01', group: 'Advise', title: 'AI Strategy & Readiness', shortTitle: 'Strategy and readiness',
    promise: 'A ranked investment plan tied to current capability and an explicit business result.',
    summary: 'Leaders receive a short list of AI investments tied to cost, capacity, service quality and risk.',
    explanation: 'Leaders often face too many possible uses and too little basis for choosing among them. The assessment ranks each option by commercial value, practical difficulty and exposure, then defines the first result that would justify further investment.',
    technologies: ['Opportunity assessment', 'Commercial case', 'Readiness review', 'Investment roadmap'],
    stages: [
      { label: 'Context', detail: 'Frame objectives, market pressures and operating constraints.' },
      { label: 'Assess', detail: 'Establish current capability, constraints and the cost of the problem.' },
      { label: 'Prioritise', detail: 'Compare options using common value, feasibility and risk criteria.' },
      { label: 'Sequence', detail: 'Set the delivery order, responsible leaders, measures and review dates.' },
    ],
    useCases: [
      { title: 'Investment choice', problem: 'A growing business sees many possible uses for AI but cannot identify the strongest starting point.', example: 'The review identifies document intake as the first candidate because the business can measure its volume, delay and error cost.', path: ['Business goal', 'Cost of delay', 'Options compared', 'First investment'] },
      { title: 'Pilot recovery', problem: 'A promising prototype has stalled between demonstration and dependable daily use.', example: 'The review identifies the commercial and operating gaps, then defines the smallest release that can prove value.', path: ['Expected result', 'Current shortfall', 'Recovery choice', 'Release decision'] },
    ],
    provisions: ['Executive and staff interviews', 'Commercial and operational assessment', 'Prioritised investment options', 'First-release brief and roadmap'],
    safeguards: ['Problem defined before technology selection', 'Explicit assumptions and dependencies', 'Risk assessed for each investment option', 'Decision gates before material expansion'],
  },
  {
    slug: 'ai-implementation', number: '02', group: 'Build', title: 'Custom AI Systems', shortTitle: 'Custom AI systems',
    promise: 'Lower the cost or delay in one important task that standard tools cannot support.',
    summary: 'A bounded application addresses one high-value task, with success measured through completion quality, review time and operating cost.',
    explanation: 'Custom work is justified when a valuable task cannot fit a managed workspace or standard automation. The first release targets one operating result and gives staff a dependable way to complete the task. The technical design supports that result and the controls needed to use it in daily work.',
    technologies: ['LLM orchestration', 'Secure APIs', 'Retrieval systems', 'Evaluation harnesses'],
    stages: [
      { label: 'Define', detail: 'Agree the task, users, operating result and acceptance conditions.' },
      { label: 'Build', detail: 'Create the application and connect the systems the task requires.' },
      { label: 'Test', detail: 'Compare completed work with the agreed quality and control limits.' },
      { label: 'Operate', detail: 'Release the service with support, monitoring and a route for correction.' },
    ],
    useCases: [
      { title: 'Document operations', problem: 'Teams read, classify and transfer information from complex documents in each case.', example: 'A controlled service proposes the required facts and sends uncertain items to a reviewer, reducing preparation time.', path: ['Documents', 'Proposed facts', 'Human check', 'Completed case'] },
      { title: 'Decision support', problem: 'Staff spend too long gathering the facts and policy needed for a routine operating decision.', example: 'A decision workspace assembles the relevant material, applies approved rules and presents a recommendation for review.', path: ['Business question', 'Relevant material', 'Human review', 'Decision made'] },
    ],
    provisions: ['First-release business and acceptance brief', 'Working application and required integrations', 'Acceptance tests and review controls', 'Deployment, support and operational handover'],
    safeguards: ['Least-privilege system access', 'Representative acceptance tests', 'Logged model and tool activity', 'Fallback and incident paths before launch'],
  },
  {
    slug: 'agentic-ai', number: '03', group: 'Build', title: 'Agentic AI', shortTitle: 'AI agents',
    promise: 'Agents that complete bounded work while people retain every material decision.',
    summary: 'Staff use a bounded agent for variable, multi-step cases and approve each material action.',
    explanation: 'Staff lose time planning the next step across changing cases and several systems. A bounded agent works on one case type with an agreed definition of completion. Accepted work, correction effort and escalation show whether it helps, while action limits keep material decisions with the responsible person.',
    technologies: ['Tool calling', 'Agent state', 'Browser control', 'Human approvals'],
    stages: [
      { label: 'Observe', detail: 'Read the authorised context for the current case.' },
      { label: 'Plan', detail: 'Select a bounded sequence of permitted actions.' },
      { label: 'Act', detail: 'Use tools with schema validation and authority checks.' },
      { label: 'Confirm', detail: 'Check the proposed result and escalate uncertainty.' },
    ],
    useCases: [
      { title: 'Case coordination agent', problem: 'Staff move between inboxes and portals to progress routine cases.', example: 'An agent assembles the case, drafts updates and proposes actions, pausing for approval before external changes.', path: ['Case position', 'Tasks proposed', 'Approval', 'Case advanced'] },
      { title: 'Research agent', problem: 'Recurring market or supplier research consumes specialist time and produces inconsistent coverage.', example: 'An agent searches approved sources, extracts claims, flags conflicts and produces a cited research pack for review.', path: ['Research brief', 'Source search', 'Claim check', 'Cited pack'] },
    ],
    provisions: ['Case and authority design', 'Working agent and approved connections', 'Approval and exception handling', 'Acceptance testing and live review'],
    safeguards: ['Explicit permitted actions', 'Human approval before material writes', 'Schema-validated tool inputs', 'Kill switch and bounded execution'],
  },
  {
    slug: 'ai-chatbot', number: '04', group: 'Build', title: 'Conversational AI', shortTitle: 'Conversational AI',
    promise: 'Text and voice services that resolve routine requests and transfer those needing judgement.',
    summary: 'Text and voice services handle repeated requests and transfer sensitive or uncertain cases to support staff.',
    explanation: 'Repeated questions and routine transactions suit conversational support when the business maintains the underlying source material. Customers receive a response across web, messaging or telephone, and support staff receive the full conversation when the request requires a transfer. Resolved requests, usable transfers and unsupported answers determine success.',
    technologies: ['Retrieval augmented generation', 'Dialogue state', 'Channel integration', 'Speech and telephony'],
    stages: [
      { label: 'Understand', detail: 'Identify the request, user context and permitted access.' },
      { label: 'Retrieve', detail: 'Find approved knowledge or call an authorised business tool.' },
      { label: 'Converse', detail: 'Respond in text or speech and confirm material details.' },
      { label: 'Resolve', detail: 'Complete the interaction or hand over with full context.' },
    ],
    useCases: [
      { title: 'Customer support assistant', problem: 'Support teams answer the same product, delivery and policy questions across several channels.', example: 'An assistant answers from approved material, cites the relevant policy and opens a ticket when confidence is low.', path: ['Customer request', 'Knowledge retrieval', 'Grounded answer', 'Resolve or handover'] },
      { title: 'Voice appointment handling', problem: 'Front desks lose time to repeat calls for booking, rescheduling and preparation questions.', example: 'A voice service checks availability, confirms identity, updates the calendar and transfers sensitive requests.', path: ['Caller speech', 'Intent and identity', 'Calendar action', 'Confirmation'] },
    ],
    provisions: ['Conversation and knowledge architecture', 'Web, messaging and telephony integration', 'Identity, consent and handover controls', 'Evaluation and conversation analytics'],
    safeguards: ['Source-grounded material answers', 'Role-aware knowledge access', 'Confirmation before material action', 'Immediate human transfer and recovery'],
  },
  {
    slug: 'workflow-automation', number: '05', group: 'Build', title: 'AI Workflow Automation', shortTitle: 'Workflow automation',
    promise: 'Reduce delay and rekeying in repeatable work while keeping exceptions visible to staff.',
    summary: 'Repeatable work moves across existing systems with fewer manual touches and a clear route for exceptions.',
    explanation: 'Routine work slows down when staff copy the same information between systems, repeat standard checks and search a mixed queue for the few cases that need judgement. Fixed rules handle predictable steps, AI supports bounded interpretation and the responsible person receives each exception. Cycle time, manual effort, error and recovery determine the result.',
    technologies: ['n8n', 'Make', 'Zapier', 'Cloud functions'],
    stages: [
      { label: 'Trigger', detail: 'Detect an event from an inbox, form, schedule or system.' },
      { label: 'Transform', detail: 'Validate, enrich and interpret the incoming information.' },
      { label: 'Route', detail: 'Apply rules, approvals and exception handling.' },
      { label: 'Complete', detail: 'Update the relevant system, notify the responsible person and log the outcome.' },
    ],
    useCases: [
      { title: 'Enquiry to opportunity', problem: 'Staff read, copy and route inbound enquiries before anyone can respond.', example: 'The automation validates the request, identifies the need, updates the CRM and assigns the right response lead.', path: ['Inbox or form', 'Need identified', 'CRM update', 'Response assigned'] },
      { title: 'Invoice exception handling', problem: 'Finance staff spend time checking routine invoices while genuine exceptions remain mixed into the queue.', example: 'Rules validate known fields, AI interprets supporting text and only unresolved discrepancies reach an approver.', path: ['Invoice received', 'Validation', 'Exception check', 'Post or review'] },
    ],
    provisions: ['Workflow discovery and process design', 'Automation and integration engineering', 'Approval and exception queues', 'Monitoring, documentation and staff handover'],
    safeguards: ['Deterministic rules where possible', 'Idempotent and retry-safe updates', 'Human review for uncertain cases', 'Complete processing and error logs'],
  },
  {
    slug: 'secure-ai-systems', number: '06', group: 'Build', title: 'Secure AI Systems', shortTitle: 'Secure AI',
    promise: 'Use AI on sensitive work without sending restricted material outside the approved security boundary.',
    summary: 'Local or offline models support sensitive work when public cloud services conflict with security requirements.',
    explanation: 'The business decision starts with the work staff need to complete and the information they may use. We then choose a local, offline or controlled hybrid route that meets those restrictions. The release must perform the domain task well enough to justify its cost while meeting access, transfer and recovery requirements.',
    technologies: ['Local inference', 'Offline retrieval', 'Policy routing', 'Network isolation'],
    stages: [
      { label: 'Classify', detail: 'Map data sensitivity, threats, users and acceptable connectivity.' },
      { label: 'Specialise', detail: 'Select and evaluate models against the actual domain workload.' },
      { label: 'Isolate', detail: 'Deploy local, offline or controlled hybrid architecture.' },
      { label: 'Assure', detail: 'Test security, quality, access boundaries and operational recovery.' },
    ],
    useCases: [
      { title: 'Offline sensitive analysis', problem: 'Specialists need model assistance on restricted material that security rules keep out of cloud services.', example: 'A local model and offline retrieval index analyse approved documents inside an isolated network with no external inference route.', path: ['Restricted data', 'Local retrieval', 'Offline inference', 'Reviewed result'] },
      { title: 'Controlled private assistant', problem: 'Executives need help with confidential material that cannot always enter a public cloud service.', example: 'Sensitive work stays local, while approved requests can use an external model after the required information is removed.', path: ['User request', 'Sensitivity check', 'Approved route', 'Controlled response'] },
    ],
    provisions: ['Threat model and data classification', 'Local model and infrastructure selection', 'Offline retrieval and application engineering', 'Security testing and operational handover'],
    safeguards: ['No cloud route for isolated workloads', 'Network and identity segmentation', 'Encrypted storage and audited access', 'Controlled updates and removable-media procedures'],
  },
  {
    slug: 'legacy-modernisation', number: '07', group: 'Build', title: 'Legacy System Modernisation', shortTitle: 'Legacy modernisation',
    promise: 'Replace a fragile spreadsheet or ageing application with a service staff can use and support.',
    summary: 'The engagement protects essential business rules, removes dependence on one person and reduces the risk of change.',
    explanation: 'Legacy systems become expensive when one person understands them, simple changes are risky and growth adds manual work. The engagement protects the business rules that still matter, removes avoidable fragility and gives staff a supported service with a tested cutover.',
    technologies: ['System archaeology', 'Data migration', 'Web applications', 'API integration'],
    stages: [
      { label: 'Recover', detail: 'Map rules, data, users, dependencies and failure points.' },
      { label: 'Design', detail: 'Define the replacement, acceptance tests and cutover boundary.' },
      { label: 'Migrate', detail: 'Clean, reconcile and move the required business information in tested stages.' },
      { label: 'Cut over', detail: 'Validate, train, parallel-run and retire the old system with rollback available.' },
    ],
    useCases: [
      { title: 'Operational database replacement', problem: 'A critical desktop database depends on one person and cannot support secure concurrent work.', example: 'The business rules move into a role-based web application with a tested cutover and complete change history.', path: ['Critical rules', 'Replacement design', 'Migration checks', 'Supported service'] },
      { title: 'Spreadsheet replacement', problem: 'A network of spreadsheets drives planning but creates duplicated information and hidden formula risk.', example: 'The work moves into a shared application with validated inputs and management reporting.', path: ['Workbook network', 'Business rules', 'Validated inputs', 'Shared service'] },
    ],
    provisions: ['Legacy discovery and dependency mapping', 'Target architecture and experience design', 'Application rebuild and data migration', 'Parallel run and controlled retirement'],
    safeguards: ['Reconciled migration totals', 'Business-rule regression tests', 'Rollback and continuity plan', 'Named maintenance responsibility and support plan'],
  },
  {
    slug: 'claude-implementation', number: '08', group: 'Build', title: 'Enterprise AI Platform Implementation', shortTitle: 'AI platform implementation',
    promise: 'One managed AI environment for approved staff tasks and information.',
    summary: 'A managed platform replaces scattered personal AI use and sets common rules for tasks, access and support.',
    explanation: 'Unmanaged accounts create inconsistent work, uncertain information handling and little basis for judging value. Staff tasks and information restrictions determine the choice between Claude, ChatGPT, Perplexity or an API route. Quality, correction effort, adoption and access incidents determine whether the rollout expands.',
    technologies: ['Claude', 'ChatGPT', 'Perplexity', 'Secure integrations'],
    stages: [
      { label: 'Select', detail: 'Compare task fit, information boundaries and platform controls.' },
      { label: 'Configure', detail: 'Set identity, administration, instructions and retention policy.' },
      { label: 'Connect', detail: 'Add approved knowledge, APIs and permissioned business tools.' },
      { label: 'Evaluate', detail: 'Test quality, safety, adoption and operational support.' },
    ],
    useCases: [
      { title: 'Team productivity rollout', problem: 'Staff use personal AI accounts with inconsistent practice and no shared governance.', example: 'A managed workspace launches with role playbooks, approved information rules, champions and representative task reviews.', path: ['Managed identity', 'Role playbook', 'AI workspace', 'Result review'] },
      { title: 'Connected operations assistant', problem: 'Users can reason in a chat workspace but must copy every action into business systems.', example: 'Permissioned connectors retrieve case data and propose updates that a user approves before execution.', path: ['User intent', 'System context', 'Approval gate', 'System action'] },
      { title: 'Research platform rollout', problem: 'Research teams repeat broad searches and lack a consistent way to verify current sources.', example: 'The platform applies source standards, citation checks and expert acceptance before findings enter a decision.', path: ['Research brief', 'Current sources', 'Citation review', 'Accepted finding'] },
    ],
    provisions: ['Vendor-neutral platform selection', 'Workspace and organisation configuration', 'Knowledge and integration engineering', 'Evaluation, training and adoption support'],
    safeguards: ['Managed identity and least privilege', 'Approved data-use and retention policy', 'Representative task evaluation', 'Human confirmation for external actions'],
  },
  {
    slug: 'enterprise-ai', number: '10', group: 'Embed', title: 'AI Adoption & Operating Model', shortTitle: 'AI adoption',
    promise: 'Increase useful AI adoption without duplicating tools or weakening accountability.',
    summary: 'Growing teams concentrate AI spending on useful tasks, set clear responsibilities and measure changes in capacity, quality or service.',
    explanation: 'Adoption stalls when teams buy tools without changing the work, or create policy without helping staff use it. A suitable operating model connects each priority task to a responsible leader, shared controls and a stated result. Continued investment depends on measured changes in capacity, quality or service.',
    technologies: ['Adoption diagnostics', 'Role playbooks', 'Federated governance', 'Portfolio telemetry'],
    stages: [
      { label: 'Focus', detail: 'Choose priority business problems, responsible leaders and measurable outcomes.' },
      { label: 'Standardise', detail: 'Define the lightest suitable platforms, patterns and controls.' },
      { label: 'Embed', detail: 'Launch role-specific changes with training and local responsibility.' },
      { label: 'Assure', detail: 'Review quality, risk, adoption and realised value.' },
    ],
    useCases: [
      { title: 'Growing-team adoption', problem: 'A small operations team needs more capacity but cannot support a large platform programme.', example: 'One high-cost task launches with a responsible lead, practical policy, user training and a simple value review.', path: ['Capacity problem', 'Lightweight standard', 'Team release', 'Value review'] },
      { title: 'Multi-department rollout', problem: 'Different teams need distinct uses while central functions require consistent controls.', example: 'A shared platform provides identity, logging and evaluation while each function manages approved sources and task patterns.', path: ['Central standard', 'Function need', 'Role change', 'Portfolio review'] },
    ],
    provisions: ['Adoption and operating-model diagnostic', 'Platform, governance and delivery playbooks', 'Role workflows and capability building', 'Portfolio assurance and improvement support'],
    safeguards: ['Named outcome owners', 'Controls proportionate to organisation size', 'Value measured in target tasks', 'Portfolio-level incident management'],
  },
  {
    slug: 'chatgpt-training-for-teams', number: '11', group: 'Embed', title: 'AI Training for Teams', shortTitle: 'AI training',
    promise: 'Role-specific training that improves real work within approved limits.',
    summary: 'Leaders and staff practise representative tasks with approved tools, sound checks and clear limits.',
    explanation: 'Generic demonstrations produce little change in performance. Participants practise realistic tasks, compare weak and strong results, learn the limits of approved tools and leave with a method they can apply without relying on prompt tricks.',
    technologies: ['Claude', 'ChatGPT', 'Perplexity', 'Role playbooks'],
    stages: [
      { label: 'Diagnose', detail: 'Identify roles, tasks, confidence, policy and learning needs.' },
      { label: 'Practise', detail: 'Work through realistic examples with approved data and tools.' },
      { label: 'Verify', detail: 'Apply source, quality and risk checks to each output.' },
      { label: 'Embed', detail: 'Create role playbooks, champions and continuing support.' },
    ],
    useCases: [
      { title: 'Role-based team training', problem: 'Generic awareness sessions do not translate into better daily work.', example: 'Finance, operations and commercial teams each practise distinct tasks using shared governance and review principles.', path: ['Role tasks', 'Guided practice', 'Quality check', 'Team playbook'] },
      { title: 'Board and leadership briefing', problem: 'Leaders need enough technical and governance understanding to make accountable decisions.', example: 'A decision-focused session covers capability, failure modes, oversight and the questions to ask before approval.', path: ['Decision context', 'Capability model', 'Risk scenarios', 'Leadership checklist'] },
    ],
    provisions: ['Training-needs and task assessment', 'Workshops and exercises drawn from real work', 'Leadership, champion and technical pathways', 'Playbooks and follow-up clinics'],
    safeguards: ['Approved or synthetic training data', 'Verification taught in every task', 'Policy explained through scenarios', 'Capability assessed through completed tasks'],
  },
];

const serviceDepth: Record<string, ServiceDepth> = {
  'ai-strategy': {
    idealFor: ['Leadership teams choosing between several AI investments', 'Teams recovering a pilot that has stalled before live use'],
    poorFit: 'A request for a predetermined vendor endorsement without a defined business problem or investment decision.',
    clientInputs: ['A clear business objective and investment constraint', 'Access to leaders and staff who understand the work', 'Current policy, system and pilot material', 'Known commercial, regulatory and security constraints'],
    measures: ['Time from assessment start to an approved first release', 'Priority options tied to a named business result', 'Critical readiness gaps closed before build', 'First-release acceptance against the agreed brief'],
  },
  'workflow-automation': {
    idealFor: ['Repeatable work spread across inboxes, documents and business systems', 'Processes with costly handoffs and visible exception queues'],
    poorFit: 'A process with no stable rules, no process lead or too little repetition to test.',
    clientInputs: ['A process lead and staff who perform the work', 'Representative normal and exception cases', 'Business rules, approval limits and service commitments', 'Test access to each source and destination system'],
    measures: ['End-to-end cycle time', 'Manual touches per completed case', 'Exception rate by type', 'Failed updates, recoveries and rework'],
  },
  'claude-implementation': {
    idealFor: ['Teams replacing personal AI accounts with a managed workspace', 'Organisations connecting approved knowledge to defined staff tasks'],
    poorFit: 'A broad licence purchase with no defined users, tasks, information rules or success measure.',
    clientInputs: ['Current licences and vendor constraints', 'Identity, access and retention requirements', 'Representative tasks and approved source material', 'Platform administrators and user champions'],
    measures: ['Quality on representative staff tasks', 'Material correction and unsupported claim rates', 'Use on approved tasks by role', 'Support demand and access incidents'],
  },
  'chatgpt-training-for-teams': {
    idealFor: ['Teams with approved tools that need role-specific practice', 'Leaders and champions responsible for safe adoption'],
    poorFit: 'A motivational awareness session with no task practice, assessment or follow-up.',
    clientInputs: ['Participant roles and current confidence', 'Representative tasks and redacted examples', 'Internal policy and approved tool access', 'Managers who can assess the finished work'],
    measures: ['Baseline and post-training task quality', 'Source checks completed without prompting', 'Material errors found before submission', 'Continued use on the tasks taught'],
  },
  'ai-chatbot': {
    idealFor: ['Repeated enquiries supported by maintained source material', 'Booking or service tasks with a staffed transfer route'],
    poorFit: 'A plan to remove support staff without reliable knowledge, permissions or human transfer.',
    clientInputs: ['Existing contacts, transcripts and intent volumes', 'Approved knowledge sources and policy leads', 'Identity, consent and confirmation rules', 'System access and support-team transfer requirements'],
    measures: ['Resolved requests by intent', 'Transfers that arrive with usable context', 'Unsupported material claim rate', 'Repeat contact and action error rates'],
  },
  'ai-implementation': {
    idealFor: ['A high-value task that managed workspaces cannot support', 'A defined workflow that needs software, integration and model evaluation'],
    poorFit: 'A request for a general assistant without named users, source boundaries or acceptance cases.',
    clientInputs: ['Workflow experts and intended users', 'Source data and system documentation', 'Security, identity and deployment requirements', 'Normal, difficult and unacceptable test cases'],
    measures: ['Accepted task completion rate', 'Material omissions and unsupported claims', 'Reviewer correction time', 'Latency, running cost and integration failures'],
  },
  'secure-ai-systems': {
    idealFor: ['Restricted material that cannot enter a public cloud service', 'Mixed information classes that require explicit processing routes'],
    poorFit: 'A workload with no agreed classification, security authority or maintainable evaluation set.',
    clientInputs: ['Data classification and threat assumptions', 'Network, hardware, identity and endpoint architecture', 'Approved documents and domain test cases', 'Update, media-handling and incident procedures'],
    measures: ['Quality on domain evaluation cases', 'Blocked unauthorised access attempts', 'External data-transfer events', 'Availability, recovery time and controlled update success'],
  },
  'enterprise-ai': {
    idealFor: ['Growing teams that need a light operating structure', 'Multi-department programmes that need shared standards and local delivery'],
    poorFit: 'A policy-only exercise with no users, delivery teams, priority tasks or measurement process.',
    clientInputs: ['Organisation and decision structure', 'Platform, pilot and policy inventory', 'Sponsors, business leads and control functions', 'Existing adoption, incident and benefit information'],
    measures: ['Time from use-case proposal to decision', 'Active use on approved tasks', 'Measured operating benefit by task', 'Control exceptions, duplicate tools and remediation age'],
  },
  'agentic-ai': {
    idealFor: ['Repeated multi-system work with variable steps', 'Cases with observable state, reliable tools and clear approval rules'],
    poorFit: 'A fixed process suited to normal automation or a task with no reliable stop condition.',
    clientInputs: ['Representative case histories', 'Tool and API contracts', 'Permission, approval and escalation rules', 'Failure cases and staff who can review proposed actions'],
    measures: ['Correct completion by case type', 'Human review and correction effort', 'Escalations by cause', 'Tool failures, blocked actions, execution time and cost'],
  },
  'legacy-modernisation': {
    idealFor: ['A critical spreadsheet, Access database or ageing application', 'A system with recoverable rules and staff who know the work'],
    poorFit: 'A replacement with no source data, experienced users or authority to validate business rules.',
    clientInputs: ['Source code, files, formulas, schemas and business information', 'Experienced users and system administrators', 'Known integrations, schedules and workarounds', 'Representative historic and live cases'],
    measures: ['Migrated information accuracy', 'Critical rule regression results', 'Unresolved migration exceptions', 'Cutover interruption and post-launch incidents'],
  },
};

export const services: Service[] = serviceDemandOrder.flatMap((slug, index) => {
  const service = serviceCatalogue.find((item) => item.slug === slug);
  return service ? [{ ...service, ...serviceDepth[slug], number: String(index + 1).padStart(2, '0') }] : [];
});

export const serviceAliases: Record<string, string> = {
  'ai-readiness': 'ai-strategy',
  'claude-consulting': 'claude-implementation',
  'voice-ai': 'ai-chatbot',
  'private-ai-concierge': 'secure-ai-systems',
  'chatgpt-implementation': 'claude-implementation',
  'perplexity-implementation': 'claude-implementation',
  'ai-for-smes': 'enterprise-ai',
  'ai-london': 'enterprise-ai',
};

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
