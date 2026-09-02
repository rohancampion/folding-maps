export type ServiceItem = { title: string; detail: string };

export type ServiceOffering = {
  title: string;
  detail: string;
  subservices: ServiceItem[];
};

export type ServiceSpecification = { term: string; detail: string };
export type ServiceFaq = { question: string; answer: string };

export type Service = {
  slug: string;
  number: string;
  group: 'Advise' | 'Build' | 'Embed';
  title: string;
  shortTitle: string;
  summary: string;
  outcome: string;
  offerings: ServiceOffering[];
  applications: ServiceItem[];
  deliverables: ServiceItem[];
  technicalScope?: ServiceSpecification[];
  faqs: ServiceFaq[];
};

const serviceDemandOrder = [
  'ai-strategy', 'workflow-automation', 'claude-implementation',
  'chatgpt-training-for-teams', 'ai-chatbot', 'ai-implementation',
  'secure-ai-systems', 'enterprise-ai', 'agentic-ai', 'legacy-modernisation',
] as const;

const serviceCatalogue: Omit<Service, 'number'>[] = [
  {
    slug: 'ai-strategy', group: 'Advise', title: 'AI Strategy & Readiness', shortTitle: 'AI strategy',
    summary: 'Board-level investment choices, readiness findings and control requirements for a defined portfolio of AI services.',
    outcome: 'A prioritised AI investment portfolio with stated costs, dependencies, control requirements and decision limits.',
    offerings: [
      { title: 'Investment case', detail: 'A board-ready commercial case for a proposed AI service, expressed through the business result, full cost range and material dependencies.', subservices: [
        { title: 'Commercial assessment', detail: 'Comparison of capacity, service, quality and cash effects against the present operating position.' },
        { title: 'Budget definition', detail: 'A stated range covering supplier charges, integration, internal capability and continuing service costs.' },
      ] },
      { title: 'Readiness and risk', detail: 'A practical view of the information, systems, permissions, supplier terms and staff capability attached to each proposed service.', subservices: [
        { title: 'Readiness review', detail: 'A documented assessment of source quality, company access, system compatibility and operational support.' },
        { title: 'Control requirements', detail: 'Approval, review, security and reporting requirements for the proposed business use.' },
      ] },
      { title: 'Portfolio and supplier decision', detail: 'A common basis for comparing competing projects, managed platforms and specialist suppliers before funds are committed.', subservices: [
        { title: 'Portfolio prioritisation', detail: 'A ranked set of investments with a reason, dependency and budget position for each item.' },
        { title: 'Platform assessment', detail: 'Comparison of managed products, private services and custom applications against the approved need.' },
      ] },
    ],
    applications: [
      { title: 'Board funding decision', detail: 'Directors need a comparable investment case for several proposals with different cost, capability and risk assumptions.' },
      { title: 'Stalled pilot review', detail: 'A trial has reached a funding decision without a settled service cost, operating requirement or accepted business result.' },
      { title: 'Supplier comparison', detail: 'Procurement needs a clear comparison of managed platforms, custom applications and private deployment options.' },
    ],
    deliverables: [
      { title: 'Board investment paper', detail: 'A concise decision paper stating the business result, options, costs, dependencies and recommendation.' },
      { title: 'Prioritised service portfolio', detail: 'A ranked catalogue of proposed services with approval, deferral or closure positions.' },
      { title: 'Budget ranges', detail: 'A cost view covering subscriptions, implementation, infrastructure, internal effort and continuing support.' },
      { title: 'Readiness register', detail: 'A service-by-service account of information, access, integration, capability and supplier dependencies.' },
      { title: 'Control requirements', detail: 'A defined set of approval, review, reporting and information-handling requirements.' },
    ],
    technicalScope: [
      { term: 'Reference frameworks', detail: 'Optional mapping to NIST AI RMF and ISO/IEC 42001 control themes. This does not provide certification or legal advice.' },
      { term: 'Platform coverage', detail: 'Managed AI products, hosted model APIs, private-cloud services, local systems and custom applications.' },
      { term: 'Cost coverage', detail: 'Licences, usage charges, integration, infrastructure, support, staff capability and supplier dependency.' },
    ],
    faqs: [
      { question: 'Is the recommendation vendor-neutral?', answer: 'Yes. Managed products, hosted services, private systems and custom applications are compared against the approved business requirement.' },
      { question: 'Can existing pilots be assessed?', answer: 'Yes. Existing trials can be reviewed against their stated business result, cost position and unresolved dependencies.' },
      { question: 'Does the service include budget ranges?', answer: 'Yes. The investment paper separates subscriptions, implementation, infrastructure, internal effort and continuing support.' },
      { question: 'Can regulated uses be included?', answer: 'Yes. Relevant control requirements can be stated, with specialist legal or regulatory advice commissioned separately when required.' },
    ],
  },
  {
    slug: 'workflow-automation', group: 'Build', title: 'AI Process Automation', shortTitle: 'Process automation',
    summary: 'Production automation for repeated document, transaction and service tasks, with visible exceptions and controlled system access.',
    outcome: 'Lower administration cost and shorter completion time for a defined, high-volume business task.',
    offerings: [
      { title: 'Document intake', detail: 'Automation for messages, forms, invoices, certificates and supporting files that arrive in varied formats.', subservices: [
        { title: 'Classification and capture', detail: 'Structured case data prepared from approved email, document, image and form inputs.' },
        { title: 'Document validation', detail: 'Required fields, reference values and supporting files checked against accepted business rules.' },
      ] },
      { title: 'Transactional administration', detail: 'Completion of repeated checks, calculations and system updates within stated financial and operating limits.', subservices: [
        { title: 'Rules and calculations', detail: 'Consistent application of approved thresholds, reference values and calculation rules.' },
        { title: 'System updates', detail: 'Controlled creation or amendment of entries in approved company applications.' },
      ] },
      { title: 'Service routing and exceptions', detail: 'Clear assignment of routine requests and a visible queue for cases that require staff judgement.', subservices: [
        { title: 'Request routing', detail: 'Assignment by request type, customer category, urgency, location or responsible team.' },
        { title: 'Exception console', detail: 'A staff view containing source material, the failed check and the permitted next action.' },
      ] },
    ],
    applications: [
      { title: 'Enquiry administration', detail: 'Incoming requests require classification, detail capture, acknowledgement and assignment before a specialist response.' },
      { title: 'Invoice and expense checks', detail: 'Finance teams handle repeated validation, coding and approval preparation across routine submissions.' },
      { title: 'Forms and certificates', detail: 'Operations staff extract facts, check validity and update business systems from submitted documents.' },
    ],
    deliverables: [
      { title: 'Production automation service', detail: 'A supported application for the approved task, business rules and company systems.' },
      { title: 'Exception console', detail: 'A staff interface for unresolved items, source material, failed checks and permitted decisions.' },
      { title: 'System connectors', detail: 'Approved interfaces for email, document, finance, CRM or operating applications.' },
      { title: 'Service reporting', detail: 'Reporting for completed items, exceptions, correction demand, elapsed time and availability.' },
      { title: 'Administration documentation', detail: 'Configuration, access, support and business-rule documentation for the live service.' },
    ],
    technicalScope: [
      { term: 'Input formats', detail: 'Email, web forms, PDFs, office files, images, CSV files and structured application data.' },
      { term: 'Interfaces', detail: 'REST APIs, webhooks, approved database interfaces and managed application connectors.' },
      { term: 'Document services', detail: 'OCR, field extraction, classification and validation against approved reference data.' },
      { term: 'Access and audit', detail: 'SSO, role-based permissions, service accounts and timestamped activity logs where supported.' },
    ],
    faqs: [
      { question: 'Can existing systems remain in place?', answer: 'Yes. Supported interfaces can connect current finance, CRM, document and operating applications.' },
      { question: 'Does the service include exception handling?', answer: 'Yes. Staff receive a visible queue containing the affected item, source material, failed check and permitted decision.' },
      { question: 'Are document-heavy tasks supported?', answer: 'Yes. PDFs, office files, images, forms and email attachments can be included when source quality supports dependable capture.' },
      { question: 'Is continuing support available?', answer: 'Yes. Support can cover availability, connector changes, access administration and approved rule amendments.' },
    ],
  },
  {
    slug: 'claude-implementation', group: 'Build', title: 'Managed AI Platform', shortTitle: 'Managed AI platforms',
    summary: 'Selection and company configuration of Claude, ChatGPT, Microsoft Copilot, Perplexity or a managed model service.',
    outcome: 'One approved company AI service with suitable access, knowledge connections, administration and licence controls.',
    offerings: [
      { title: 'Platform selection', detail: 'A product and subscription decision based on representative company tasks, administration needs and continuing cost.', subservices: [
        { title: 'Product comparison', detail: 'Supported platforms compared against task quality, company terms, access and cost.' },
        { title: 'Plan selection', detail: 'A licence recommendation tied to user roles, required features and administration responsibilities.' },
      ] },
      { title: 'Company tenant and access', detail: 'A managed company environment with central identity, role assignment and approved account settings.', subservices: [
        { title: 'Identity integration', detail: 'Supported SSO and user provisioning linked to current company identity services.' },
        { title: 'Administration controls', detail: 'Role groups, licence assignment, retention choices and permitted feature settings.' },
      ] },
      { title: 'Knowledge and role services', detail: 'Approved company sources and task-specific assistants made available to suitable staff groups.', subservices: [
        { title: 'Knowledge connections', detail: 'Access to selected company documents, collaboration services and supported applications.' },
        { title: 'Role assistant catalogue', detail: 'Listed assistants or task templates for commercial, finance, service, operating and technical roles.' },
      ] },
      { title: 'Licence administration', detail: 'A visible basis for allocating, reviewing and cancelling company subscriptions.', subservices: [
        { title: 'Usage reporting', detail: 'Administration views connecting active accounts with approved role groups and task categories.' },
        { title: 'Support service', detail: 'A company route for access requests, source issues, feature changes and supplier notices.' },
      ] },
    ],
    applications: [
      { title: 'Company research and drafting', detail: 'Commercial, finance and service teams need an approved assistant for research, comparison, drafting and structured analysis.' },
      { title: 'Company knowledge access', detail: 'Staff need direct access to approved policy, product, client or technical material within current permissions.' },
      { title: 'Developer support', detail: 'Technical teams need company-managed coding assistance with central access and supported repository connections.' },
    ],
    deliverables: [
      { title: 'Configured company tenant', detail: 'The selected platform with approved company settings, administrator roles and licence categories.' },
      { title: 'Identity and provisioning', detail: 'Supported SSO, user provisioning and role-group configuration.' },
      { title: 'Knowledge connectors', detail: 'Approved connections to selected file, collaboration and business services.' },
      { title: 'Role assistant catalogue', detail: 'A documented set of assistants or task templates for approved staff groups.' },
      { title: 'Administration reporting', detail: 'Views for licence allocation, active accounts, support demand and service changes.' },
    ],
    technicalScope: [
      { term: 'Supported platforms', detail: 'Claude, ChatGPT, Microsoft Copilot, Perplexity and managed model APIs, subject to current plan features.' },
      { term: 'Identity', detail: 'SAML 2.0, OpenID Connect, SCIM and role-based access where supported.' },
      { term: 'Knowledge access', detail: 'Native connectors, approved file services, collaboration platforms and API-based sources.' },
      { term: 'Administration', detail: 'Retention, regional processing, feature permissions, usage reporting and licence assignment.' },
    ],
    faqs: [
      { question: 'Can more than one platform be compared?', answer: 'Yes. Supported products can be compared against the same representative tasks, company requirements and cost categories.' },
      { question: 'Does the service include SSO and user provisioning?', answer: 'Yes, when the selected product plan supports SAML, OpenID Connect or SCIM integration.' },
      { question: 'Can company knowledge sources be connected?', answer: 'Yes. Selected document and collaboration services can be connected within current company permissions.' },
      { question: 'Is licence administration included?', answer: 'Yes. The service can include role categories, allocation criteria, usage reporting, reassignment and cancellation controls.' },
    ],
  },
  {
    slug: 'chatgpt-training-for-teams', group: 'Embed', title: 'AI Training for Teams', shortTitle: 'AI training',
    summary: 'Role-specific AI training for leaders, managers, business teams and technical practitioners using approved company tools.',
    outcome: 'Staff able to complete defined company tasks to an agreed quality and information-handling standard.',
    offerings: [
      { title: 'Executive briefings', detail: 'Focused sessions for leaders responsible for investment, supplier and risk decisions.', subservices: [
        { title: 'Leadership briefing', detail: 'Current platform capability, commercial choices, material limitations and company responsibilities.' },
        { title: 'Decision exercises', detail: 'Representative investment, supplier and information-handling decisions with a written response standard.' },
      ] },
      { title: 'Role-based team sessions', detail: 'Training based on approved tasks in finance, operations, commercial, customer service and professional roles.', subservices: [
        { title: 'Task sessions', detail: 'Live practice using representative company material and the selected managed platform.' },
        { title: 'Source and quality checks', detail: 'Direct checks for material errors, missing support, weak source use and sensitive information.' },
      ] },
      { title: 'Manager assessment', detail: 'A consistent basis for reviewing task quality, correction demand and suitable use within a team.', subservices: [
        { title: 'Assessment standard', detail: 'Task-specific criteria covering accuracy, source use, completeness and information handling.' },
        { title: 'Capability report', detail: 'Participant attainment, common errors and further support requirements.' },
      ] },
      { title: 'Technical practitioner training', detail: 'Product and API training for staff responsible for company assistants, integrations and technical support.', subservices: [
        { title: 'Platform administration', detail: 'Tenant settings, role permissions, connectors, reporting and supported administration functions.' },
        { title: 'Developer capability', detail: 'Model APIs, structured outputs, tool connections, evaluation and service diagnostics.' },
      ] },
    ],
    applications: [
      { title: 'Finance and operations', detail: 'Teams need dependable support for comparison, commentary, document review, scheduling and routine analysis.' },
      { title: 'Commercial and service teams', detail: 'Staff need stronger research, drafting, enquiry preparation and source-checking capability.' },
      { title: 'Technical teams', detail: 'Developers and administrators need practical capability across managed platforms, APIs, connectors and quality evaluation.' },
    ],
    deliverables: [
      { title: 'Live training sessions', detail: 'In-person or remote sessions for the agreed staff roles, tools and company tasks.' },
      { title: 'Role task packs', detail: 'Representative exercises, source material and accepted outputs for each participant group.' },
      { title: 'Assessment criteria', detail: 'A manager-ready standard for accuracy, source use, completeness and information handling.' },
      { title: 'Reference materials', detail: 'Concise company materials covering tasks, product features and permitted use.' },
      { title: 'Capability report', detail: 'Participant attainment, common correction needs and recommended support priorities.' },
    ],
    technicalScope: [
      { term: 'Platform coverage', detail: 'Claude, ChatGPT, Microsoft Copilot, Perplexity and approved model APIs.' },
      { term: 'Delivery formats', detail: 'In-person, remote or combined delivery for leadership, manager, business and technical groups.' },
      { term: 'Assessment outputs', detail: 'Task criteria, participant results, correction themes and role-level capability findings.' },
    ],
    faqs: [
      { question: 'Can sessions use current company tools?', answer: 'Yes. Training can use approved managed platforms and company features already available to participants.' },
      { question: 'Are programmes adapted by job role?', answer: 'Yes. Leadership, manager, business and technical groups receive task material suited to their responsibilities.' },
      { question: 'Does management receive an assessment report?', answer: 'Yes. The report covers task-standard attainment, common errors, correction demand and further support priorities.' },
      { question: 'Is remote delivery available?', answer: 'Yes. Programmes can be delivered remotely, in person or through a combination agreed for participant groups.' },
    ],
  },
  {
    slug: 'ai-chatbot', group: 'Build', title: 'Conversational AI', shortTitle: 'Conversational AI',
    summary: 'Text, messaging, voice and terminal-based services for customer requests, bookings, account actions and staff support.',
    outcome: 'More routine requests completed through a supported conversational service, with clear transfer to staff when required.',
    offerings: [
      { title: 'Text and messaging services', detail: 'Branded conversational services for websites, customer portals and supported messaging channels.', subservices: [
        { title: 'Web chat', detail: 'A responsive customer or staff interface embedded in the approved website or portal.' },
        { title: 'Messaging channels', detail: 'Supported SMS or business messaging connections for defined service requests.' },
      ] },
      { title: 'Voice and terminal services', detail: 'Voice assistance and configured physical terminals for reception, service points and staff locations.', subservices: [
        { title: 'Voice service', detail: 'Telephone or device interaction connected to approved service information and actions.' },
        { title: 'Reception and kiosk terminals', detail: 'Configured touchscreen, microphone, speaker and network hardware with a branded interface.' },
      ] },
      { title: 'Business actions and transfer', detail: 'Controlled bookings, account requests and staff transfers with relevant conversation context.', subservices: [
        { title: 'Service actions', detail: 'Approved bookings, status checks, request creation and account updates after required confirmation.' },
        { title: 'Staff transfer', detail: 'Routing to the suitable team with identity status, request category and conversation summary.' },
      ] },
      { title: 'Administration and reporting', detail: 'A company view of supported requests, unresolved questions, transfers, service actions and channel demand.', subservices: [
        { title: 'Knowledge administration', detail: 'Maintained service answers, source references, business rules and channel notices.' },
        { title: 'Service analytics', detail: 'Reporting by request category, resolution status, transfer, repeated contact and action result.' },
      ] },
    ],
    applications: [
      { title: 'Customer support', detail: 'Routine product, policy, delivery and account questions need prompt answers across text or voice channels.' },
      { title: 'Bookings and reception', detail: 'Customers or visitors need appointment availability, confirmation, directions, check-in or notification.' },
      { title: 'Staff service desk', detail: 'Employees need direct access to approved HR, IT, facilities or operating information.' },
    ],
    deliverables: [
      { title: 'Branded conversation interface', detail: 'A responsive text, voice or combined interface for approved customer or staff channels.' },
      { title: 'Configured terminal option', detail: 'Optional kiosk or desk hardware with touchscreen, audio, enclosure, network and accessibility configuration.' },
      { title: 'Knowledge content', detail: 'Approved answers, source references, service notices and business-action rules.' },
      { title: 'Channel and system integrations', detail: 'Supported connections for telephony, messaging, booking, CRM, ticketing or account services.' },
      { title: 'Administration and analytics', detail: 'Controls and reporting for content, request categories, actions, transfers and unresolved questions.' },
    ],
    technicalScope: [
      { term: 'Channels', detail: 'Web chat, supported business messaging, SMS, SIP or cloud telephony, and configured touchscreen terminals.' },
      { term: 'Business interfaces', detail: 'REST APIs, webhooks and managed connectors for booking, CRM, ticketing and account services.' },
      { term: 'Identity and control', detail: 'SSO for staff services, customer verification options, role permissions and activity logs.' },
      { term: 'Terminal options', detail: 'Touchscreen, microphone, speaker, optional camera, accessible controls, enclosure and managed network connection.' },
    ],
    faqs: [
      { question: 'Can the service support voice and text?', answer: 'Yes. One service can support web chat, messaging, telephone and configured terminal channels.' },
      { question: 'Does it transfer to a staff member?', answer: 'Yes. Defined requests can transfer with the request category, identity status and relevant conversation context.' },
      { question: 'Can it complete bookings or account actions?', answer: 'Yes. Approved actions can be included with required identity, confirmation and system permissions.' },
      { question: 'Are physical terminals available?', answer: 'Yes. Configured kiosk or desk terminals can include the interface, touchscreen, audio, enclosure and network connection.' },
    ],
  },
  {
    slug: 'ai-implementation', group: 'Build', title: 'Custom AI Systems', shortTitle: 'Custom AI systems',
    summary: 'Purpose-built AI applications for specialist document, knowledge and decision tasks that managed products cannot meet.',
    outcome: 'A supported business application for a defined specialist task, with accepted quality, access and service requirements.',
    offerings: [
      { title: 'Document intelligence', detail: 'Applications for large, varied or specialist document sets requiring structured extraction, comparison and review.', subservices: [
        { title: 'Document review application', detail: 'Authenticated search, comparison, extraction and issue identification across approved files.' },
        { title: 'Structured drafting', detail: 'Draft documents, summaries or submissions in an accepted company format with source references.' },
      ] },
      { title: 'Specialist decision support', detail: 'Focused applications that prepare relevant material, calculations and options for an authorised professional decision.', subservices: [
        { title: 'Case preparation', detail: 'A structured view of relevant source material, discrepancies, rules and outstanding information.' },
        { title: 'Decision workspace', detail: 'An authenticated interface for professional review, comments, approval and final output.' },
      ] },
      { title: 'Company knowledge applications', detail: 'Search and assistance across approved company material with current permissions and visible source references.', subservices: [
        { title: 'Knowledge portal', detail: 'A web or desktop application for policy, product, client or technical material.' },
        { title: 'Knowledge API', detail: 'A supported interface for business applications to request sourced answers or structured results.' },
      ] },
      { title: 'Multimodal applications', detail: 'Applications that combine text, images, audio or structured business data for one defined task.', subservices: [
        { title: 'Image and document analysis', detail: 'Combined review of diagrams, photographs, scans and associated written material.' },
        { title: 'Speech and media services', detail: 'Approved transcription, classification, search and summary functions for audio or video material.' },
      ] },
    ],
    applications: [
      { title: 'Complex document work', detail: 'Specialists need faster comparison and structured preparation across contracts, technical files or case material.' },
      { title: 'Regulated submission preparation', detail: 'Teams need a controlled application for source-backed drafting, completeness checks and professional approval.' },
      { title: 'Authenticated internal tools', detail: 'Staff need a focused company application with current permissions and approved sources.' },
    ],
    deliverables: [
      { title: 'Production application', detail: 'A web, desktop, mobile or API service for approved users and the specialist task.' },
      { title: 'Authenticated portal or API', detail: 'Company identity, role permissions and supported interfaces for users and connected applications.' },
      { title: 'Evaluation report', detail: 'Quality results for representative cases, material errors, source support and professional correction demand.' },
      { title: 'Deployment package', detail: 'Approved cloud, private-cloud or on-premises service configuration and release materials.' },
      { title: 'Administration and support materials', detail: 'Access, source, configuration, service and issue-management documentation.' },
    ],
    technicalScope: [
      { term: 'AI services', detail: 'Hosted or private language and multimodal models, retrieval-augmented generation, model routing and structured outputs.' },
      { term: 'Application interfaces', detail: 'Responsive web applications, desktop services, REST APIs, GraphQL and supported business connectors.' },
      { term: 'Identity and audit', detail: 'SAML 2.0, OpenID Connect, RBAC, service accounts and timestamped activity logs.' },
      { term: 'Deployment', detail: 'Public cloud, private cloud, on-premises or controlled hybrid configurations.' },
    ],
    faqs: [
      { question: 'Can the application use existing systems?', answer: 'Yes. Supported APIs, databases and managed connectors can provide approved information and business actions.' },
      { question: 'Does it support private deployment?', answer: 'Yes. Private-cloud, on-premises and controlled hybrid configurations are available.' },
      { question: 'Is evaluation documentation included?', answer: 'Yes. The report covers representative cases, material errors, source support and correction demand.' },
      { question: 'Is continuing support available?', answer: 'Yes. Support can cover availability, access, sources, integrations, model changes and approved feature amendments.' },
    ],
  },
  {
    slug: 'secure-ai-systems', group: 'Build', title: 'Secure AI Systems', shortTitle: 'Secure AI systems',
    summary: 'Private-cloud, on-premises and offline AI systems for confidential information and restricted operating environments.',
    outcome: 'A private AI service operating inside the approved information and network boundary, with suitable hardware and access controls.',
    offerings: [
      { title: 'Private AI applications', detail: 'Authenticated knowledge, document and decision-support applications for confidential company material.', subservices: [
        { title: 'Protected knowledge service', detail: 'Search and sourced assistance across approved confidential documents and specialist material.' },
        { title: 'Protected document application', detail: 'Private extraction, comparison, drafting and review for defined professional tasks.' },
      ] },
      { title: 'Local and offline systems', detail: 'AI applications and model services hosted on configured company hardware without a public service dependency.', subservices: [
        { title: 'GPU workstation', detail: 'A configured local workstation for individual or small-team model use and protected document tasks.' },
        { title: 'Server or rack appliance', detail: 'A shared service with defined compute, memory, storage, network and backup configuration.' },
      ] },
      { title: 'Private-cloud deployment', detail: 'A dedicated cloud environment with company identity, network restrictions and approved model services.', subservices: [
        { title: 'Private model service', detail: 'Dedicated model endpoints, application services and storage inside the approved cloud boundary.' },
        { title: 'Company access controls', detail: 'Identity groups, role permissions, service accounts and administration access.' },
      ] },
      { title: 'Controlled hybrid services', detail: 'Separate local and hosted capabilities for information classes with different confidentiality and performance needs.', subservices: [
        { title: 'Information routing controls', detail: 'Permitted service destinations stated by information class, user role and approved task.' },
        { title: 'Secure model gateway', detail: 'A controlled interface for approved hosted models, usage limits and service logging.' },
      ] },
    ],
    applications: [
      { title: 'Confidential professional material', detail: 'Legal, advisory, financial or client information requires a private service with restricted access and storage.' },
      { title: 'Intellectual property', detail: 'Research, engineering and product teams need AI assistance without sending sensitive material to a general public service.' },
      { title: 'Disconnected locations', detail: 'Sites with limited or prohibited internet access need local document, knowledge or decision-support capability.' },
    ],
    deliverables: [
      { title: 'Configured hardware option', detail: 'An optional GPU workstation, tower server or rack appliance defined for approved models and users.' },
      { title: 'Private AI application', detail: 'A local, on-premises or private-cloud interface for the approved knowledge, document or specialist task.' },
      { title: 'Encrypted storage and backup', detail: 'Defined storage, encryption and backup configuration for source material, indexes and service data.' },
      { title: 'Identity and activity controls', detail: 'Company access groups, role permissions, administrator accounts and timestamped activity logs.' },
      { title: 'Offline support media', detail: 'Approved software, model and configuration packages for environments without direct internet access.' },
      { title: 'System documentation', detail: 'Hardware, network, access, backup, update and service documentation.' },
    ],
    technicalScope: [
      { term: 'Deployment boundaries', detail: 'Private cloud, company data centre, local network, individual workstation or air-gapped environment.' },
      { term: 'Hardware specification', detail: 'CPU, GPU memory, system memory, encrypted NVMe storage, network, backup and power options stated in the client specification.' },
      { term: 'Platform services', detail: 'Linux, supported container services, private model endpoints, local search and authenticated web interfaces.' },
      { term: 'Identity and audit', detail: 'SSO where connected, local identity where isolated, RBAC, administrator separation and activity logs.' },
    ],
    faqs: [
      { question: 'Can the system operate without internet access?', answer: 'Yes. Suitable applications can run on local or air-gapped hardware with approved offline packages.' },
      { question: 'Are configured workstations or servers available?', answer: 'Yes. GPU workstations, tower servers and rack appliances can be supplied against an agreed specification.' },
      { question: 'Does the service support SSO and audit logging?', answer: 'Yes. Connected environments can use supported company identity services, and isolated environments can use local role controls.' },
      { question: 'Can hosted and local services be combined?', answer: 'Yes. A controlled hybrid service can separate information classes and approved tasks between local and hosted services.' },
    ],
  },
  {
    slug: 'enterprise-ai', group: 'Advise', title: 'AI Investment & Spend Management', shortTitle: 'AI spend management',
    summary: 'Company-wide visibility and control for AI licences, API usage, suppliers, renewals and business-value reporting.',
    outcome: 'A complete view of AI expenditure with clear allocation, renewal and supplier decisions for each service.',
    offerings: [
      { title: 'Licence and supplier catalogue', detail: 'A company view of subscriptions, account categories, suppliers, contract dates and responsible business areas.', subservices: [
        { title: 'Licence inventory', detail: 'Listed products, plans, seat counts, allocation groups, renewal dates and administration contacts.' },
        { title: 'Supplier catalogue', detail: 'Contracted services, commercial terms, usage commitments and material dependencies.' },
      ] },
      { title: 'Usage and cost controls', detail: 'Reporting for account activity, hosted model consumption and cost allocation across business areas.', subservices: [
        { title: 'Subscription use', detail: 'Active accounts, allocated roles, supplier reporting and cost per approved user group.' },
        { title: 'API consumption', detail: 'Usage charges, model categories, service limits, alerts and cost-centre allocation.' },
      ] },
      { title: 'Renewal and consolidation', detail: 'A basis for retaining, changing, combining or cancelling products and supplier services.', subservices: [
        { title: 'Renewal planning', detail: 'Contract dates, notice periods, current demand, business dependency and recommendation.' },
        { title: 'Supplier consolidation', detail: 'Overlapping platform, model, search, automation and support capabilities stated in one comparison.' },
      ] },
      { title: 'Budget and performance reporting', detail: 'Finance and leadership reporting connecting service cost with approved users, tasks and business measures.', subservices: [
        { title: 'Budget allocation', detail: 'Costs allocated by company, cost centre, department, service, product or user group.' },
        { title: 'Performance view', detail: 'Service-level reporting for use, accepted task activity, support demand and stated business measures.' },
      ] },
    ],
    applications: [
      { title: 'Unused and misallocated licences', detail: 'Subscriptions have expanded without a consistent view of active accounts, approved roles or useful task activity.' },
      { title: 'Overlapping platforms', detail: 'Several departments buy products with similar model, search, assistant or automation capability.' },
      { title: 'Variable API expenditure', detail: 'Hosted model charges change by application, model and demand, while finance lacks service-level allocation.' },
    ],
    deliverables: [
      { title: 'AI spend register', detail: 'A catalogue of subscriptions, API services, suppliers, contracts, administrators and cost allocation.' },
      { title: 'Renewal calendar', detail: 'Contract dates, notice periods, decision dates, responsible roles and current recommendation.' },
      { title: 'Allocation model', detail: 'A consistent basis for assigning subscription and usage charges to services and business areas.' },
      { title: 'Management dashboard', detail: 'Licence, usage, supplier, renewal and budget reporting for finance and leadership.' },
      { title: 'Supplier comparison', detail: 'A comparison of overlapping capability, company terms, support and continuing cost.' },
      { title: 'Procurement requirements', detail: 'Commercial, administration, reporting and usage-control requirements for future purchases.' },
    ],
    technicalScope: [
      { term: 'Source data', detail: 'Supplier administration exports, usage APIs, invoices, purchase data, contract schedules and service catalogues.' },
      { term: 'Allocation fields', detail: 'Cost centre, department, product, service, application, environment and approved user group.' },
      { term: 'Reporting outputs', detail: 'CSV exports, finance-ready schedules and supported BI dashboards.' },
      { term: 'Usage controls', detail: 'Supplier budgets, model limits, account categories, alerts and application tags where supported.' },
    ],
    faqs: [
      { question: 'Can existing licences and API use be included?', answer: 'Yes. Current subscriptions, hosted model usage, invoices and supplier administration data can be included.' },
      { question: 'Does the review cover multiple vendors?', answer: 'Yes. Managed platforms, model APIs, search services, automation products and support suppliers can sit in one catalogue.' },
      { question: 'Are renewal and budget controls included?', answer: 'Yes. The service can include decision dates, notice periods, usage limits, alerts and cost allocation.' },
      { question: 'Can results feed finance reporting?', answer: 'Yes. Outputs can include finance-ready schedules, CSV exports and supported BI dashboards.' },
    ],
  },
  {
    slug: 'agentic-ai', group: 'Build', title: 'AI Case Coordination', shortTitle: 'AI case coordination',
    summary: 'Controlled AI services for cases that require preparation, cross-system actions, staff approvals and visible status.',
    outcome: 'Shorter case completion time with staff authority retained for material decisions and exceptions.',
    offerings: [
      { title: 'Case intake and preparation', detail: 'A consistent case view assembled from approved messages, forms, documents and business applications.', subservices: [
        { title: 'Case classification', detail: 'Case type, urgency, responsible team and required information prepared from approved inputs.' },
        { title: 'Case brief', detail: 'Relevant facts, source references, missing information and applicable business rules presented together.' },
      ] },
      { title: 'Cross-system actions', detail: 'Bounded AI services completing permitted searches, updates, requests and notifications across approved applications.', subservices: [
        { title: 'Connected actions', detail: 'Approved queries and updates through supported APIs, webhooks and managed connectors.' },
        { title: 'Task services', detail: 'Separate bounded services for research, document preparation, calculations or customer communication.' },
      ] },
      { title: 'Approval and exception control', detail: 'Staff authority for financial, customer, compliance and operational decisions.', subservices: [
        { title: 'Approval console', detail: 'A staff view of the proposed action, supporting material, permission limit and decision options.' },
        { title: 'Exception queue', detail: 'Cases with missing information, conflicting results or failed actions presented for staff attention.' },
      ] },
      { title: 'Case status and reporting', detail: 'A current view of case position, outstanding actions, approvals, exceptions and completion results.', subservices: [
        { title: 'Case workspace', detail: 'Case state, documents, tasks, approvals, comments and final result in one authenticated interface.' },
        { title: 'Administration reporting', detail: 'Volumes, elapsed time, interventions, failed actions, exception age and availability.' },
      ] },
    ],
    applications: [
      { title: 'Claims and service cases', detail: 'Each case needs information from several sources, routine checks, communication and an authorised decision.' },
      { title: 'Procurement and compliance files', detail: 'Staff need a complete case brief, supporting documents, required approvals and outstanding information.' },
      { title: 'Field operations', detail: 'Jobs require customer, asset, location, parts and scheduling information before dispatch.' },
    ],
    deliverables: [
      { title: 'Case workspace', detail: 'An authenticated interface for case information, documents, tasks, approvals, comments and completion status.' },
      { title: 'Bounded agent services', detail: 'Listed AI services for approved research, preparation, calculation, communication or system actions.' },
      { title: 'Approval and exception console', detail: 'A staff interface for material decisions, failed actions, conflicting information and permission limits.' },
      { title: 'Integration endpoints', detail: 'Supported APIs, webhooks, managed connectors or MCP connectors for approved applications.' },
      { title: 'Activity and administration reporting', detail: 'Timestamped action logs plus reporting for volumes, elapsed time, interventions and exception age.' },
    ],
    technicalScope: [
      { term: 'Connections', detail: 'REST APIs, webhooks, managed application connectors and optional MCP connectors.' },
      { term: 'Authority controls', detail: 'RBAC, service accounts, action limits, staff approval gates and administrator separation.' },
      { term: 'Action assurance', detail: 'Request identifiers, retry controls, duplicate-action protection, confirmation responses and timestamped logs.' },
      { term: 'Case state', detail: 'Current status, tasks, source references, approvals, exceptions, comments and completion result.' },
    ],
    faqs: [
      { question: 'Can staff approval be required before an action?', answer: 'Yes. Financial, customer, compliance and operational actions can require approval from an identified role.' },
      { question: 'Does the service connect to current case systems?', answer: 'Yes. Supported APIs, webhooks, managed connectors and optional MCP connectors can connect approved applications.' },
      { question: 'Are action logs and case status included?', answer: 'Yes. The case workspace can show status, actions, approvals, exceptions and timestamped service activity.' },
      { question: 'Can one service cover several case types?', answer: 'Yes. Each type receives separate information requirements, permissions, actions, approval limits and reporting.' },
    ],
  },
  {
    slug: 'legacy-modernisation', group: 'Build', title: 'Legacy System Modernisation', shortTitle: 'Legacy modernisation',
    summary: 'Assessment and replacement of unsupported applications, spreadsheets, databases and isolated business systems.',
    outcome: 'A maintainable application that preserves required business rules, information and system connections.',
    offerings: [
      { title: 'Application assessment', detail: 'A decision-ready account of business use, continuity exposure, support demand and suitable replacement options.', subservices: [
        { title: 'Application portfolio review', detail: 'A catalogue of business applications, users, dependencies, support status and replacement priority.' },
        { title: 'Replacement specification', detail: 'Required user tasks, business rules, information, permissions, integrations and service expectations.' },
      ] },
      { title: 'Interface and access replacement', detail: 'Modern user access for a current database or business service that remains operationally useful.', subservices: [
        { title: 'Web or desktop interface', detail: 'An authenticated replacement interface for approved tasks, roles and business rules.' },
        { title: 'API access layer', detail: 'Supported interfaces for current data, calculations and permitted business actions.' },
      ] },
      { title: 'Module and application replacement', detail: 'Replacement of selected modules or a complete unsupported application with a maintainable service.', subservices: [
        { title: 'Module replacement', detail: 'A focused replacement for selected calculations, forms, reports, approvals or operating functions.' },
        { title: 'Application replacement', detail: 'A complete supported application for approved users, information and business functions.' },
      ] },
      { title: 'Data and support transition', detail: 'Usable current information, accessible archive material and documented support for the replacement service.', subservices: [
        { title: 'Data migration package', detail: 'Validated active information, archive outputs, reconciliation results and migration documentation.' },
        { title: 'Test and support pack', detail: 'Business-rule checks, representative task results, configuration details and service documentation.' },
      ] },
    ],
    applications: [
      { title: 'Unsupported desktop applications', detail: 'An ageing Access, desktop or server application remains central after supplier or internal support has declined.' },
      { title: 'Spreadsheet-based business systems', detail: 'Connected spreadsheets support pricing, planning or operations with hidden formula risk and limited access control.' },
      { title: 'Isolated business software', detail: 'A line-of-business system has costly licences, limited integration, an obsolete interface or weak support.' },
    ],
    deliverables: [
      { title: 'Modernisation assessment', detail: 'A prioritised account of business dependency, continuity exposure, support status and replacement options.' },
      { title: 'Target architecture', detail: 'The selected application, data, identity, interface, hosting and support structure.' },
      { title: 'Replacement interface or application', detail: 'A supported web, desktop or mobile service for approved users and business tasks.' },
      { title: 'Compatibility and API layer', detail: 'Supported interfaces for retained databases, applications, identity services and business actions.' },
      { title: 'Migrated data and archive', detail: 'Validated active information, accessible archive outputs and reconciliation results.' },
      { title: 'Test and operating pack', detail: 'Business-rule checks, representative task results, configuration and service documentation.' },
    ],
    technicalScope: [
      { term: 'Application targets', detail: 'Responsive web applications, supported desktop services, mobile interfaces and business APIs.' },
      { term: 'Interfaces', detail: 'REST, GraphQL, webhooks, SQL databases, file exchange and managed application connectors.' },
      { term: 'Platform options', detail: 'Supported cloud, private-cloud, on-premises and container-based services.' },
      { term: 'Identity and access', detail: 'Current company identity services, SAML 2.0, OpenID Connect, RBAC and service accounts.' },
    ],
    faqs: [
      { question: 'Can selected modules be modernised separately?', answer: 'Yes. Calculations, forms, reports, approvals, interfaces or integrations can be replaced as separate defined services.' },
      { question: 'Does the service include data migration?', answer: 'Yes. Active information, archive outputs, reconciliation results and migration documentation can be included.' },
      { question: 'Can current databases and identity services remain?', answer: 'Yes. Supported databases and identity services can remain when they meet replacement application requirements.' },
      { question: 'Are testing and support materials included?', answer: 'Yes. Deliverables can include business-rule checks, representative task results, configuration details and operating documentation.' },
    ],
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
