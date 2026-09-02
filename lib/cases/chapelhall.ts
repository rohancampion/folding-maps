import type { CaseEditorial } from '@/lib/caseEditorial';
import type { CaseStudy, ResearchFinding } from '@/lib/content';

export const study: CaseStudy = {
  slug: 'chapelhall',
  image: '/images/cases/chapelhall/hero.png',
  sector: 'Arts and culture',
  title: 'ChapelHall art platform',
  summary: 'A public website and art marketing system for a London contemporary art studio, bringing its identity, portfolio and enquiries into one coherent platform.',
  status: 'Published',
  brief: 'ChapelHall needed a complete public presence for its launch. Quiet Gears delivered the website, artwork presentation system, campaign assets and enquiry route in the studio’s visual language.',
  metrics: [
    { value: '4', label: 'public website sections', detail: 'Home, portfolio, about and contact' },
    { value: '6', label: 'artworks prepared for launch', detail: 'Each presented with artist, year and medium' },
    { value: '1', label: 'consistent campaign system', detail: 'Website, artwork features and social preview' },
  ],
  phases: [
    { label: 'Identity', detail: 'A distinctive digital setting for ChapelHall’s name, programme and point of view.' },
    { label: 'Website', detail: 'Responsive pages for the studio, portfolio, curator profile and enquiries.' },
    { label: 'Artworks', detail: 'A reusable presentation format for featured works and studio moments.' },
    { label: 'Launch', detail: 'Social preview, contact route and campaign-ready visual assets.' },
  ],
  code: {
    title: 'Delivered public platform',
    lines: ['ChapelHall identity', 'Responsive website', 'Artwork portfolio', 'Campaign assets', 'Enquiry route'],
    nodes: ['Identity', 'Website', 'Portfolio', 'Campaigns', 'Enquiries'],
  },
  nextSteps: [
    'Responsive website across four public sections',
    'Portfolio presentation for six launch artworks',
    'Artwork and studio feature formats for future campaigns',
    'Branded social preview and direct enquiry route',
  ],
  actionPanel: { eyebrow: 'Delivered', title: 'ChapelHall launch system' },
  showcase: {
    label: 'ChapelHall',
    title: 'Art first, throughout the site',
    summary: 'The website, portfolio and campaign material use one visual language, with each work presented at gallery scale.',
    images: [
      { src: '/images/cases/chapelhall/art-market-wide.png', alt: 'Visitors browsing paintings at a contemporary art market in a converted London hall', caption: 'Art-market campaign study' },
      { src: '/images/cases/chapelhall/artwork.jpg', alt: 'Abstract ChapelHall artwork in vivid magenta, violet and pale blue', caption: 'Artwork from the ChapelHall launch portfolio' },
      { src: '/images/cases/chapelhall/art-market-portrait.png', alt: 'Visitor examining a large abstract painting at an art market', caption: 'Art-market viewing study' },
      {
        src: '/images/cases/chapelhall/studio.jpg',
        alt: 'Gallery interior with artworks displayed in glass cases',
        caption: 'Gallery image from the ChapelHall source site',
      },
      { src: '/images/cases/chapelhall/artwork-variant.png', alt: 'Variant of the abstract ChapelHall artwork with mineral blue and oxblood passages', caption: 'Artwork variant with the original composition preserved' },
      { src: '/images/cases/chapelhall/studio-variant.png', alt: 'Variant of the ChapelHall gallery interior with revised artworks in the original cases', caption: 'Gallery variant with the original display structure preserved' },
      { src: '/images/cases/chapelhall/art-market-booth-wide.png', alt: 'Collectors viewing paintings and sculpture in a warm brick art-market hall', caption: 'Independent booth campaign study' },
      { src: '/images/cases/chapelhall/art-market-viewer-portrait.png', alt: 'Visitor studying a tall mixed-media painting at a contemporary art market', caption: 'Close viewing campaign study' },
      { src: '/images/cases/chapelhall/artwork-variant-2.png', alt: 'Photographic artwork variant in mineral blue, oxblood and chalk white', caption: 'Second pigment study with the original composition preserved' },
      { src: '/images/cases/chapelhall/studio-variant-2.png', alt: 'Gallery interior with contemporary abstract works inside the original display cases', caption: 'Second gallery study with the display structure preserved' },
    ],
  },
};

export const editorial: CaseEditorial = {
  statusStatement: 'Website, portfolio, artwork features and enquiry route delivered.',
  thesis: 'ChapelHall launched with one visual system for its public identity, artworks, studio story and enquiries. The finished platform gives visitors a clear view of the programme and gives the studio a consistent set of materials for ongoing art marketing.',
  sceneLabel: 'The public launch',
  openingTitle: 'ChapelHall entered the market with one visual system',
  openingParagraphs: [
    'ChapelHall was preparing to introduce an independent contemporary art studio in London. Its public presence needed to establish the studio’s character, present artwork with care and give artists, visitors and collaborators a direct route to make contact.',
    'The commission covered a responsive website and an art marketing system. The visible result includes the ChapelHall identity, a portfolio, curator and studio pages, artwork feature formats, a social preview and an enquiry form.',
    'The work gives ChapelHall a complete launch platform. Visitors can move from the studio’s proposition to individual works and then to an enquiry without leaving the same visual setting.',
  ],
  centralQuestion: 'Can a new art studio present its identity, programme and artworks with the confidence of an established cultural brand?',
  sections: [
    {
      heading: 'A new studio needed a complete public identity',
      paragraphs: [
        { text: 'ChapelHall describes itself as a living room for contemporary art. The website translates that position into a restrained editorial setting built around large type, warm neutrals, deep red accents and full-frame artwork.' },
        { text: 'The main page introduces the studio, selected works and its curatorial voice in a single view. Dedicated pages give the portfolio, ChapelHall’s background, its head curator and its contact details enough space to stand independently.' },
        { text: 'The identity extends beyond a logo placement. Page titles, image treatment, captions, buttons and the social preview use the same visual language, giving the studio a recognisable public face from the first campaign link through to an enquiry.' },
      ],
    },
    {
      heading: 'The website became the main viewing room',
      transition: 'The public site had to give artwork the largest share of attention while keeping practical information close at hand.',
      paragraphs: [
        { text: 'The finished website uses expansive hero imagery and gallery-scale typography to establish ChapelHall immediately. Responsive layouts preserve that character on mobile screens, with navigation, artwork and contact routes remaining clear at smaller sizes.' },
        { text: 'A dedicated portfolio presents six launch works with title, artist, year and medium. Artwork carousels also appear on the main and studio pages, allowing selected work and behind-the-scenes material to support more than one public story.' },
        { text: 'The about page introduces the studio and head curator Luc Balonwu. The contact page supports project, visit and collaboration enquiries, giving each public audience a direct next action.' },
      ],
    },
    {
      heading: 'Artwork marketing gained a consistent format',
      transition: 'A launch site also needed material ChapelHall could reuse as the programme developed.',
      paragraphs: [
        { text: 'Each featured work has a consistent presentation across image, title, artist, date and medium. This gives ChapelHall a dependable format for portfolio updates, featured selections and campaign links without changing the studio’s visual character.' },
        { text: 'Studio moments use the same editorial treatment for installation activity, open-studio material and event-led content. The distinction between artworks and studio stories stays visible while both remain part of the same brand system.' },
        { text: 'A branded social preview completes the public campaign set. Shared links retain the ChapelHall name, statement and visual identity before a visitor reaches the website.' },
      ],
    },
    {
      heading: 'ChapelHall received a complete launch platform',
      role: 'conclusion',
      transition: 'The final delivery combines the public website and the studio’s recurring marketing materials.',
      paragraphs: [
        { text: 'ChapelHall now has a responsive website spanning its main proposition, portfolio, studio background and contact route. The published experience supports artists, visitors, collaborators and prospective partners through one coherent public destination.' },
        { text: 'The art marketing system adds reusable artwork features, studio-story formats and branded link previews. Together, these deliverables give the studio a stable visual base for exhibitions, commissions and future programme announcements.' },
      ],
    },
  ],
};

export const research: ResearchFinding[] = [];
