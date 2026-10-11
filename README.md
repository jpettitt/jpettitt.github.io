# p.tt

John Pettitt's personal site: what I'm building now, the timeline behind it, and the writing. Built with [Astro](https://astro.build) as a static site and served by GitHub Pages at [p.tt](https://p.tt).

## Develop

```sh
npm ci
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/
```

## Content

Everything factual lives in [src/data/site.ts](src/data/site.ts): projects, timeline milestones, patents and writing. Patent numbers and grant dates come from Google Patents (LinkedIn's list has errors). Project dates are repo creation months, except weather-radar-card, which is dated from my first commit after taking it over.

Install links point to each project's GitHub repository, whose README has the install instructions.

## No third-party requests

The site sets no cookies and loads nothing from anyone else's servers. Keep it that way:

- Fonts are self-hosted: Mona Sans (SIL OFL) in [public/fonts/](public/fonts/).
- The live clock is my [geo-clock-card](https://github.com/jpettitt/geo-clock-card) release, self-hosted under a versioned path, [public/geoclock/v0.2.11/](public/geoclock/v0.2.11/), with NASA imagery downscaled to 1024 px. A new card release goes in a new versioned directory, never over the old one.
- Any change that adds an external request also updates [the privacy page](src/pages/privacy.astro) and its "Last updated" date in the same commit.

## Deploy

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds and deploys on every push to `master`. Under the repo's Settings → Pages, the source must be **GitHub Actions**: the old branch-based Jekyll build can't build this site.
