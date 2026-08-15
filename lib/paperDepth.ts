export type BlueprintStep = { title: string; decision: string; actions: string; deliverable: string };
export type RiskRow = { risk: string; earlySignal: string; control: string; owner: string };
export type ScorecardRow = { outcome: string; definition: string; leading: string; decision: string };
export type BaselineRow = { area: string; currentState: string; evidence: string; targetState: string };

export type ArticleDepth = {
  playbook: BlueprintStep[];
  risks: RiskRow[];
  scorecard: ScorecardRow[];
};

export const articleDepth: Record<string, ArticleDepth> = {
  'ai-integration-gap': {
    playbook: [
      { title: 'Select the operating constraint', decision: 'Which delay, quality loss or capacity limit is material enough to change?', actions: 'Follow representative work, quantify volume and identify the accountable process owner.', deliverable: 'One bounded outcome statement with baseline evidence.' },
      { title: 'Define the decision system', decision: 'Where should rules, AI and human judgement each sit?', actions: 'Map inputs, policies, handoffs, exceptions, permissions and the consequence of error.', deliverable: 'A workflow and authority map that exposes every material decision.' },
      { title: 'Connect trusted context', decision: 'Which records are sufficient and permitted for the task?', actions: 'Name systems of record, validate fields, limit access and preserve source attribution.', deliverable: 'A governed context layer with explicit data ownership.' },
      { title: 'Release against evidence', decision: 'Has the system improved the operating result without unacceptable risk?', actions: 'Run representative evaluations, launch to bounded volume and review exceptions weekly.', deliverable: 'A release decision based on quality, adoption, cost and risk.' },
    ],
    risks: [
      { risk: 'Tool activity is mistaken for operational integration', earlySignal: 'Usage rises while cycle time and rework do not move', control: 'Report workflow outcomes beside adoption', owner: 'Operational sponsor' },
      { risk: 'Unclear records produce plausible but inconsistent outputs', earlySignal: 'Reviewers repeatedly correct the same context errors', control: 'Approved sources, field validation and traceability', owner: 'Data owner' },
      { risk: 'Exceptions fall between system and team', earlySignal: 'Low-confidence work remains unowned', control: 'Exception queue with service level and named role', owner: 'Process owner' },
      { risk: 'Integration cost expands without decision gates', earlySignal: 'More connectors are added before value is measured', control: 'Release scope and stop criteria', owner: 'Executive sponsor' },
    ],
    scorecard: [
      { outcome: 'Faster accountable flow', definition: 'Elapsed time from eligible input to accepted outcome', leading: 'Queue age and handoff wait', decision: 'Remove bottleneck or change scope' },
      { outcome: 'Higher first-time quality', definition: 'Share accepted without material correction', leading: 'Correction type by source', decision: 'Improve context, policy or evaluation' },
      { outcome: 'Lower coordination effort', definition: 'Minutes spent finding status and moving information', leading: 'Manual touches per item', decision: 'Automate or simplify the handoff' },
      { outcome: 'Controlled use', definition: 'Share processed within approved data and authority boundaries', leading: 'Policy exceptions', decision: 'Restrict, retrain or expand authority' },
    ],
  },
  'open-weight-price-war': {
    playbook: [
      { title: 'Price the complete task', decision: 'What is the cost per accepted business outcome?', actions: 'Combine inference, infrastructure, review, exceptions, monitoring and change effort.', deliverable: 'A total-cost model at realistic volume and quality.' },
      { title: 'Build a representative benchmark', decision: 'Which candidate performs best on actual work?', actions: 'Create normal, difficult and adversarial cases with an agreed scoring rubric.', deliverable: 'A reusable evaluation set and baseline result.' },
      { title: 'Protect model choice', decision: 'Which application boundaries reduce switching cost?', actions: 'Separate prompts, retrieval, rules, schemas and evaluations from provider-specific code.', deliverable: 'A portable adapter and release test harness.' },
      { title: 'Choose control deliberately', decision: 'Does self-hosting or open weight deployment solve a material constraint?', actions: 'Assess data location, licensing, operations, latency, resilience and scarce skills.', deliverable: 'A documented sourcing decision with exit conditions.' },
    ],
    risks: [
      { risk: 'Low token price hides high review demand', earlySignal: 'Unit inference falls while cost per accepted task rises', control: 'End-to-end task economics', owner: 'Product owner' },
      { risk: 'Benchmark scores do not reflect operating work', earlySignal: 'Production corrections differ from test failures', control: 'Continuously refresh representative cases', owner: 'Evaluation lead' },
      { risk: 'Provider features create silent lock-in', earlySignal: 'Business rules accumulate inside proprietary interfaces', control: 'Stable application boundary and exportable evidence', owner: 'Technical owner' },
      { risk: 'Self-hosting obligations exceed available capability', earlySignal: 'Patching, monitoring or capacity work is deferred', control: 'Named service ownership and minimum operational standard', owner: 'Technology lead' },
    ],
    scorecard: [
      { outcome: 'Accepted-task economics', definition: 'Total monthly cost divided by accepted completed tasks', leading: 'Review minutes and retry rate', decision: 'Change model, workflow or scope' },
      { outcome: 'Quality at consequence', definition: 'Performance separated by error severity', leading: 'High-risk failure count', decision: 'Hold or narrow release' },
      { outcome: 'Portability', definition: 'Time and effort to rerun the service with a second model', leading: 'Provider-specific dependencies', decision: 'Refactor or accept lock-in explicitly' },
      { outcome: 'Operational reliability', definition: 'Successful completion within service expectation', leading: 'Latency, timeout and degradation events', decision: 'Change capacity or fallback design' },
    ],
  },
  'automation-before-agents': {
    playbook: [
      { title: 'Observe real work', decision: 'What actually happens between request and completion?', actions: 'Trace normal cases, incomplete inputs, policy conflicts, rework and informal escalation.', deliverable: 'A state, decision and exception map grounded in evidence.' },
      { title: 'Simplify before automating', decision: 'Which steps can be removed, standardised or validated?', actions: 'Clarify ownership, reduce duplicate fields and establish a controlled system of record.', deliverable: 'A cleaner workflow with deterministic foundations.' },
      { title: 'Bound AI authority', decision: 'Should the system draft, recommend or act?', actions: 'Classify consequences, define evidence thresholds and route approvals by risk.', deliverable: 'An authority matrix tied to tools and permissions.' },
      { title: 'Earn greater autonomy', decision: 'Does live evidence justify more independent action?', actions: 'Review evaluation results, overrides, incidents and exception recovery at release gates.', deliverable: 'An explicit expand, hold, restrict or stop decision.' },
    ],
    risks: [
      { risk: 'The agent automates process ambiguity', earlySignal: 'Plans vary because inputs and policies are unclear', control: 'Workflow redesign and required evidence', owner: 'Process owner' },
      { risk: 'Tool access exceeds task need', earlySignal: 'The agent can change records unrelated to its purpose', control: 'Least privilege and allow-listed actions', owner: 'Security owner' },
      { risk: 'Smooth demonstrations conceal exception failure', earlySignal: 'Manual rescue rises under real volume', control: 'Edge-case evaluation and rollback path', owner: 'Service owner' },
      { risk: 'Human approval becomes a superficial click', earlySignal: 'Review time falls below what consequence requires', control: 'Evidence-focused review interface and sampling', owner: 'Control owner' },
    ],
    scorecard: [
      { outcome: 'Safe task completion', definition: 'Eligible tasks completed correctly within approved authority', leading: 'Policy and tool-use exceptions', decision: 'Expand or reduce authority' },
      { outcome: 'Useful human review', definition: 'Corrections and material challenges per review', leading: 'Review time by risk level', decision: 'Improve evidence or approval design' },
      { outcome: 'Exception recovery', definition: 'Exceptions resolved without data loss or uncontrolled action', leading: 'Open exception age', decision: 'Change escalation and fallback' },
      { outcome: 'Net effort released', definition: 'Gross time avoided less review, rescue and maintenance', leading: 'Manual rescue minutes', decision: 'Simplify or stop automation' },
    ],
  },
  'cold-chain-collaboration': {
    playbook: [
      { title: 'Establish the physical truth', decision: 'Can readings be trusted for the intended operational decision?', actions: 'Document sensors, calibration, placement, connectivity, gateways and known blind spots.', deliverable: 'A current asset and data-path record.' },
      { title: 'Define an exception case', decision: 'Which combination of reading, duration and context requires attention?', actions: 'Version thresholds, group related signals and show missing evidence explicitly.', deliverable: 'A transparent exception policy and case schema.' },
      { title: 'Connect action to evidence', decision: 'Who must assess, act, escalate and close?', actions: 'Assign response roles, service expectations, corrective actions and closure requirements.', deliverable: 'An accountable response and escalation workflow.' },
      { title: 'Improve from recurrence', decision: 'Which repeat events indicate a systemic issue?', actions: 'Review causes, response quality, equipment history and policy performance.', deliverable: 'A prioritised maintenance and control-improvement backlog.' },
    ],
    risks: [
      { risk: 'Invalid telemetry is treated as a product event', earlySignal: 'Implausible jumps or missing heartbeats create alerts', control: 'Signal validation before severity classification', owner: 'Engineering owner' },
      { risk: 'High alert volume creates desensitisation', earlySignal: 'Acknowledgement rises while corrective action slows', control: 'Contextual grouping and precision review', owner: 'Operations lead' },
      { risk: 'Monitoring introduces a route into equipment control', earlySignal: 'Analytics services gain unnecessary write access', control: 'Architectural separation and least privilege', owner: 'Security owner' },
      { risk: 'Closure records lack corrective evidence', earlySignal: 'Cases close with notes but no verified recovery', control: 'Mandatory closure fields and sampling', owner: 'Quality owner' },
    ],
    scorecard: [
      { outcome: 'Trustworthy signal coverage', definition: 'Expected readings received and validated by asset', leading: 'Heartbeat and calibration exceptions', decision: 'Repair instrumentation before automation' },
      { outcome: 'Precise exception detection', definition: 'Material cases as a share of alerts reviewed', leading: 'Repeat false-alert pattern', decision: 'Adjust context or policy' },
      { outcome: 'Timely accountable response', definition: 'Time from qualifying event to owned action', leading: 'Unassigned case age', decision: 'Change routing or staffing' },
      { outcome: 'Complete evidence record', definition: 'Closed cases containing decision, action and recovery proof', leading: 'Missing closure fields', decision: 'Retrain or tighten closure gate' },
    ],
  },
  'small-teams-ai-advantage': {
    playbook: [
      { title: 'Concentrate leadership attention', decision: 'Which single workflow deserves protected focus?', actions: 'Rank opportunities by value, frequency, feasibility, data readiness and consequence.', deliverable: 'A selected use case and explicit not-now list.' },
      { title: 'Form the decision cell', decision: 'Who holds process knowledge, authority and delivery responsibility?', actions: 'Bring the sponsor, user, data owner and builder into one short feedback loop.', deliverable: 'A named working group with decision rights.' },
      { title: 'Deliver in a small batch', decision: 'What is the smallest release that can produce credible evidence?', actions: 'Limit users and variation while keeping the whole outcome measurable.', deliverable: 'A bounded live release with baseline and controls.' },
      { title: 'Compound the capability', decision: 'Which assets should be reused in the next workflow?', actions: 'Capture evaluation cases, policies, components, training and adoption learning.', deliverable: 'A reusable AI delivery playbook and platform backlog.' },
    ],
    risks: [
      { risk: 'Too many experiments dilute scarce expertise', earlySignal: 'Projects start but few reach live evidence', control: 'Portfolio limit and exit gates', owner: 'Leadership team' },
      { risk: 'Informal knowledge remains undocumented', earlySignal: 'System decisions depend on one person being present', control: 'Decision and exception capture during discovery', owner: 'Process expert' },
      { risk: 'Speed bypasses data and risk ownership', earlySignal: 'No one can approve access or acceptance criteria', control: 'Named owners before build', owner: 'Executive sponsor' },
      { risk: 'Pilot success cannot be repeated', earlySignal: 'The next use case recreates controls and evaluation', control: 'Reusable standards and components', owner: 'Technology owner' },
    ],
    scorecard: [
      { outcome: 'Time to operating evidence', definition: 'Days from use-case selection to representative live result', leading: 'Decision wait and blocked days', decision: 'Remove dependency or narrow scope' },
      { outcome: 'Learning density', definition: 'Material decisions resolved per delivery cycle', leading: 'Experiment and user-feedback cadence', decision: 'Increase focus or evidence quality' },
      { outcome: 'Reusable capability', definition: 'Share of controls, data patterns and components reused', leading: 'New bespoke dependencies', decision: 'Standardise or accept exception' },
      { outcome: 'Workforce leverage', definition: 'Capacity or quality improvement inside core work', leading: 'Eligible work using the release', decision: 'Improve adoption or target another constraint' },
    ],
  },
  'measure-automation-value': {
    playbook: [
      { title: 'Build the counterfactual', decision: 'What would performance look like without the change?', actions: 'Select a representative period and record volume, effort, delay, quality, service and risk.', deliverable: 'A baseline with known uncertainty and data limitations.' },
      { title: 'Write the causal chain', decision: 'How should the intervention create each benefit?', actions: 'Separate capacity, cost, revenue, quality, service and risk mechanisms.', deliverable: 'A benefit hypothesis with owner and disconfirming evidence.' },
      { title: 'Observe full operating cost', decision: 'What effort and cost does the new process add?', actions: 'Measure review, exceptions, workarounds, support, suppliers and change effort.', deliverable: 'A net operating view rather than gross time saving.' },
      { title: 'Govern realisation', decision: 'Should the business expand, adjust or stop investment?', actions: 'Review evidence, confidence, adoption and conversion of released capacity at a fixed cadence.', deliverable: 'A benefits ledger and explicit management decision.' },
    ],
    risks: [
      { risk: 'The baseline is unusually weak or strong', earlySignal: 'Results change materially with the comparison window', control: 'Representative period and sensitivity analysis', owner: 'Benefits owner' },
      { risk: 'Capacity is presented as cash', earlySignal: 'Savings have no budget, role or revenue consequence', control: 'Benefit-type classification', owner: 'Finance owner' },
      { risk: 'Exception effort is excluded', earlySignal: 'Routine time falls while specialist workload rises', control: 'End-to-end effort observation', owner: 'Process owner' },
      { risk: 'Adoption is averaged across eligible work', earlySignal: 'Headline use hides teams working around the system', control: 'Cohort and eligible-volume reporting', owner: 'Adoption owner' },
    ],
    scorecard: [
      { outcome: 'Net capacity released', definition: 'Gross task time avoided less review, exception and support effort', leading: 'Review and rescue minutes', decision: 'Redesign or narrow use' },
      { outcome: 'Realised financial value', definition: 'Verified cost removed, avoided or revenue contribution', leading: 'Redeployment plan completion', decision: 'Change ownership or benefit claim' },
      { outcome: 'Sustained service quality', definition: 'Quality and service maintained or improved after adoption', leading: 'Defect and complaint trend', decision: 'Hold expansion or fix failure mode' },
      { outcome: 'Evidence confidence', definition: 'Strength of attribution, data and repeatability behind the claim', leading: 'Missing measures and confounders', decision: 'Collect more evidence before claiming value' },
    ],
  },
};

export type CaseDepth = {
  baseline: BaselineRow[];
  workPackages: BlueprintStep[];
  risks: RiskRow[];
  acceptance: ScorecardRow[];
};

export const caseDepth: Record<string, CaseDepth> = {
  'yacht-operations': {
    baseline: [
      { area: 'Customer record', currentState: 'Context spread across inboxes, documents and personal knowledge', evidence: 'Trace a sample from enquiry through follow-up', targetState: 'One current record with source and ownership' },
      { area: 'Workflow state', currentState: 'Progress inferred from messages and individual memory', evidence: 'Compare staff descriptions of the same live work', targetState: 'Explicit state, next action, owner and due point' },
      { area: 'Client communication', currentState: 'Updates assembled from more than one source', evidence: 'Count systems and minutes needed for a complete update', targetState: 'Approved context available beside the customer journey' },
      { area: 'Management visibility', currentState: 'Status reconstructed for review', evidence: 'Observe weekly reporting and reconciliation effort', targetState: 'Operational reporting generated from the working record' },
    ],
    workPackages: [
      { title: 'Journey and data model', decision: 'What must the system know at each stage?', actions: 'Define entities, states, required fields, sources and retention.', deliverable: 'Approved operating and data model.' },
      { title: 'Shared operations workspace', decision: 'What should each role see and change?', actions: 'Build customer, project, action and exception views with role permissions.', deliverable: 'Working first release for representative journeys.' },
      { title: 'Controlled automation', decision: 'Which routine movements are stable enough to automate?', actions: 'Add reminders, field movement and drafts with visible rules and approvals.', deliverable: 'Versioned automations and exception routes.' },
      { title: 'Adoption and value', decision: 'Has the release reduced coordination without weakening service?', actions: 'Train users, observe work, measure baselines and review feedback.', deliverable: 'Adoption evidence and prioritised second release.' },
    ],
    risks: [
      { risk: 'Generic CRM logic distorts a specialist customer journey', earlySignal: 'Staff keep parallel notes to preserve context', control: 'Design around observed journeys and exceptions', owner: 'Commercial owner' },
      { risk: 'Automation sends incomplete client communication', earlySignal: 'Drafts omit commitments or current operating context', control: 'Approved facts and human release', owner: 'Client owner' },
      { risk: 'Historical records create inconsistent migration', earlySignal: 'Duplicate customers and uncertain project states', control: 'Migration rules, exception queue and source record', owner: 'Data owner' },
      { risk: 'The shared view is not maintained', earlySignal: 'Overdue fields and work moves back to inboxes', control: 'Workflow ownership and daily-use interface', owner: 'Operations lead' },
    ],
    acceptance: [
      { outcome: 'Current customer context', definition: 'Sampled journeys contain agreed minimum information', leading: 'Missing required fields', decision: 'Adjust migration, interface or process' },
      { outcome: 'Visible ownership', definition: 'Every active item has one next action, owner and due point', leading: 'Unowned or overdue actions', decision: 'Change role or workflow state' },
      { outcome: 'Lower status effort', definition: 'Time required to produce an accurate operating view', leading: 'Systems consulted per review', decision: 'Connect source or simplify report' },
      { outcome: 'Protected personal service', definition: 'Client communications remain accurate and appropriately individual', leading: 'Material corrections before send', decision: 'Restrict or improve drafting support' },
    ],
  },
  'cold-chain': {
    baseline: [
      { area: 'Signal availability', currentState: 'Readings may be delayed, absent or difficult to associate with asset condition', evidence: 'Reconcile expected readings, heartbeats and calibration history', targetState: 'Known coverage and visible data-quality exceptions' },
      { area: 'Exception classification', currentState: 'Thresholds can create alerts without duration or operating context', evidence: 'Review historic alerts against material operational cases', targetState: 'Contextual, versioned exception policy' },
      { area: 'Response ownership', currentState: 'Escalation may depend on informal coordination', evidence: 'Trace alert to acknowledgement, action and closure', targetState: 'Named owner, severity route and service expectation' },
      { area: 'Evidence record', currentState: 'Readings, notes and corrective actions may sit separately', evidence: 'Sample closed incidents for complete audit evidence', targetState: 'One durable case from signal through recovery' },
    ],
    workPackages: [
      { title: 'Asset and telemetry discovery', decision: 'Is the available signal fit for operational triage?', actions: 'Document assets, sensors, calibration, network path and blind spots.', deliverable: 'Current architecture, gap log and data-quality baseline.' },
      { title: 'Exception policy', decision: 'What constitutes a material case?', actions: 'Define thresholds, duration, context, missing-data treatment and severity.', deliverable: 'Versioned policy with representative test cases.' },
      { title: 'Operations case workflow', decision: 'How does evidence reach accountable action?', actions: 'Build triage, escalation, corrective action and closure interfaces.', deliverable: 'Traceable exception service with role controls.' },
      { title: 'Parallel pilot', decision: 'Does the system improve focus without missing material events?', actions: 'Run beside the current process, compare cases and review weekly.', deliverable: 'Precision, response and effort evidence for release.' },
    ],
    risks: [
      { risk: 'Monitoring output is trusted beyond sensor capability', earlySignal: 'Users stop checking known blind spots', control: 'Coverage statement and missing-data visibility', owner: 'Engineering lead' },
      { risk: 'Threshold changes are not governed', earlySignal: 'Alert behavior changes without an approved reason', control: 'Version control and approval history', owner: 'Quality owner' },
      { risk: 'Analytics weakens OT separation', earlySignal: 'New services request write access to equipment', control: 'Read-only integration and reviewed trust boundaries', owner: 'Security owner' },
      { risk: 'Pilot evidence is biased toward routine periods', earlySignal: 'No representative exception is observed', control: 'Historic replay and scenario testing', owner: 'Pilot owner' },
    ],
    acceptance: [
      { outcome: 'Signal integrity', definition: 'Expected readings validated with visible quality state', leading: 'Missing, delayed and implausible readings', decision: 'Repair data path before reliance' },
      { outcome: 'Alert precision', definition: 'Reviewed alerts representing actionable cases', leading: 'False-alert pattern by asset', decision: 'Change context or threshold' },
      { outcome: 'Accountable response', definition: 'Material case assigned and acted on within severity target', leading: 'Unassigned case age', decision: 'Change routing or coverage' },
      { outcome: 'Complete closure', definition: 'Cases closed with decision, action and recovery evidence', leading: 'Incomplete closure fields', decision: 'Strengthen gate or training' },
    ],
  },
  'property-pipeline': {
    baseline: [
      { area: 'Transaction state', currentState: 'Progress inferred from activity across email and files', evidence: 'Compare stated stage with required evidence', targetState: 'Evidence-backed stage and visible exception' },
      { area: 'Document control', currentState: 'Documents located and interpreted repeatedly', evidence: 'Trace source, version and use of key documents', targetState: 'Indexed evidence with source attribution' },
      { area: 'Deadline risk', currentState: 'Missing inputs surface near the due point', evidence: 'Review late transactions and earliest detectable signal', targetState: 'Proactive exception and accountable action' },
      { area: 'Pipeline reporting', currentState: 'Management view prepared separately from daily work', evidence: 'Observe reporting preparation and reconciliation', targetState: 'One record serving operations and review' },
    ],
    workPackages: [
      { title: 'Transaction control model', decision: 'What must be true before each stage advances?', actions: 'Define stages, evidence, roles, deadlines and escalation conditions.', deliverable: 'Approved stage-gate and exception model.' },
      { title: 'Evidence workspace', decision: 'How should people find and verify the current record?', actions: 'Build pipeline, document index, action queue and source links.', deliverable: 'Working transaction workspace.' },
      { title: 'Assisted extraction', decision: 'Which fields can be proposed safely from incoming evidence?', actions: 'Create extraction schema, confidence behavior and human confirmation.', deliverable: 'Evaluated proposal workflow with audit history.' },
      { title: 'Single-type release', decision: 'Does the model work before broader transaction variation?', actions: 'Launch one transaction type, observe exceptions and refine.', deliverable: 'Acceptance evidence and controlled expansion plan.' },
    ],
    risks: [
      { risk: 'Activity is mistaken for progress', earlySignal: 'Busy transactions advance without required evidence', control: 'Evidence-backed stage gates', owner: 'Transaction owner' },
      { risk: 'Extracted data loses source context', earlySignal: 'Reviewers cannot find the supporting document passage', control: 'Source link and confirmation state', owner: 'Data owner' },
      { risk: 'Sensitive access is broader than transaction need', earlySignal: 'Users can view unrelated documents or parties', control: 'Role and transaction-based access', owner: 'Information owner' },
      { risk: 'Variation overwhelms the first release', earlySignal: 'Exception volume prevents stable learning', control: 'One transaction type and explicit exclusions', owner: 'Product owner' },
    ],
    acceptance: [
      { outcome: 'Evidence-backed stage', definition: 'Active transactions meet stage-specific minimum evidence', leading: 'Missing evidence by stage', decision: 'Hold progression or change requirement' },
      { outcome: 'Earlier risk visibility', definition: 'Material dependency identified before deadline impact', leading: 'Exception age and due-date proximity', decision: 'Escalate or change routing' },
      { outcome: 'Lower reporting effort', definition: 'Time to produce a trusted pipeline review', leading: 'Manual reconciliations', decision: 'Fix record or report definition' },
      { outcome: 'Extraction quality', definition: 'Proposed fields accepted without material correction', leading: 'Correction pattern by document type', decision: 'Improve, restrict or remove extraction' },
    ],
  },
  'professional-services-intake': {
    baseline: [
      { area: 'Factual completeness', currentState: 'Initial enquiries vary by channel and referrer', evidence: 'Sample information available at first professional review', targetState: 'Minimum facts collected before routing' },
      { area: 'Control execution', currentState: 'Checks may be reconstructed across tools', evidence: 'Trace identity, conflict, eligibility and approval evidence', targetState: 'Deterministic gates with durable results' },
      { area: 'Professional attention', currentState: 'Senior time spent reconstructing and reformatting facts', evidence: 'Measure preparation and clarification effort', targetState: 'Original evidence and structured brief in one review' },
      { area: 'Data boundary', currentState: 'Sensitive content may enter tools without a common rule', evidence: 'Inventory channels, model services and access', targetState: 'Approved processing route by information category' },
    ],
    workPackages: [
      { title: 'Intake and control taxonomy', decision: 'Which facts and mandatory gates precede professional judgement?', actions: 'Define fields, matter types, identity, conflict, eligibility and stops.', deliverable: 'Approved intake and decision policy.' },
      { title: 'Secure matter-candidate flow', decision: 'How is evidence captured and routed with least privilege?', actions: 'Build intake, document handling, rules and reviewer workspace.', deliverable: 'Traceable end-to-end intake release.' },
      { title: 'Bounded AI summary', decision: 'Can approved fields reduce review preparation safely?', actions: 'Evaluate omission, distortion, sensitive data and source fidelity.', deliverable: 'Drafting service with source context and no acceptance authority.' },
      { title: 'Assurance and adoption', decision: 'Does the release improve triage while preserving professional control?', actions: 'Pilot representative enquiries, sample decisions and train reviewers.', deliverable: 'Acceptance evidence, operating guide and risk review.' },
    ],
    risks: [
      { risk: 'Generated summaries omit a decisive fact', earlySignal: 'Reviewers find material facts only in original evidence', control: 'Source-visible review and omission tests', owner: 'Professional owner' },
      { risk: 'Mandatory controls are treated as model judgement', earlySignal: 'Similar facts produce different stop results', control: 'Deterministic gates outside the model', owner: 'Risk owner' },
      { risk: 'Sensitive data reaches an unapproved service', earlySignal: 'Prompt logs contain excluded categories', control: 'Data classification and routing policy', owner: 'Privacy owner' },
      { risk: 'Faster intake shifts delay to acceptance', earlySignal: 'Prepared matters queue without reviewer capacity', control: 'End-to-end service measure and workload routing', owner: 'Service lead' },
    ],
    acceptance: [
      { outcome: 'Complete first review', definition: 'Eligible matters reach review with required facts and evidence', leading: 'Clarification request rate', decision: 'Change form, taxonomy or guidance' },
      { outcome: 'Control integrity', definition: 'Mandatory results are correct, attributable and reproducible', leading: 'Control exception count', decision: 'Stop release and correct policy' },
      { outcome: 'Preparation effort', definition: 'Professional time before substantive assessment', leading: 'Reformatting and search minutes', decision: 'Improve workspace or data capture' },
      { outcome: 'Summary fidelity', definition: 'Draft accepted without material omission or distortion', leading: 'Correction category', decision: 'Restrict use or improve evaluation' },
    ],
  },
  'field-service-planning': {
    baseline: [
      { area: 'Work-order quality', currentState: 'Duration, priority, location and parts data vary', evidence: 'Profile missing and inconsistent fields by job type', targetState: 'Validated schedulable work order' },
      { area: 'Constraint visibility', currentState: 'Rules and planner knowledge live across spreadsheets and experience', evidence: 'Observe assignment decisions and rejected options', targetState: 'Explicit hard constraints and scored preferences' },
      { area: 'Plan stability', currentState: 'Changes can ripple across the day without clear impact', evidence: 'Measure reassignment and customer disruption', targetState: 'Minimum-change response with visible trade-offs' },
      { area: 'Learning evidence', currentState: 'Actuals and overrides are not consistently coded', evidence: 'Compare planned and actual work with reasons', targetState: 'Weekly evidence loop for assumptions and policy' },
    ],
    workPackages: [
      { title: 'Data and constraint diagnostic', decision: 'Is available work and resource data schedulable?', actions: 'Profile jobs, skills, parts, locations, durations and rule sources.', deliverable: 'Data readiness and constraint catalogue.' },
      { title: 'Feasible-option engine', decision: 'Which assignments satisfy every hard rule?', actions: 'Encode constraints, validate inputs and explain infeasibility.', deliverable: 'Tested feasible plan generator.' },
      { title: 'Balanced planning score', decision: 'How should feasible plans trade service, travel, priority and stability?', actions: 'Agree weights, show trade-offs and preserve dispatcher authority.', deliverable: 'Explainable recommendation workspace.' },
      { title: 'Shadow and controlled release', decision: 'Does recommendation evidence outperform current planning safely?', actions: 'Run beside live planning, record overrides and review actuals.', deliverable: 'Release decision and calibrated improvement backlog.' },
    ],
    risks: [
      { risk: 'Bad duration data creates apparently feasible plans', earlySignal: 'Jobs repeatedly overrun by category', control: 'Data confidence and buffered assumption', owner: 'Operations analyst' },
      { risk: 'Optimisation hides an unacceptable trade-off', earlySignal: 'Travel improves while service or stability declines', control: 'Balanced scorecard and visible weights', owner: 'Service owner' },
      { risk: 'Frequent replanning disrupts customers and staff', earlySignal: 'In-day movement exceeds agreed threshold', control: 'Minimum-change policy and commitment lock', owner: 'Dispatch lead' },
      { risk: 'Planner overrides disappear from learning', earlySignal: 'System repeats rejected recommendations', control: 'Required reason code and weekly review', owner: 'Planning owner' },
    ],
    acceptance: [
      { outcome: 'Feasible assignments', definition: 'Published jobs satisfy skill, availability, safety and parts rules', leading: 'Failed assignment checks', decision: 'Correct data or constraint' },
      { outcome: 'Balanced plan performance', definition: 'Service, travel, overtime and stability within agreed bounds', leading: 'Trade-off movement by measure', decision: 'Change weight or business policy' },
      { outcome: 'Explainable recommendation', definition: 'Dispatcher can identify the reason and alternative for each move', leading: 'Unexplained rejection rate', decision: 'Improve rationale or interface' },
      { outcome: 'Improving assumptions', definition: 'Planned duration and travel error reduce by category', leading: 'Override and actual capture', decision: 'Recalibrate or exclude weak data' },
    ],
  },
};

