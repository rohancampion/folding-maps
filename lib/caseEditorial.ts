export type CaseEditorial = {
  sceneLabel: string;
  openingTitle: string;
  openingParagraphs: string[];
  centralQuestion: string;
  turningTitle: string;
  turningParagraphs: string[];
  closingTitle: string;
  closingParagraphs: string[];
};

export const caseEditorial: Record<string, CaseEditorial> = {
  'yacht-operations': {
    sceneLabel: 'A representative moment from discovery',
    openingTitle: 'The status meeting should not begin with a search',
    openingParagraphs: [
      'A customer asks for an update. The answer exists, but not in one place. A recent email contains the commercial promise, a document holds the project detail and a colleague remembers the latest change. Nobody is careless. The operating system simply asks people to reconstruct the truth each time it is needed.',
      'That reconstruction is tolerable when the business is small and the same few people carry every journey in their heads. Growth changes the arithmetic. Each new customer, handoff and service variation adds another dependency on memory. Personal service remains the advantage, but the coordination required to sustain it becomes a hidden tax on the people delivering it.',
    ],
    centralQuestion: 'Can the business create one dependable operating view without turning a specialist customer journey into a generic CRM process?',
    turningTitle: 'The design turned when the team stopped asking which tool to buy',
    turningParagraphs: [
      'The useful discovery question was not where to store a contact. It was what the team must know to make the next good decision. Following live journeys exposed four connected layers: the customer context, the project state, the next accountable action and the evidence management needs before intervening.',
      'This reframed the system as an operating record rather than a software catalogue. Automation could then be introduced selectively. A reminder or field movement can be deterministic. A client-facing draft can be assisted, but the person who owns the relationship retains release authority. The architecture follows the service promise rather than forcing the service to follow the software.',
    ],
    closingTitle: 'The first release has one job: make the shared record trusted',
    closingParagraphs: [
      'The investment case does not depend on a dramatic labour-saving claim. It rests on fewer searches, fewer unowned actions and a faster route to an accurate client update. Those effects should be observed before the programme adds broader reporting or AI features.',
      'Because the engagement remains in progress, the decisive evidence is still ahead. The next milestone is not a feature count. It is whether colleagues choose the shared view during real work and whether that view reduces coordination while preserving the judgement and personal attention that made the business successful.',
    ],
  },
  'cold-chain': {
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'At 02:13, an alert arrives. The temperature number is the easy part',
    openingParagraphs: [
      'A sensor reports an excursion. The overnight operator can see the value, but still needs to know whether the door was open, whether the unit was defrosting, which product is nearby, whether the sensor is healthy and whether another reading confirms the pattern. The decision clock starts before the evidence has assembled itself.',
      'This is the gap between telemetry and control. Cold-chain estates can produce millions of readings, yet operational assurance still depends on a much smaller number of moments in which somebody must decide whether to inspect, escalate, isolate or close. More data does not automatically make those moments clearer.',
    ],
    centralQuestion: 'How can continuous telemetry focus human attention on material exceptions without creating alert fatigue or hiding weak evidence?',
    turningTitle: 'The useful unit of design is an exception case, not an alert',
    turningParagraphs: [
      'An alert says that a threshold was crossed. An exception case explains the duration, data quality, asset state, product context, applicable policy and prior response. It also makes missing evidence explicit. That richer object gives an operator something reviewable and gives management something auditable.',
      'The distinction changes the technology plan. Signal validation comes before severity classification. Monitoring remains separated from equipment control. Threshold changes are versioned. Closure requires corrective evidence rather than a free-text acknowledgement. Each choice reduces the risk that apparent automation merely transfers ambiguity to the person on duty.',
    ],
    closingTitle: 'The pilot should prove attention quality before promising efficiency',
    closingParagraphs: [
      'The first economic benefit is likely to be a better allocation of skilled attention. Staff spend less time compiling routine evidence and more time resolving the cases that matter. That hypothesis should be tested through alert precision, response ownership, closure completeness and reporting effort.',
      'This remains an illustrative engagement pattern, not a measured client result. A responsible pilot would run beside the existing control process, replay historic events and preserve the operator’s hazard analysis, maintenance responsibilities and legal obligations throughout.',
    ],
  },
  'property-pipeline': {
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'The Friday pipeline can look healthy until one missing document changes the week',
    openingParagraphs: [
      'A transaction has accumulated calls, emails and document versions. Activity is high, so the pipeline entry appears to be progressing. Then a reviewer asks for the evidence supporting the current stage. A missing approval surfaces, the timetable moves and several people begin reconstructing what they thought had already been settled.',
      'Property work is vulnerable to this distinction between activity and progress. Messages create movement, but only evidence-backed decisions move a transaction safely toward completion. When documents, dates and actions sit in separate systems, the earliest warning signal is often visible only in hindsight.',
    ],
    centralQuestion: 'Can a transaction workspace expose missing evidence early enough to protect the timetable without burdening professionals with another reporting process?',
    turningTitle: 'The pipeline becomes useful when each stage has a test',
    turningParagraphs: [
      'A stage gate states what must be true before progression: which documents are current, which facts are confirmed, who has approved the decision and which dependency remains open. The gate converts the pipeline from a description of sentiment into a record of readiness.',
      'Once daily work and management reporting draw from the same transaction record, a second benefit appears. Weekly review no longer requires a parallel status-production exercise. Leaders can focus on exceptions, age and dependency rather than debating which spreadsheet contains the latest version.',
    ],
    closingTitle: 'The investment case depends on earlier visibility, not a larger CRM',
    closingParagraphs: [
      'The most valuable improvement may be a risk identified several days earlier, before it threatens completion. That is why a pilot should measure missing-document age, stage reversals, late escalations and the effort needed to produce a trusted review.',
      'The case remains illustrative. A sensible release would start with one repeatable transaction type, keep extracted fields as proposals until confirmation and broaden scope only when users trust the evidence model under live variation.',
    ],
  },
  'professional-services-intake': {
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'A promising referral arrives with just enough information to create work',
    openingParagraphs: [
      'The email identifies the prospective client and hints at urgency, but omits facts needed for conflict, eligibility and service routing. A senior professional opens the message, searches for earlier correspondence and asks an assistant to collect the missing pieces. Expertise is being used, but much of it is reconstructive rather than advisory.',
      'This is common in specialist services because the intake channel is designed for human conversation rather than controlled decision-making. The commercial instinct is to respond quickly. The professional obligation is to respond on a complete and permitted basis. A good system must shorten the route between those two requirements without pretending they are the same.',
    ],
    centralQuestion: 'How can a firm improve speed and consistency before professional review while keeping mandatory controls and acceptance decisions outside the model?',
    turningTitle: 'The decisive boundary separates preparation from judgement',
    turningParagraphs: [
      'Structured capture and deterministic controls can establish whether required facts are present and whether the matter may proceed to review. A language model can then prepare a concise brief from approved fields. Neither function should accept the instruction or reinterpret a failed control.',
      'That boundary makes the reviewer’s task clearer. Original evidence, structured facts, unanswered questions and the generated draft appear together. The professional can challenge the summary, trace a claim to its source and record an attributable decision rather than approving an opaque conclusion.',
    ],
    closingTitle: 'Faster triage is valuable only if control integrity survives',
    closingParagraphs: [
      'The pilot should measure time to first substantive decision, clarification demand, reclassification and material summary corrections. A shorter intake queue is not success if work simply accumulates at professional acceptance or if reviewers search the original evidence because the brief cannot be trusted.',
      'This is an illustrative design, not a completed legal or advisory implementation. Data classification, retention, model routing and conflict policy would need to reflect the firm’s actual obligations and be reviewed by accountable professionals before release.',
    ],
  },
  'field-service-planning': {
    sceneLabel: 'Illustrative operating vignette',
    openingTitle: 'At 07:10, one urgent job changes a plan that took an hour to assemble',
    openingParagraphs: [
      'The dispatcher has balanced skills, locations, promised appointments, parts and working-hour limits. Then an urgent job appears. A spreadsheet can show the rows, but it cannot easily explain which commitment should move, which engineer remains eligible or how much disruption each option creates.',
      'The temptation is to describe this as a routing problem. In practice it is a portfolio of competing operating promises. Safety and certification are hard constraints. Service, travel, priority and plan stability are objectives that must be balanced. A system that optimises only distance can produce an efficient route and a poor service day.',
    ],
    centralQuestion: 'Can a planning layer generate feasible options and explain the trade-offs while leaving dispatchers in control of the published day?',
    turningTitle: 'The plan improves when hard rules are separated from preferences',
    turningParagraphs: [
      'The solver should first remove assignments that violate skills, availability, safety or parts requirements. Only feasible options should reach the scoring stage. The dispatcher can then see how service, priority, travel and stability affect the recommendation rather than being told that an opaque optimum has been found.',
      'Overrides are not a failure of automation. They are evidence about missing constraints, inaccurate durations or local knowledge. Capturing the reason allows the system and the operating policy to improve together. Ignoring overrides guarantees that the same unsuitable recommendation will return.',
    ],
    closingTitle: 'Shadow planning should precede operational dependence',
    closingParagraphs: [
      'A controlled pilot would run recommendations beside the live plan and compare feasibility, travel, service, overtime and in-day churn. The purpose is to understand the trade-offs, not to select whichever metric makes the system look most successful.',
      'This case is illustrative. Before a live release, representative work-order data would need profiling, constraint owners would need to agree the rules and planners would need an explicit route to reject or amend recommendations without losing accountability.',
    ],
  },
};
