# Asime Partners website

Vite, React and TypeScript website implementing the September 2026 institutional-capital brief in `New Asime Partners 2026.05.pdf`.

## Run and verify

```sh
npm install
npm run dev
# http://localhost:5174
npm run lint
npm run build
npm run preview
```

`npm run build` generates the HTML entry points, metadata, sitemap, robots file and downloadable corporate profile before checking TypeScript and producing `dist/`. The working Vite foundation is retained; the unused `app/` directory is not the running application.

## Content editing

The site uses version-controlled structured content. There is no external CMS account or admin authentication to configure.

- `src/content/programmes.json`: programme names, audiences, formats, introductions and curriculum modules.
- `src/content/case-studies.json`: client/partner, mandate, challenge, Asime role/capability, approach, outputs, substantiated outcomes, strategy, geography and audience.
- `src/content/insights.json`: published content summaries and the four filtering dimensions.
- `src/content/events.json`: event records (`id`, `title`, `description`, `date`, `format`, `location`, `href`). It is empty until real dates are supplied.
- `src/institutional/content.ts`: positioning, navigation, audience and capability descriptions, alternatives, framework and differentiators.
- `src/institutional/records.ts`: content types and research themes.

Add an entry with a stable, unique lowercase hyphenated `id`, then run `npm run content:build` (or `npm run build`). Programme, case-study and publication detail URLs are generated automatically. No template changes are needed. For images, use a path below `public/`, omit the `public` prefix, and include meaningful content titles. Preview changes before deploying.

Research themes from the PDF are enquiries/briefing topics, not fabricated published reports. Events and cohort dates are not invented. Case-study outcomes distinguish fundraising targets from realised results. Only the existing publication with supplied descriptive content is migrated into the publications feed; headline-only entries and the obsolete AI content are not presented as full articles.

## Page architecture and migration

- Homepage: institutional positioning; opportunity; four capabilities; audience routes; alternatives; Academy; Advisory; selected work; Intelligence; institutional network; differentiators; contact CTA.
- Audience pages: institutional investors, fund managers, investment professionals, DFIs/development partners.
- Capability pages: Academy, Advisory, Capital Solutions, Intelligence.
- Alternatives: PE, VC, private credit, infrastructure/real assets, impact, Islamic finance and digital assets.
- Academy: ten programmes, including the 6–9 month African LP Academy and GP institutional-readiness curriculum.
- Our Work: institutional investor, fund manager and Academy filters; six documented case studies.
- Insights: strategy, geography, audience, type and text filtering; publication and case-study templates; research enquiry paths.
- About: story, mission, vision, leadership, retained investment team, markets, Asime framework and downloadable profile.
- Partners: the PDF’s exact CAIA preferred-partner wording, ANDE training credentials and existing client logos.
- Events, network, careers, media, contact, privacy and terms remain accessible.
- `training.html` maps to Academy; `portfolio.html` maps to Our Work; `sectors.html` maps to Alternatives. Their canonical tags point to the replacement pages. `stages.html` becomes the investment lifecycle.
- Legacy home anchors for team and geographies route to About. The old management anchor resolves to Alternatives. The old technology anchor resolves to the overall platform, without advertising a technology service.

The explicit implementation brief takes precedence over conflicting later brainstorming: retain the Asime Partners/Academy names, use four capabilities, remove Tech & AI from corporate positioning, and omit hypothetical business-model revenue targets. Following the user’s visual correction, the previous site’s design takes precedence over the brief’s proposed visual system: black backgrounds, Poppins typography, white text, yellow accents, centred photographic heroes, the original photo-card components and client-logo strip. Original photographs are reused, including the building hero, advisory image, group photograph, workshop, platform and case-study images. The new institutional content and page architecture are retained. Existing media archives remain historical media, not a technology service offering.

## Enquiries

`src/contact.tsx` preserves the existing reCAPTCHA and `/api/contact` delivery integration and adds organisation, audience and service/programme interest. CTA links prefill interest. Those fields are included in the submitted message. Validation prevents empty required fields, failures retain the draft, and success appears only after a successful API response.

Server environment:

- `RECAPTCHA_SECRET_KEY`: required by the existing backend.
- `CONTACT_EMAIL`: receiving mailbox; defaults to `contact@asimepartners.com`. An existing deployment override continues to take precedence.

The existing reCAPTCHA site key is retained. Production domain registration, receiving-mailbox activation and delivery must be verified in the owner's accounts. Automated QA mocks both successful and failed delivery and does not send real messages.

## Analytics and consent

`src/institutional/analytics.ts` emits `cta_click`, `programme_interest`, `profile_download` and `enquiry_submitted` only after analytics consent. Events are placed in `window.dataLayer` and emitted as `asime:analytics` custom events. Payloads contain page/interest identifiers, not contact names, email addresses or message bodies.

No analytics provider account was supplied, so no remote collection or dashboard is active. Connect the chosen provider to these events when an account is available. A hosted CMS and analytics dashboard are external integrations, not silently created accounts.

## SEO and deployment

Set `SITE_URL` at build time to the final public origin. Until then metadata and sitemap use the existing `https://newasimepartners.vercel.app` origin. Generated pages include titles, descriptions, canonical URLs, Open Graph, Organization/WebPage/Course structured data, robots and sitemap. New programme and case-study URLs are included automatically.

Vercel continues to use `npm run build`, output `dist/` and the existing API. No deployment is performed by this implementation.

## Browser QA

`scripts/qa-site.cjs` checks rendered pages at desktop/mobile sizes, headings, internal links, filters/empty states, navigation, Escape handling, carousel links, images and mocked form success/failure. It uses an isolated headless Chrome profile. Set `PLAYWRIGHT_MODULE` to the installed Playwright package and `CHROME_PATH` to the Chrome executable if the bundled runtime paths differ.

```sh
node scripts/qa-site.cjs
```

The site includes skip navigation, visible focus states, labelled inputs, menu focus containment, reduced-motion behaviour, a carousel pause control and semantic headings. The homepage reuses the original photo-card and logo-strip components, including their restrained motion. It does not load the old particle, film-grain or Bootstrap bundles. Legacy media/legal styling remains isolated to those entries; contact uses the new shared design system.

## Content still requiring owner-supplied material

- Full unpublished research reports, upcoming event/cohort dates, fees and any additional substantiated case-study outcomes.
- Confirmation of continuing logo/photo usage rights and credential wording before public launch; existing assets and the exact PDF relationship sentence are used.
- Hosted CMS credentials and analytics account, if these services are desired later.
- Final production domain and an end-to-end live enquiry delivery check.

## Verification record

- Production build passed.
- All 47 generated page routes were browser-checked at desktop and mobile widths; 147 internal link targets checked. No browser runtime errors or overflow remained.
- Final targeted checks passed for the homepage, contact, work, partners and private-credit detail after the last functional updates.
- Work filters, empty states, mobile menu/Escape, direct fund-manager navigation, prefilled enquiry, mocked delivery success/failure and analytics consent gating passed.
- Desktop, tablet and mobile homepage screenshots and mobile navigation/contact screenshots were visually reviewed.
- Lint has no errors; existing Fast Refresh/legacy component warnings remain. New institutional modules and shared navigation/footer/cookie components pass lint without warnings.
