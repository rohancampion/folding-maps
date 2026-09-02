import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'yacht-operations',
  image: '/images/case-yacht.svg',
  sector: 'Yacht industry',
  title: 'Improving market-making and customer services in Yacht industry',
  summary: 'A shared commercial and service system connects enquiries, customer history, yacht projects and follow-up.',
  status: 'In progress',
  brief: 'Discovery and design are complete. The team is connecting market activity with customer service through one view of enquiries, customers, vessels and active projects. The first live release remains unevaluated.',
  metrics: [
    { value: '4', label: 'parts of the customer journey mapped', detail: 'Enquiry, customer, project and follow-up' },
    { value: '1', label: 'identified colleague for each open action', detail: 'First-release rule' },
    { value: '0', label: 'unapproved customer messages', detail: 'First-release limit' },
  ],
  phases: [
    { label: 'Understand', detail: 'Follow customer questions through the current tools and team.' },
    { label: 'Simplify', detail: 'Give staff one current view of commitments and next actions.' },
    { label: 'Introduce', detail: 'Move projects in small groups and resolve uncertain matches.' },
    { label: 'Measure', detail: 'Compare search time, late actions and message corrections after four weeks.' },
  ],
  code: {
    title: 'Customer update to identified next action',
    lines: ['update = capture(currentWork)', 'project = match(customer, vessel, enquiry)', 'status = assemble(update, project)', 'action = assign(status, colleague, dueDate)', 'message = colleague.approve(status)'],
    nodes: ['Customer channels', 'Customer and vessel match', 'Current project view', 'identified action', 'Approved reply'],
  },
  nextSteps: ['Take the pre-release baseline', 'Introduce the shared project view', 'Review uncertain matches and late actions each week', 'Use the four-week result to decide the next release'],
};

export const editorial: CaseEditorial = {
  statusStatement: 'This engagement is in progress. Discovery and design are complete. The team has not evaluated the first live release or its business result. The company remains unnamed, and this account contains no customer or vessel identifiers.',
  thesis: 'Growth has made market follow-up and routine customer service depend on repeated searches across email, job sheets, supplier messages and staff memory. A shared project view gives colleagues one current answer and one identified next action. Four weeks of use will test the result.',
  sceneLabel: 'A representative customer request',
  openingTitle: 'One customer question connects market activity with service delivery',
  openingParagraphs: [
    'A customer asks when their yacht will return to the water. The colleague handling the request checks the shared mailbox for the promised date, the job sheet for completed work, a supplier message for a delayed part and a colleague for the latest conversation with the rigger.',
    'The team gives a careful answer, but the search starts again when the customer calls later in the week. The assembled answer does not leave the next colleague with a current view. Growth has increased the number of projects and the number of times staff repeat this work.',
    'The engagement began with this customer question. It gives the business a direct test: can any colleague see the current commitment, understand what changed and know who acts next without rebuilding the story?',
  ],
  centralQuestion: 'Can the business improve market follow-up and customer service while preserving the personal attention yacht customers expect?',
  sections: [
    {
      heading: 'Growing demand turns updates into a capacity problem',
      paragraphs: [
        { text: 'The business manages enquiries, returning customers, vessels, long projects, suppliers and follow-up with a small specialist team. The same people quote work, manage delivery and speak with customers. They know the boats and the customers well. That knowledge helps them solve problems, but it also makes each person a source that colleagues must consult.' },
        { text: 'Management first needed to know whether slow updates came from staff shortages, uncertain supplier dates or fragmented project information. A review of live projects showed that staff could state most facts, but had to gather them again for each request. Reducing repeated search and clarifying the next commitment became the first priorities. Automatic drafting offered little value until the answer itself was dependable.' },
        { text: 'Interruptions consume specialist time. A technician stops work to answer a question. A colleague pauses a quote to check an old message. A manager spends time assembling the weekly position. The business then absorbs slower replies, duplicated effort, late follow-up and reliance on the person who happens to remember the latest change.' },
        { text: 'Research on application switching and information search shows that this type of coordination cost affects many workplaces. The capacity issue has special force in marine services. A British Marine Scotland survey found skills gaps at 82 percent of responding businesses, with 58 percent expecting retirements within five years and 12 percent employing apprentices. The figures apply to Scotland and provide sector context. They do not predict the result for this company.', sources: [0, 1, 5] },
      ],
    },
    {
      heading: 'Management chose a shared project view',
      transition: 'Discovery showed that staff need dependable project context before they need faster drafting.',
      paragraphs: [
        { text: 'Management chose to protect scarce specialist time before expanding headcount or automating customer contact. The selected release brings the customer, vessel, enquiry and active project into one view. It shows the latest confirmed commitment, recent changes, the next action, the colleague responsible and the due date.' },
        { text: 'Staff will continue updating the tools they use now. The shared view brings the confirmed commitment and next action into one place, so the intervention does not add a second administrative task. A colleague resolves any uncertain customer or vessel match before staff rely on the view.' },
        { text: 'Staff will not use the initial release to predict completion dates or send messages. A colleague approves every customer reply. This limit keeps the intervention tied to the problem the team identified: finding the current answer and acting on it.' },
        { text: 'The company will introduce a small group of projects first. Each weekly review will compare response preparation time, late actions, message corrections and continued use of private files. Management can stop the release if coordination effort rises or customer care suffers.' },
      ],
    },
    {
      heading: 'The design now has clear business tests',
      paragraphs: [
        { text: 'Discovery has produced a shared definition of the customer journey, the minimum project information staff need and the rule that every open action has one identified colleague and due date. The team has also agreed the limits on customer communication. These design decisions are complete. Operating improvements remain unmeasured.' },
        { text: 'Live use has not shown faster replies, fewer late actions or lower coordination effort. Published projections about searchable company information also cannot supply those answers. Published estimates for customer-system failure range from 18 to 69 percent, so the company must use its internal measures.', sources: [2, 4] },
        { text: 'Before launch, the team will review a representative set of projects and measure sources consulted per status question, time spent preparing an accurate update, missing required details, duplicate customer or vessel matches, overdue actions and material corrections to customer messages.' },
      ],
    },
    {
      heading: 'Four weeks must show less coordination effort',
      role: 'conclusion',
      transition: 'Four weeks of live use will decide whether the shared view solves the customer problem.',
      paragraphs: [
        { text: 'The same project sample and review method will run again after four working weeks. The team will also compare use of the shared view with continued searches through email, job sheets and private files. Management will agree acceptance thresholds before launch.' },
        { text: 'Success means staff can answer sampled customer questions with fewer searches, every active project has an identified next action, overdue work falls within the agreed limit and customer-message corrections do not rise. Staff must achieve this without creating a separate maintenance task.' },
        { text: 'If the result meets those conditions, the company can consider connected documents, management reporting and limited drafting support. If staff still rebuild the answer, the team will fix matching, capture or screen design first. The four-week review will use the same customer questions that formed the baseline.' },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [
  { statistic: '1,200 a day', finding: 'Instrumented workers switched between applications and windows about 1,200 times a day, losing just under four hours a week to reorientation', implication: 'Repeated searching can consume material working time, so the engagement will measure the same customer question before and after release.', source: 'Harvard Business Review, How Much Time and Energy Do We Waste Toggling Between Applications?, 2022', href: 'https://hbr.org/2022/08/how-much-time-and-energy-do-we-waste-toggling-between-applications' },
  { statistic: '62%', finding: 'Most survey respondents report struggling with the time they spend searching for information during the working day', implication: 'Search cost affects many sectors, but only a local baseline can establish its scale in this business.', source: 'Microsoft, Work Trend Index: Will AI Fix Work?, 2023', href: 'https://www.microsoft.com/en-us/worklab/work-trend-index/will-ai-fix-work' },
  { statistic: 'Up to 35%', finding: 'A searchable internal information source was projected to cut the time employees spend finding company information', implication: 'The 2012 projection supplies no business case here. The company will test its internal status questions during live use.', source: 'McKinsey Global Institute, The Social Economy, 2012', href: 'https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy' },
  { statistic: '5,800 businesses', finding: 'Most firms in the UK leisure, superyacht and small commercial marine industry are small, with the nine largest holding about a quarter of the market', implication: 'Smaller operators often place coordination work with the same people who quote, deliver and support customers.', source: 'British Marine, The Economic Benefits of the Leisure, Superyacht and Small Commercial Marine Industry, 2022-23', href: 'https://www.britishmarine.co.uk/resources/knowledge-centre/economic-benefits-leisure-superyacht-and-small-commercial-marine-industry-2022-2023' },
  { statistic: '18% to 69%', finding: 'CIO reviewed twelve analyst estimates of customer-relationship project failure, which ranged from 18 to 69 percent and averaged about a third', implication: 'Published failure estimates differ too much to guide this release. Direct use and customer-service measures must decide it.', source: 'CIO, What to do when your CRM project fails, 2017', href: 'https://www.cio.com/article/288664/what-to-do-when-your-crm-project-fails.html' },
  { statistic: '82%', finding: 'A 2022 Scottish marine workforce survey found skills gaps at 82 percent of responding businesses, while 58 percent expected retirements within five years and 12 percent employed apprentices', implication: 'Marine firms face pressure on specialist capacity, which increases the value of reducing repeated coordination work.', source: 'British Marine Scotland, Economic Value of Boating Tourism in Scotland, 2023', href: 'https://britishmarine.co.uk/application/files/3617/3037/5970/Measuring_the_Economic_Value_of_Boating_Tourism_in_Scotland_-_27_March_2023.pdf' },
];
