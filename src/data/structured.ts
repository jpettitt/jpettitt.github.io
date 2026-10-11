// schema.org JSON-LD for the home page. Every value here must also be visible
// on the page (Google's structured-data policy), so it is built from the same
// data the page renders rather than restated.

import { home, projects, type Project } from './site';

const SAME_AS = [
  'https://github.com/jpettitt',
  'https://www.linkedin.com/in/johnpettitt/',
  'https://medium.com/p-tt-by-john-pettitt',
];

function projectNode(p: Project, personId: string) {
  const isRepo = p.href.startsWith('https://github.com/');
  const node: Record<string, unknown> = {
    '@type': isRepo || p.provenance === 'codeowner' ? 'SoftwareSourceCode' : 'WebSite',
    name: p.name,
    url: p.href,
    description: p.blurb,
    maintainer: { '@id': personId },
  };
  if (isRepo) node.codeRepository = p.href;
  // "creator" only where John made it: weather-radar-card was adopted and
  // multiple-entity-row is maintained, so those carry maintainer alone.
  if (p.provenance === 'made') node.creator = { '@id': personId };
  return node;
}

export function homeJsonLd(site: URL, imageUrl: string) {
  const root = new URL('/', site).href;
  const ids = {
    website: `${root}#website`,
    profile: `${root}#profile`,
    person: `${root}#person`,
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': ids.website,
        url: root,
        name: 'John Pettitt',
        alternateName: 'p.tt',
        inLanguage: 'en',
        publisher: { '@id': ids.person },
      },
      {
        '@type': 'ProfilePage',
        '@id': ids.profile,
        url: root,
        name: 'John Pettitt',
        isPartOf: { '@id': ids.website },
        mainEntity: { '@id': ids.person },
      },
      {
        '@type': 'Person',
        '@id': ids.person,
        name: 'John Pettitt',
        url: root,
        image: imageUrl,
        description:
          'Engineer and founder. Leads Search Ecosystem Metrics engineering at Google and builds Home Assistant cards and integrations; founded CyberSource and Beyond.com.',
        worksFor: { '@type': 'Organization', name: 'Google' },
        homeLocation: {
          '@type': 'Place',
          name: home.place,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Nevada City',
            addressRegion: 'CA',
            addressCountry: 'US',
          },
        },
        sameAs: SAME_AS,
      },
      ...projects.map((p) => projectNode(p, ids.person)),
    ],
  };
}
