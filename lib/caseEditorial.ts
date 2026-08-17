import type { ReportSection } from '@/lib/reportNarrative';

export type CaseExhibitPlacement = { kind: 'evidence' | 'process' | 'system'; afterParagraph: number };
export type CaseEditorialParagraph = { text: string; sources?: number[] };
export type CaseEditorialSection = Omit<ReportSection<CaseExhibitPlacement>, 'paragraphs'> & {
  paragraphs: CaseEditorialParagraph[];
};
export type CaseEditorial = {
  statusStatement: string;
  thesis: string;
  sceneLabel: string;
  openingTitle: string;
  openingParagraphs: string[];
  centralQuestion: string;
  evidenceTitle: string;
  processTitle: string;
  systemTitle: string;
  evidenceInterpretation: { establishes: string; doesNotEstablish: string; management: string };
  sections: CaseEditorialSection[];
};

export const caseEditorial: Record<string, CaseEditorial> = {
  'yacht-operations': {
    statusStatement: 'This engagement is in progress. Discovery and architecture work are complete; the first operating release and its outcomes have not yet been evaluated.',
    thesis: 'The first useful release is not a larger customer database. It is a trusted operating record that lets the team answer one customer enquiry, assign the next action and preserve human control of the relationship.',
    sceneLabel: 'Representative item of work from an engagement in progress',
    openingTitle: 'One customer asks for an update, and the operating system has to reconstruct the answer',
    openingParagraphs: [
      'A customer enquiry has moved from an initial email into a confirmed project. When the customer later asks for an update, the commercial promise sits in one message, delivery detail in a document and the latest change in a colleague’s memory. The team can answer, but only after rebuilding the history of one item of work.',
      'That enquiry provides the engagement test. Any proposed system must make the current position and next accountable action visible without flattening a specialist customer journey into a generic sales sequence.',
    ],
    centralQuestion: 'Can one shared record reduce reconstruction and unowned work while preserving the judgement and personal attention on which the service depends?',
    evidenceTitle: 'Discovery priority by operating need',
    processTitle: 'Enquiry to accountable next action',
    systemTitle: 'Event-led customer record',
    evidenceInterpretation: {
      establishes: 'The completed discovery synthesis ranked shared context and next-action ownership ahead of automated drafting as design priorities.',
      doesNotEstablish: 'The normalised scores do not measure time saved, adoption, service quality or a completed client outcome.',
      management: 'The first release should spend its limited change capacity on record trust and ownership before introducing broader assistance.',
    },
    sections: [
      {
        heading: 'Customer update reconstruction',
        purpose: 'Current workflow, baseline and engagement question',
        paragraphs: [
          { text: 'The enquiry reaches the right people, yet every status request creates a small investigation. The team checks messages for commitments, documents for operational detail and colleagues for changes that have not reached either source. No single failure is dramatic. Repetition is the problem: each handoff increases the chance that an action is late, duplicated or understood differently.' },
          { text: 'External research on smaller firms suggests that technology creates more credible value when it strengthens core work, but it does not show that a particular workflow will improve. Here, the baseline must be local: systems consulted per review, missing required fields, overdue next actions and time needed to produce an accurate update.', sources: [0] },
          { text: 'The central question is narrower than a digital-transformation brief. The engagement must determine whether the representative enquiry can move through one dependable record without replacing accountable judgement. To answer it, discovery had to follow the item rather than catalogue the available tools.' },
        ],
      },
      {
        heading: 'Context, state and ownership',
        transition: 'The reconstruction problem is visible in one enquiry; discovery now follows that item to identify which missing operating facts create it.',
        purpose: 'Discovery findings and revised problem definition',
        paragraphs: [
          { text: 'Following the enquiry first showed that customer identity was not the only missing link. The team also needed the current project state. Adding that state exposed a second gap: a status without one next action and one owner still left coordination to memory. Finally, tracing the next action revealed that management visibility had to come from the same record used in daily work.' },
          { text: 'The discovery workshops therefore ranked shared customer context as critical, next-action ownership and management visibility as high priorities, and automated drafting as a later concern. The graphic below reports normalised workshop priorities. Its values are measured outputs of the discovery synthesis, but they are ordinal design judgements rather than performance measures.' },
          { text: 'The graphic establishes the order in which the design should remove uncertainty. It does not establish that the proposed system will save time or improve service. That distinction changed the assumption: the first investment should not be an assistant that writes faster, but an operating record that makes an accurate draft possible.' },
        ],
        exhibits: [{ kind: 'evidence', afterParagraph: 1 }],
      },
      {
        heading: 'Event-led operating record',
        transition: 'Discovery ranks context and ownership ahead of drafting, so the target design must organise the record around the next decision.',
        purpose: 'Target workflow, architecture and rejected alternatives',
        paragraphs: [
          { text: 'Once the team stopped asking which tool should hold the contact, the design could follow the decisions attached to the enquiry. A change is captured, the shared record is updated, policy identifies the next permitted action, a role receives ownership and the decision enters an audit history. The process graphic shows a target operating sequence, not evidence of benefit.' },
          { text: 'The sequence establishes and connects the record before automating it. A broad CRM rollout was rejected because it would add fields and migration effort before proving which decisions matter. Immediate autonomous drafting was rejected because a polished message assembled from incomplete context would increase relationship risk.' },
          { text: 'The system graphic translates the same decision architecture into enquiry channels, customer record, workflow policy, team workspace and management view. It is an illustrative implementation pattern for the agreed architecture. It does not prescribe a final vendor or claim that every source is already connected.' },
          { text: 'Together, the graphics show why process and architecture cannot be separated. The workflow defines what the record must prove; the architecture makes each action, owner and customer-facing release traceable. External evidence that AI value depends on organisational capabilities reinforces the need for workflow clarity and feedback, while leaving the local hypothesis to be tested.', sources: [2] },
        ],
        exhibits: [{ kind: 'process', afterParagraph: 0 }, { kind: 'system', afterParagraph: 2 }],
      },
      {
        heading: 'Trust-first release scope',
        transition: 'The event-led design defines the target state; the next issue is how little of it must ship to test trust safely.',
        purpose: 'Controls, acceptance criteria and pilot trade-offs',
        paragraphs: [
          { text: 'The first release follows the representative enquiry only as far as a shared customer and project view, an explicit state, and one owned next action. Client-facing decisions retain human approval. This boundary sacrifices some immediate automation in exchange for a cleaner test of whether staff will maintain and rely on the record.' },
          { text: 'Acceptance is defined through observable conditions. Sampled journeys must contain the agreed minimum context; every active item must have an owner and due point; an accurate status review should require fewer reconciliations; and client communications must not show a material increase in correction. These are acceptance criteria and proposed baseline measures, not achieved results.' },
          { text: 'Weak migration could produce false confidence, optional maintenance could push work back into inboxes, and generic drafting could dilute the service. Source reconciliation, required workflow ownership and release approval address those risks, but cannot substitute for live adoption evidence. The pilot must observe use in the work itself.' },
        ],
      },
      {
        heading: 'Second-release decision',
        role: 'conclusion',
        transition: 'The bounded first release creates measurable adoption evidence, which must determine whether broader automation is justified.',
        purpose: 'Current evidence, unresolved question and release threshold',
        paragraphs: [
          { text: 'At the current evidence position, the team can describe the target record, state model, ownership and release boundary. Discovery and architecture are completed work. A reduction in coordination time, overdue actions or customer-response effort has not yet been measured, so none is claimed.' },
          { text: 'The unresolved question returns to the customer who asked for an update: when the first release is live, will a colleague choose the shared record, find a current answer and trust the stated next action without conducting the old search? Four weeks of use should show missing-field patterns, systems consulted, overdue work and material corrections.' },
          { text: 'If the record is maintained and reduces reconstruction without weakening personal service, the next release can consider connected documents, reporting and bounded drafting. If trust remains low, ownership, migration or interface design should be repaired before automation is added.' },
        ],
      },
    ],
  },

  'cold-chain': {
    statusStatement: 'This is an illustrative service design. It is not a completed client engagement, and every service level, weight and expected benefit remains a hypothesis for testing.',
    thesis: 'A useful cold-chain monitoring service must turn a temperature reading into a traceable exception case before it attempts to prioritise human attention.',
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'At 02:13, an eight-minute excursion begins with a number and ends with an operating decision',
    openingParagraphs: [
      'A sensor reports a temperature excursion. The overnight operator can see the value, but not yet whether a door was open, a unit was defrosting, the sensor was healthy or product was exposed. The decision clock has started before the evidence has assembled itself.',
      'This representative excursion is fictional and explains the design only. The case asks how evidence should move from signal to accountable action without displacing the operator’s hazard analysis, maintenance responsibilities or legal obligations.',
    ],
    centralQuestion: 'Can continuous monitoring improve the precision and completeness of exception handling without creating alert fatigue or unsafe dependence on incomplete telemetry?',
    evidenceTitle: 'Evidence layers in an exception decision',
    processTitle: 'Signal to closed exception case',
    systemTitle: 'Read-only monitoring and exception ledger',
    evidenceInterpretation: {
      establishes: 'The illustrative design gives greatest decision weight to temperature and duration, then adds asset, product and operator context.',
      doesNotEstablish: 'The weights do not report observed predictive accuracy, alert precision or performance at a real site.',
      management: 'A pilot must test whether these evidence layers distinguish actionable cases before they influence operational reliance.',
    },
    sections: [
      {
        heading: 'Excursion triage problem',
        purpose: 'Operating risk, baseline and engagement question',
        paragraphs: [
          { text: 'The first reading establishes that a threshold was crossed. It does not establish product exposure, equipment failure or the required response. Treating every crossing as equally material creates alert fatigue; discounting alerts may miss the case that matters.' },
          { text: 'The baseline must separate signal availability from decision quality. A pilot would reconcile expected readings, heartbeat and calibration records, then trace incidents from alert through action and closure. Food-safety guidance connects temperature checks to corrective action, supporting a durable human record rather than telemetry alone.', sources: [2] },
          { text: 'The service must shorten the path to accountable action while making missing evidence visible. The next step is to follow the eight-minute excursion as each additional fact changes its meaning.' },
        ],
      },
      {
        heading: 'Signal validation and operating context',
        transition: 'A threshold breach cannot specify the response, so discovery adds evidence in the order needed to determine materiality.',
        purpose: 'Discovery sequence and revised unit of analysis',
        paragraphs: [
          { text: 'Discovery first asks whether the signal is trustworthy. A stale heartbeat or implausible step change makes it a data-quality exception. If the signal survives, duration changes a momentary breach into a sustained event. Asset state may explain a defrost, while product and location context determine consequence. Operator notes reveal whether corrective action is already under way.' },
          { text: 'The graphic below assigns illustrative relative weight to those evidence layers. The values are design weights for discussion, not measured contributions to a validated classifier. Temperature and duration remain core, while asset, product and human context qualify the response.' },
          { text: 'The graphic establishes why a raw alert is insufficient, but it does not establish the correct threshold or prove that more context always improves classification. Because severity depends on assembled evidence, the useful unit of design becomes an exception case rather than an alert.' },
        ],
        exhibits: [{ kind: 'evidence', afterParagraph: 1 }],
      },
      {
        heading: 'Exception-case architecture',
        transition: 'Once severity depends on assembled context, the system must manage a traceable exception case rather than forward a raw alert.',
        purpose: 'Decision flow, system boundary and rejected alternatives',
        paragraphs: [
          { text: 'For the 02:13 excursion, the target process senses the reading and equipment state, validates signal quality, prioritises the case against a versioned policy and records human resolution. The process graphic shows an illustrative decision path, not a measured workflow.' },
          { text: 'The system design mirrors that path. Sensors and gateways feed a read-only data-quality service; a policy engine assembles the exception; an operator reviews it in a queue; and a ledger records evidence, action and closure. The graphic is illustrative and does not imply access to a real operational-technology estate.' },
          { text: 'Direct equipment control is rejected because it changes the hazard and security boundary. A threshold-to-message service is also rejected because it transfers ambiguity to the operator. NCSC guidance treats OT connectivity as an architectural control question, supporting separation, validated schemas and a definitive asset view.', sources: [0, 3] },
          { text: 'The graphics establish where uncertainty is reduced and authority remains human. They do not prove sensor coverage, policy quality or response capacity. Those unknowns become pilot conditions rather than hidden assumptions.' },
        ],
        exhibits: [{ kind: 'process', afterParagraph: 0 }, { kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Parallel pilot controls',
        transition: 'The exception-case architecture preserves human authority, but its signal and policy assumptions still require testing beside the existing process.',
        purpose: 'Acceptance criteria, safeguards and operating trade-offs',
        paragraphs: [
          { text: 'The illustrative pilot selects one asset class at one site and runs beside the existing process. Historic replay supplies representative excursions if observation contains too few. Operators continue current controls while the team compares classification, ownership and closure evidence.' },
          { text: 'Acceptance requires known signal coverage, visible missing-data states, reviewed alert precision, assignment within an agreed severity target and complete closure records. The proposed triage target of less than fifteen minutes is a service target, not a measured result, and must reflect local hazards and staffing.' },
          { text: 'Parallel running creates duplicate effort and delays efficiency, but exposes false positives, false negatives and unsafe assumptions before reliance. Threshold changes require approval and version history; monitoring remains read-only; closure requires corrective evidence.' },
        ],
      },
      {
        heading: 'Monitoring release threshold',
        role: 'conclusion',
        transition: 'Parallel operation produces the precision, response and missed-event evidence needed for a controlled release decision.',
        purpose: 'Evidence limit, unresolved risk and release decision',
        paragraphs: [
          { text: 'At present, the 02:13 excursion demonstrates an operating hypothesis only. The design shows how signal, duration, asset state, product context and notes should meet in one case. It cannot show that a deployment would detect every event, reduce reporting effort or improve response time.' },
          { text: 'The unresolved question is whether the assembled case helps the overnight operator decide without teaching the team to trust weak telemetry. Pilot evidence must cover invalid-signal detection, alert precision, unassigned case age, response timing, closure completeness and any event found only by the existing process.' },
          { text: 'Monitoring may become an accepted triage source only with evidence of better attention allocation and no unacceptable loss of material-event detection. Otherwise the design must return to signal coverage, policy or operating ownership.' },
        ],
      },
    ],
  },

  'property-pipeline': {
    statusStatement: 'This is an illustrative transaction-workspace design. It is not a completed client project, and its allocations, targets and benefits are not measured outcomes.',
    thesis: 'A property pipeline becomes decision-useful only when one transaction can prove its stage through current evidence, an accountable action and a visible unresolved dependency.',
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'A busy transaction looks healthy until one missing approval changes the week',
    openingParagraphs: [
      'Calls have been made, emails exchanged and documents revised, so a transaction appears to be progressing. During the Friday review, a colleague asks for the approval supporting its current stage. The evidence cannot be found, the timetable moves and the team begins reconstructing what it believed had been settled.',
      'The representative transaction is fictional. It tests whether a workspace can expose missing evidence early without forcing professionals to maintain a second reporting process.',
    ],
    centralQuestion: 'Can one transaction record distinguish activity from readiness early enough to protect the timetable and preserve professional judgement?',
    evidenceTitle: 'Illustrative control allocation by transaction stage',
    processTitle: 'Enquiry to evidence-backed completion',
    systemTitle: 'Transaction evidence and action architecture',
    evidenceInterpretation: {
      establishes: 'The illustrative allocation concentrates control effort in evidence collection, review and completion readiness.',
      doesNotEstablish: 'The percentages are not observed time, cost, risk frequency or outcomes from a live property portfolio.',
      management: 'The pilot should test stage definitions and early exception visibility before funding broader workflow scope.',
    },
    sections: [
      {
        heading: 'Transaction readiness gap',
        purpose: 'Representative failure, baseline and engagement question',
        paragraphs: [
          { text: 'The transaction contains plenty of activity but cannot support the statement that it is ready to advance. The missing approval is not merely a document-management problem. It reveals that stage, evidence and decision ownership have diverged.' },
          { text: 'The baseline must reconstruct selected transactions, compare stated stage with required evidence, date the first visible sign of each late dependency and measure review preparation. RICS research reports limited scaled AI adoption and material integration barriers, supporting a bounded workflow hypothesis rather than a broad transformation claim.', sources: [0, 1] },
          { text: 'The Friday review should become a decision forum instead of a reconciliation exercise. Answering whether it can requires following the missing approval backward to the point at which the transaction first ceased to be evidence-ready.' },
        ],
      },
      {
        heading: 'Earliest visible dependency',
        transition: 'The missing approval invalidates the stated stage, so discovery reconstructs when the dependency first became knowable.',
        purpose: 'Discovery sequence and revised risk diagnosis',
        paragraphs: [
          { text: 'Reconstruction begins with the stage label, then asks which documents and approvals make it valid. The missing approval leads to an earlier message, which exposes an unanswered dependency, which reveals that no named owner was carrying it toward the deadline. A late document problem was therefore an earlier decision-architecture problem.' },
          { text: 'The graphic below allocates illustrative control effort across qualification, evidence collection, review, completion readiness and archive. The percentages are a design allocation for discussion, not measured staff time or a benefit forecast.' },
          { text: 'The allocation establishes where control work is expected to concentrate, but not whether those shares suit another transaction type. The turning point replaces activity-based status with an evidence test: a stage may advance only when named facts, documents and approval are current.' },
        ],
        exhibits: [{ kind: 'evidence', afterParagraph: 1 }],
      },
      {
        heading: 'Evidence-backed stage gates',
        transition: 'Reconstruction shows that activity concealed readiness risk, which makes evidence-backed progression the central design requirement.',
        purpose: 'Transaction flow, architecture and rejected alternatives',
        paragraphs: [
          { text: 'The target process qualifies the parties and objective, collects minimum evidence, coordinates decisions and dependencies, then confirms completion readiness and archives the record. The process graphic is an illustrative sequence, not a claim that five gates are universally sufficient.' },
          { text: 'The workspace connects enquiries, one transaction record, a source-linked document index, an exception queue and portfolio reporting. The system graphic shows how daily work and management review can draw from the same evidence. It is illustrative and does not identify a selected platform.' },
          { text: 'A larger CRM rollout was rejected because it could digitise activity without defining readiness. Fully automatic extraction was also rejected: fields may be proposed, but remain unconfirmed until a professional inspects the source. RICS guidance on responsible AI use supports this boundary.', sources: [2] },
          { text: 'The diagrams establish the relationship between stage, evidence and action. They do not establish extraction accuracy, adoption or an earlier completion date. Those claims require live records and a comparison baseline.' },
        ],
        exhibits: [{ kind: 'process', afterParagraph: 0 }, { kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Single-transaction pilot',
        transition: 'The stage-gate model defines the target workflow; a narrow pilot must now test whether users maintain it under live variation.',
        purpose: 'Scope controls, acceptance criteria and adoption risk',
        paragraphs: [
          { text: 'The pilot starts with one repeatable transaction type because variation is a design risk. Users agree minimum evidence for each stage, import representative live records and operate the workspace for a bounded period with a clear route for exceptions.' },
          { text: 'Acceptance examines missing evidence by stage, unresolved dependency age, stage reversals, late escalations, manual reconciliations and material extraction corrections. Earlier visibility is the target. No reduction in delay, duplicate entry or reporting effort is treated as achieved before measurement.' },
          { text: 'The trade-off is between discipline and burden. Requiring evidence at every gate may slow low-risk work or encourage superficial completion. The design uses only data needed for the next decision and explicit exceptions. Parallel spreadsheets would be evidence that the model or interface is failing.' },
        ],
      },
      {
        heading: 'Expansion criteria',
        role: 'conclusion',
        transition: 'The single-transaction pilot creates evidence on visibility and burden, which must govern any expansion in scope.',
        purpose: 'Current evidence, unresolved question and scope decision',
        paragraphs: [
          { text: 'The current evidence position is illustrative. The case defines a transaction model, control logic, architecture and evaluation plan, but contains no completed implementation and no measured improvement.' },
          { text: 'The unresolved question returns to the Friday review. Would the missing approval have appeared as an owned exception early enough to protect the timetable, and would colleagues have trusted the record without rebuilding status elsewhere?' },
          { text: 'Expansion to another transaction type is justified only if stage evidence is maintained, dependencies surface earlier and reporting effort does not migrate into another channel. Otherwise the stage model, scope or interface should be revised first.' },
        ],
      },
    ],
  },

  'professional-services-intake': {
    statusStatement: 'This is an illustrative professional-services design. It is not a completed legal or advisory engagement, and no triage, quality or time result has been measured.',
    thesis: 'The intake service should automate the preparation of a professional decision while keeping mandatory controls deterministic and acceptance attributable to a qualified person.',
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'A valuable referral arrives before it is safe to accept',
    openingParagraphs: [
      'A trusted referrer introduces a prospective client and signals urgency. The email contains enough information to create commercial interest but not enough to complete conflict, eligibility or service-routing checks. A senior professional begins searching correspondence while an assistant asks for missing facts.',
      'The representative referral is fictional. It tests whether the firm can respond quickly on a more complete evidence base without allowing a model to make or obscure a professional acceptance decision.',
    ],
    centralQuestion: 'Can intake preparation become faster and more consistent while mandatory controls and professional acceptance remain explicit, reproducible and attributable?',
    evidenceTitle: 'Responsibility by intake decision',
    processTitle: 'Referral to professional acceptance',
    systemTitle: 'Controlled intake architecture',
    evidenceInterpretation: {
      establishes: 'The illustrative design assigns structured capture and mandatory checks to systems while reserving acceptance for a professional.',
      doesNotEstablish: 'Bar length is a design judgement about automation suitability, not measured accuracy, time saved or capacity.',
      management: 'The pilot should test completeness, reproducibility and summary fidelity before it tests higher throughput.',
    },
    sections: [
      {
        heading: 'Referral intake gap',
        purpose: 'Commercial urgency, control baseline and engagement question',
        paragraphs: [
          { text: 'The referral creates two clocks. Commercially, the firm wants a prompt response. Professionally, it cannot proceed until identity, conflict, eligibility and scope questions are answered. Experienced people bridge the gap by searching, reformatting and requesting information.' },
          { text: 'The baseline must sample what is available at first review, trace each mandatory control, measure clarification and preparation effort, and identify which information enters which service. Law Society and ICO guidance makes verification, confidentiality and data-protection evidence material design requirements.', sources: [0, 2] },
          { text: 'The question is not whether a model can summarise the referral. It is whether the whole item can reach an accountable acceptance decision with less reconstruction and no loss of control integrity. Discovery must separate the kinds of work hidden inside intake.' },
        ],
      },
      {
        heading: 'Three layers of intake work',
        transition: 'The referral combines missing facts, mandatory checks and professional judgement, so discovery separates those layers before assigning technology.',
        purpose: 'Factual preparation, mandatory controls and judgement',
        paragraphs: [
          { text: 'First, the referral lacks required facts, which structured capture can expose. Second, identity, conflict and eligibility rules must give the same result for the same approved facts, so deterministic controls should apply them. Third, urgency, complexity, service fit and acceptance require accountable professional interpretation.' },
          { text: 'The graphic below represents this allocation of responsibility. Its bar lengths are illustrative judgements about automation suitability, not measured shares of work, accuracy or elapsed time. Preparation is system-led or assisted; acceptance remains human-led.' },
          { text: 'The graphic establishes the authority boundary, not tool performance. The turning point is the rejection of intake as one classification task. It is a sequence of factual preparation, mandatory gates and professional judgement, each requiring different controls.' },
        ],
        exhibits: [{ kind: 'evidence', afterParagraph: 1 }],
      },
      {
        heading: 'Preparation and acceptance boundary',
        transition: 'Once intake is separated into three kinds of work, the architecture can automate preparation without transferring acceptance authority.',
        purpose: 'Authority model, system design and rejected alternatives',
        paragraphs: [
          { text: 'The target process captures required facts and documents, applies deterministic checks, routes the item by an approved taxonomy and presents it for professional acceptance. The process graphic shows an illustrative progression, not proof of faster triage.' },
          { text: 'The system creates a matter candidate, stores source evidence, applies rules and prepares a workspace containing original material, structured facts, unanswered questions and an assisted summary. The graphic is illustrative and does not represent a live firm environment or approved model route.' },
          { text: 'Automated acceptance was rejected because a model should not reinterpret a failed gate or make an unattributable professional decision. An unrestricted general-purpose summariser was also rejected because confidentiality and retention must follow an approved data boundary. Law Society guidance reinforces this joint view of opportunity and data risk.', sources: [1] },
          { text: 'The graphics establish how preparation reaches judgement and where it stops. They do not establish summary fidelity, reviewer trust or throughput. Those uncertainties remain part of evaluation.' },
        ],
        exhibits: [{ kind: 'process', afterParagraph: 0 }, { kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Intake pilot acceptance criteria',
        transition: 'The authority boundary defines a safe design; the pilot must now test completeness, reproducibility and professional trust across the whole service.',
        purpose: 'Evaluation set, service measures and trade-offs',
        paragraphs: [
          { text: 'The pilot uses representative enquiries, including ambiguous referrals, missing documents and attempts to bypass required fields. Professionals compare the structured brief with original evidence and inspect every mandatory result. Sensitive categories follow an approved processing route or remain outside model processing.' },
          { text: 'Acceptance requires complete first review, reproducible control results, reduced preparation effort and no material omission or distortion in an accepted summary. Time to first substantive decision, clarification rate, reclassification, correction category and queue age are proposed measures, not outcomes.' },
          { text: 'Stricter capture can make the opening exchange less personal or increase abandonment. The design therefore requests only facts needed for the next decision and preserves a human route for unusual matters. Faster preparation is rejected as success if work simply queues longer for acceptance.' },
        ],
      },
      {
        heading: 'Assisted-summary release decision',
        role: 'conclusion',
        transition: 'The pilot measures both preparation and acceptance, providing the evidence needed to retain, restrict or remove assisted summaries.',
        purpose: 'Current evidence, unresolved question and use threshold',
        paragraphs: [
          { text: 'The current evidence position is an illustrative architecture and evaluation plan. No client intake has been accelerated, no control validated in a firm’s policy environment and no summary-acceptance rate is claimed.' },
          { text: 'The unresolved question returns to the referral. Can the professional decide from the workspace without repeating the original search, while still identifying every fact and control that determines acceptance? The pilot must show lower reconstructive effort and intact scepticism.' },
          { text: 'Assisted summaries remain only if mandatory gates are reproducible, material omissions stay within tolerance and reviewers use evidence links. Otherwise assistance should be restricted or removed while the underlying capture and control flow remains.' },
        ],
      },
    ],
  },

  'field-service-planning': {
    statusStatement: 'This is an illustrative planning design. It is not a completed deployment, and its weights, targets and expected improvements require calibration against representative operational data.',
    thesis: 'A field-service planner creates value only after it separates non-negotiable feasibility from scored preferences and lets dispatchers see the disruption transferred by each option.',
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'At 07:10, one urgent job changes a plan that took an hour to assemble',
    openingParagraphs: [
      'The dispatcher has balanced engineer skills, locations, parts, promised appointments and working-hour limits. An urgent job arrives. Inserting it may protect one customer while delaying another, increasing travel or breaking a certification rule.',
      'The representative job is fictional. It tests whether a planning layer can produce feasible, explainable options while the dispatcher retains authority over the published day.',
    ],
    centralQuestion: 'Can the service absorb an urgent job with visible trade-offs and no breach of hard constraints, without creating unacceptable churn for customers and engineers?',
    evidenceTitle: 'Daily planning gate and weights',
    processTitle: 'Work order to published plan',
    systemTitle: 'Feasible-option planning architecture',
    evidenceInterpretation: {
      establishes: 'The illustrative score treats safety and eligibility as a gate, then balances service, priority, travel and stability.',
      doesNotEstablish: 'The weights are not calibrated preferences and do not report route, service, overtime or planning improvements.',
      management: 'Shadow planning must reveal whether the objectives and constraints produce acceptable options before dispatch relies on them.',
    },
    sections: [
      {
        heading: 'Urgent-job planning conflict',
        purpose: 'Service commitments, baseline and engagement question',
        paragraphs: [
          { text: 'The urgent job is not simply another postcode. It carries a priority, scope, likely duration, parts requirement and eligibility condition. Every existing assignment carries similar facts plus a customer promise. A route that minimises distance may still move the wrong appointment or assign an ineligible engineer.' },
          { text: 'The baseline must profile work-order fields, observe why planners reject assignments, measure reassignment and disruption, and compare planned with actual duration and travel. Research that describes AI as an amplifier supports the risk hypothesis: weak inputs and unclear priorities will be reproduced at greater speed, not repaired automatically.', sources: [0] },
          { text: 'The central question is whether the 07:10 job can be absorbed through a feasible and explainable change. Before scoring alternatives, discovery must establish whether work and resource data can support any valid plan.' },
        ],
      },
      {
        heading: 'Feasibility before scoring',
        transition: 'The urgent job exposes competing promises, so discovery must first establish which assignments are valid before comparing their desirability.',
        purpose: 'Input validation, hard constraints and revised model',
        paragraphs: [
          { text: 'Discovery validates the job’s scope, location, duration, parts and priority. Missing duration makes the day appear to fit when it may not. It then checks engineer availability, certification and working-hour rules. Only after those conditions are satisfied can travel, service, urgency and stability be compared.' },
          { text: 'The graphic below shows an illustrative decision model. Safety and eligibility form a gate; the percentages allocate preference weight across service, priority, travel and stability. These are proposed weights for calibration, not measured preferences or performance.' },
          { text: 'The graphic establishes that no attractive score can compensate for an infeasible assignment. It does not establish the correct balance among feasible options. The turning point separates hard constraints from preferences, replacing the idea of one blended optimisation score.' },
        ],
        exhibits: [{ kind: 'evidence', afterParagraph: 1 }],
      },
      {
        heading: 'Constraint and preference architecture',
        transition: 'Separating hard rules from preferences changes the machinery required to generate and explain a plan.',
        purpose: 'Decision flow, system boundary and rejected alternatives',
        paragraphs: [
          { text: 'The target process validates work orders and capacity, generates only feasible options, explains trade-offs to the dispatcher and records the published decision and actuals. The process graphic is illustrative, not evidence that a solver improved a live plan.' },
          { text: 'The system graphic connects approved work orders, a constraint solver, option scoring, the dispatcher console and a performance store. The solver removes invalid assignments, the score ranks valid options and the dispatcher decides. The architecture is illustrative and vendor-neutral.' },
          { text: 'A distance-only optimiser was rejected because it can transfer cost into missed service or unstable plans. Continuous automatic replanning was rejected because each mathematically better route may break a commitment. NCSC guidance supports validating work orders and resources before they influence the plan.', sources: [1] },
          { text: 'The graphics establish how feasibility, preference and authority remain distinct. They do not establish that duration, travel or parts data are accurate enough. That uncertainty becomes a measured input to shadow planning.' },
        ],
        exhibits: [{ kind: 'process', afterParagraph: 0 }, { kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Shadow-planning evidence',
        transition: 'The architecture defines feasible options and dispatcher authority; shadow operation must test whether its assumptions survive real work.',
        purpose: 'Pilot controls, override learning and acceptance criteria',
        paragraphs: [
          { text: 'The pilot runs recommendations beside the live plan for representative weeks. Dispatchers see feasible alternatives but continue to publish the schedule. Each rejection or amendment carries a reason such as missing local knowledge, unrealistic duration, customer sensitivity or an unmodelled constraint.' },
          { text: 'Acceptance requires every assignment to pass skill, availability, safety and parts checks. Among feasible plans, service, travel, overtime and stability must remain within agreed bounds. Explanation quality, churn, override reasons and error by job category provide evidence. No improvement is claimed before comparison with actuals.' },
          { text: 'Shadow operation costs attention and delays reliance, but overrides reveal whether the model, data or policy is wrong. NIST lifecycle guidance supports continuing measurement and management rather than a one-off model assessment.', sources: [2] },
        ],
      },
      {
        heading: 'Live recommendation threshold',
        role: 'conclusion',
        transition: 'Override and actuals data from shadow planning provide the balanced evidence required before recommendations enter the live workspace.',
        purpose: 'Current evidence, balanced outcomes and release decision',
        paragraphs: [
          { text: 'The current evidence position is illustrative. The case defines inputs, constraint logic, preference weights, architecture and pilot measures, but provides no measured reduction in travel, overtime, planning effort or service failure.' },
          { text: 'The unresolved question returns to 07:10. Can the recommendation absorb the urgent job without an invalid assignment and with an acceptable explanation of which commitments move? The pilot must also show whether the option remains sensible after actual duration, travel and impact are known.' },
          { text: 'Recommendations may enter the live workspace only with feasible assignments, balanced outcomes, understandable rationale and a learning loop that prevents rejected suggestions from recurring. If route efficiency improves while service or stability deteriorates, the correct decision is to recalibrate or stop.' },
        ],
      },
    ],
  },
};
