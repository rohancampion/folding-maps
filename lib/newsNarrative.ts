export type NewsNarrative = {
  sceneLabel: string;
  sceneTitle: string;
  sceneParagraphs: string[];
  analystLens: {
    upside: string;
    downside: string;
    signal: string;
  };
  conclusionTitle: string;
  conclusionParagraphs: string[];
};

export const newsNarrative: Record<string, NewsNarrative> = {
  'ai-integration-gap': {
    sceneLabel: 'Composite management vignette',
    sceneTitle: 'The licence dashboard is green. The operating dashboard has not moved',
    sceneParagraphs: [
      'Picture the monthly review at a 120-person services firm. Most employees have access to an AI assistant and weekly usage is rising. Yet customer-response time, first-time quality and work in progress look much as they did six months earlier. The chief financial officer asks a reasonable question: where, exactly, is the return?',
      'The answer is not that employees have done nothing useful. Many have improved a draft, summarised a call or researched a topic more quickly. The problem is that individual convenience has not altered the route by which work becomes an accepted outcome. The tool sits beside the operating system, so the organisation records activity without capturing the full economic effect.',
    ],
    analystLens: {
      upside: 'A firm that connects even a small number of high-volume workflows to trusted records can turn scattered personal gains into repeatable operating leverage.',
      downside: 'Integration programmes can become expensive plumbing exercises if leadership funds connectors before defining the decision, owner and measurable outcome.',
      signal: 'Watch accepted output per eligible workflow, not licences or prompts. A rising share of work completed through the governed process is the earliest credible sign of integration.',
    },
    conclusionTitle: 'The next adoption statistic should be operational',
    conclusionParagraphs: [
      'The market will continue to report how many firms use AI, but management teams need a stricter internal definition. A workflow is integrated when the system can obtain permitted context, produce a bounded contribution, route exceptions and leave evidence that supports review.',
      'That standard is less glamorous than a general rollout and more economically meaningful. It gives boards a way to distinguish experimentation from infrastructure and gives delivery teams a practical sequence: select the constraint, map the decision, connect the evidence and release against observed performance.',
    ],
  },
  'open-weight-price-war': {
    sceneLabel: 'Composite procurement vignette',
    sceneTitle: 'The model bill falls by 90 percent and the project still misses its budget',
    sceneParagraphs: [
      'A buyer replaces an expensive model with a cheaper alternative and expects the document-processing service to transform its economics. The inference invoice does fall. Then the operating review reveals longer exception queues, additional quality sampling and several weeks of engineering work to reproduce a provider-specific feature.',
      'Nothing about this result invalidates the price decline. It clarifies the unit of analysis. Models produce outputs, while businesses pay for accepted tasks. Between the two sit integration, retrieval, monitoring, review, failure recovery and the scarce attention of people able to judge difficult cases.',
    ],
    analystLens: {
      upside: 'Falling prices increase buyer leverage and make multi-model benchmarking economically practical for workflows that were previously too marginal to test.',
      downside: 'The apparent saving can be absorbed by review, self-hosting obligations or proprietary dependencies that are discovered only after the service is embedded.',
      signal: 'Track total cost per accepted task and the effort required to rerun the same evaluation against a second model. Together they reveal economics and portability.',
    },
    conclusionTitle: 'Cheaper intelligence rewards a more demanding buyer',
    conclusionParagraphs: [
      'The correct response to price competition is neither indiscriminate adoption nor permanent loyalty to one supplier. It is to build a stable application boundary, a representative evaluation set and a cost model that includes the work surrounding inference.',
      'Those assets convert a volatile model market into strategic option value. A firm can reserve expensive capability for high-consequence work, use smaller models where evidence supports them and change course without redesigning the entire operating process.',
    ],
  },
  'automation-before-agents': {
    sceneLabel: 'Composite operating vignette',
    sceneTitle: 'The agent completed the task exactly as instructed. The customer still received the wrong answer',
    sceneParagraphs: [
      'In the demonstration, an agent reads an enquiry, updates the customer record and prepares a response. In live operation, the record contains two addresses, the latest policy is attached to an old email and a credit hold is known only to the finance team. The agent follows the visible path and misses the organisation’s invisible one.',
      'A colleague would probably pause and ask. That pause contains tacit knowledge: the sign that the case is unusual, the person who knows the exception and the consequence of proceeding. An autonomous system cannot inherit this judgement until the workflow makes the evidence, authority and escalation route explicit.',
    ],
    analystLens: {
      upside: 'Well-bounded agents can remove coordination work across several systems once inputs, tools and exception routes are stable.',
      downside: 'Broad tool access magnifies unclear policy, and nominal human approval can become a rubber stamp when reviewers face high volume or weak evidence.',
      signal: 'Measure safe completion and manual rescue together. Rising completion with flat or falling rescue effort supports greater authority; either measure alone can mislead.',
    },
    conclusionTitle: 'Autonomy is a credit limit, not a product feature',
    conclusionParagraphs: [
      'Banks do not grant unlimited authority because a borrower completed one successful transaction. They expand it against evidence, controls and observed behaviour. Agentic systems deserve the same logic. Drafting, recommending and acting are different mandates with different consequences.',
      'The practical route is incremental. Repair the workflow, automate deterministic steps, give the model the narrow interpretive task and preserve an exception route. More autonomy can follow when representative evaluation and live evidence justify it.',
    ],
  },
  'cold-chain-collaboration': {
    sceneLabel: 'Illustrative operating vignette',
    sceneTitle: 'A temperature excursion lasts eight minutes. The commercial consequence could last much longer',
    sceneParagraphs: [
      'An overnight operator sees a threshold breach. The number alone cannot explain whether a loading door opened, a unit entered defrost, a probe lost calibration or sensitive product faced a genuine excursion. Several systems hold fragments of the answer, while the response expectation depends on severity that has not yet been established.',
      'This is why cold-chain analytics should be judged at the point of decision. The value does not come from generating more alerts. It comes from assembling trustworthy evidence quickly enough for a named person to choose and record the correct response.',
    ],
    analystLens: {
      upside: 'An exception-led service can redirect skilled attention from routine compilation to material events while creating a stronger evidence record for learning and assurance.',
      downside: 'Weak telemetry, excessive alert volume or new connectivity into operational equipment can increase risk while making the system appear more sophisticated.',
      signal: 'Alert precision and unassigned exception age should move together. Faster acknowledgement is not useful if material cases remain noisy or ownerless.',
    },
    conclusionTitle: 'The commercial product is accountable response',
    conclusionParagraphs: [
      'Sensors, dashboards and models are components. The operating product is a trustworthy path from physical signal to corrective evidence. Each link needs an owner, a test and a visible failure state.',
      'The collaboration should therefore progress from asset truth to exception policy, then response workflow and controlled pilot. That sequence keeps the software anchored to the physical estate and to the people who remain responsible for it.',
    ],
  },
  'small-teams-ai-advantage': {
    sceneLabel: 'Composite SME vignette',
    sceneTitle: 'Five people around one table can resolve a question that takes five committees elsewhere',
    sceneParagraphs: [
      'A customer-service lead describes a recurring exception. The managing director understands its commercial cost, the operations manager owns the process and the technical specialist can test a change that afternoon. No one needs to translate the problem through several layers before a decision is made.',
      'This proximity is not automatically an AI advantage. The same firm may lack clean data, spare management capacity and specialist engineering. Its edge appears only when short decision lines are used to concentrate attention on one operating constraint rather than scatter experimentation across every function.',
    ],
    analystLens: {
      upside: 'A focused SME can learn quickly, preserve customer context and turn one release into reusable data, evaluation and governance assets.',
      downside: 'Scarce expertise becomes a bottleneck when too many pilots start at once or when critical knowledge remains in one person’s head.',
      signal: 'Watch time from a material question to a decision backed by operating evidence. Shorter cycles with stable quality indicate genuine learning speed.',
    },
    conclusionTitle: 'The advantage compounds only when the learning is reusable',
    conclusionParagraphs: [
      'A successful pilot should leave more than a useful application. It should improve the organisation’s ability to select use cases, govern context, evaluate performance and stop weak ideas. Those capabilities lower the cost of the next decision.',
      'The smaller firm wins by remaining small in its decision process while becoming systematic in delivery. Focus, not informality, is the source of speed.',
    ],
  },
  'measure-automation-value': {
    sceneLabel: 'Composite investment-review vignette',
    sceneTitle: 'The programme reports 100 hours saved. Finance cannot find a single pound',
    sceneParagraphs: [
      'The calculation is familiar. A task once took ten minutes, the new workflow takes five and monthly volume is 1,200. The slide reports 100 hours saved and multiplies that figure by salary. The number is precise, positive and disconnected from what happened next.',
      'Employees may have used only part of the system, reviewed difficult outputs or spent the released time on activity whose contribution was never measured. Cost did not leave the budget and capacity was not deliberately redeployed. The technology may still be valuable, but the claimed financial result has outrun the evidence.',
    ],
    analystLens: {
      upside: 'A transparent benefits ledger can expose capacity, quality, service and risk improvements that a narrow labour-saving case would miss.',
      downside: 'Weak baselines, excluded exception effort and unowned redeployment allow gross theoretical savings to accumulate without operating or financial consequence.',
      signal: 'Track eligible volume completed through the new process, net effort after review and the named destination of released capacity. Value needs all three.',
    },
    conclusionTitle: 'A credible range is stronger than an invented point estimate',
    conclusionParagraphs: [
      'Investment committees do not need perfect certainty before funding a pilot. They need a causal chain, a representative baseline and a clear statement of what evidence would increase or reduce confidence. Sensitivity is information, not embarrassment.',
      'The benefits review should end with a management decision: expand, adjust, hold or stop. Measurement earns its cost when it changes that decision, not when it merely decorates the original business case.',
    ],
  },
};
