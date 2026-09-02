import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'cold-chain',
  image: '/images/case-cold-chain.svg',
  sector: 'Refrigerated logistics',
  title: 'Deploying AI Monitoring Services in Refrigerated Logistics',
  summary: 'An AI-assisted monitoring service routes important temperature alerts to the right person and documents the action taken.',
  status: 'Anonymised',
  brief: 'The operator requested anonymity. Discovery is preparing an AI-assisted monitoring service that compares alerts with asset, maintenance and shift context at one chilled site. The pilot will run beside current controls and reports no response or safety result yet.',
  metrics: [
    { value: '1 month', label: 'alert sample under review', detail: 'One chilled site' },
    { value: '<15 min', label: 'acknowledgement target', detail: 'Unmeasured pilot target' },
    { value: '24/7', label: 'identified rota coverage', detail: 'Pilot requirement' },
  ],
  phases: [
    { label: 'Review', detail: 'Compare recent alerts with maintenance and shift notes.' },
    { label: 'Prioritise', detail: 'Separate faulty signals from alerts that need attention.' },
    { label: 'Assign', detail: 'Send each qualifying alert to the identified role on duty.' },
    { label: 'Prove', detail: 'Compare missed events, response time and closure detail during the pilot.' },
  ],
  code: {
    title: 'Alert to identified response',
    lines: ['alert = receive(sensor, asset)', 'quality = check(alert, heartbeat, calibration)', 'caseItem = qualify(quality, duration, product)', 'person = rota.onDuty(caseItem)', 'outcome = operator.close(caseItem, action, support)'],
    nodes: ['Temperature alert', 'Signal check', 'Priority decision', 'identified person', 'Completed response'],
  },
  nextSteps: ['Finish the one-month alert review', 'Agree the alerts that require a response', 'Run four weeks beside current practice', 'Use missed-event and response measures to decide live routing'],
};

export const editorial: CaseEditorial = {
  statusStatement: 'The operator requested anonymity. Discovery is still reviewing the alert sample, so this page contains no measured result. The service levels remain pilot targets. Existing food-safety, maintenance and site procedures continue throughout the work.',
  thesis: 'The site already detects temperature changes. The business problem starts when an alert reaches a shared channel with no identified person and no clear account of the response. The intervention assigns important alerts to the person on duty and makes completion visible. A parallel pilot will test whether this improves response without overloading the shift.',
  sceneLabel: 'A representative overnight alert',
  openingTitle: 'An overnight alert has no identified responder',
  openingParagraphs: [
    'A chilled room crosses its upper limit during the night. The monitoring platform sends a message within a minute to a shared mailbox and a group chat. Several people can see it, but the message does not name the person expected to act.',
    'By the morning, the temperature has returned to range. Someone may have checked a door, watched a defrost cycle or moved stock. The shift notes contain the temperature and time, but they may not show who acted, what they found or how the site closed the event.',
    'The operator wants a direct answer to a practical question: did every important overnight alert reach a contactable person, and can the morning team see what happened?',
  ],
  centralQuestion: 'Can the operator improve response and accountability without creating an unmanageable alert load or changing the existing safety duties?',
  sections: [
    {
      heading: 'An alert without an identified responder leaves risk open',
      paragraphs: [
        { text: 'The monitoring platform does its core job. Sensors report, thresholds trigger and messages reach the team within a minute. The gap begins after delivery. A shared mailbox cannot tell whether the on-duty person saw the alert, started an inspection or passed the issue to maintenance.' },
        { text: 'That ambiguity costs staff time each morning. Managers compare shift notes, maintenance updates and staff recollection. They may establish what happened, but the search delays review and makes an older incident hard to reconstruct. A missed alert and a handled alert can leave the same thin account. A refrigeration failure can also force stock removal, add labour and interrupt sales.' },
        { text: 'Discovery is reviewing one month of alerts from one site. The team is classifying each item as complete, explained by another source, recoverable from staff recollection or unsupported by the available material. It is also counting stale readings, signal gaps, alert volume and cases with no clear action.' },
        { text: 'The review does not determine whether stock remained safe or whether the current thresholds are correct. A Food Standards Agency observational study of 29 food businesses found that some treated temperatures above the recommended 5°C as normal and failed to act. Imperial research notes that refrigeration accounts for about half of supermarket-store energy use and that major faults can force stock removal, add labour and inhibit sales. These sources establish the stakes and provide no local result.', sources: [1, 2, 5, 6] },
      ],
    },
    {
      heading: 'Management narrowed the pilot to response',
      transition: 'The current gap concerns attention and follow-through, so the first change focuses on those two points.',
      paragraphs: [
        { text: 'Management chose a one-site response pilot before changing refrigeration equipment or expanding overnight cover. The service separates alerts that require site action from faulty or incomplete signals that maintenance must investigate. Site leaders set the rules using temperature, duration, equipment state, product and room context. The person on duty makes the judgement.' },
        { text: 'The person on duty acknowledges the case, completes the inspection and adds the information needed to close it, such as a follow-up temperature, a photograph or a stock disposition. Site staff continue to decide severity, product action and escalation. The service does not control refrigeration equipment.' },
        { text: 'Threshold changes need approval. Missing sensor input remains visible. The on-call rota must cover every hour before the operator enables live routing. European medicine-distribution guidance offers a useful comparison through its focus on a contactable responsible person, but that separate regime does not apply to this site.', sources: [3] },
        { text: 'The pilot can read monitoring information and cannot control refrigeration equipment. That boundary prevents a response tool from changing machinery. NCSC guidance supports separating monitoring access from operational control.', sources: [0, 4] },
      ],
    },
    {
      heading: 'The operator has set the test boundaries',
      paragraphs: [
        { text: 'The operator has agreed the purpose, one-site scope, identified response role and proposed fifteen-minute acknowledgement target. Discovery has also defined the alert review that will provide the starting point. The team has not completed that review or tested the service with a live shift.' },
        { text: 'False alarms could overload the rota, while missed excursions or weak product context could hide a serious event. Poor sensor coverage adds another risk. Staff may also fill in a closing field to clear the queue without improving the actual response.' },
        { text: 'Four weeks of observation will precede any live alert. The service will identify qualifying events and propose the person on duty. Shift managers will compare its output with current practice each morning, and current controls remain unchanged.' },
      ],
    },
    {
      heading: 'Live routing depends on response quality',
      role: 'conclusion',
      transition: 'The pilot will test both operational usefulness and the burden placed on the shift.',
      paragraphs: [
        { text: 'Measures include signal availability, faulty-signal detection, important events found only by current practice, false alarms per shift, time to an identified person, oldest untouched case, completion quality and staff time per case. The operator will set acceptable limits before the pilot starts.' },
        { text: 'Live routing can proceed only if the service does not miss an unacceptable number of important events, the rota can absorb the qualifying volume and the completion information helps managers understand the response. The fifteen-minute target must also prove suitable for the site’s risks and staffing.' },
        { text: 'A poor result will point to the next business decision. High signal failure means the sensor estate needs attention. Excessive alert volume means the qualifying rules need work. Insufficient overnight capacity means the operator must change scope or staffing before adding live routing.' },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [
  { statistic: '8 principles', finding: 'NCSC guidance treats secure OT connectivity as a managed access decision', implication: 'A controlled, read-only connection can supply temperature information with no route back into equipment.', source: 'NCSC, Secure connectivity for operational technology, 2026', href: 'https://www.ncsc.gov.uk/collection/operational-technology/secure-connectivity' },
  { statistic: 'Continuous', finding: 'Cold-chain controls depend on logged temperature checks and corrective action', implication: 'A useful case must connect the reading, the responsible person, the action and the completed response.', source: 'Food Standards Agency, Chilling food correctly', href: 'https://www.food.gov.uk/business-guidance/chilling-food-correctly-in-your-business' },
  { statistic: '2 of 7', finding: 'Two of the seven HACCP principles cover corrective action and documentation', implication: 'The pilot must assess both operational action and the clarity of the account left for later review.', source: 'FDA, HACCP Principles and Application Guidelines', href: 'https://www.fda.gov/food/hazard-analysis-critical-control-point-haccp/haccp-principles-application-guidelines' },
  { statistic: '1 person', finding: 'EU good distribution practice names one Responsible Person who is expected to act personally and stay continuously contactable', implication: 'an identified and reachable person offers a useful addressing principle even though this operator follows a different regulatory regime.', source: 'European Commission, Guidelines on Good Distribution Practice of medicinal products for human use (2013/C 343/01)', href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.C_.2013.343.01.0001.01.ENG' },
  { statistic: 'Definitive view', finding: 'NCSC operational technology guidance starts with a current map of architecture and assets', implication: 'The team should map sensors, gateways, access and response roles before the pilot begins.', source: 'NCSC, Operational Technology guidance', href: 'https://www.ncsc.gov.uk/collection/operational-technology' },
  { statistic: 'Above 5°C', finding: 'FSA research found that some food businesses viewed fridge temperatures above the recommended 5°C as normal and failed to act on them', implication: 'A temperature message creates value only when staff understand its significance and act within the agreed site practice.', source: 'Food Standards Agency, Storing chilled foods at incorrect temperatures, 2023', href: 'https://www.food.gov.uk/research/behaviour-and-perception/storing-chilled-foods-at-incorrect-temperatures' },
  { statistic: 'About half', finding: 'Refrigeration accounts for about half of supermarket-store energy consumption, and significant faults can force stock removal, add labour cost and inhibit sales', implication: 'The pilot should judge response speed and decision quality against material operational and commercial exposure.', source: 'Imperial College London Grantham Institute, Impact of a warming climate on UK food retail refrigeration systems, 2020', href: 'https://www.imperial.ac.uk/grantham/publications/all-publications/impact-of-a-warming-climate-on-uk-food-retail-refrigeration-systems-recommendations-for-industry.php' },
];
