// Every fact here is sourced in PRODUCT.md: repo creation dates and first
// commits from GitHub, patent numbers and grant dates from Google Patents
// (not LinkedIn, which has four wrong), career from John's own résumé.

export type Provenance = 'made' | 'took over' | 'maintainer' | 'codeowner';

export interface Project {
  name: string;
  href: string;
  blurb: string;
  provenance: Provenance;
  since?: string;
  extra?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'weather-radar-card',
    href: 'https://github.com/jpettitt/weather-radar-card',
    blurb: 'Rain radar card for Home Assistant, built on RainViewer tiles.',
    provenance: 'took over',
    since: 'Mar 2025',
  },
  {
    name: 'lovelace-multiple-entity-row',
    href: 'https://github.com/benct/lovelace-multiple-entity-row',
    blurb: 'Several entity states and attributes on one entity row.',
    provenance: 'maintainer',
  },
  {
    name: 'geoclock.world',
    href: 'https://geoclock.world',
    blurb: 'The live world day/night map on the web, also as a Chrome new tab and a Mac wallpaper.',
    provenance: 'made',
    since: 'May 2026',
    extra: [{ label: 'Mac wallpaper', href: 'https://github.com/jpettitt/geoclock-wallpaper-mac' }],
  },
  {
    name: 'geo-clock-card',
    href: 'https://github.com/jpettitt/geo-clock-card',
    blurb: 'Live world day/night clock modelled after Geochron, on NASA Blue and Black Marble imagery.',
    provenance: 'made',
    since: 'May 2026',
  },
  {
    name: 'meshcore-card',
    href: 'https://github.com/jpettitt/meshcore-card',
    blurb: 'MeshCore radio networks in a Lovelace card.',
    provenance: 'made',
    since: 'Mar 2026',
  },
  {
    name: 'purpleair-local',
    href: 'https://github.com/jpettitt/purpleair-local',
    blurb: 'Local polling of PurpleAir PA-II sensors. No cloud, no API key.',
    provenance: 'made',
    since: 'May 2026',
  },
  {
    name: 'smart-icons',
    href: 'https://github.com/jpettitt/smart-icons',
    blurb: "Drives any entity's icon color and glyph from another entity's state.",
    provenance: 'made',
    since: 'May 2026',
  },
  {
    name: 'hacs-stats',
    href: 'https://hacs-stats.dev/',
    blurb: 'Unofficial usage stats for HACS plugins, integrations and themes.',
    provenance: 'made',
    since: 'May 2026',
  },
  {
    name: 'Subaru integration',
    href: 'https://www.home-assistant.io/integrations/subaru',
    blurb: "Home Assistant's built-in Subaru integration.",
    provenance: 'codeowner',
  },
];

export const provenanceLabel: Record<Provenance, string> = {
  made: 'made',
  'took over': 'took over, rewrote in TypeScript',
  maintainer: 'maintainer',
  codeowner: 'codeowner',
};

export interface Patent {
  number: string;
  title: string;
  granted: string;
  year: number;
  href: string;
}

const gp = (id: string) => `https://patents.google.com/patent/${id}/en`;

export const patents: Patent[] = [
  { number: 'US 12,160,507', title: 'Content encryption', granted: 'Dec 2024', year: 2024, href: gp('US12160507B2') },
  { number: 'US 9,779,067', title: 'Online publishing and content syndication', granted: 'Oct 2017', year: 2017, href: gp('US9779067B2') },
  { number: 'US 8,244,629', title: 'Bi-gram scoring in fraud risk analysis', granted: 'Aug 2012', year: 2012, href: gp('US8244629B2') },
  { number: 'US 7,403,922', title: 'Evaluating fraud risk in an e-commerce transaction', granted: 'Jul 2008', year: 2008, href: gp('US7403922B1') },
  { number: 'US 6,289,452', title: 'Delivering digital products electronically', granted: 'Sep 2001', year: 2001, href: gp('US6289452B1') },
  { number: 'US 6,029,154', title: 'Detecting credit-card fraud over the internet', granted: 'Feb 2000', year: 2000, href: gp('US6029154A') },
  { number: 'US 5,864,620', title: 'Controlling software distribution in a multitiered chain', granted: 'Jan 1999', year: 1999, href: gp('US5864620A') },
];

export interface Milestone {
  key: string;
  title: string;
  body?: string;
  weight: 'landmark' | 'entry';
  sortYear: number;
}

export const milestones: Milestone[] = [
  {
    key: '2017',
    title: 'Relay Media acquired by Google',
    body: "Co-founder and CTO. Built a real-time AMP platform serving over 100 million pages a month for publishers including TMZ, Vice and Hearst TV, as the company's only engineer.",
    weight: 'landmark',
    sortYear: 2017.5,
  },
  {
    key: '2015',
    title: 'Yuzu, Barnes & Noble',
    body: 'Head of Engineering, 80+ people, e-learning for 700+ colleges.',
    weight: 'entry',
    sortYear: 2015,
  },
  {
    key: '2013',
    title: 'Electronic Frontier Foundation',
    body: 'Fundraising Advisory Board, 2013–15.',
    weight: 'entry',
    sortYear: 2013,
  },
  {
    key: '2011',
    title: 'Repost',
    body: 'Founder, CEO and CTO. Republished full articles across sites with attribution and ads.',
    weight: 'entry',
    sortYear: 2011,
  },
  {
    key: '2010',
    title: 'VISA buys CyberSource for $2 billion',
    body: 'Founded in 1994 as a spin-out of Beyond.com. Wrote its early credit-card fraud detection and took it public.',
    weight: 'landmark',
    sortYear: 2010,
  },
  {
    key: '2008',
    title: 'Black Rock Rangers, Burning Man',
    body: 'Logistics manager for 600+ volunteer mediators, 2008–09.',
    weight: 'entry',
    sortYear: 2008.5,
  },
  {
    key: '2006',
    title: 'BitTorrent',
    body: 'VP Engineering. Doubled engineering and operations; moved onto reliable infrastructure.',
    weight: 'entry',
    sortYear: 2006,
  },
  {
    key: '2003',
    title: 'Dean for America',
    body: 'Staff photographer for the Howard Dean campaign. Published in the New York Times, the Washington Post and Vanity Fair.',
    weight: 'entry',
    sortYear: 2003,
  },
  {
    key: '1994',
    title: 'software.net, the first app store',
    body: 'Founded with Bill McKiernan and built the e-commerce system from scratch. As Beyond.com it grew to $100 million in revenue and went public.',
    weight: 'landmark',
    sortYear: 1994,
  },
  {
    key: '1987',
    title: "Specialix and the UK's first commercial internet connection",
    body: 'Founder, 1987–94. Set up the first commercial, non-academic internet connection in the UK. Specialix was later sold.',
    weight: 'landmark',
    sortYear: 1987,
  },
  {
    key: '1979',
    title: 'Bracknell College',
    body: 'Studied electronics (City and Guilds), 1979–80.',
    weight: 'entry',
    sortYear: 1979,
  },
];

export const writing = [
  {
    title: 'Which Way Are You Building?',
    date: 'Aug 2026',
    href: 'https://medium.com/p-tt-by-john-pettitt/which-way-are-you-building-375ec39c2a4f',
  },
  {
    title: 'Any Sufficiently Advanced Technology is Indistinguishable from a Rigged Demonstration',
    date: 'Oct 2015',
    href: 'https://medium.com/p-tt-by-john-pettitt/any-sufficiently-advanced-technology-is-indistinguishable-from-a-rigged-demonstration-960073c7177b',
  },
];

export const home = {
  place: 'Nevada City, California',
  latitude: 39.2616,
  longitude: -121.0161,
  timeZone: 'America/Los_Angeles',
};
