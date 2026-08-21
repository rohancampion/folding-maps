export type ServiceUseCase = {
  title: string;
  problem: string;
  example: string;
  path: [string, string, string, string];
};

export type Service = {
  slug: string;
  number: string;
  group: 'Advise' | 'Build' | 'Enable';
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
};

export const services: Service[] = [
  {
    slug: 'fractional-ai-officer', number: '01', group: 'Advise', title: 'Fractional Chief AI Officer', shortTitle: 'Fractional AI leadership',
    promise: 'Senior AI leadership that turns scattered activity into one accountable programme.',
    summary: 'We give leadership teams an experienced AI operator who can set direction, govern decisions and keep delivery connected to commercial priorities.',
    explanation: 'A fractional AI officer works across the portfolio rather than owning one tool. The role maintains the decision system around AI: opportunity intake, prioritisation, architecture principles, risk gates, supplier choices, benefit reviews and board reporting.',
    technologies: ['Portfolio governance', 'Decision registers', 'Model evaluation', 'Benefits tracking'],
    stages: [
      { label: 'Signal', detail: 'Collect strategic objectives, workflow constraints and active experiments.' },
      { label: 'Decide', detail: 'Score opportunities against value, feasibility, risk and readiness.' },
      { label: 'Govern', detail: 'Assign ownership, controls, budgets and evidence requirements.' },
      { label: 'Review', detail: 'Report outcomes, exceptions and the next portfolio decision.' },
    ],
    useCases: [
      { title: 'AI portfolio control', problem: 'Teams are buying tools and launching pilots without shared standards or ownership.', example: 'A monthly portfolio forum evaluates every initiative against the same value, data, security and adoption gates.', path: ['Ideas', 'Scorecard', 'Decision forum', 'Portfolio action'] },
      { title: 'Board-level AI oversight', problem: 'Directors need a decision-ready view of exposure, progress and value rather than product demonstrations.', example: 'A board pack links material use cases to accountable owners, control status and measured operational outcomes.', path: ['Programme data', 'Risk synthesis', 'Executive review', 'Board decision'] },
    ],
    provisions: ['AI strategy ownership and quarterly planning', 'Board papers and leadership decision support', 'Portfolio governance and benefits reviews', 'Vendor, platform and delivery partner oversight'],
    safeguards: ['Named executive accountability', 'Documented decision rights', 'Independent value and risk challenge', 'Regular portfolio stop, continue and scale decisions'],
  },
  {
    slug: 'ai-strategy', number: '02', group: 'Advise', title: 'AI Strategy Consulting', shortTitle: 'AI strategy',
    promise: 'A practical route from business ambition to a prioritised AI delivery portfolio.',
    summary: 'We connect AI opportunities to the operating model, data and commercial outcomes that determine whether they will work.',
    explanation: 'Strategy work begins with the business system, not a model catalogue. We map value pools, constraints, decision rights and capability gaps, then define a sequence of releases with explicit measures and dependencies.',
    technologies: ['Opportunity mapping', 'Target architecture', 'Operating model', 'AI roadmap'],
    stages: [
      { label: 'Context', detail: 'Frame objectives, market pressures and operating constraints.' },
      { label: 'Map', detail: 'Locate high-friction workflows, valuable decisions and usable data.' },
      { label: 'Prioritise', detail: 'Compare options using common value, feasibility and risk criteria.' },
      { label: 'Sequence', detail: 'Create an owned roadmap with measures, dependencies and review gates.' },
    ],
    useCases: [
      { title: 'Operations strategy', problem: 'A growing business sees many automation opportunities but cannot identify the strongest starting point.', example: 'Workflow evidence reveals that document intake and exception handling offer more value than a general assistant rollout.', path: ['Operating goals', 'Workflow map', 'Use-case score', 'Release roadmap'] },
      { title: 'Product and service strategy', problem: 'A leadership team wants to add AI to its offer without creating an unsupported product promise.', example: 'Customer jobs, proprietary data and delivery capability are translated into a bounded product concept and validation plan.', path: ['Customer need', 'Data advantage', 'Concept test', 'Product decision'] },
    ],
    provisions: ['Executive and stakeholder workshops', 'Opportunity and constraint mapping', 'Use-case portfolio and prioritisation model', 'Phased roadmap, operating model and success measures'],
    safeguards: ['Evidence before technology selection', 'Explicit assumptions and dependencies', 'Risk assessment at use-case level', 'Decision gates before material expansion'],
  },
  {
    slug: 'ai-readiness', number: '03', group: 'Advise', title: 'AI Readiness Assessment', shortTitle: 'AI readiness',
    promise: 'A clear view of what is ready, what is missing and what to fix first.',
    summary: 'We assess strategy, workflows, data, technology, governance, capability and culture before significant AI investment.',
    explanation: 'The assessment combines interviews, workflow observation, system evidence and policy review. Findings are scored against the specific AI opportunities under consideration, because readiness for a writing assistant differs from readiness for an autonomous operational agent.',
    technologies: ['Capability assessment', 'Data profiling', 'Process discovery', 'Control mapping'],
    stages: [
      { label: 'Scope', detail: 'Define target outcomes and the use cases the assessment must support.' },
      { label: 'Inspect', detail: 'Review people, process, data, systems and governance evidence.' },
      { label: 'Test', detail: 'Challenge assumptions through representative tasks and samples.' },
      { label: 'Prepare', detail: 'Prioritise remediation and define the next controlled experiment.' },
    ],
    useCases: [
      { title: 'Pre-investment assessment', problem: 'A business is considering a broad AI programme without knowing whether its information and workflows can support it.', example: 'The review finds that ownership and document quality must be corrected before a knowledge assistant can be dependable.', path: ['Target use case', 'Evidence review', 'Gap analysis', 'Action plan'] },
      { title: 'Pilot recovery', problem: 'A promising prototype has stalled between demonstration and daily use.', example: 'Readiness analysis separates model limitations from missing integration, unclear ownership and weak acceptance criteria.', path: ['Pilot evidence', 'Failure modes', 'Readiness gaps', 'Recovery release'] },
    ],
    provisions: ['Leadership and user interviews', 'Workflow, data and system assessment', 'Governance and capability review', 'Prioritised remediation plan and release recommendation'],
    safeguards: ['Use-case-specific scoring', 'Evidence traceable to each finding', 'Clear distinction between fact and assumption', 'No platform commitment before readiness is understood'],
  },
  {
    slug: 'claude-consulting', number: '04', group: 'Advise', title: 'Claude Consulting', shortTitle: 'Claude advisory',
    promise: 'Choose the right Claude surface, controls and workflows before deployment.',
    summary: 'We help organisations decide where Claude fits, how it should connect to work and what must remain under human control.',
    explanation: 'Claude can operate as a user assistant, a project knowledge space, an API model or an agentic tool user. We evaluate task fit, information sensitivity, context requirements, integration options and operating controls before defining the target setup.',
    technologies: ['Claude Enterprise', 'Claude API', 'Model Context Protocol', 'Claude Code'],
    stages: [
      { label: 'Work', detail: 'Decompose the target job into information, judgement and action.' },
      { label: 'Surface', detail: 'Select chat, project, API, skill or agent architecture.' },
      { label: 'Boundary', detail: 'Define data, tool, authority and human-review limits.' },
      { label: 'Adopt', detail: 'Create the configuration, evaluation and rollout plan.' },
    ],
    useCases: [
      { title: 'Knowledge-work design', problem: 'Teams use Claude individually but outputs vary and valuable context is repeatedly rebuilt.', example: 'A role-specific project structure combines approved instructions, source collections and review checklists.', path: ['Work sample', 'Context design', 'Claude workspace', 'Reviewed output'] },
      { title: 'Claude architecture decision', problem: 'A technical team cannot decide between direct API, Bedrock, Vertex AI or a user workspace.', example: 'Data location, feature needs, identity controls and integration patterns are compared against the real workload.', path: ['Requirements', 'Route evaluation', 'Control review', 'Architecture choice'] },
    ],
    provisions: ['Claude use-case and architecture advisory', 'Plan and deployment-route evaluation', 'Governance, instruction and context design', 'Adoption roadmap and technical brief'],
    safeguards: ['Vendor claims tested against the workload', 'Sensitive-data routes documented', 'Human review matched to consequence', 'Exit and model-change considerations included'],
  },
  {
    slug: 'ai-implementation', number: '05', group: 'Build', title: 'AI Implementation', shortTitle: 'AI implementation',
    promise: 'Production AI systems engineered around real work, data and controls.',
    summary: 'We design, build, integrate and launch AI solutions from a bounded first release through to operational handover.',
    explanation: 'Implementation connects a model to the surrounding software system. That includes data preparation, retrieval, orchestration, authentication, evaluation, observability, exception handling and user experience, not only prompts.',
    technologies: ['LLM orchestration', 'Secure APIs', 'Retrieval systems', 'Evaluation harnesses'],
    stages: [
      { label: 'Ingest', detail: 'Validate requests, identity, context and source data.' },
      { label: 'Reason', detail: 'Route work through models, tools and deterministic rules.' },
      { label: 'Assure', detail: 'Apply evaluation, permissions, review and exception controls.' },
      { label: 'Operate', detail: 'Deliver outputs, telemetry and a route for correction.' },
    ],
    useCases: [
      { title: 'Document operations', problem: 'Teams repeatedly read, classify and transfer information from complex documents.', example: 'A controlled service extracts proposed fields, attaches source evidence and sends uncertain items to a reviewer.', path: ['Documents', 'Extraction', 'Confidence gate', 'System record'] },
      { title: 'Decision support', problem: 'Operational decisions require evidence spread across several systems and policies.', example: 'A decision workspace assembles relevant records, applies approved rules and presents a reviewable recommendation.', path: ['System context', 'Evidence synthesis', 'Human review', 'Recorded decision'] },
    ],
    provisions: ['Solution and data architecture', 'Application and integration engineering', 'Evaluation, security and control implementation', 'Deployment, documentation and operational handover'],
    safeguards: ['Least-privilege system access', 'Representative acceptance tests', 'Logged model and tool activity', 'Fallback and incident paths designed before launch'],
  },
  {
    slug: 'agentic-ai', number: '06', group: 'Build', title: 'Agentic AI', shortTitle: 'AI agents',
    promise: 'Agents that act within explicit authority, with evidence and people kept in the loop.',
    summary: 'We build agents that plan, use tools and complete variable multi-step work within carefully designed boundaries.',
    explanation: 'An agent receives a goal, observes state, selects tools and iterates until it reaches a stop condition. Dependability comes from constrained tools, validated inputs, state management, approval gates, audit logs and tested recovery behaviour.',
    technologies: ['Tool calling', 'Agent state', 'Browser control', 'Human approvals'],
    stages: [
      { label: 'Observe', detail: 'Read authorised context and current workflow state.' },
      { label: 'Plan', detail: 'Select a bounded sequence of permitted actions.' },
      { label: 'Act', detail: 'Use tools with schema validation and authority checks.' },
      { label: 'Confirm', detail: 'Verify the result, record evidence and escalate uncertainty.' },
    ],
    useCases: [
      { title: 'Case coordination agent', problem: 'Staff move repeatedly between inboxes, portals and records to progress routine cases.', example: 'An agent assembles the case, drafts updates and proposes system actions, pausing for approval before external changes.', path: ['Case state', 'Task plan', 'Approved tools', 'Case update'] },
      { title: 'Research agent', problem: 'Recurring market or supplier research consumes specialist time and lacks a consistent evidence trail.', example: 'An agent searches approved sources, extracts claims, flags conflicts and produces a cited research pack for review.', path: ['Research brief', 'Source search', 'Evidence check', 'Cited pack'] },
    ],
    provisions: ['Agent opportunity and authority design', 'Tool, memory and state architecture', 'Human approval and exception workflows', 'Evaluation, red-team testing and live monitoring'],
    safeguards: ['Explicit allowed and prohibited actions', 'Human approval before material writes', 'Tool inputs validated against schemas', 'Kill switch, retries and bounded execution'],
  },
  {
    slug: 'ai-chatbot', number: '07', group: 'Build', title: 'AI Chatbots for Business', shortTitle: 'AI chatbots',
    promise: 'Grounded assistants that answer useful questions and know when to hand over.',
    summary: 'We create customer and employee chatbots connected to approved knowledge, workflows and support teams.',
    explanation: 'A dependable chatbot combines conversation handling with retrieval, permissions, citations, business rules and escalation. The model generates a response only after the system has identified relevant sources and applied the correct user context.',
    technologies: ['RAG', 'Hybrid search', 'Conversation state', 'Channel integration'],
    stages: [
      { label: 'Understand', detail: 'Classify the request, user context and required access.' },
      { label: 'Retrieve', detail: 'Find relevant approved passages and structured records.' },
      { label: 'Compose', detail: 'Generate a grounded answer with rules and citations.' },
      { label: 'Resolve', detail: 'Complete the interaction or hand over with full context.' },
    ],
    useCases: [
      { title: 'Customer support assistant', problem: 'Support teams repeatedly answer product, delivery and policy questions across channels.', example: 'A website assistant answers from approved material, cites the relevant policy and opens a ticket when confidence is low.', path: ['Customer question', 'Knowledge retrieval', 'Grounded answer', 'Resolve or handover'] },
      { title: 'Employee service desk', problem: 'Staff struggle to find current procedures, forms and internal ownership.', example: 'A Teams assistant uses identity-aware retrieval to answer policy questions and route service requests.', path: ['Employee identity', 'Permitted sources', 'Answer and action', 'Service record'] },
    ],
    provisions: ['Conversation and knowledge architecture', 'Content ingestion and retrieval engineering', 'Web, Teams or messaging-channel integration', 'Evaluation, analytics and human handover'],
    safeguards: ['Source citations for material answers', 'Role-aware access to knowledge', 'Low-confidence escalation', 'Conversation retention and privacy controls'],
  },
  {
    slug: 'voice-ai', number: '08', group: 'Build', title: 'Voice AI', shortTitle: 'Voice AI',
    promise: 'Natural voice services designed for resolution, safety and reliable handover.',
    summary: 'We build voice agents for inbound and outbound workflows where speed, availability and structured capture matter.',
    explanation: 'A voice agent streams speech to transcription, maintains dialogue state, uses approved tools and returns synthesised speech. Low latency matters, but so do interruption handling, identity checks, consent, recovery and transfer to a person.',
    technologies: ['Speech recognition', 'Dialogue state', 'Telephony APIs', 'Speech synthesis'],
    stages: [
      { label: 'Listen', detail: 'Transcribe speech, detect intent and manage interruptions.' },
      { label: 'Resolve', detail: 'Retrieve information or call approved business tools.' },
      { label: 'Confirm', detail: 'Read back material details and obtain explicit agreement.' },
      { label: 'Transfer', detail: 'Complete, record or hand over with conversation context.' },
    ],
    useCases: [
      { title: 'Appointment handling', problem: 'Front desks lose time to repeat calls for booking, rescheduling and basic preparation questions.', example: 'A voice service checks availability, confirms identity, updates the calendar and transfers sensitive requests.', path: ['Caller speech', 'Intent and identity', 'Calendar action', 'Confirmation'] },
      { title: 'Service triage', problem: 'High call volumes make it difficult to identify urgency and route enquiries consistently.', example: 'The agent captures structured facts, applies a non-clinical routing policy and passes the case to the right queue.', path: ['Call intake', 'Structured questions', 'Routing rule', 'Warm handover'] },
    ],
    provisions: ['Conversation and call-flow design', 'Telephony, speech and business-system integration', 'Identity, consent and handover controls', 'Call evaluation, analytics and live optimisation'],
    safeguards: ['Clear AI disclosure', 'No unsupported high-consequence advice', 'Confirmation before material action', 'Immediate human transfer and failure recovery'],
  },
  {
    slug: 'workflow-automation', number: '09', group: 'Build', title: 'AI Workflow Automation', shortTitle: 'Workflow automation',
    promise: 'Connected workflows that remove handoffs while keeping exceptions visible.',
    summary: 'We automate repeatable work across inboxes, documents, databases and business platforms using deterministic logic and AI where judgement is required.',
    explanation: 'Good automation separates predictable rules from probabilistic interpretation. Events trigger a workflow, validated data moves between systems, AI handles bounded classification or generation, and exceptions enter an owned review queue.',
    technologies: ['n8n', 'Make', 'Zapier', 'Cloud functions'],
    stages: [
      { label: 'Trigger', detail: 'Detect an event from an inbox, form, schedule or system.' },
      { label: 'Transform', detail: 'Validate, enrich and interpret the incoming information.' },
      { label: 'Route', detail: 'Apply rules, approvals and exception handling.' },
      { label: 'Record', detail: 'Update systems, notify owners and preserve an audit trail.' },
    ],
    useCases: [
      { title: 'Enquiry to opportunity', problem: 'Inbound enquiries are manually read, copied and routed before anyone can respond.', example: 'A workflow validates the request, classifies need, creates the CRM record and assigns the right response owner.', path: ['Inbox or form', 'Classify and enrich', 'Routing rules', 'CRM opportunity'] },
      { title: 'Document approval flow', problem: 'Documents move through email with unclear status and frequent version errors.', example: 'The workflow extracts metadata, requests approvals, records decisions and archives the accepted version.', path: ['New document', 'Metadata and checks', 'Approval route', 'Controlled record'] },
    ],
    provisions: ['Workflow discovery and baseline measurement', 'Automation and integration engineering', 'Approval, retry and exception design', 'Monitoring, documentation and support'],
    safeguards: ['Idempotent actions where possible', 'Schema validation at system boundaries', 'Owned exception queues', 'Logs, alerts and rollback procedures'],
  },
  {
    slug: 'private-ai-concierge', number: '10', group: 'Build', title: 'Private AI Concierge', shortTitle: 'Private AI',
    promise: 'Useful AI assistance with sensitive information kept inside an architecture you control.',
    summary: 'We deploy private or hybrid assistants for professionals who need stronger confidentiality while retaining carefully controlled access to selected cloud services.',
    explanation: 'Private AI runs selected models and retrieval services on dedicated infrastructure. A policy router decides which tasks stay local and whether any approved requests may use an external model, with sensitive fields removed or blocked.',
    technologies: ['Local inference', 'Encrypted retrieval', 'Policy routing', 'Private gateways'],
    stages: [
      { label: 'Classify', detail: 'Identify user, task sensitivity and permitted processing route.' },
      { label: 'Retrieve', detail: 'Access only authorised local files and knowledge stores.' },
      { label: 'Process', detail: 'Run locally or through a controlled, redacted external route.' },
      { label: 'Retain', detail: 'Apply output checks, audit policy and controlled storage.' },
    ],
    useCases: [
      { title: 'Confidential practice assistant', problem: 'Professionals want drafting and research support without placing client files in a consumer AI service.', example: 'A local assistant searches approved matter folders and drafts a source-grounded brief for professional review.', path: ['Authorised folder', 'Local retrieval', 'Private model', 'Reviewed draft'] },
      { title: 'Hybrid executive assistant', problem: 'Leaders need one assistant for sensitive internal work and lower-risk external research.', example: 'A policy gateway keeps board material local while routing a redacted public-research query to an external model.', path: ['User request', 'Policy classifier', 'Local or cloud route', 'Audited response'] },
    ],
    provisions: ['Threat, data and workload assessment', 'Local or hybrid architecture and deployment', 'Private knowledge, identity and policy integration', 'Hardening, evaluation and operational support'],
    safeguards: ['Default-deny external routing', 'Encryption and device hardening', 'Document-level permissions', 'Auditable policy and model decisions'],
  },
  {
    slug: 'secure-ai-systems', number: '11', group: 'Build', title: 'Secure AI Systems', shortTitle: 'Secure AI',
    promise: 'Specialised AI that operates inside your controlled environment without routine cloud exposure.',
    summary: 'We deploy local and offline models for sensitive or specialised work, keeping prompts, source data, embeddings and outputs within infrastructure you control.',
    explanation: 'A Secure AI System runs model inference, retrieval and application services on dedicated local or private infrastructure. The architecture can operate without internet access, including segmented or air-gapped environments, with model files, updates, identities and audit evidence managed through an explicit security process.',
    technologies: ['Local model inference', 'Offline RAG', 'Private GPU infrastructure', 'Network isolation'],
    stages: [
      { label: 'Threat model', detail: 'Classify the data, users, adversaries and connectivity constraints.' },
      { label: 'Specialise', detail: 'Select and evaluate a model against the vocabulary and tasks that matter.' },
      { label: 'Isolate', detail: 'Deploy inference, retrieval and interfaces inside the approved security boundary.' },
      { label: 'Assure', detail: 'Test leakage, access, updates, recovery and operating evidence before release.' },
    ],
    useCases: [
      { title: 'Sensitive document analysis', problem: 'A regulated or security-conscious team needs model assistance on restricted records that cannot be submitted to an external AI provider.', example: 'An offline retrieval and inference service analyses approved document stores inside the organisation’s network and returns source-grounded findings to authorised reviewers.', path: ['Restricted records', 'Local retrieval', 'Offline model', 'Authorised review'] },
      { title: 'Specialist operational model', problem: 'A domain team needs reliable support for technical language and proprietary procedures while keeping its knowledge base disconnected from public services.', example: 'A locally hosted model is evaluated and adapted for the team’s terminology, then exposed through a role-controlled interface with no internet route.', path: ['Specialist corpus', 'Local evaluation', 'Isolated service', 'Controlled workflow'] },
    ],
    provisions: ['Security and workload threat model', 'Model selection, evaluation and specialisation', 'Local, private or air-gapped deployment', 'Offline update, monitoring and recovery procedures'],
    safeguards: ['No routine cloud model or telemetry dependency', 'Network segmentation or air gap where required', 'Encrypted storage and role-based access', 'Signed model and software update process'],
  },
  {
    slug: 'legacy-modernisation', number: '12', group: 'Build', title: 'Legacy Software Modernisation', shortTitle: 'Legacy modernisation',
    promise: 'Replace fragile operational software without losing the knowledge embedded inside it.',
    summary: 'We rebuild ageing databases, spreadsheets and bespoke applications as secure, maintainable systems with carefully chosen AI capabilities.',
    explanation: 'Modernisation begins by recovering the real operating model from code, data, workarounds and user behaviour. We separate essential rules from accidental complexity, migrate data in controlled stages and use parallel running where continuity matters.',
    technologies: ['System archaeology', 'Data migration', 'Modern web apps', 'Cloud architecture'],
    stages: [
      { label: 'Recover', detail: 'Document rules, dependencies, data and operational workarounds.' },
      { label: 'Redesign', detail: 'Define the target workflow, architecture and migration boundary.' },
      { label: 'Migrate', detail: 'Clean, reconcile and move data through repeatable pipelines.' },
      { label: 'Cut over', detail: 'Validate, train, parallel-run and retire the old system safely.' },
    ],
    useCases: [
      { title: 'Operational database replacement', problem: 'A critical Access database depends on one person and cannot support remote or concurrent work.', example: 'The rules and records are moved into a role-based web application with tested migration and audit history.', path: ['Legacy rules', 'Target model', 'Migration checks', 'Modern application'] },
      { title: 'Spreadsheet operating system', problem: 'A network of spreadsheets drives planning but creates duplicated data and hidden formula risk.', example: 'The process becomes a shared application with validated inputs, workflow states and management reporting.', path: ['Workbook network', 'Process model', 'Controlled data', 'Shared workflow'] },
    ],
    provisions: ['Legacy discovery and dependency mapping', 'Target architecture and experience design', 'Application rebuild and data migration', 'Parallel run, training and controlled retirement'],
    safeguards: ['Reconciled migration totals', 'Business-rule regression tests', 'Rollback and continuity plan', 'Documented ownership and support model'],
  },
  {
    slug: 'claude-implementation', number: '13', group: 'Build', title: 'Claude Implementation', shortTitle: 'Claude implementation',
    promise: 'Claude configured, connected and evaluated for the work your teams actually perform.',
    summary: 'We implement Claude workspaces, knowledge structures, reusable skills, integrations and API services with governance built in.',
    explanation: 'A Claude implementation combines organisation-level instructions, role context, projects, knowledge, skills and connectors. Technical deployments can use the API and Model Context Protocol to provide tools while preserving least privilege and human approval.',
    technologies: ['Claude Enterprise', 'Claude API', 'Claude Skills', 'MCP connectors'],
    stages: [
      { label: 'Configure', detail: 'Set workspace, identity, instructions and access policy.' },
      { label: 'Ground', detail: 'Structure projects, knowledge and reusable context.' },
      { label: 'Connect', detail: 'Expose approved tools and systems through secure interfaces.' },
      { label: 'Evaluate', detail: 'Test task quality, safety, adoption and operational support.' },
    ],
    useCases: [
      { title: 'Professional knowledge workspace', problem: 'Experts spend time assembling context and recreating the same deliverable structure.', example: 'Claude Projects and Skills combine approved sources, house style and review steps for repeatable client work.', path: ['Approved sources', 'Project context', 'Claude skill', 'Reviewed deliverable'] },
      { title: 'Connected operations assistant', problem: 'Users can reason about work in Claude but must manually carry every action into business systems.', example: 'Permissioned connectors retrieve case data and propose updates that a user approves before execution.', path: ['User intent', 'MCP context', 'Approval gate', 'System action'] },
    ],
    provisions: ['Workspace and organisation configuration', 'Project, knowledge and skill design', 'API and MCP integration engineering', 'Evaluation, rollout, training and support'],
    safeguards: ['Least-privilege connectors', 'Approved source and instruction ownership', 'Evaluation against representative tasks', 'Human confirmation for external actions'],
  },
  {
    slug: 'chatgpt-implementation', number: '14', group: 'Build', title: 'ChatGPT Implementation', shortTitle: 'ChatGPT implementation',
    promise: 'A governed ChatGPT environment connected to useful work, not isolated experimentation.',
    summary: 'We deploy ChatGPT for teams and build OpenAI-powered applications that integrate with approved organisational knowledge and systems.',
    explanation: 'Implementation may use a managed workspace for human collaboration, the OpenAI API for embedded workflows, or both. We configure identity, retention, instructions, knowledge, tools, evaluations and support around defined roles.',
    technologies: ['ChatGPT Enterprise', 'OpenAI API', 'Structured outputs', 'Tool integration'],
    stages: [
      { label: 'Provision', detail: 'Configure workspace, users, identity and administrative controls.' },
      { label: 'Design', detail: 'Create role workflows, instructions and approved knowledge.' },
      { label: 'Integrate', detail: 'Connect APIs and tools using scoped permissions and schemas.' },
      { label: 'Measure', detail: 'Evaluate quality, adoption, risk events and workflow outcomes.' },
    ],
    useCases: [
      { title: 'Team productivity rollout', problem: 'Staff use personal accounts with inconsistent practice and no shared guidance.', example: 'A managed workspace launches with role playbooks, approved data rules, champions and task-level evaluations.', path: ['Managed identity', 'Role playbook', 'ChatGPT workflow', 'Adoption evidence'] },
      { title: 'Embedded document copilot', problem: 'An internal application needs drafting and extraction without sending users to a separate chat screen.', example: 'The API returns schema-validated proposals, source spans and confidence signals inside the existing workflow.', path: ['Application data', 'OpenAI API', 'Schema validation', 'User review'] },
    ],
    provisions: ['Workspace and rollout design', 'Custom instructions, knowledge and workflow patterns', 'API and system integration', 'Evaluation, training and adoption support'],
    safeguards: ['Managed identity and access', 'Approved data-use policy', 'Schema and output validation', 'Task-specific human review'],
  },
  {
    slug: 'perplexity-implementation', number: '15', group: 'Build', title: 'Perplexity Enterprise Implementation', shortTitle: 'Perplexity implementation',
    promise: 'Cited, current research workflows with clear source and verification discipline.',
    summary: 'We configure Perplexity for research-intensive teams, develop repeatable methods and integrate outputs into controlled decisions.',
    explanation: 'Perplexity combines web retrieval and model synthesis. A strong implementation defines source domains, research templates, verification steps, sensitive-data boundaries and the downstream workflow for accepting or challenging findings.',
    technologies: ['Enterprise research', 'Source controls', 'Spaces', 'Research workflows'],
    stages: [
      { label: 'Brief', detail: 'Structure the question, scope, date boundary and evidence standard.' },
      { label: 'Search', detail: 'Retrieve current sources using approved domain and access rules.' },
      { label: 'Verify', detail: 'Inspect citations, conflicts, dates and primary-source quality.' },
      { label: 'Use', detail: 'Transfer accepted findings into a decision or deliverable.' },
    ],
    useCases: [
      { title: 'Market monitoring', problem: 'Strategy teams repeat broad searches and struggle to preserve evidence behind weekly updates.', example: 'A research space tracks defined competitors and sources, then produces a cited change briefing for analyst review.', path: ['Research brief', 'Current sources', 'Citation review', 'Change briefing'] },
      { title: 'Regulatory research', problem: 'Specialists need a fast first pass across changing guidance without treating model synthesis as authority.', example: 'The workflow identifies relevant primary publications and records reviewer-confirmed conclusions separately.', path: ['Scoped question', 'Primary-source search', 'Expert verification', 'Research record'] },
    ],
    provisions: ['Enterprise configuration and governance', 'Research-template and source strategy', 'Role-based training and verification methods', 'Workflow integration and quality review'],
    safeguards: ['Primary sources preferred for material claims', 'Citation and publication-date checks', 'Sensitive prompts kept within approved routes', 'Expert acceptance separated from generated synthesis'],
  },
  {
    slug: 'grant-funded-ai-implementation', number: '16', group: 'Build', title: 'Grant-Funded AI Implementation', shortTitle: 'Grant-funded AI',
    promise: 'A credible innovation case linked to a deliverable technical programme.',
    summary: 'We help eligible organisations shape fundable AI projects and act as a technical delivery partner where the programme fits.',
    explanation: 'A strong funded project connects a genuine technical uncertainty to a market need, delivery method, measurable outcomes and capable consortium. We align the application narrative with the architecture, work packages, evidence plan and delivery responsibilities.',
    technologies: ['Technical work packages', 'Innovation evidence', 'Consortium design', 'Delivery assurance'],
    stages: [
      { label: 'Fit', detail: 'Test organisational, project and programme eligibility.' },
      { label: 'Frame', detail: 'Define the innovation, user need and technical uncertainty.' },
      { label: 'Plan', detail: 'Build work packages, evidence, risks and partner responsibilities.' },
      { label: 'Deliver', detail: 'Execute the technical programme and preserve claim evidence.' },
    ],
    useCases: [
      { title: 'Applied AI feasibility project', problem: 'A company has proprietary data and a promising idea but lacks a testable technical programme.', example: 'The concept is converted into hypotheses, data work, prototypes and evaluation gates with named owners.', path: ['Market need', 'Technical uncertainty', 'Evidence plan', 'Feasibility decision'] },
      { title: 'Collaborative innovation bid', problem: 'Several partners have complementary strengths but no coherent system architecture or delivery plan.', example: 'Shared interfaces, work packages and acceptance evidence turn separate contributions into one programme.', path: ['Partner assets', 'System design', 'Work packages', 'Integrated demonstrator'] },
    ],
    provisions: ['Programme fit and technical eligibility assessment', 'Innovation narrative and solution architecture', 'Work-package, risk and evidence design', 'Named technical delivery and reporting support'],
    safeguards: ['No guarantee of funding outcome', 'Claims tied to supportable evidence', 'Delivery scope aligned with application commitments', 'Clear intellectual-property and partner boundaries'],
  },
  {
    slug: 'ai-for-smes', number: '17', group: 'Enable', title: 'AI for SMEs', shortTitle: 'AI for SMEs',
    promise: 'Focused AI adoption that fits the reality of a growing business.',
    summary: 'We help small and medium-sized businesses improve priority work without importing unnecessary enterprise complexity.',
    explanation: 'SME adoption works best when leadership proximity, narrow scope and fast user feedback are treated as advantages. We identify one material constraint, configure the smallest dependable system and expand only after evidence shows value.',
    technologies: ['Lean discovery', 'Managed AI tools', 'Workflow automation', 'Practical governance'],
    stages: [
      { label: 'Focus', detail: 'Choose one constraint with visible operational or commercial value.' },
      { label: 'Fit', detail: 'Use existing systems and the lightest suitable technical route.' },
      { label: 'Release', detail: 'Launch with a small user group and representative work.' },
      { label: 'Expand', detail: 'Scale only after quality, adoption and value are visible.' },
    ],
    useCases: [
      { title: 'Back-office capacity', problem: 'A small operations team spends scarce time moving information between email, documents and systems.', example: 'A bounded automation prepares records and exceptions, allowing staff to focus on judgement and customer work.', path: ['Daily requests', 'Automated preparation', 'Staff review', 'Completed record'] },
      { title: 'Sales response quality', problem: 'Enquiries receive inconsistent or slow responses because commercial knowledge sits with a few people.', example: 'An approved knowledge assistant drafts context-aware responses and routes complex opportunities to a specialist.', path: ['New enquiry', 'Knowledge context', 'Draft and classify', 'Owner response'] },
    ],
    provisions: ['SME-focused opportunity diagnostic', 'Tool selection and practical governance', 'Automation or assistant implementation', 'Team training and improvement support'],
    safeguards: ['No unnecessary platform estate', 'Owner assigned before launch', 'Value measured in the target workflow', 'Support model sized to internal capacity'],
  },
  {
    slug: 'enterprise-ai', number: '18', group: 'Enable', title: 'Enterprise AI', shortTitle: 'Enterprise AI',
    promise: 'Coordinated AI adoption across systems, departments and control functions.',
    summary: 'We help larger organisations create shared architecture, governance and delivery patterns without losing local business ownership.',
    explanation: 'Enterprise adoption needs a federated model. Central teams provide standards, approved platforms, evaluation and assurance, while business units own outcomes and workflow change. Common interfaces and telemetry make the portfolio governable.',
    technologies: ['Reference architecture', 'Identity and access', 'Evaluation platforms', 'Federated governance'],
    stages: [
      { label: 'Standardise', detail: 'Define approved platforms, patterns, controls and evidence.' },
      { label: 'Federate', detail: 'Give business units clear ownership within shared guardrails.' },
      { label: 'Integrate', detail: 'Connect identity, data, systems and monitoring at scale.' },
      { label: 'Assure', detail: 'Review portfolio quality, risk, adoption and realised value.' },
    ],
    useCases: [
      { title: 'Multi-department assistant rollout', problem: 'Different teams need distinct knowledge and workflows but central functions require consistent controls.', example: 'A shared platform provides identity, logging and evaluation while each function owns approved sources and task patterns.', path: ['Central platform', 'Function context', 'Role workflow', 'Portfolio telemetry'] },
      { title: 'AI delivery factory', problem: 'Pilot demand exceeds the capacity of a central technical team and every project reinvents controls.', example: 'Reusable retrieval, evaluation, approval and monitoring components shorten safe delivery across use cases.', path: ['Use-case intake', 'Reference components', 'Controlled release', 'Shared assurance'] },
    ],
    provisions: ['Enterprise strategy and target operating model', 'Reference architecture and platform standards', 'Federated governance and delivery playbooks', 'Portfolio assurance, adoption and capability building'],
    safeguards: ['Separation of platform and outcome ownership', 'Reusable control and evaluation patterns', 'Identity and data boundaries enforced centrally', 'Portfolio-level incident and model-change management'],
  },
  {
    slug: 'ai-london', number: '19', group: 'Enable', title: 'AI Consultancy in London', shortTitle: 'London AI consultancy',
    promise: 'Senior, hands-on AI support for London teams and organisations across the UK.',
    summary: 'We combine in-person working sessions with focused remote delivery for leadership, operational and technical teams.',
    explanation: 'Complex AI work benefits from direct observation and rapid alignment. On-site sessions let us follow real workflows, inspect decision points and build shared understanding. Delivery then continues through short, documented cycles with regular working reviews.',
    technologies: ['On-site discovery', 'Technical workshops', 'Hybrid delivery', 'Executive facilitation'],
    stages: [
      { label: 'Observe', detail: 'Work alongside users and inspect the real operating environment.' },
      { label: 'Align', detail: 'Bring leadership, users and control functions around one problem.' },
      { label: 'Build', detail: 'Deliver remotely and on site through short working cycles.' },
      { label: 'Embed', detail: 'Train teams, resolve live issues and transfer ownership.' },
    ],
    useCases: [
      { title: 'Leadership alignment workshop', problem: 'Executives hold different assumptions about AI value, urgency and risk.', example: 'A facilitated session uses the organisation’s own workflows to agree priorities, principles and the next decision.', path: ['Leadership views', 'Shared evidence', 'Priority decision', 'Owned action'] },
      { title: 'On-site workflow discovery', problem: 'A process appears simple in documentation but depends on tacit knowledge and informal coordination.', example: 'Direct observation captures the exceptions, handoffs and system constraints needed for a dependable automation design.', path: ['Live work', 'Process evidence', 'System model', 'Release brief'] },
    ],
    provisions: ['On-site executive and team workshops', 'Workflow observation and technical discovery', 'Hybrid implementation and working reviews', 'In-person training and adoption support'],
    safeguards: ['Workshop outputs converted into decisions', 'Operational evidence captured with consent', 'Remote work documented between sessions', 'Named client ownership throughout delivery'],
  },
  {
    slug: 'chatgpt-training-for-teams', number: '20', group: 'Enable', title: 'AI Training for Teams', shortTitle: 'AI training',
    promise: 'Role-specific training that changes how real work is performed safely.',
    summary: 'We train leaders, general users, champions and technical teams using approved tools and representative organisational tasks.',
    explanation: 'Effective training combines conceptual understanding, task decomposition, context design, verification and policy. Participants practise on realistic work, compare weak and strong methods, and leave with repeatable workflows rather than prompt tricks.',
    technologies: ['Claude', 'ChatGPT', 'Perplexity', 'Role playbooks'],
    stages: [
      { label: 'Diagnose', detail: 'Identify roles, tasks, confidence, policy and learning needs.' },
      { label: 'Practise', detail: 'Work through realistic examples with approved data and tools.' },
      { label: 'Verify', detail: 'Apply source, quality and risk checks to each output.' },
      { label: 'Embed', detail: 'Create role playbooks, champions and routes for continuing support.' },
    ],
    useCases: [
      { title: 'Role-based team training', problem: 'Generic awareness sessions do not translate into better daily work.', example: 'Finance, operations and commercial teams each practise distinct tasks using shared governance and review principles.', path: ['Role tasks', 'Guided practice', 'Quality check', 'Team playbook'] },
      { title: 'Board and leadership briefing', problem: 'Leaders need enough technical and governance understanding to make accountable decisions.', example: 'A decision-focused session covers capability, failure modes, oversight and the questions to ask before approval.', path: ['Decision context', 'Capability model', 'Risk scenarios', 'Leadership checklist'] },
    ],
    provisions: ['Training-needs and workflow assessment', 'Bespoke workshops and practical exercises', 'Leadership, champion and technical pathways', 'Playbooks, follow-up clinics and adoption review'],
    safeguards: ['Approved or synthetic training data', 'Verification taught as part of every workflow', 'Policy explained through practical scenarios', 'Capability assessed through completed tasks'],
  },
];

export const serviceGroups = ['Advise', 'Build', 'Enable'] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
