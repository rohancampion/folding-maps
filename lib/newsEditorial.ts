import type { ReportSection, ReportSource } from '@/lib/reportNarrative';

export type EditorialSource = ReportSource;
export type NewsExhibitPlacement =
  | { kind: 'evidence'; view: number; afterParagraph: number }
  | { kind: 'system'; afterParagraph: number };
export type EditorialSection = ReportSection<NewsExhibitPlacement>;

export type NewsEditorial = {
  title: string;
  standfirst: string;
  thesis: string;
  sceneLabel: string;
  sceneTitle: string;
  sceneParagraphs: string[];
  sections: EditorialSection[];
};

const ukBusinessData = { label: 'UK Business Data Survey 2026', href: 'https://www.gov.uk/government/statistics/uk-business-data-survey-2026/uk-business-data-survey-2026' };
const ukAdoption = { label: 'DSIT AI Adoption Research 2026', href: 'https://www.gov.uk/government/publications/ai-adoption-research/ai-adoption-research' };
const oecdWorkforce = { label: 'OECD, Generative AI and the SME Workforce, 2025', href: 'https://www.oecd.org/en/publications/generative-ai-and-the-sme-workforce_2d08b99d-en/full-report.html' };
const stanfordIndex = { label: 'Stanford HAI, AI Index 2025', href: 'https://hai.stanford.edu/assets/files/hai_ai_index_report_2025.pdf' };
const nistGenAi = { label: 'NIST, Generative AI Profile', href: 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence' };
const metrStudy = { label: 'METR, Experienced Developer Productivity Study, 2025', href: 'https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf' };
const jaggedFrontier = { label: 'Harvard Business School, Navigating the Jagged Technological Frontier', href: 'https://www.hbs.edu/ris/download.aspx?name=24-013.pdf' };
const ncscOt = { label: 'NCSC, Operational Technology guidance', href: 'https://www.ncsc.gov.uk/collection/operational-technology' };
const ncscProtocols = { label: 'NCSC, Secure OT protocols, 2026', href: 'https://www.ncsc.gov.uk/collection/operational-technology/secure-connectivity/principle-4' };
const foodStandards = { label: 'Food Standards Agency, chilling guidance', href: 'https://www.food.gov.uk/business-guidance/chilling-food-correctly-in-your-business' };
const qjeStudy = { label: 'Quarterly Journal of Economics, Generative AI at Work, 2025', href: 'https://academic.oup.com/qje/article/140/2/889/7990658' };

export const newsEditorial: Record<string, NewsEditorial> = {
  'ai-integration-gap': {
    title: 'The AI integration gap is now a management problem',
    standfirst: 'Access to artificial intelligence has spread faster than the operating discipline required to make it useful. The next phase will be decided by workflow design, data ownership and management attention rather than another round of software licences.',
    thesis: 'The competitive divide is shifting from who can obtain an AI tool to who can connect it to a material workflow, govern its decisions and improve it with evidence.',
    sceneLabel: 'Composite management vignette',
    sceneTitle: 'The licence dashboard is green. The operating dashboard has not moved',
    sceneParagraphs: [
      'At the monthly review of a 120-person services firm, the technology dashboard looks encouraging. Most employees can use an AI assistant and weekly activity is rising. The operating dashboard is less persuasive. Customer-response time, first-time quality and work in progress look much as they did six months earlier. The chief financial officer asks where the return has gone.',
      'Employees have not done nothing. They have improved drafts, summarised calls and accelerated research. Yet those personal gains have not changed the route by which an enquiry becomes an accepted outcome. The question facing the meeting is therefore not whether AI can help an individual. It is what must change before individual assistance becomes repeatable operating performance.',
    ],
    sections: [
      {
        heading: 'Adoption is not integration',
        purpose: 'Separate the spread of AI tools from evidence of business value.',
        paragraphs: [
          { text: 'The first difficulty for the finance team is that even adoption is not one number. The UK Business Data Survey reports AI use among businesses that handle digitised data, while separate government research measures use across the wider business population. The former found 41 percent use in its survey population; the latter found 16 percent of UK businesses using at least one AI technology. Different populations, definitions and survey designs explain much of the gap.', sources: [ukBusinessData, ukAdoption] },
          { text: 'Neither figure answers the chief financial officer. A business can count an employee researching with a general assistant and another firm running an embedded workflow under the same broad heading of AI use. One records access to a capability; the other may alter how work is controlled. The distinction means adoption can be an early signal of experimentation without being evidence of economic return.' },
          { text: 'If the usage dashboard cannot establish value, management needs a narrower question: how much of that activity is connected to a business system and an accountable outcome?' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 0 }],
      },
      {
        heading: 'System-integration gap',
        transition: 'Since adoption cannot establish value, the analysis next tests whether connection to operational systems is a more useful signal.',
        purpose: 'Show why reported system integration is a more useful, but still incomplete, indicator.',
        paragraphs: [
          { text: 'That narrower question exposes a genuine gap. Among businesses in the UK Business Data Survey that already used AI, 21 percent reported that their tools were integrated with an existing business system. The rate rose from 18 percent among sole traders to 57 percent among large businesses. The result suggests that resources and digital maturity matter, although the survey definition includes relatively light forms of integration such as an assistant embedded in office software.', sources: [ukBusinessData] },
          { text: 'The figure therefore establishes that formal connection is less common than use, but it does not prove that only one fifth of adopters have achieved operational value. Nor does it show that integration caused better performance. It does, however, direct management towards the work hidden behind the connector: reliable inputs, permissions, business rules, exceptions and a named owner when the result is wrong.' },
          { text: 'Back in the monthly review, this changes the diagnosis. The firm does not have a licence problem. It has not chosen the customer or operating decision that the technology is expected to improve. The next question is what, exactly, should be designed once that decision is selected.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 0 }],
      },
      {
        heading: 'Workflow authority and measurement',
        transition: 'The integration gap identifies where to look; the next question is which authority and measurement choices make that connection operational.',
        purpose: 'Explain the causal mechanism between connected software and dependable performance.',
        paragraphs: [
          { text: 'Once a material decision is selected, integration becomes less about moving data and more about allocating authority. Management must decide which record is authoritative, which fields are sufficient, which outputs may proceed without review and which exception stops the workflow. A confidence score has no operating value unless low confidence changes the route, owner or service expectation.' },
          { text: 'The strongest design usually combines ordinary software with bounded AI. Required fields, calculations and known notifications should remain deterministic. A model earns its place where language or variation makes fixed rules inadequate. Source attribution and evaluation then connect interpretation back to evidence, while an accountable person retains authority over consequential exceptions.' },
          { text: 'This architecture gives the finance team something measurable: elapsed time from eligible input to accepted outcome, first-time quality, rework and exception effort. Yet it also creates cost and control obligations. Is a formal workflow always worth that burden?' },
        ],
        exhibits: [{ kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Limits of informal use',
        role: 'counterargument',
        transition: 'Formal workflow creates cost and control obligations, so the argument must test when informal assistance remains sufficient.',
        purpose: 'Address the strongest counterargument without weakening the central thesis.',
        paragraphs: [
          { text: 'The serious counterargument is that formal integration can be disproportionate. A researcher who drafts faster or a manager who prepares a meeting more efficiently may create real value without a new system of record. OECD respondents most often identified improved employee performance as a benefit of generative AI, and the survey explicitly warns that it did not measure the size of that improvement.', sources: [oecdWorkforce] },
          { text: 'Management should not suppress these gains merely because they are difficult to aggregate. Personal tools are sensible where consequences are low, context is local and the employee can judge the output. The case for integration begins when work crosses people or systems, when the decision recurs at meaningful volume, or when failure requires an accountable response.' },
          { text: 'That boundary resolves the apparent conflict. Informal assistance can remain a useful productivity layer, while investment discipline is reserved for workflows where repeatability, traceability and scale matter. The monthly review can now ask which activities belong on each side of that boundary.' },
        ],
      },
      {
        heading: 'CFO decision threshold',
        role: 'conclusion',
        transition: 'Having separated low-risk personal use from recurring operational work, the monthly review can now set an investment threshold.',
        purpose: 'Resolve the opening dilemma as a concrete management decision.',
        paragraphs: [
          { text: 'The chief financial officer will not find the return by examining prompts or active users more closely. The next credible unit of analysis is one eligible workflow. Management should name its owner, record its baseline, define the accepted outcome and identify the data and authority required to move work safely.' },
          { text: 'A bounded release can then answer the question the licence dashboard could not. If cycle time, quality or capacity improves after review and exception effort are counted, the firm has evidence for expansion. If activity rises but the operating result does not, the programme should change scope or stop.' },
          { text: 'The original dashboard was not wrong. It was incomplete. It showed that colleagues were willing to experiment. The management task is to convert that willingness into one governed route from input to outcome, and to fund the next route only when the first has produced evidence.' },
        ],
      },
    ],
  },
  'open-weight-price-war': {
    title: 'Cheaper AI models will not make implementation cheap',
    standfirst: 'The price of machine intelligence is falling quickly, widening the range of viable experiments. But inference is only one line in the cost of dependable automation. Review, integration and operational control will decide which apparent bargains create value.',
    thesis: 'Lower model prices increase strategic choice, but the winning architecture will minimise the cost of accepted work rather than the cost of generating an answer.',
    sceneLabel: 'Composite procurement vignette',
    sceneTitle: 'The model bill falls by 90 percent and the project still misses its budget',
    sceneParagraphs: [
      'A buyer replaces an expensive model in a document-processing service with a cheaper alternative. The inference invoice falls almost exactly as promised. The next operating review is less comfortable. Exception queues are longer, quality sampling has expanded and engineers have spent several weeks reproducing a feature that existed inside the former provider.',
      'The result does not invalidate the price decline. It reveals that the organisation was measuring the wrong unit. Models generate outputs; businesses pay for accepted tasks. The question for procurement is how much cost survives between those two events.',
    ],
    sections: [
      {
        heading: 'Inference price compression',
        purpose: 'Establish the scale and limits of the historical price decline.',
        paragraphs: [
          { text: 'The fall in headline inference prices is substantial. Stanford reports that the cost of querying a model above a stated GPT-3.5-level MMLU threshold fell from about $20 per million tokens in November 2022 to $0.07 by October 2024. This is a historical benchmark comparison, not a guarantee of equivalent performance on a live workflow, but it changes the economics of testing.', sources: [stanfordIndex] },
          { text: 'For a smaller firm, the immediate benefit is option value. Tasks that could not justify an expensive experiment can now be benchmarked against representative documents, messages or decisions. Lower prices also make it practical to compare several model families before signing a long contract.' },
          { text: 'The procurement team in the opening scene captured this input saving correctly. Its mistake was assuming that the input represented the whole service. What else belongs in the cost of an accepted task?' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 0 }],
      },
      {
        heading: 'Cost per accepted task',
        transition: 'Price compression changes only one cost line; the next section follows a task through the full acceptance chain.',
        purpose: 'Replace token economics with end-to-end business economics.',
        paragraphs: [
          { text: 'That wider cost chain includes retrieval, infrastructure, monitoring, review, retries, exception handling, support and the engineering required when a prompt, provider or model changes. These costs scale differently. Inference follows usage; specialist review follows error and consequence; integration and control create fixed commitments before the first task is accepted.' },
          { text: 'Cost per accepted task therefore exposes false savings. A model that costs half as much but doubles correction effort is not cheaper. A highly accurate model may also be uneconomic if its rare failures require every output to pass through an expensive specialist. The appropriate comparison holds the business outcome and acceptance standard constant.' },
          { text: 'This explains the longer queue in the procurement vignette, but it raises a sourcing question. If operating cost dominates the model bill, does an open-weight deployment create control or simply transfer more responsibility to the buyer?' },
        ],
      },
      {
        heading: 'Open-weight operating burden',
        transition: 'Once accepted-task cost is visible, open weights can be assessed as an exchange between supplier expense and internal responsibility.',
        purpose: 'Explain where open-weight control is economically valuable and where it is not.',
        paragraphs: [
          { text: 'Open-weight models can improve control over data location, latency, capacity and model choice. Benchmark gaps on selected measures have also narrowed, expanding the credible set of candidates. The evidence does not establish parity on every task, but it makes automatic dependence on one frontier supplier harder to justify.', sources: [stanfordIndex] },
          { text: 'The control comes with obligations. Licensing, provenance, security, patching, monitoring, hardware capacity and service continuity now sit with the deployer or its infrastructure partner. NIST treats risk as a lifecycle concern because a satisfactory release can deteriorate as models, data and use patterns change.', sources: [nistGenAi] },
          { text: 'The management test should begin with a constraint. Local deployment may be justified by a data boundary, latency requirement or resilience need. Avoiding a usage fee alone is a weak reason if the organisation lacks the people to operate the resulting service. The next complication is that managed providers may offer capabilities worth paying for.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 0 }],
      },
      {
        heading: 'Rational supplier lock-in',
        role: 'counterargument',
        transition: 'Self-hosting is not automatically superior, so the next section tests when managed dependency is economically rational.',
        purpose: 'Consider the strongest case for provider-specific architecture.',
        paragraphs: [
          { text: 'A rigid demand for portability can itself destroy value. Managed platforms may combine strong models with retrieval, security, observability and support that would be costly to reproduce. If those services materially improve accepted-task economics, a degree of dependency can be a rational commercial choice.' },
          { text: 'The discipline is to make that dependency visible. Business rules, representative test cases and acceptance criteria should remain controlled by the buyer even when execution uses proprietary features. A stable evaluation set is more important than a universal adapter because it allows the firm to determine whether a second provider can satisfy the same business standard.' },
          { text: 'In the opening procurement case, the hidden engineering effort was evidence that dependency had never been priced. The answer is not to eliminate every dependency, but to decide which ones produce a measurable advantage and what it would cost to leave them.' },
        ],
        exhibits: [{ kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Model-sourcing decision',
        role: 'conclusion',
        transition: 'The trade-off between control and managed service leads to a sourcing rule that must remain valid as model prices move.',
        purpose: 'Resolve the budget problem with a repeatable procurement decision.',
        paragraphs: [
          { text: 'The lower invoice is still valuable. It should fund a broader benchmark, better evaluation and a realistic account of review and exceptions rather than a larger volume of unchecked output. Procurement, technology and the workflow owner should agree one denominator: accepted tasks at the required level of quality and consequence.' },
          { text: 'The organisation can then reserve expensive capability for tasks where it changes acceptance, use smaller models where evidence supports them and choose open-weight deployment where control solves a genuine constraint. The same test can be rerun as the market moves.' },
          { text: 'The project in the opening scene missed its budget because it changed a model before understanding the service around it. Its next sourcing decision should begin with that service. Falling prices create leverage only for buyers able to compare complete outcomes rather than attractive inputs.' },
        ],
      },
    ],
  },
  'automation-before-agents': {
    title: 'Before hiring an AI agent, repair the workflow',
    standfirst: 'Agent demonstrations make complicated work appear smooth. Real organisations contain missing information, conflicting policies and awkward exceptions. Autonomy amplifies those conditions unless the underlying process is made explicit first.',
    thesis: 'An agent should inherit a well-defined operating system, not be asked to invent one while handling live work.',
    sceneLabel: 'Composite operating vignette',
    sceneTitle: 'The agent completed the task exactly as instructed. The customer still received the wrong answer',
    sceneParagraphs: [
      'In the demonstration, an agent reads an enquiry, updates the customer record and prepares a response. In live operation, the record contains two addresses, the latest policy is attached to an old email and a credit hold is known only to finance. The agent follows the visible path and misses the organisation’s invisible one.',
      'A colleague would probably pause and ask. That pause contains tacit knowledge: the sign that the case is unusual, the person who understands the exception and the consequence of proceeding. The management question is how to expose enough of that knowledge before software receives authority to act.',
    ],
    sections: [
      {
        heading: 'Demonstration-to-production gap',
        purpose: 'Explain why apparent capability does not establish production readiness.',
        paragraphs: [
          { text: 'The smooth demonstration is attractive because its input is complete, its policy is consistent and its successful ending has been selected in advance. Production work is less cooperative. Customers change their minds, records conflict and exceptions cross departmental boundaries. Employees resolve these cases through informal routes that a process map may never have captured.' },
          { text: 'Current adoption data supports caution about treating agency as a mature default. In DSIT research, agentic AI was the least used technology among AI adopters at 7 percent, compared with 85 percent using natural-language or text-generation tools. The figures measure reported use, not safety or value, but they show that operational experience remains relatively limited.', sources: [ukAdoption] },
          { text: 'The failed enquiry therefore needs to be observed as work, not reconstructed as a better demonstration. Follow the case from arrival to completion and record states, evidence, decisions, waiting and ownership. The next question is which parts of that route require intelligence at all.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 1 }],
      },
      {
        heading: 'Deterministic workflow repair',
        transition: 'The demonstration fails because it omits ordinary constraints, so the first design task is to repair the deterministic path.',
        purpose: 'Show how ordinary software reduces ambiguity before an agent is introduced.',
        paragraphs: [
          { text: 'That observation usually reveals work that should be removed, standardised or validated. Required fields do not need a language model. Fixed calculations should remain deterministic. Known notifications and state changes belong in ordinary workflow software. These controls reduce the number of situations in which a model must infer what the organisation meant.' },
          { text: 'In the customer enquiry, address validation can expose the conflict, the current policy can be versioned and the credit hold can become a controlled field. AI may still help interpret free text or prepare a response, but it no longer has to invent the process while executing it.' },
          { text: 'This combined design is less theatrical than a general agent and more dependable. Once the workflow has a stable state and explicit exceptions, management can address the consequential question the demonstration avoided: what authority should the model receive?' },
        ],
      },
      {
        heading: 'Authority by consequence',
        transition: 'A stable workflow makes selective interpretation possible; the next decision is how much authority each interpreted output should receive.',
        purpose: 'Connect task-specific evidence to draft, recommend and act permissions.',
        paragraphs: [
          { text: 'Drafting an internal summary, recommending a route and changing a customer record are not points on one technical scale. They create different consequences and require different evidence. A practical authority model separates draft, recommend and act, then gives each level the minimum tools and permissions it needs.' },
          { text: 'Research reinforces the need for task-level evaluation. One randomised METR study found experienced open-source developers took 19 percent longer with early-2025 AI tools on familiar repositories, while other studies have found substantial gains in different occupations and tasks. The result is not that AI makes experts slower. It is that performance cannot be imported from a benchmark or another workflow.', sources: [metrStudy, jaggedFrontier] },
          { text: 'For the enquiry, a representative test set should include duplicate addresses, outdated attachments, credit holds and ambiguous requests. Safe completion, correction and rescue effort matter together. The authority gate can then expand only when those cases show that the system understands when to proceed and when to stop.' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 1 }, { kind: 'system', afterParagraph: 2 }],
      },
      {
        heading: 'Conditions for earlier autonomy',
        role: 'counterargument',
        transition: 'Consequence-based authority is conservative by design, so the argument must examine the strongest case for moving faster.',
        purpose: 'Address the case that workflow repair can become excessive ceremony.',
        paragraphs: [
          { text: 'The strongest counterargument is that some organisations already have clean records, stable policies and reversible actions. Requiring a long redesign before every release would waste that maturity. A bounded agent can remove real coordination work when the tools, inputs and fallback route are already dependable.' },
          { text: 'The answer is proportionality, not delay. A low-consequence internal task with strong observability may move quickly from recommendation to action. A financial, regulated or customer-facing commitment requires a higher evidence threshold. Human review is useful only when the reviewer sees the source, proposed action and reason the case deserves attention.' },
          { text: 'This is also where nominal oversight can fail. If review volume is relentless or evidence is weak, approval becomes a reflex. The system should therefore measure meaningful challenges and rescue effort, not simply count the presence of a human click.' },
        ],
      },
      {
        heading: 'Controlled-pause decision',
        role: 'conclusion',
        transition: 'The case for earlier autonomy survives only under narrow conditions, which now define the release decision for the failed enquiry.',
        purpose: 'Return to the failed enquiry and resolve it with an evidence-based authority decision.',
        paragraphs: [
          { text: 'When the original enquiry returns, the repaired workflow detects the address conflict, retrieves the current policy and exposes the credit hold. The agent can prepare a response, but the case routes to the finance owner before any external commitment is made. The pause that once depended on tacit knowledge has become an explicit control.' },
          { text: 'Management can now decide whether to expand authority using observed evidence: correct completion by risk category, material corrections, manual rescue, incidents and unresolved exception age. Greater autonomy is justified only when it improves the whole route without weakening recovery.' },
          { text: 'The agent did not need a more ambitious instruction. It needed an operating system that distinguished a normal case from a consequential exception. Repairing that system first turns autonomy from a product setting into a management decision.' },
        ],
      },
    ],
  },
  'cold-chain-collaboration': {
    title: 'Cold-chain operating value begins with accountable response',
    standfirst: 'Temperature-controlled operations already produce abundant readings. The harder problem is turning a material change into timely, accountable action while keeping the physical infrastructure and human evidence visible.',
    thesis: 'A credible cold-chain service must connect signal quality, operating context, response ownership and corrective evidence in one traceable exception case.',
    sceneLabel: 'Illustrative operating vignette',
    sceneTitle: 'A temperature excursion lasts eight minutes. The commercial consequence could last much longer',
    sceneParagraphs: [
      'An overnight operator sees a threshold breach. The number alone cannot explain whether a loading door opened, a unit entered defrost, a probe lost calibration or sensitive product faced a genuine excursion. Several systems hold fragments of the answer, while the response expectation depends on severity that has not yet been established.',
      'The decision clock starts before the evidence has assembled itself. The value of the proposed collaboration therefore rests not on producing another alert, but on creating a trustworthy path from physical signal to owned response and recorded recovery.',
    ],
    sections: [
      {
        heading: 'Contextual value of telemetry',
        purpose: 'Distinguish raw telemetry from an operational fact.',
        paragraphs: [
          { text: 'The same temperature can represent routine loading, a defrost cycle, a failing unit or a product risk. Duration, asset state, product, location and recent activity change the interpretation. A system that applies a threshold without this context increases alert volume while leaving the operator’s underlying question unanswered.' },
          { text: 'The proposed evidence model therefore combines the reading and duration with asset state, product context and operator observation. The relative weights shown in the graphic are illustrative design priorities, not measured contributions to food safety or commercial performance.' },
          { text: 'For the eight-minute event, context is the difference between immediate escalation and documented observation. Yet context is useful only if the underlying signal can be trusted. The next step is to test the physical and digital path that produced it.' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 1 }],
      },
      {
        heading: 'Signal-quality controls',
        transition: 'Context can change the meaning of an excursion only if the underlying signal is reliable enough to support interpretation.',
        purpose: 'Anchor the software argument in sensors, networks and secure architecture.',
        paragraphs: [
          { text: 'Missing heartbeats, implausible jumps and uncertain calibration should be visible as data exceptions. Quietly filling a gap or presenting a weak reading with false precision makes the operating risk harder to see. Discovery must therefore document sensor placement, calibration, gateways, connectivity and known blind spots before automated classification is trusted.' },
          { text: 'NCSC guidance supports maintaining a definitive view of operational technology and validating data at trust boundaries. It also supports architectural separation when information moves from operational equipment into analytical services. These controls reduce the chance that monitoring creates an unnecessary route back into equipment.', sources: [ncscOt, ncscProtocols] },
          { text: 'In the overnight event, signal validation determines whether the queue contains a product case or an instrumentation case. Once that distinction is explicit, the service can turn the event into something an operator can own and close.' },
        ],
      },
      {
        heading: 'Exception-case operating model',
        transition: 'Validated telemetry still does not allocate action, so the next section assembles signal and context into an owned exception case.',
        purpose: 'Explain how evidence becomes accountable action and closure.',
        paragraphs: [
          { text: 'An alert records that a rule fired. An exception case assembles the validated signal, duration, operating context, applicable policy, assigned owner, corrective action and evidence of recovery. Missing information remains visible. This gives the reviewer a decision object rather than another isolated notification.' },
          { text: 'Every stage is necessary, but the equal weighting in the control graphic expresses dependency rather than measured economic contribution. Validation without ownership leaves work unassigned; ownership without closure leaves the assurance record incomplete. Food-safety guidance similarly connects monitoring with effective corrective action, while leaving responsibility with the operator.', sources: [foodStandards] },
          { text: 'For the eight-minute excursion, closure might record a loading event, stable subsequent readings and the operator’s inspection. Repeated cases can then reveal equipment or policy patterns. Before adopting this model, however, management should consider whether the additional structure risks overengineering routine monitoring.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 1 }, { kind: 'system', afterParagraph: 1 }],
      },
      {
        heading: 'Monitoring without intervention',
        role: 'counterargument',
        transition: 'The exception case improves accountability, but the control case must still distinguish observation from equipment intervention.',
        purpose: 'Address compliance, trend analysis and the risk of excessive exception machinery.',
        paragraphs: [
          { text: 'The serious counterargument is that cold-chain data can create value without changing an immediate operating decision. Routine records support assurance, trend analysis, maintenance and retrospective investigation. A service that forces every minor movement into an elaborate case could increase workload and distract from material events.' },
          { text: 'The design should therefore distinguish routine evidence from qualifying exceptions. Continuous records can remain available for reporting and analysis, while a case is created only when signal quality, duration and context meet an agreed policy. Historical replay can test that policy before live escalation.' },
          { text: 'This narrower claim is stronger than saying data is useful only when it changes a decision. The collaboration should be judged by whether it improves attention and evidence where action is required without making ordinary monitoring harder.' },
        ],
      },
      {
        heading: 'Parallel-pilot decision',
        role: 'conclusion',
        transition: 'Once monitoring is separated from control, a parallel pilot becomes the appropriate test of attention quality and missed-event risk.',
        purpose: 'Resolve the excursion through a controlled delivery sequence.',
        paragraphs: [
          { text: 'The eight-minute event should be replayed through the proposed service. The pilot would test whether the signal is validated correctly, whether the context changes severity, whether the right owner receives the case and whether closure preserves enough evidence for later review.' },
          { text: 'Management should compare the service with current practice using signal coverage, alert precision, unassigned exception age, response time, closure completeness and reporting effort. The proposed targets remain hypotheses until representative live and historical cases have been observed.' },
          { text: 'A successful pilot would not transfer responsibility to software. It would give the operator a faster, more reliable account of what happened and what still needs to be decided. That is the operating value the original alert could not provide on its own.' },
        ],
      },
    ],
  },
  'small-teams-ai-advantage': {
    title: 'The AI advantage of a smaller firm is managerial, not automatic',
    standfirst: 'SMEs rarely possess the largest technology budgets or datasets. They may nevertheless move faster because operational knowledge, customer context and decision authority sit closer together. That advantage survives only if leadership concentrates its attention.',
    thesis: 'Short decision lines can produce faster AI learning, but only when a smaller firm concentrates on one material workflow and converts each release into reusable capability.',
    sceneLabel: 'Composite SME vignette',
    sceneTitle: 'Five people around one table can resolve a question that takes five committees elsewhere',
    sceneParagraphs: [
      'A customer-service lead describes a recurring exception. The managing director understands its commercial cost, the operations manager owns the process and the technical specialist can test a change that afternoon. Nobody needs to translate the problem through several layers before a decision is made.',
      'Proximity alone is not an advantage. The same firm may lack clean data, spare management capacity and specialist engineering. The meeting matters only if it concentrates those scarce resources on a question that can produce operating evidence.',
    ],
    sections: [
      {
        heading: 'Management proximity hypothesis',
        purpose: 'State the managerial advantage without presenting it as an empirical fact.',
        paragraphs: [
          { text: 'A smaller firm can place the process expert, user, sponsor and builder in one decision loop. That arrangement may reduce translation loss and shorten the time between observing an exception and testing a change. It is a management interpretation, not a conclusion established by the adoption surveys cited in this report.' },
          { text: 'Large organisations retain important advantages: capital, specialist teams, data, procurement leverage and formal controls. Smaller firms compete only when leadership proximity produces faster, better decisions rather than informal changes with weak evidence.' },
          { text: 'The group in the opening scene therefore needs more than permission to experiment. It needs to know whether AI is already producing measurable benefits in comparable firms and what those findings do, and do not, imply for its own workflow.' },
        ],
      },
      {
        heading: 'SME adoption evidence',
        transition: 'Management proximity is only a hypothesis; adoption and workforce data indicate how much real opportunity it may contain.',
        purpose: 'Use the strongest SME evidence to define the opportunity and its limits.',
        paragraphs: [
          { text: 'An OECD survey across seven countries found generative AI in use at 31 percent of SMEs. Among users, 65 percent reported improved employee performance and 39 percent of those with a recent skills gap said the technology helped compensate. At the same time, 83 percent reported no change in overall staffing need. These are reported experiences, not measured productivity magnitudes.', sources: [oecdWorkforce] },
          { text: 'The evidence establishes that AI is accessible to smaller firms and is often perceived as useful. It does not establish that small firms outperform large firms, that jobs will disappear or that a particular workflow will produce a positive return. Management should read the findings as permission to test a focused hypothesis, not as a forecast.' },
          { text: 'For the five-person group, the implication is augmentation rather than abstract transformation. The next task is to identify one recurring constraint where better preparation, interpretation or coordination would release visible capacity or quality.' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 0 }],
      },
      {
        heading: 'Focused workflow advantage',
        transition: 'Broad adoption data cannot prove advantage for one firm, so the next section defines the focused workflow test that can.',
        purpose: 'Explain why portfolio concentration is the mechanism behind the thesis.',
        paragraphs: [
          { text: 'A broad tool rollout distributes attention across functions and produces little shared learning. A focused portfolio begins with one constraint that is frequent, material and measurable. Leadership must also state what will not be pursued, because every additional pilot competes for the same process expertise, data ownership and review capacity.' },
          { text: 'UK research reinforces the readiness problem. Just over half of current AI users said they felt ready to scale, while roughly one third of prospective adopters felt ready to implement. The figures do not prescribe a delivery model, but they show that access to tools has moved faster than organisational confidence.', sources: [ukAdoption] },
          { text: 'The opening group should therefore define an outcome, create a baseline and release the smallest complete workflow that can test it. A short decision line is useful only when each decision leaves evidence for the next one.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 1 }, { kind: 'system', afterParagraph: 2 }],
      },
      {
        heading: 'Capacity and governance constraints',
        role: 'counterargument',
        transition: 'A focused workflow may exploit proximity, but the analysis must account for scarce capacity, weak controls and concentration risk.',
        purpose: 'Test the thesis against the strongest constraints facing smaller firms.',
        paragraphs: [
          { text: 'The counterargument is substantial. Smaller firms often have weaker data, fewer specialist reviewers and little redundancy when one person becomes a bottleneck. Close customer knowledge may remain in memory rather than records. Speed can also bypass privacy, security or acceptance decisions that a larger organisation is forced to formalise.' },
          { text: 'The answer is not to imitate enterprise bureaucracy. It is to name the minimum owners before build: a sponsor for the result, a process owner for the work, a data owner for permitted context and a technical owner for the service. Each release should end with an expand, adjust, hold or stop decision.' },
          { text: 'If the same technical specialist must rescue every exception, the pilot has not created leverage. It has concentrated operational risk. Reusable evaluation cases, access patterns, logging and training are therefore part of the first product, not administrative work left for later.' },
        ],
      },
      {
        heading: 'Repeatable decision cell',
        role: 'conclusion',
        transition: 'Once capacity and governance constraints are included, the small-firm advantage can be stated as a repeatable operating process rather than a size claim.',
        purpose: 'Resolve the opening meeting as a disciplined operating choice.',
        paragraphs: [
          { text: 'The five people around the table should leave with one selected workflow, one accountable outcome and one not-now list. They should agree the evidence required for a bounded release and the conditions that would stop it. That is a more defensible advantage than merely being able to approve software quickly.' },
          { text: 'If the release improves the outcome, its evaluation cases, data decisions, controls and operating lessons should be reused. If it fails, the same decision process should redirect attention without defending sunk cost. Learning speed includes the ability to stop.' },
          { text: 'A smaller firm does not win because its organisation chart is short. It wins when proximity produces a dense cycle of evidence and decision, while delivery becomes systematic enough to repeat. The meeting in the opening scene creates value only when that discipline survives after everyone leaves the room.' },
        ],
      },
    ],
  },
  'measure-automation-value': {
    title: 'Automation value is easy to calculate and hard to realise',
    standfirst: 'Multiplying theoretical minutes saved by salary produces an attractive number and a weak business case. Credible value measurement begins with a counterfactual, includes exception effort and distinguishes released capacity from cash.',
    thesis: 'Automation should be judged through a transparent benefits ledger that connects operating change to financial consequence and records the confidence behind each claim.',
    sceneLabel: 'Composite investment-review vignette',
    sceneTitle: 'The programme reports 100 hours saved. Finance cannot find a single pound',
    sceneParagraphs: [
      'The calculation is familiar. A task once took ten minutes, the new workflow takes five and monthly volume is 1,200. The programme reports 100 hours saved and multiplies the result by salary. The number is precise, positive and disconnected from what happened next.',
      'Employees may have used only part of the system, reviewed difficult outputs or spent the released time on activity whose contribution was never measured. Cost did not leave the budget and capacity was not deliberately redeployed. The technology may still be valuable, but the financial claim has moved ahead of the evidence.',
    ],
    sections: [
      {
        heading: 'Counterfactual benefit baseline',
        purpose: 'Establish the operating baseline against which change can be judged.',
        paragraphs: [
          { text: 'The first question for the investment committee is what would have happened without the release. A representative baseline should cover eligible volume, elapsed time, hands-on effort, error, rework and service. One difficult week can flatter the project; staff estimates alone can create precision without a dependable denominator.' },
          { text: 'Where data is weak, the correct response is not to invent a stronger baseline. Management should record the uncertainty, identify the measures the pilot can improve and state the range of outcomes consistent with current knowledge.' },
          { text: 'The 100-hour claim assumes full adoption, stable demand and no new work. Once those assumptions are tested, how much of the theoretical saving remains available for the business to use?' },
        ],
      },
      {
        heading: 'Gross-to-net value bridge',
        transition: 'A credible counterfactual establishes gross change; the next section traces how that change is reduced before reaching economic value.',
        purpose: 'Trace the conversion from theoretical saving to operating and financial consequence.',
        paragraphs: [
          { text: 'The value bridge begins with eligible volume actually completed through the new process. Review, exception handling, support and workarounds reduce gross time released. The remainder is capacity, not cash. It becomes financial value only when cost is removed or avoided, or when the capacity is deliberately redirected to work with a measured contribution.' },
          { text: 'The graphic illustrates that logic using 100 theoretical hours. Its deductions are assumptions, not observed conversion rates. It establishes why management needs separate stages in the ledger; it does not predict that another project will convert 20 percent of gross time into cash.' },
          { text: 'In the opening case, finance could not find the saving because nobody owned the movement from released time to budget or output. Before assigning an owner, however, the committee must ask whether the original productivity assumption is credible for the target work.' },
        ],
        exhibits: [{ kind: 'evidence', view: 1, afterParagraph: 1 }],
      },
      {
        heading: 'Workflow-specific productivity evidence',
        transition: 'The gross-to-net bridge depends on local assumptions, so external productivity evidence must be tested for transferability.',
        purpose: 'Use conflicting field evidence to reject imported benefit percentages.',
        paragraphs: [
          { text: 'A large field study of customer-support agents found AI assistance increased issues resolved per hour by about 15 percent on average, with substantial differences between workers. A separate randomised study found experienced open-source developers took 19 percent longer with early-2025 tools on familiar repositories. The occupations, systems and research designs differ, so the figures should not be averaged or treated as competing model scores.', sources: [qjeStudy, metrStudy] },
          { text: 'Together they establish heterogeneity. AI can accelerate a well-matched workflow and impede work where context, verification or interruption outweighs assistance. They do not establish an expected return for the programme in the opening scene. That return must be measured in its own operating environment.' },
          { text: 'The committee should therefore replace the borrowed productivity percentage with observed eligible volume, accepted output, net effort and correction demand. Yet a narrow focus on cash could still miss legitimate reasons to invest.' },
        ],
        exhibits: [{ kind: 'evidence', view: 0, afterParagraph: 1 }],
      },
      {
        heading: 'Non-cash value conversion',
        role: 'counterargument',
        transition: 'Conflicting productivity studies limit imported savings claims, but they do not eliminate value that converts through quality, capacity or risk.',
        purpose: 'Address the strongest counterargument to a strict financial conversion test.',
        paragraphs: [
          { text: 'Quality, service, resilience and risk can matter even when headcount or budget does not change. Faster response may improve conversion; fewer errors may reduce remediation; stronger evidence may lower the probability or consequence of control failure. Rejecting these effects because they are not immediate cash would produce an artificially narrow investment case.' },
          { text: 'The discipline is to keep benefit types separate. DSIT found 56 percent of current AI users reporting higher employee productivity while 77 percent reported no revenue change. These self-reported findings do not prove that productivity failed to create value, but they illustrate why an operating improvement and a financial result should not be treated as the same event.', sources: [ukAdoption] },
          { text: 'Each material benefit needs a mechanism, an owner and disconfirming evidence. A service claim should identify the customer measure expected to move. A risk claim should identify the exposure and control. Management can then value the benefit without disguising it as salary removed.' },
        ],
        exhibits: [{ kind: 'system', afterParagraph: 2 }],
      },
      {
        heading: 'Investment continuation threshold',
        role: 'conclusion',
        transition: 'Once cash and non-cash benefits share an explicit causal chain, the benefits ledger can support a continuation decision.',
        purpose: 'Resolve the missing financial result through an owned review cadence.',
        paragraphs: [
          { text: 'The programme’s 100 hours should be restated as a hypothesis. Finance and the process owner should review the baseline, eligible adoption, net effort, quality, service and the named destination of any released capacity. Confidence should rise only as observed evidence replaces assumptions.' },
          { text: 'The review should conclude with one of four decisions: expand where the causal chain is working, adjust where a bottleneck is visible, hold where observation is insufficient, or stop where the result no longer justifies the operating cost. Measurement earns its cost when it changes that choice.' },
          { text: 'Finance could not find a pound because the original calculation ended at the automated task. A credible case follows the effect until it reaches an operating or financial consequence, then states honestly what remains unproven. A range supported by that chain is stronger than a precise saving that exists only on a slide.' },
        ],
      },
    ],
  },
};
