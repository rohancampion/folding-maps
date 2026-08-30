export type ServiceItem = {
  title: string;
  detail: string;
};

export type ServiceSection = {
  title: string;
  paragraphs: string[];
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
  applications: ServiceItem[];
  serviceSections: ServiceSection[];
  decisions: ServiceItem[];
  results: ServiceItem[];
  expertise: string[];
};

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

const serviceCatalogue: Omit<Service, 'number'>[] = [
  {
    slug: 'ai-strategy',
    group: 'Advise',
    title: 'AI Strategy & Readiness',
    shortTitle: 'AI strategy',
    promise: 'A board-ready choice between competing AI investments, with the result, cost limit and stop condition stated for each option.',
    summary: 'Senior advice for leaders comparing AI investments, deciding the future of a stalled pilot or setting a budget across several proposals.',
    explanation: 'Leadership teams need a common commercial case for ideas that arrive with different claims and levels of support. Quiet Gears gives the board a comparable view of the business problem, proposed result, cost limit, practical constraints and exposure attached to each option. Directors choose the investment to fund and set the condition for continued spend.',
    applications: [
      {
        title: 'Competing investment choices',
        detail: 'Several departments have credible proposals, but each uses different claims about cost, capacity and customer benefit. Leadership needs one comparison that exposes assumptions and directs limited funds towards the strongest commercial case.',
      },
      {
        title: 'Stalled pilot decision',
        detail: 'A demonstration has attracted support but has not settled the questions that matter to daily use. Leaders need to decide whether to fund a bounded release, revise the concept or close the work before further expense.',
      },
      {
        title: 'Board investment case',
        detail: 'A board wants a credible account of value, exposure and internal effort before approval. The case must separate capacity, cash, quality and service effects so directors can judge each claim on its merits.',
      },
    ],
    serviceSections: [
      {
        title: 'Investment economics',
        paragraphs: [
          'Advisers state the current cost, delay, service failure or growth constraint in figures the business can defend. Leaders set a result and budget ceiling for each option.',
          'Advisers assess capacity and cash separately from quality and revenue. Finance can distinguish lower expenditure from released staff time and benefits that depend on further commercial choices.',
        ],
      },
      {
        title: 'Comparative choices',
        paragraphs: [
          'Every proposal faces the same questions about task demand, business value, user need, source quality, company access and continuing cost. Directors can identify options that depend on generous assumptions or unresolved authority.',
          'The board receives a ranked choice with the reason for each position. The comparison also identifies suitable service forms, including a managed platform, process automation or a focused custom application.',
        ],
      },
      {
        title: 'Constraints requiring budget',
        paragraphs: [
          'Advisers identify gaps in access, source quality, staff capability and control that need money or executive action. They place each constraint beside the affected investment and state its cost and decision impact.',
          'This view prevents hidden preparation costs from appearing after approval. It also shows leadership which proposals can proceed under current capability and which depend on a separate company investment.',
        ],
      },
      {
        title: 'Board recommendation',
        paragraphs: [
          'For the recommended proposal, Quiet Gears states the budget limit and required business result. Directors and control functions can inspect the assumptions and supplier dependencies.',
          'Advisers give each deferred or closed proposal a short decision reason. Procurement, finance and operating leaders can act on the board position without translating a vendor presentation.',
        ],
      },
    ],
    decisions: [
      { title: 'Investment priority', detail: 'Choose the proposal with the strongest quantified business result within the available budget.' },
      { title: 'Service form', detail: 'Select a managed platform, process automation or custom application against the task requirement.' },
      { title: 'Constraint budget', detail: 'Fund the access, source quality, capability or control work required by the approved proposal.' },
      { title: 'Stop condition', detail: 'Set the measured result and spending threshold that governs continuation, revision or closure.' },
    ],
    results: [
      { title: 'Spend tied to value', detail: 'Measure the share of proposed spend attached to a quantified benefit, budget limit and review date.' },
      { title: 'Speculative spend avoided', detail: 'Count proposals closed or deferred before licence, supplier or build costs become material.' },
      { title: 'Decision time', detail: 'Measure elapsed time from the first leadership review to an approved, deferred or closed proposal.' },
      { title: 'Review discipline', detail: 'Compare each approved value claim with the measured change at the board review date.' },
    ],
    expertise: ['Commercial assessment', 'Investment appraisal', 'AI service design', 'Risk and readiness review'],
  },
  {
    slug: 'workflow-automation',
    group: 'Build',
    title: 'AI Process Automation',
    shortTitle: 'Process automation',
    promise: 'Lower cost and shorter delay for high-volume administration.',
    summary: 'Automation for repeated business tasks that consume staff time through routine checking, copying and assignment.',
    explanation: 'Repeated administration becomes expensive as volume grows. Staff copy the same information, apply routine checks and search a mixed queue for the cases that need judgement. Quiet Gears automates the stable work, prepares exceptions for the authorised person and connects the company services needed for completion. The investment rests on cost per accepted item, elapsed time, staff touches and the age of unresolved exceptions.',
    applications: [
      {
        title: 'Enquiry handling',
        detail: 'Sales or service teams spend the start of each enquiry reading messages, identifying the request, copying details and assigning a colleague. Automation can prepare routine enquiries for a prompt response and reserve staff attention for ambiguous cases.',
      },
      {
        title: 'Finance administration',
        detail: 'Finance teams check high volumes of invoices, expenses or purchase requests that follow stable rules. The service can complete routine checks and present discrepancies to the person authorised to decide them.',
      },
      {
        title: 'Document-led operations',
        detail: 'Staff read forms, certificates or supplier documents to capture key facts and update business systems. Automation can prepare the required information, apply validation rules and separate uncertain material for review.',
      },
    ],
    serviceSections: [
      {
        title: 'Current task economics',
        paragraphs: [
          'Consultants quantify demand, staff effort, elapsed time, rework and the cost of common failures for one repeated task. Managers set a clear standard for accepted completion so labour savings cannot hide correction work in another team.',
          'Management receives a baseline for cost per item and the age of outstanding work. The baseline distinguishes routine preparation from the judgement that still requires an authorised employee.',
        ],
      },
      {
        title: 'Routine completion',
        paragraphs: [
          'Managers approve stable rules for calculations, required information and approval limits. Quiet Gears uses bounded AI assistance for narrow interpretation of varied documents or incoming messages.',
          'The automation completes approved updates across the company services involved in the task. Staff receive prepared exceptions with the material needed for a decision.',
        ],
      },
      {
        title: 'Exceptions and service cost',
        paragraphs: [
          'Managers can see the number, age and cause of items that need staff attention. This exposes transferred effort and helps the business decide whether a rule, source or service change will reduce cost.',
          'Support from Quiet Gears covers interrupted requests and controlled rule changes under one service arrangement. Managers can see service interruptions, recovery effort and the effect of each change alongside the unit cost of accepted work.',
        ],
      },
    ],
    decisions: [
      { title: 'Automation boundary', detail: 'Select the repeated cases that the service can complete and the exceptions that require staff judgement.' },
      { title: 'Approval authority', detail: 'Set the financial, customer and operational choices that remain with a named role.' },
      { title: 'Platform choice', detail: 'Choose a managed automation product, integration service or custom component against support and scale needs.' },
      { title: 'Expansion test', detail: 'Use accepted completion, correction effort and service reliability to judge any broader use.' },
    ],
    results: [
      { title: 'Shorter completion time', detail: 'Track elapsed time from receipt to accepted completion for the selected task.' },
      { title: 'Fewer staff touches', detail: 'Count manual interventions per accepted item and separate review from material judgement.' },
      { title: 'Smaller exception backlog', detail: 'Track the number, cause and age of items awaiting staff judgement or correction.' },
      { title: 'Lower cost per accepted item', detail: 'Combine staff effort, correction, supplier use and support cost for completed work.' },
    ],
    expertise: ['Business process analysis', 'Automation engineering', 'System integration', 'Service assurance'],
  },
  {
    slug: 'claude-implementation',
    group: 'Build',
    title: 'Managed AI Platform',
    shortTitle: 'Managed AI platforms',
    promise: 'One company AI platform tied to useful work in defined staff roles.',
    summary: 'Vendor-neutral selection and implementation of Claude, ChatGPT, Perplexity or a managed API service for specific business tasks.',
    explanation: 'Personal accounts and scattered licences create inconsistent work and little basis for judging value. Quiet Gears compares managed platforms against representative tasks in commercial, finance, service and operating roles. The selected company service includes approved source material, controlled access and a support arrangement. Role-level task results and licence cost give leaders the basis for continued spend.',
    applications: [
      {
        title: 'Managed company access',
        detail: 'Staff already use personal or departmental accounts for business tasks. A company platform can bring access, administration, retention choices and support under one approved arrangement.',
      },
      {
        title: 'Role-specific staff support',
        detail: 'Commercial, finance, service or operating teams have repeated tasks that suit a managed assistant. Task quality and correction effort provide the sound basis for platform choice.',
      },
      {
        title: 'Company knowledge access',
        detail: 'Staff need help finding and applying approved policy, product, client or technical material. A managed platform can give suitable groups access to the right sources under existing company permissions.',
      },
    ],
    serviceSections: [
      {
        title: 'Role-level task value',
        paragraphs: [
          'Leaders select a small set of tasks for each intended role and state the present preparation time and accepted standard. Commercial research and finance commentary need different sources and quality checks.',
          'Representative work provides the case for platform spend. Leaders can see which roles gain useful capacity and which tasks still demand the same level of staff correction.',
        ],
      },
      {
        title: 'Platform choice',
        paragraphs: [
          'The same staff tasks provide a direct test of Claude, ChatGPT, Perplexity and managed API options. Advisers compare accepted output, correction time, source support, company terms and continuing cost under the client\'s current plan choices.',
          'Each proposed licence category links to a staff role and business task. Direct task performance, company terms and total cost determine the recommendation.',
        ],
      },
      {
        title: 'Company access and service assurance',
        paragraphs: [
          'Company administrators control access by staff role and approved source. Quiet Gears applies the client\'s retention and regional processing choices under the current supplier contract.',
          'Administrators receive one support remit for access, licence assignment, source issues and supplier changes. Staff can report weak output or information concerns through a defined company route.',
        ],
      },
      {
        title: 'Licence economics',
        paragraphs: [
          'Managers compare active use with accepted task quality, preparation time and correction effort. This links licence cost to useful work and exposes seats that contribute no measurable staff capacity.',
          'Leaders set review measures for each role and licence group. They can reassign or cancel unused capacity and reserve custom software spend for tasks that a managed platform cannot support.',
        ],
      },
    ],
    decisions: [
      { title: 'Platform and plan', detail: 'Select the product and subscription level that meets task, administration, information and cost requirements.' },
      { title: 'Approved users and tasks', detail: 'Define the roles, business uses and source material covered by company approval.' },
      { title: 'Connected services', detail: 'Approve company files and applications after access, action and support responsibilities are clear.' },
      { title: 'Licence policy', detail: 'Set allocation, review, reassignment and cancellation criteria against useful task activity.' },
    ],
    results: [
      { title: 'Lower task preparation time', detail: 'Compare staff time for the approved role tasks before and after platform use.' },
      { title: 'Consistent task quality', detail: 'Measure accepted output, material errors and correction effort for each role.' },
      { title: 'Licence cost per useful task', detail: 'Connect supplier spend with active use and accepted work in the approved task set.' },
      { title: 'Manageable company support', detail: 'Track access administration, unresolved requests and source issues by role group.' },
    ],
    expertise: ['Platform selection', 'Company access design', 'Knowledge preparation', 'Licence value review'],
  },
  {
    slug: 'chatgpt-training-for-teams',
    group: 'Embed',
    title: 'AI Training for Teams',
    shortTitle: 'AI training',
    promise: 'Practical staff capability tied to the quality of real business tasks.',
    summary: 'Role-specific training for leaders and staff using approved AI products in day-to-day business work.',
    explanation: 'General demonstrations can raise interest without improving performance. Quiet Gears builds training around the tasks each role needs to complete, the source checks that protect quality and the information rules that govern use. Participants practise with realistic material, managers see the standard required for competent work and leaders receive a sound basis for further capability investment.',
    applications: [
      {
        title: 'Team task improvement',
        detail: 'Staff have access to an approved product but use it with uneven results. Role-specific practice can improve drafting, analysis, research or preparation tasks that managers can inspect and measure.',
      },
      {
        title: 'Leadership decision capability',
        detail: 'Directors and senior managers need enough practical understanding to assess proposals, challenge benefit claims and set sensible limits. A decision-focused session uses the choices leaders face in the organisation.',
      },
      {
        title: 'Manager review capability',
        detail: 'Managers need a consistent standard for work completed with AI support. Practical marking guidance helps them assess quality, identify weak claims and direct staff development.',
      },
    ],
    serviceSections: [
      {
        title: 'Role-specific task lab',
        paragraphs: [
          'Each participant group receives a practical lab built around one or two approved business tasks. Finance may work on variance commentary, while a commercial group may prepare account research from permitted sources.',
          'A baseline task establishes the starting quality and staff time. The lab concentrates on producing an acceptable result under the company\'s rules, with approved or synthetic material suited to the role.',
        ],
      },
      {
        title: 'Manager marking standard',
        paragraphs: [
          'Managers receive a concise standard for accuracy, source support, material omissions and information handling. It gives them a consistent means to assess AI-assisted work alongside existing professional expectations.',
          'Completed participant tasks receive direct feedback against that standard. Correction minutes and material errors show the gap between confident product use and competent business work.',
        ],
      },
      {
        title: 'Leadership decision session',
        paragraphs: [
          'Directors and senior managers use current company proposals to assess capability, commercial claims, human judgement and control needs. They learn to challenge investment requests in the terms the board needs.',
          'Leadership leaves with a practical question set for product, training and service proposals. Quiet Gears bases the material on decisions due during the next investment period.',
        ],
      },
      {
        title: 'Thirty-day capability check',
        paragraphs: [
          'Participants repeat a representative task after thirty days using the same accepted standard. Managers use the comparison to assess retained capability, current correction effort and support needs.',
          'Quiet Gears provides focused clinics for gaps exposed by completed work. Product or policy changes enter the role guide after they affect an approved task.',
        ],
      },
    ],
    decisions: [
      { title: 'Priority capability', detail: 'Select the roles and tasks with a useful, inspectable result that training can improve.' },
      { title: 'Competence standard', detail: 'Define the quality, source checking and information handling expected from participants.' },
      { title: 'Support structure', detail: 'Choose the manager and specialist support required for the tasks covered by training.' },
      { title: 'Further investment', detail: 'Use demonstrated task improvement to decide whether to extend training to another role.' },
    ],
    results: [
      { title: 'Task-standard attainment', detail: 'Measure the share of participants meeting the accepted standard after thirty days.' },
      { title: 'Stronger error detection', detail: 'Count material errors and unsupported claims that participants identify before submission.' },
      { title: 'Lower manager correction time', detail: 'Compare manager or specialist correction minutes for the tasks taught.' },
      { title: 'Safe information handling', detail: 'Assess participant decisions on sensitive material and approved company sources.' },
    ],
    expertise: ['Role capability assessment', 'Practical facilitation', 'Quality review', 'Leadership briefings'],
  },
  {
    slug: 'ai-chatbot',
    group: 'Build',
    title: 'Conversational AI',
    shortTitle: 'Conversational AI',
    promise: 'Useful text and voice support for repeated customer or staff requests.',
    summary: 'Text, messaging and voice services that resolve bounded requests and transfer sensitive cases to staff with useful context.',
    explanation: 'Support teams often answer the same policy, product, booking and service questions across several channels. Quiet Gears builds conversational services around maintained company sources, explicit action limits and a staffed transfer route. Managers judge the service through resolved requests, repeat contact, answer quality, successful transfers and customer effort.',
    applications: [
      {
        title: 'Customer support',
        detail: 'A service team handles high volumes of repeated product, delivery or policy questions. Conversational support can answer bounded requests from approved company material and transfer ambiguous cases to a suitable colleague.',
      },
      {
        title: 'Appointment services',
        detail: 'Front desks receive repeated calls for booking, rescheduling and preparation information. A voice or messaging service can support approved appointment tasks with identity, consent and confirmation controls.',
      },
      {
        title: 'Staff service desk',
        detail: 'Employees ask repeated questions about policy, technology or internal services. A managed assistant can provide approved guidance and send cases that need judgement to the responsible support team.',
      },
    ],
    serviceSections: [
      {
        title: 'Demand and answer quality',
        paragraphs: [
          'Contact reasons, demand volume, repeat contact and staff effort define the commercial case. Support leaders select bounded requests with an approved company answer and name a source specialist for updates.',
          'Text, messaging and voice options reflect user need, accessibility and service hours. Voice support includes the consent, interruption and confirmation safeguards needed for a dependable customer exchange.',
        ],
      },
      {
        title: 'Identity and business actions',
        paragraphs: [
          'For each permitted action, support and security leaders set the identity proof and customer confirmation required. They can allow low-risk information requests with no sign-in and require stronger proof for booking changes or account actions.',
          'Leaders grant access only to the calendars, support tools or customer services required for the approved request. Customers receive a clear confirmation after a completed action and an accurate response when another company service rejects the request.',
        ],
      },
      {
        title: 'Human service and contact economics',
        paragraphs: [
          'Contacts requiring judgement transfer to staff with the conversation and relevant context. Customers can request a person without navigating hidden menus or repeating the full enquiry.',
          'Managers receive contact-level measures for resolution, repeat demand, answer quality, transfer success, wait time and cost per resolved contact. Quiet Gears also provides source upkeep and service support.',
        ],
      },
    ],
    decisions: [
      { title: 'Supported requests', detail: 'Select the contact reasons with maintained answers, stable rules and a clear benefit to customers or staff.' },
      { title: 'Channel choice', detail: 'Choose text, messaging, voice or a combination based on user need and service capacity.' },
      { title: 'Permitted actions', detail: 'Set identity, consent and confirmation requirements for each customer or staff action.' },
      { title: 'Transfer standard', detail: 'Define the cases that need a person and the context staff require for useful continuation.' },
    ],
    results: [
      { title: 'Resolved routine requests', detail: 'Measure successful resolution by contact reason and exclude repeat contact for the same need.' },
      { title: 'Useful staff transfers', detail: 'Track transfers that reach the suitable team with enough context to continue the service.' },
      { title: 'Dependable answers and actions', detail: 'Measure unsupported material statements, incorrect actions and false confirmations.' },
      { title: 'Customer effort and unit cost', detail: 'Compare wait time, abandonment, repeated explanation and cost per resolved contact.' },
    ],
    expertise: ['Conversation design', 'Voice and messaging services', 'Company knowledge preparation', 'Customer service measurement'],
  },
  {
    slug: 'ai-implementation',
    group: 'Build',
    title: 'Custom AI Systems',
    shortTitle: 'Custom AI systems',
    promise: 'Purpose-built software for repeated specialist work with a measurable quality standard and material expert cost.',
    summary: 'Focused business applications for specialist document work and decisions that depend on company-specific rules.',
    explanation: 'Specialists can spend substantial time assembling material before they apply professional judgement. Quiet Gears builds a focused application for a repeated task with an accepted quality standard and significant expert cost. The service prepares the relevant company material, supports the authorised decision and gives staff a practical correction view. The investment case uses turnaround, accepted work, specialist time and cost per result.',
    applications: [
      {
        title: 'Complex document work',
        detail: 'Specialists spend substantial time reading varied contracts, submissions or technical documents before they can complete a business task. A custom application can prepare the relevant facts and direct uncertain material to a qualified reviewer.',
      },
      {
        title: 'Specialist decision support',
        detail: 'Staff assemble policy, case material and professional knowledge for repeated decisions. A focused application can present the relevant material and an explainable recommendation while the authorised person makes the decision.',
      },
      {
        title: 'Regulated submission preparation',
        detail: 'Professional teams assemble recurring technical or regulatory submissions from company material and expert input. A focused application can prepare the submission against a defined standard for qualified review.',
      },
    ],
    serviceSections: [
      {
        title: 'Specialist cost and delay',
        paragraphs: [
          'Specialists define the repeated task and state the expert time, elapsed delay and cost of correction. They assess representative cases to establish current quality and the business value of faster preparation.',
          'Leadership receives a custom-build case tied to expert capacity and accepted work. The case also compares the proposed application with managed products that may cover part of the need at lower cost.',
        ],
      },
      {
        title: 'Decision quality',
        paragraphs: [
          'Qualified staff use approved company material and business rules for the specialist decision. They see relevant sources, proposed content and uncertainty in a form suited to inspection.',
          'Representative cases test material omissions, unsupported statements and correction minutes. Accepted professional work sets the quality threshold. General supplier benchmarks provide one input to model selection.',
        ],
      },
      {
        title: 'Purpose-built user service',
        paragraphs: [
          'The application reflects the task specialists perform. Staff see only the cases and source material their company role permits.',
          'Staff can amend weak content, inspect the supporting material and complete the authorised decision. The service agreement states the security, support and change responsibilities.',
        ],
      },
      {
        title: 'Accepted-work economics',
        paragraphs: [
          'Task preparation, specialist review and correction time contribute to the cost per accepted result. Leaders can compare that unit cost with the current service and the value of released expert capacity.',
          'Leaders approve model, source and supplier changes after the new version meets the same case standard. Continuing investment depends on accepted work, stable correction effort and support cost proportionate to task value.',
        ],
      },
    ],
    decisions: [
      { title: 'Custom build case', detail: 'Confirm that the business value and task requirements justify software beyond a managed product.' },
      { title: 'User and task boundary', detail: 'Define the staff roles, source material, business decisions and system access covered by the application.' },
      { title: 'Quality threshold', detail: 'Set accepted completion, material error and reviewer correction limits for business use.' },
      { title: 'Support commitment', detail: 'Agree the company and supplier capacity needed to maintain sources, integrations and service quality.' },
    ],
    results: [
      { title: 'Accepted task completion', detail: 'Measure completed work that meets the business standard without material correction.' },
      { title: 'Reduced specialist effort', detail: 'Compare reviewer preparation and correction time against the current task.' },
      { title: 'Shorter decision turnaround', detail: 'Measure time from source receipt to an accepted specialist decision.' },
      { title: 'Defensible service cost', detail: 'Measure supplier, infrastructure and support cost per accepted business result.' },
    ],
    expertise: ['Product definition', 'Application engineering', 'Model quality assessment', 'Secure service design'],
  },
  {
    slug: 'secure-ai-systems',
    group: 'Build',
    title: 'Secure AI Systems',
    shortTitle: 'Secure AI systems',
    promise: 'AI assistance for sensitive client, research or technical work without sending protected material to a general external service.',
    summary: 'Local, offline, private-cloud and controlled hybrid services for sensitive business tasks with a defined quality standard.',
    explanation: 'Specialists can use AI on protected company material inside an approved security boundary. Quiet Gears defines the business task, quality threshold, confidentiality need and availability requirement before comparing local or private options. The selected service combines suitable model performance with company access, controlled updates and practical support. Continued spend depends on specialist turnaround, correction time, protected volume and cost per accepted task.',
    applications: [
      {
        title: 'Restricted professional material',
        detail: 'Legal, engineering, research or commercial specialists need assistance with material that company policy keeps outside general public services. A controlled system can support approved tasks inside a defined company boundary.',
      },
      {
        title: 'Offline operating environment',
        detail: 'Staff work in a location with prohibited, unreliable or absent internet access. A local service can provide bounded analysis or search without depending on an external model connection.',
      },
      {
        title: 'Mixed sensitivity',
        detail: 'A business uses several information classes with different processing restrictions. A controlled design can keep sensitive tasks local and allow approved external services for less restricted material.',
      },
    ],
    serviceSections: [
      {
        title: 'Protected business task',
        paragraphs: [
          'Security and business leaders state the specialist task, protected material, intended users and potential harm from inappropriate access or external transfer. Sector duties and company classification rules set the business boundary.',
          'Advisers compare offline hardware, a local company network, private cloud and a controlled hybrid arrangement against that boundary. Leadership receives a service choice grounded in the work specialists need to complete.',
        ],
      },
      {
        title: 'Specialist quality',
        paragraphs: [
          'Approved domain cases establish the task standard for the selected system. Reviewers assess material omissions, unsupported statements and correction minutes before leaders commit to hardware or hosting.',
          'Smaller local models can offer control and prompt response, while some tasks need stronger model capability. The choice reflects accepted specialist work, protected volume and available company support.',
        ],
      },
      {
        title: 'Confidentiality and availability',
        paragraphs: [
          'Security leaders approve who may use the service, what material it may hold and which administrators can change access. Company policy governs supplier updates and imported material in offline environments.',
          'Continuity and recovery reflect the cost of interruption to the specialist task. Security testing addresses known threats without promising perfect protection or attack-free operation.',
        ],
      },
      {
        title: 'Protected-service economics',
        paragraphs: [
          'Finance and operations leaders compare specialist time with infrastructure, power, administration and support cost. They can weigh local control against private hosting and the value of work completed inside the approved environment.',
          'Leaders track accepted quality, turnaround, protected volume and cost per task. Continued spend depends on useful specialist work within the company security boundary.',
        ],
      },
    ],
    decisions: [
      { title: 'Security boundary', detail: 'Choose an offline, local-network, private-cloud or controlled hybrid service against the client threat position.' },
      { title: 'Information routes', detail: 'Set the permitted service for each information class and the company role authorised to approve exceptions.' },
      { title: 'Capability trade-off', detail: 'Balance task quality, external transfer, response time, infrastructure cost and support capacity.' },
      { title: 'Update authority', detail: 'Define who approves model, source and software changes inside the protected environment.' },
    ],
    results: [
      { title: 'Protected-work turnaround', detail: 'Report elapsed time for the approved specialist task inside the protected service.' },
      { title: 'Specialist correction time', detail: 'Measure review minutes and material corrections across approved domain cases.' },
      { title: 'Protected task volume', detail: 'Count accepted work completed inside the approved environment without external transfer.' },
      { title: 'Cost per accepted task', detail: 'Combine infrastructure, power, administration, support and specialist effort.' },
    ],
    expertise: ['Threat assessment', 'Local model services', 'Security architecture', 'Domain quality testing'],
  },
  {
    slug: 'enterprise-ai',
    group: 'Embed',
    title: 'AI Investment & Spend Management',
    shortTitle: 'AI investment management',
    promise: 'AI spending concentrated on approved business tasks with measured value.',
    summary: 'A management service for organisations coordinating AI proposals, product spend and result reviews across several teams.',
    explanation: 'Teams can accumulate overlapping products, slow approval requests and weak benefit reports as AI use grows. Quiet Gears gives leaders a practical system for product and licence rationalisation, approval bands, named budget decisions and task-level value review. The service matches company size and sector duties, with clear authority for spend, access, quality and suspension.',
    applications: [
      {
        title: 'Growing company coordination',
        detail: 'A growing business has several useful experiments but no consistent method for approving spend, handling sensitive information or reviewing results. A light operating model can give leaders control without creating a large central function.',
      },
      {
        title: 'Multi-team adoption',
        detail: 'Departments need different AI services while finance, security and legal teams need common standards. A shared model can reserve material decisions for central functions and leave routine choices with business leaders.',
      },
      {
        title: 'Platform and licence rationalisation',
        detail: 'Teams have bought overlapping products and cannot connect licence activity to useful work. A structured review can consolidate spend around approved tasks and remove products with no defensible business contribution.',
      },
    ],
    serviceSections: [
      {
        title: 'Product and licence rationalisation',
        paragraphs: [
          'Advisers map current products, licences and supplier commitments to the business tasks they support. Leaders can see duplicate capability, inactive spend and tasks that need a different service or no further investment.',
          'The recommendation covers product consolidation, reassignment and cancellation choices with their annual cost effect. Directors assign each retained licence group to an approved task and responsible business leader.',
        ],
      },
      {
        title: 'Approval bands',
        paragraphs: [
          'A small set of approval bands links review effort to potential harm, company authority and spend. Routine staff assistance can receive a short decision route, while material customer or financial actions receive stronger review.',
          'Each band has a response time and named decision maker. Business teams know the information needed for approval, and control functions concentrate effort on proposals with material exposure.',
        ],
      },
      {
        title: 'Budget responsibility',
        paragraphs: [
          'The board, executive sponsor, business leaders and administrators receive explicit spending and access decisions. Quiet Gears states who can approve a service, assign licences, accept task quality and suspend company use.',
          'A small firm may use one accountable executive and a concise review meeting. A larger group can apply the same standards through delegated business decisions and a shared product budget.',
        ],
      },
      {
        title: 'Task-level value review',
        paragraphs: [
          'Leaders assign each approved use a result in capacity, cash, quality, service or risk. They keep product activity separate from benefit so licence use cannot stand in for accepted business improvement.',
          'Leadership reviews task quality, realised value, supplier cost, support demand and incidents. Directors use the figures to expand, revise, suspend or close each use.',
        ],
      },
    ],
    decisions: [
      { title: 'Product consolidation', detail: 'Choose the products and licence groups that merit continued company spend.' },
      { title: 'Approval authority', detail: 'Assign proposal, access, quality, spending and suspension decisions to company roles.' },
      { title: 'Review bands', detail: 'Set response times and review depth against task exposure and financial commitment.' },
      { title: 'Investment concentration', detail: 'Direct licences, specialist support and training towards tasks with a defined business result.' },
    ],
    results: [
      { title: 'Proposal decision time', detail: 'Measure elapsed time from submission to approval, revision, deferral or closure.' },
      { title: 'Duplicate spend removed', detail: 'Track overlapping products, inactive licences and annual supplier cost removed after review.' },
      { title: 'Accepted work per active use', detail: 'Connect product activity with task quality and realised business value.' },
      { title: 'Management effort per proposal', detail: 'Measure review time, access exceptions and incidents within each approval band.' },
    ],
    expertise: ['Product rationalisation', 'Approval design', 'Budget responsibility', 'Benefit measurement'],
  },
  {
    slug: 'agentic-ai',
    group: 'Build',
    title: 'AI Case Coordination',
    shortTitle: 'AI case coordination',
    promise: 'Lower staff effort and shorter waiting time for repeated cases that vary in the work required.',
    summary: 'Supervised AI support for supplier onboarding, compliance research and complex service cases that need several company tools.',
    explanation: 'Some repeated cases share an accepted result but require different material, checks and staff decisions. Quiet Gears builds a supervised service that assembles the case, prepares permitted work and presents the decision a staff member must make. Company access and action limits remain narrow. Case turnaround, staff hours, accepted completion and unit cost determine the commercial result.',
    applications: [
      {
        title: 'Supplier onboarding',
        detail: 'Staff gather company details, commercial documents and internal approvals for each supplier. A supervised service can assemble the case, prepare routine checks and present exceptions to the authorised colleague.',
      },
      {
        title: 'Recurring compliance research',
        detail: 'Specialists repeat policy or regulatory research that requires several searches and source checks. A supervised service can prepare a cited research pack under an approved brief for expert review.',
      },
      {
        title: 'Complex service cases',
        detail: 'A service team handles cases with a common result but varied documents, correspondence and next decisions. AI support can prepare the case and bring the material decision to a suitable colleague.',
      },
    ],
    serviceSections: [
      {
        title: 'Case cost and waiting time',
        paragraphs: [
          'Managers select one repeated case type, state its accepted result and name the staff decisions it requires. Quiet Gears measures current staff hours, elapsed delay, correction work and open-case age for the commercial baseline.',
          'Leadership receives a direct case for assistance beyond fixed automation. The investment must reduce staff effort or waiting time without transferring repair work to another team.',
        ],
      },
      {
        title: 'Service contribution',
        paragraphs: [
          'The approved contribution covers case preparation such as gathering company material, checking required items or drafting correspondence. Staff can inspect the sources and proposed work in one view.',
          'Managers restrict company access to the selected case and approved actions. Staff can interrupt or suspend the service after a material issue, and spending limits protect company authority.',
        ],
      },
      {
        title: 'Staff decision',
        paragraphs: [
          'Staff see the case position, relevant sources, completed preparation and the decision they need to make. The view identifies missing material or judgement without exposing technical messages.',
          'Qualified staff retain sensitive and irreversible decisions. Their intervention and correction time form part of the service result, which prevents apparent completion from hiding frequent repair.',
        ],
      },
      {
        title: 'Accepted-case economics',
        paragraphs: [
          'Staff test representative cases for accepted completion, staff hours, elapsed time and supplier cost. Leaders can compare case capacity and waiting time with the current service before extending the case types covered.',
          'Changes to company tools or AI suppliers receive the same case checks. Continued spend depends on stable completion, low correction effort and a unit cost that reflects useful case work.',
        ],
      },
    ],
    decisions: [
      { title: 'Selected case type', detail: 'Choose a repeated case with material staff effort, visible waiting time and an accepted result.' },
      { title: 'Service contribution', detail: 'Define the preparation, checking and drafting completed before a staff decision.' },
      { title: 'Staff decision', detail: 'Reserve sensitive, commercial and irreversible choices for a qualified colleague.' },
      { title: 'Investment threshold', detail: 'Require lower case cost or waiting time before adding another case type.' },
    ],
    results: [
      { title: 'Shorter case turnaround', detail: 'Measure total time from receipt to accepted case completion.' },
      { title: 'Lower staff effort', detail: 'Measure preparation, review, intervention and correction hours per case.' },
      { title: 'Accepted case completion', detail: 'Count cases that meet the business standard without material staff repair.' },
      { title: 'Cost per accepted case', detail: 'Combine staff time, supplier use and support cost for completed cases.' },
    ],
    expertise: ['Case economics', 'Supervised AI services', 'Staff decision design', 'Case quality testing'],
  },
  {
    slug: 'legacy-modernisation',
    group: 'Build',
    title: 'Legacy System Modernisation',
    shortTitle: 'Legacy modernisation',
    promise: 'A maintainable business service in place of a fragile spreadsheet or ageing application.',
    summary: 'Assessment, replacement and continuity support for critical business systems that have become costly, fragile or hard to change.',
    explanation: 'A legacy system becomes a material business issue after support ends, key knowledge sits with a small group or routine change carries unacceptable risk. Quiet Gears identifies the business rules and user needs that still matter, compares replacement options and provides a maintainable service. Leadership can judge the investment through continuity, accepted user tasks, rule accuracy, support demand and running cost.',
    applications: [
      {
        title: 'Business-critical spreadsheets',
        detail: 'A connected set of spreadsheets supports planning, pricing or operations but contains duplicated information, hidden formula risk and dependence on specialist staff. A shared application can protect essential rules and improve controlled access.',
      },
      {
        title: 'Unsupported desktop application',
        detail: 'An Access database or ageing desktop product remains central to daily work after supplier or internal support has declined. A modern service can reduce continuity risk and support secure concurrent use.',
      },
      {
        title: 'Costly supplier dependency',
        detail: 'An old commercial system has high licence or change cost, limited integration and weak support for current user needs. Leadership needs a reasoned choice between retention, a new product and a focused rebuild.',
      },
    ],
    serviceSections: [
      {
        title: 'Continuity economics',
        paragraphs: [
          'Quiet Gears and company leaders quantify the cost of unplanned interruption, annual licences, specialist support and slow business change. Advisers identify critical tasks that depend on unsupported software or one specialist.',
          'Contract, retention and continuity duties sit beside the financial case. Leadership receives one basis for deciding urgency, budget and the value of removing each dependency.',
        ],
      },
      {
        title: 'Business rules and user service',
        paragraphs: [
          'Experienced users identify the calculations, approvals, exceptions and specialist knowledge the business still requires. They use current tasks to define the replacement without copying old screens or administrative burdens that add no value.',
          'Staff test critical rules against representative historic and current cases. They set an accepted standard for task completion, information accuracy and daily support.',
        ],
      },
      {
        title: 'Replacement and continuity service',
        paragraphs: [
          'Decision makers compare continued use, retirement, new hosting, product purchase, platform change and custom rebuilding against user fit, supplier terms and long-term cost. The chosen replacement gives staff suitable company access and the connections required for their tasks.',
          'Leaders decide which historic material remains active and which moves to archive. They approve retirement after staff complete the accepted tasks, critical rules pass their checks and the company can recover from interruption.',
        ],
      },
    ],
    decisions: [
      { title: 'Modernisation option', detail: 'Choose retention, retirement, new hosting, product purchase, platform change or rebuilding against business need.' },
      { title: 'Essential business rules', detail: 'Identify the calculations, permissions and specialist decisions the replacement must preserve.' },
      { title: 'Historic information', detail: 'Select the material required for active use, statutory retention and archive access.' },
      { title: 'Continuity standard', detail: 'Set accepted user tasks, rule checks, fallback and support conditions for retirement of the old service.' },
    ],
    results: [
      { title: 'Less unplanned interruption', detail: 'Measure service outages, recovery time and business hours lost after replacement.' },
      { title: 'Single-person dependency removed', detail: 'Count critical tasks that another trained employee or supplier can support.' },
      { title: 'Accepted user tasks', detail: 'Compare task completion, correction effort and support demand with the former service.' },
      { title: 'Lower service cost', detail: 'Measure licence, infrastructure, specialist support and routine change cost.' },
    ],
    expertise: ['Legacy risk assessment', 'Business rule recovery', 'Application replacement', 'Continuity planning'],
  },
];

export const services: Service[] = serviceDemandOrder.flatMap((slug, index) => {
  const service = serviceCatalogue.find((item) => item.slug === slug);
  return service ? [{ ...service, number: String(index + 1).padStart(2, '0') }] : [];
});

export const serviceAliases: { [slug: string]: string } = {
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
