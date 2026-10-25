import Reveal from '@/components/Reveal';
import { useFlipResults } from '@/animation/useFlipResults';
import ProfessionalContent from './ProfessionalContent';
import { motion, useReducedMotion } from 'motion/react';
import SkeletonImage from '@/components/SkeletonImage';
import { useEffect, useState, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import Awards from '@/components/Awards';
import PhotoCard from '@/components/PhotoCard';
import TeamSection from './TeamSection';
import { awardsContent } from '@/data/content';
import partnerLogos from './partner-logos.json';
import { audiences, capabilities, enquiry, framework, introduction, navigation, programmes, strategies } from './content';
import { eventRecords, insightRecords, researchTopics, workRecords, type ContentRecord } from './records';
import './site.css';
import './careers.css';
import HomeHero from './HomeHero';
import Research from './Research';
import PensionContent from './PensionContent';
import FamilyContent from './FamilyContent';
import FundContent from './FundContent';
import DevelopmentContent from './DevelopmentContent';
import './publication.css';
import './events.css';
import './spacing.css';
import './buttons.css';
import './hero-layout.css';
import './audience-cards.css';
function Button({ href, children, light = false, outline = false }: {
    href: string;
    children: ReactNode;
    light?: boolean;
    outline?: boolean;
}) { return <a className={`ap-button ${light ? 'ap-button-light' : ''} ${outline ? 'ap-button-outline' : ''}`} href={href}>{children}<span aria-hidden="true">↗</span></a>; }
function Section({ id, eyebrow, title, body, children, dark = false, white = false }: {
    id?: string;
    eyebrow?: string;
    title?: string;
    body?: string;
    children?: ReactNode;
    dark?: boolean;
    white?: boolean;
}) { return <section id={id} className={`ap-section ${dark ? 'ap-dark' : ''} ${white ? 'ap-white' : ''}`}><div className="ap-wrap">{(eyebrow || title) && <Reveal className="ap-heading">{eyebrow && <span className="ap-eyebrow">{eyebrow}</span>}{title && <h2>{title}</h2>}{body && <p>{body}</p>}</Reveal>}{children}</div></section>; }
function HeroTitle({ eyebrow, title, body, cta, showCta = true, singleLineTitle = false, showBreadcrumb = true, className = '', children }: {
    eyebrow: string;
    title: ReactNode;
    body: string;
    showCta?: boolean;
    cta?: ReactNode;
    singleLineTitle?: boolean;
    className?: string;
    showBreadcrumb?: boolean;
    children?: ReactNode;
}) { return <section className={`ap-page-hero${singleLineTitle ? ' ap-page-hero-single-line' : ''} ${className}`}><div className="ap-wrap">{showBreadcrumb && <a href="/" className="ap-breadcrumb">Asime Partners / {eyebrow}</a>}<h1>{title}</h1><p>{body}</p>{showCta && <div className="ap-buttons"><>{cta ?? <Button light href={enquiry(eyebrow)}>Talk to Asime</Button>}</></div>}{children}</div></section>; }
function List({ items }: {
    items: string[];
}) { return <ul className="ap-list">{items.map(x => <li key={x}>{x}</li>)}</ul>; }
function ProgrammeCards({ ids, imageOverride }: {
    ids?: string[];
    imageOverride?: string;
}) { return <div className="ap-grid ap-programme-grid">{(ids ? ids.flatMap(id => programmes.filter(p => p.id === id)) : programmes).map(p => <PhotoCard key={p.id} href={`/programme-${p.id}.html`} image={imageOverride ?? p.image} imageAlt={imageOverride ? 'Professionals collaborating in a learning environment' : p.imageAlt} category={p.format} title={p.title} description={<>{p.body.split('\n\n').map(paragraph => <p key={paragraph} style={{ whiteSpace: 'pre-line' }}>{paragraph}</p>)}</>} cta={'cta' in p ? p.cta : 'Explore programme'} />)}</div>; }
const capabilityImages = [
    '/images/platform/academy-build-capability.png',
    '/images/sliders/hero-platform.jpg',
    '/images/platform/03-reit.jpg',
    '/images/platform/04-listed-digital.jpg',
];
function Capabilities() {
    return <div className="ap-grid ap-grid-four ap-original-photo-grid">{capabilities.map((c, i) =>
        <PhotoCard key={c.id} href={`/${c.id}.html`} image={capabilityImages[i]} imageAlt={c.title}
            category={['Build capability', 'Advise capital', 'Structure capital', 'Understand the market'][i]}
            title={c.title} description={`${c.action} ${c.body}`} cta={['Earn your credentials', 'How we can help', 'Mobilise smart capital', 'Maintain your edge'][i]} />
    )}</div>;
}
function FinalCta() { return <section id="apply" className="ap-final-cta" aria-labelledby="final-cta-title"><div className="ap-final-cta-pattern" aria-hidden="true">{['growth', 'capital', 'network', 'growth', 'capital', 'network'].map((kind, i) => <svg key={i} className={`ap-cta-symbol ap-cta-symbol-${i}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">{kind === 'growth' ? <><path d="M8 38V27h7v11m6 0V20h7v18m6 0V11h7v27M7 19 21 9l9 5L41 4m-8 0h8v8" /></> : kind === 'capital' ? <><ellipse cx="24" cy="12" rx="16" ry="7"/><path d="M8 12v12c0 4 7 7 16 7s16-3 16-7V12M8 24v12c0 4 7 7 16 7s16-3 16-7V24" /></> : <><circle cx="24" cy="24" r="7"/><circle cx="8" cy="8" r="4"/><circle cx="40" cy="8" r="4"/><circle cx="8" cy="40" r="4"/><circle cx="40" cy="40" r="4"/><path d="m11 11 8 8m10 10 8 8m0-26-8 8M11 37l8-8"/></>}</svg>)}</div><div className="ap-wrap ap-final-cta-inner"><h2 id="final-cta-title">Let’s build what comes next</h2><Button href="/contact.html">Talk to Asime</Button></div></section>; }
function RecordsCards({ records, photoCards = false }: {
    records: ContentRecord[];
    photoCards?: boolean;
}) { if (photoCards) return <div className="ap-grid ap-programme-grid">{records.map(r => <div className="ap-record-item" data-flip-id={r.id} key={r.id}><PhotoCard href={`/${r.type === 'Case Study' ? 'case-study' : 'article'}-${r.id}.html`} image={r.image || '/images/sliders/hero-platform.jpg'} imageAlt={r.title} category={`${r.audience} / ${r.geography}`} title={r.title} description={r.description} cta={`Read ${r.type === 'Case Study' ? 'case study' : 'overview'}`} /></div>)}</div>; return <div className="ap-grid">{records.map(r => <article className="ap-card ap-image-card" data-flip-id={r.id} key={r.id}>{r.image ? <SkeletonImage src={r.image} alt={r.title} loading="lazy" width="640" height="420" style={{objectFit:r.imageFit || 'cover'}}/> : <div className="ap-record-graphic" aria-hidden="true"><span>Institutional capital</span><div>○ ───── ○ ───── ○</div><strong>{r.strategy}</strong><span>{r.geography}</span></div>}<span className="ap-eyebrow">{r.audience} / {r.geography}</span><h3>{r.title}</h3><p>{r.description}</p><a className="ap-link" href={`/${r.type === 'Case Study' ? 'case-study' : 'article'}-${r.id}.html`}>Read {r.type === 'Case Study' ? 'case study' : 'overview'} ↗</a></article>)}</div>; }
function Home() {
    const audienceCards = navigation.find(group => group.title === 'Who We Serve')!.links.flatMap(link => {
        const index = audiences.findIndex(audience => `/${audience.id}.html` === link.href);
        return index === -1 ? [] : [{ ...audiences[index], title: link.label, image: ['/images/sliders/01.jpg', '/images/pension-trustee-executive.jpg', '/images/platform/Asime Partners - Acumen Workshops_15.jpg', '/images/development-partners-hero.webp', '/images/more/partner.jpg'][index] }];
    });
    return <><HomeHero /><Awards /><Section id="academy" white><div className="ap-academy-banner"><SkeletonImage className="ap-academy-banner-image" src="/images/platform/Asime Partners - Acumen Workshops_15.jpg" alt="Asime Partners professional investment workshop" loading="lazy"/><div className="ap-academy-banner-content"><span className="ap-eyebrow">Asime Academy</span><h2>Build institutional investment capability.</h2><p>Global standards. African application. Practitioner-led education for pension trustees, CIOs, investment committees and fund managers.</p><Button href="/academy.html">Explore Asime Academy</Button></div></div></Section>
 <Section id="platform" white title="The Asime Platform: from capabilities to capital"><Capabilities /></Section>
 <Section id="who-we-serve" title="Who we serve: the people who allocate and manage capital"><div className="ap-grid ap-audience-grid">{audienceCards.map(a => <PhotoCard key={a.id} href={`/${a.id}.html`} image={a.image} imageAlt={a.title} title={a.title} description={a.body} cta="Explore services" />)}
    <a className="wf-photo-card ap-audience-regulators" href={enquiry('Regulators & Policymakers')}>
        <div className="wf-photo-card-media"><SkeletonImage src="/images/regulators-policymakers-books.png" alt="Books titled Compliance, Regulations and Guidelines against a red background" className="wf-photo-card-img" loading="lazy"/></div>
        <div className="wf-photo-card-body"><h3 className="wf-photo-card-title">Regulators &amp; Policymakers</h3><div className="wf-photo-card-desc">Technical support for pension, insurance and capital markets regulators. Design investment frameworks, asset-class definitions, limits and supervision that enable prudent allocation to alternative assets.</div><span className="wf-photo-card-cta"><span>Explore services</span><span className="wf-photo-card-cta-icon" aria-hidden="true">›</span></span></div>
    </a>
 </div></Section>
 <Section id="alternatives" dark title="Alternative investments and blended capital for Africa"><div className="ap-grid ap-original-photo-grid">{strategies.map((s, i) => <PhotoCard key={s.id} href={`/alternatives.html#${s.id}`} image={['/images/Investor/analyzing-business-activity.jpg', '/images/sliders/dubai-sheikh-zayed-road.jpg', '/images/Investor/risk.jpg', '/images/sliders/nyc-skyline.jpg', '/images/about-agritech.jpg', '/images/sliders/islamic-finance-products.jpeg', '/images/platform/04-listed-digital.jpg'][i]} imageAlt={s.title} title={s.title} description={s.body} cta="Explore strategy" />)}<PhotoCard href="/alternatives.html#climate-carbon-finance" image="/images/sliders/climate-carbon-finance.jpeg" imageAlt="Globe and trees growing on stacks of coins representing climate finance" title="Climate & Carbon Finance" description="Mobilise capital for decarbonisation, carbon markets and climate-resilient assets across Africa." cta="Explore strategy" /></div></Section>




 <FinalCta /></>;
}
function Network() {
    return <section className="ap-section ap-capital-network" aria-labelledby="capital-network-title"><div className="ap-wrap ap-capital-network-layout">
        <div className="ap-capital-network-copy"><span className="ap-eyebrow">Asime Institutional Capital Network</span><h2 id="capital-network-title">Connecting the institutions that move capital.</h2><p>A professional network for the people shaping African alternative investment.</p><div className="ap-capital-network-benefits">{['Institutional briefings & research', 'Executive education & CIO roundtables', 'Manager intelligence & peer learning', 'Investment tools & private events'].map(x => <span key={x}><span aria-hidden="true">↗</span>{x}</span>)}</div><Button light href={enquiry('Join the Institutional Capital Network')}>Join the network</Button></div>
        <div className="ap-capital-network-visual" role="img" aria-label="Asime connects LPs, GPs, DFIs, family offices and investment professionals">
            <div className="ap-capital-orbit ap-capital-orbit-outer" /><div className="ap-capital-orbit ap-capital-orbit-inner" />
            <svg className="ap-capital-connections" viewBox="0 0 500 500" aria-hidden="true"><path d="M250 250 L250 55 M250 250 L435 190 M250 250 L365 410 M250 250 L135 410 M250 250 L65 190" /></svg>
            <div className="ap-capital-hub"><strong>ASIME<span>★</span></strong><small>Capital. Connected.</small></div>
            {['LPs', 'GPs', 'DFIs', 'Family offices', 'Investment professionals'].map((x, i) => <div className={`ap-capital-node ap-capital-node-${i}`} key={x} style={{animationDelay: `${i * -.8}s`}}><span className="ap-capital-node-dot" />{x}</div>)}
            <span className="ap-capital-network-caption">Shared insight. Stronger institutions.</span>
        </div>
    </div></section>;
}
function Academy() { return <div className="ap-academy-page"><HeroTitle eyebrow="Academy" showCta={false} title={<>Learn <strong className="ap-academy-title-accent">impact investing <span style={{ color: '#fff' }}>and</span> alternative investments</strong> the way Africa invests</>} body="We are Africa’s specialist platform pairing global expertise with African experience."><a className="ap-academy-programmes-cta" href="#programmes">Programmes<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16m-6-6 6 6 6-6" /></svg></a></HeroTitle><Section id="programmes" eyebrow="Programmes" title="Learn globally. Apply locally" body="Explore executive intensives, open-enrolment programme enquiries and bespoke institutional cohorts. Contact us for cohort dates, delivery options and enrolment details."><ProgrammeCards ids={['african-lp-academy', 'gp-academy', 'private-markets-academy', 'climate-carbon-finance-academy', 'islamic-finance', 'digital-assets']} /></Section><Section id="credentials" dark eyebrow="Global standards. African application." title="A practical investment education ecosystem."><div className="ap-grid ap-grid-four">{[['CAIA', 'CAIA charterholder from the CAIA Association.', '/images/Certifications/caia-logo.png', 'CAIA Association'], ['CIFE', 'Islamic finance expertise and a specialist learning track.', '/images/Certifications/ethica-institute-logo.png', 'Ethica Institute'], ['CDFP', 'Digital finance and digital-asset expertise.', '/images/Certifications/images.png', 'Digital Frontiers Institute'], ['ANDE IMT', '3x Investment Manager (Ghana, South Africa, Kenya)', '/images/Certifications/logo-ande.png', 'Aspen Network of Development Entrepreneurs (ANDE), Aspen Institute']].map(([t, b, image, alt]) => <article className="ap-card ap-credential-card" key={t}><div className={`ap-credential-logo ${t === 'ANDE IMT' ? 'ap-credential-logo-dark' : ''}`}><SkeletonImage src={image} alt={alt} loading="lazy" width="280" height="110"/></div><h3>{t}</h3><p>{b}</p></article>)}</div></Section><Section eyebrow="Investment-management training" title="Practitioner experience, applied."><RecordsCards photoCards records={workRecords.filter(r => r.audience === 'Academy')}/></Section><FinalCta /></div>; }
function recordId(prefix: string) { return new URLSearchParams(location.search).get('id') || location.pathname.split('/').pop()?.replace('.html', '').replace(`${prefix}-`, ''); }
function Programme() { const p = programmes.find(x => x.id === recordId('programme')); if (!p)
    return <Missing />; return <><HeroTitle eyebrow="Academy programme" title={p.title} body={p.body}/><Section><div className="ap-two"><div><span className="ap-eyebrow">Programme overview</span><h2>Build capability you can apply.</h2><dl><div className="ap-detail-list"><dt>Who it is for</dt><dd>{p.audience}</dd></div><div className="ap-detail-list"><dt>Format</dt><dd>{p.format}</dd></div><div className="ap-detail-list"><dt>Enrolment</dt><dd>Request the next cohort dates, fees and delivery options from Asime.</dd></div></dl><div className="ap-buttons"><Button href={enquiry(`Enrol: ${p.title}`)}>Enrol / express interest</Button><Button outline href={enquiry(`Request programme: ${p.title}`)}>Request programme</Button></div></div><SkeletonImage src="/images/platform/Asime Partners - Acumen Workshops_15.jpg" alt="Practitioner-led investment education workshop"/></div></Section></>; }
function InvestmentProfessionals() {
    return <div className="ap-professionals-page">
        <HeroTitle eyebrow="Investment Professionals" showBreadcrumb={false} showCta={false} title={<><span className="ap-professionals-title-accent">Advance your alternative-investment expertise</span> with CAIA.</>} body="Practical education for trustees, CIOs, investment committees, portfolio managers and analysts">
        </HeroTitle>
        <ProfessionalContent/><FinalCta/>
    </div>;
}
function Audience({ id }: {
    id: string;
}) { if (id === 'investment-professionals') return <InvestmentProfessionals/>; const a = audiences.find(x => x.id === id)!; return <>{id === 'family-offices' ? <section className="ap-family-hero" aria-labelledby="family-hero-title"><img src="/images/family-offices-hero-blurred.webp" alt="Investment programme participants gathered in front of a living green wall at an ANDE event" {...{ fetchpriority: 'high' }}/><div className="ap-family-hero-shade"/><div className="ap-wrap ap-family-hero-copy"><span className="ap-eyebrow">Family Office &amp; Philanthropies</span><h1 id="family-hero-title"><span style={{ color: '#fcd116' }}>Build a long-term perspective</span>{' '}<span style={{ color: '#fff' }}>on alternative investments.</span></h1><p>{a.body}</p></div></section> : <HeroTitle className={id === 'pension-funds' ? 'ap-pension-hero' : id === 'fund-managers' ? 'ap-fund-managers-hero' : id === 'development-partners' ? 'ap-development-partners-hero' : undefined} showCta={false} eyebrow={a.title} title={id === 'pension-funds' ? <><span className="ap-pension-title-accent">Invest in alternatives</span> with greater confidence.</> : id === 'fund-managers' ? <><span className="ap-fund-managers-title-accent">Become institutional-grade.</span> From emerging to established managers.</> : id === 'development-partners' ? <><span className="ap-development-partners-title-accent">Build the institutions</span> that move capital.</> : a.headline} body={a.body}/>}{id === 'pension-funds' ? <PensionContent/> : id === 'family-offices' ? <FamilyContent/> : id === 'fund-managers' ? <FundContent/> : id === 'development-partners' ? <DevelopmentContent/> : <><Section eyebrow="How we help" title="Capability. Strategy. Structures."><div className="ap-grid ap-grid-two">{a.items.map((t, index) => <PhotoCard key={t} image={['/images/professionals/unsplash-black-team.jpg', '/images/professionals/unsplash-black-professional.jpg', '/images/professionals/unsplash-black-network.jpg', '/images/professionals/unsplash-markets.jpg'][index]} imageAlt={['Professionals learning together in Lagos', 'Professional working with a tablet', 'Professionals exchanging ideas', 'Financial market analysis'][index]} title={t} description="Practical support aligned with your institution’s objectives and African-market context." />)}</div><div className="ap-buttons"><Button href={enquiry(a.title)}>Talk to Asime about your institution</Button></div></Section><Section id={id === 'pension-funds' ? 'pension-flagship-programmes' : undefined} white eyebrow="Flagship programmes" title="Build your next capability."><ProgrammeCards ids={a.programmes} imageOverride="/images/professionals/unsplash-black-team.jpg"/></Section><Section eyebrow="Selected work" title="Experience that informs our approach."><RecordsCards records={workRecords.map((record, index) => ({ ...record, image: index % 2 ? '/images/professionals/unsplash-black-network.jpg' : '/images/professionals/unsplash-markets.jpg' })).filter(x => x.audience === (id === 'fund-managers' ? 'Fund Managers' : id === 'investment-professionals' ? 'Academy' : 'Institutional Investors')).slice(0, 2)}/></Section></>}<FinalCta /></>; }
function Advisory() {
    const reduceMotion = useReducedMotion();
    const advisory = capabilities.find(c => c.id === 'advisory')!;
    return <div className="ap-advisory-page">
        <HeroTitle eyebrow="Advisory" title={<><span className="ap-advisory-title-accent">Make better</span> investment decisions</>} body={advisory.body} showCta={false}>
            <a className="ap-advisory-scroll" href="#advisory-capabilities" aria-label="Scroll to advisory capabilities">
                <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16m-6-6 6 6 6-6"/></svg>
            </a>
        </HeroTitle>
        <Section id="advisory-capabilities" title="From institutional objectives to practical delivery">
            <List items={advisory.items}/>
        </Section>
        <Section id="advisory-audiences" title="LP + GP: support on both sides of the capital relationship">
            <div className="ap-grid ap-grid-two">{audiences.filter(a => ['pension-funds', 'fund-managers'].includes(a.id)).map(a => <article className="ap-card" key={a.id}>
                <h3>{a.title}</h3><List items={a.items}/><a href={`/${a.id}.html`} className="ap-link">Explore your offering ↗</a>
            </article>)}</div>
        </Section>
        <section id="advisory-framework" className="ap-framework-reference">
            <div className="ap-framework-inner">
                <header className="ap-framework-heading"><span>Our approach</span><h2>From assessment to measurable outcomes</h2><p>A seven-step cycle for institutions, managers and capital providers.</p></header>
                <div className="ap-framework-diagram">
                    <ol className="ap-framework-cycle">{framework.map(([title, body], i) => <motion.li key={title}
                        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.12 }}>
                        <span className="ap-framework-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p>
                        {i < framework.length - 1 && <span className="ap-framework-arrow" aria-hidden="true"><span style={{ animationDelay: `${i * 0.25}s` }}><svg viewBox="0 0 40 16" fill="none" preserveAspectRatio="none"><path d="M1 8h36m-10-6 11 6-11 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span></span>}
                    </motion.li>)}</ol>
                    <div className="ap-framework-return"><svg className="ap-framework-return-line" aria-hidden="true" viewBox="0 0 200 150" preserveAspectRatio="none"><path d="M200 149H18Q1 149 1 132V3" fill="none" vectorEffect="non-scaling-stroke"/></svg><span className="ap-framework-return-tip" aria-hidden="true"/><p><strong>Continuous feedback loop</strong><span>Results inform the next assessment.</span></p></div>
                </div>

            </div>
        </section>
        <Section id="advisory-engagements" title="Selected institutional engagements.">
            <RecordsCards photoCards records={workRecords.filter(x => x.capability === 'Advisory').slice(0, 3)}/>
        </Section>
        <FinalCta/>
    </div>;
}

function Intelligence() {
    const intelligence = capabilities.find(c => c.id === 'intelligence')!;
    return <div className="ap-intelligence-page">
        <HeroTitle eyebrow="Intelligence" showBreadcrumb={false} singleLineTitle showCta={false} title={<><span>Understand markets</span> <span className="ap-intelligence-title-white">and managers.</span></>} body="Know the market before and after you allocate. African alternatives research, LP / GP intelligence, manager benchmarking and institutional capital insights"/>
        <Section eyebrow="Asime Intelligence" title="Understand and analyse the market">
            <h3 className="ap-intelligence-methodology">Robust methodology and powerful tool for greater insights</h3>
            <List items={intelligence.items}/>
            <div className="ap-buttons ap-intelligence-enquiry"><Button href="/contact.html">Hire us for your research</Button></div>
        </Section>
        <Section id="intelligence-reports" eyebrow="Explore our Research & Intelligence reports and case studies">
            <div className="ap-grid ap-programme-grid">{researchTopics.slice(0, 3).map((title, i) => <PhotoCard key={title} href={enquiry(title)} image={['/images/intelligence/market-outlook.jpg', '/images/intelligence/institutional-research.jpg', '/images/intelligence/private-credit-research.jpg'][i]} imageAlt={title} category="Research focus" title={title} description="Discuss a tailored briefing for your institution." cta="Request a briefing" />)}</div>
        </Section>
        <FinalCta/>
    </div>;
}
function Capability({ id }: {
    id: string;
}) { if (id === 'advisory') return <Advisory/>; if (id === 'intelligence') return <Intelligence/>; const c = capabilities.find(x => x.id === id)!; return <><HeroTitle eyebrow={c.title} title={id === 'capital-solutions' ? <><span className="ap-capital-title-accent">Structure and mobilise</span> capital</> : c.action} body={id === 'capital-solutions' ? `${c.body} From institutional objectives to practical delivery` : c.body} showCta={id !== 'capital-solutions'}/>{id === 'intelligence' && <Section eyebrow="Asime Intelligence" title="Know the market before you allocate."><div className="ap-grid ap-programme-grid">{researchTopics.slice(0, 3).map((t, i) => <PhotoCard key={t} href={enquiry(t)} image={['/images/intelligence/market-outlook.jpg', '/images/intelligence/institutional-research.jpg', '/images/intelligence/private-credit-research.jpg'][i]} imageAlt={['Investment professional reviewing financial market data', 'Business professional presenting financial charts during a video call', 'Team reviewing financial reports and investment analysis'][i]} category="Research focus" title={t} description="Discuss a tailored briefing for your institution." cta="Request a briefing" />)}</div></Section>}<Section eyebrow={id === 'capital-solutions' ? undefined : 'Specialist capability'} title={id === 'intelligence' ? 'Intelligence shaped around institutional questions.' : 'From institutional objectives to practical delivery'}>{id === 'capital-solutions' ? <List items={c.items}/> : <div className="ap-grid ap-grid-two">{c.items.map(x => <article className="ap-card" key={x}><h3>{x}</h3><div className="ap-buttons"><a className="ap-link" href={enquiry(`${c.title}: ${x}`)}>{id === 'intelligence' ? 'Discuss a briefing' : 'Discuss an assignment'} ↗</a></div></article>)}</div>}{id === 'intelligence' && <p className="ap-callout">Discuss research scope and availability with our team. Institutional briefings and research assignments are scoped around your needs.</p>}</Section>{id === 'advisory' && <Section white eyebrow="LP + GP perspective" title="Support on both sides of the capital relationship."><div className="ap-grid ap-grid-two">{audiences.filter(a => ['pension-funds', 'fund-managers'].includes(a.id)).map(a => <article className="ap-card" key={a.id}><h3>{a.title}</h3><List items={a.items}/><a href={`/${a.id}.html`} className="ap-link">Explore your offering ↗</a></article>)}</div></Section>}{id !== 'capital-solutions' && <Section dark eyebrow="The Asime framework" title="From capability to capital."><div className="ap-grid">{framework.map(([t, b], i) => <article className="ap-card" key={t}><span className="ap-number">0{i + 1}</span><h3>{t}</h3><p>{b}</p></article>)}</div></Section>}{id === 'capital-solutions' && <div className="ap-wrap ap-capital-assignment-cta"><Button href={enquiry('Capital Solutions: Discuss an Assignment')}>Discuss an Assignment</Button></div>}<Section eyebrow={id === 'capital-solutions' ? 'Selected capital solutions' : 'Explore further'} title={id === 'capital-solutions' ? undefined : id === 'intelligence' ? 'Research, commentary and market perspectives.' : 'Selected institutional engagements.'}>{id === 'intelligence' ? <Button href="/insights.html">Explore insights</Button> : <RecordsCards photoCards records={workRecords.filter(x => x.capability === c.title).slice(0, 3)}/>}</Section><FinalCta /></>; }
const alternativeImages = [
    { src: '/images/sliders/01.jpg', alt: 'Investment professionals in discussion', label: 'Enterprise & growth' },
    { src: '/images/platform/01-asime-ventures.jpg', alt: 'Asime investment workshop', label: 'Innovation & ambition' },
    { src: '/images/sliders/hero-platform.jpg', alt: 'Modern architecture in Ghana', label: 'Financing the real economy' },
    { src: '/images/platform/03-reit.jpg', alt: 'High-rise buildings viewed from below', label: 'Assets for the long term' },
    { src: '/images/sliders/04.jpg', alt: 'Independence Arch in Accra', label: 'Capital with purpose' },
    { src: '/images/platform/04-listed-digital.jpg', alt: 'Doha skyline at night', label: 'Gulf capital. African opportunity.' },
    { src: '/images/sliders/tech-ai.jpg', alt: 'Digital infrastructure in a server room', label: 'The next investment frontier' },
    { src: '/images/sliders/climate-carbon-finance.jpeg', alt: 'Globe and trees growing on stacks of coins representing climate finance', label: 'The climate capital opportunity' },
];
function Alternatives() {
    const alternativeStrategies = [...strategies, {
        id: 'climate-carbon-finance', title: 'Carbon & Climate Finance',
        body: 'Mobilising capital for Africa’s low-carbon transition. Understand the markets. Price the climate risk. Evaluate the investment case.',
        items: ['Carbon markets and credit integrity', 'Renewable energy and climate-resilient infrastructure', 'Green, blue and sustainability-linked instruments', 'Physical and transition risk assessment', 'Institutional portfolio applications'],
    }];
    return <div className="ap-alternatives">
        <section className="ap-alt-hero">
            <div className="ap-alt-hero-copy">
                <h1>Alternative investments,<br/><span>built for African markets</span></h1>
                <p>Explore the strategies and specialist capital structures that shape institutional investment across Africa</p>
            </div>
            <div className="ap-alt-hero-photo"><SkeletonImage src="/images/sliders/alternative-investments-hero.png" alt="Aerial view of Cape Town, Table Mountain, and the coastline" {...{ fetchpriority: 'high' }}/><span>Local perspective. Long-term ambition.</span></div>
        </section>
        <nav className="ap-alt-index" aria-label="Investment strategies">
            <div className="ap-alt-index-intro"><span className="ap-eyebrow">Our investment universe</span><p>Eight strategies<br/>One African perspective</p></div>
            <div className="ap-alt-index-links">{alternativeStrategies.map((s, i) => <a key={s.id} href={`#${s.id}`}><span>0{i + 1}</span>{s.title}<span aria-hidden="true">↘</span></a>)}</div>
        </nav>
        <div className="ap-alt-strategies">{alternativeStrategies.map((s, i) => <section key={s.id} id={s.id} className="ap-alt-strategy" aria-labelledby={`${s.id}-title`}>
            <div className="ap-alt-strategy-photo"><SkeletonImage src={alternativeImages[i].src} alt={alternativeImages[i].alt} loading="lazy" width="900" height="1000"/><div><p>{alternativeImages[i].label}</p></div></div>
            <div className="ap-alt-strategy-copy"><h2 id={`${s.id}-title`}>{s.title}</h2><p className="ap-alt-description">{s.body}</p><h3>Our focus</h3><List items={s.items}/><div className="ap-alt-actions"><Button href={enquiry(s.title)}>{s.id === 'climate-carbon-finance' ? 'Discuss climate finance' : `Discuss ${s.title}`}</Button></div></div>
        </section>)}</div>

        <FinalCta/>
    </div>;
}
function RecordBrowser({ work = false }: {
    work?: boolean;
}) {
    const initial = new URLSearchParams(location.search).get('type') || 'All';
    const [filters, setFilters] = useState({ audience: 'All', strategy: 'All', geography: 'All', type: work ? 'All' : initial }), [query, setQuery] = useState('');
    const all = work ? workRecords : [...insightRecords, ...workRecords];
    const records = all.filter(r => Object.entries(filters).every(([k, v]) => v === 'All' || r[k as keyof ContentRecord] === v) && `${r.title} ${r.description}`.toLowerCase().includes(query.toLowerCase()));
    const { root, capture } = useFlipResults(records.map(record => record.id).join('|'));
    const publication = !work && initial === 'Publication';
    return <div ref={root} onChangeCapture={capture} onClickCapture={event => { if ((event.target as Element).closest('.ap-filter-button')) capture(); }}>{publication ? <section className="ap-publication-hero" aria-labelledby="publication-title"><img src="/images/intelligence/market-outlook.jpg" alt="" fetchPriority="high"/><div className="ap-wrap"><h1 id="publication-title">Perspectives that<br/><span>move thinking forward.</span></h1><p>Publications and expert perspectives on African alternative investments, infrastructure and institutional capital.</p><a className="ap-publication-cta" href="#publications">Explore publications <span aria-hidden="true">↓</span></a></div></section> : <HeroTitle cta={work ? <a className="ap-button ap-button-light" href="#publications">Our track record<span aria-hidden="true">↓</span></a> : undefined} eyebrow={work ? 'Our Work' : 'Insights'} title={work ? 'Institutional experience. Practical application' : 'Perspectives on African alternative capital.'} body={work ? 'Explore selected institutional investor, impact investing, fund manager and Academy engagements' : 'Explore publications, case studies and executive perspectives. Filter by strategy, geography, audience and content type.'}/>}<Section id="publications">{!work && <div className="ap-filters">{(['audience', 'strategy', 'geography', 'type'] as const).map(key => <label key={key}>{key[0].toUpperCase() + key.slice(1)}<select value={filters[key]} onChange={e => setFilters({ ...filters, [key]: e.target.value })}><option>All</option>{Array.from(new Set([...all.map(x => x[key]), ...(key === 'type' && !work ? ['Research', 'Publication'] : [])])).sort().map(x => <option key={x}>{x}</option>)}</select></label>)}<label>Search<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search titles or topics"/></label></div>}{work && <div className="ap-filters ap-work-filters">{['All', 'Academy', 'Pension Funds & Trustees', 'Family Offices & Philanthropies', 'Fund Managers', 'Investment Professionals', 'Development Partners'].map(a => <button className="ap-filter-button" key={a} aria-pressed={filters.audience === a} onClick={() => setFilters({ ...filters, audience: a })}>{a}</button>)}</div>}<p role="status">{records.length} {records.length === 1 ? 'result' : 'results'}</p>{records.length ? <RecordsCards records={records} photoCards={work}/> : <div className="ap-empty"><p>No published items match these filters.</p><button className="ap-filter-button" onClick={() => { setFilters({ audience: 'All', strategy: 'All', geography: 'All', type: 'All' }); setQuery(''); }}>Clear filters</button></div>}</Section>{!work && <Section white eyebrow="Research agenda" title="The questions shaping institutional capital." body="Research themes for institutional briefings. Contact us to discuss availability or commission a tailored assignment."><div className="ap-grid">{researchTopics.map(t => <article className="ap-card" key={t}><h3>{t}</h3><div className="ap-buttons"><a className="ap-link" href={enquiry(t)}>Request a briefing ↗</a></div></article>)}</div><div className="ap-buttons"><Button href="/media.html">Explore media</Button><Button outline href="/events.html">Events & roundtables</Button></div></Section>}<FinalCta /></div>;
}
function RecordDetail({ work = false }: {
    work?: boolean;
}) { const r = (work ? workRecords : insightRecords).find(x => x.id === recordId(work ? 'case-study' : 'article')); if (!r)
    return <Missing />;
    if (work) return <div className="ap-case-page">
        <section className="ap-case-hero"><img src={r.id === 'executive-training-and-capacity-building' ? '/images/work/executive-training-hero.jpg' : r.image || '/images/work/executive-training-hero.jpg'} alt="" {...{ fetchpriority: 'high' }}/><div className="ap-wrap"><a className="ap-case-back" href="/work.html">← Our work</a><span className="ap-eyebrow">Case study · {r.capability || r.type}</span><h1>{r.title}</h1>{r.id !== 'executive-training-and-capacity-building' && <p>{r.geography} · {r.strategy}</p>}</div></section>
        <section className="ap-case-content"><div className="ap-wrap"><div className="ap-case-overview"><div><span className="ap-eyebrow">The engagement</span><h2>Expertise put into practice.</h2></div><p>{r.description}</p></div><dl className="ap-case-facts">{[['Client / partner', r.client], ['Focus', r.audience], ['Geography', r.geography]].map(([label, value]) => value && <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className="ap-case-sections">{[['The mandate', r.mandate], ['The challenge', r.challenge], ['Our approach', r.approach], ['Key outputs', r.outputs], ['Results & outcomes', r.outcomes]].map(([title, body]) => body && <article key={title}><h2>{title}</h2><p>{body}</p></article>)}</div><div className="ap-case-actions"><Button href={enquiry(r.title)}>Discuss a similar assignment</Button><Button outline href="/work.html">Explore more work</Button></div></div></section>
    </div>;
    return <><HeroTitle eyebrow={work ? 'Case study' : 'Publication overview'} title={r.title} body={`${r.geography} · ${r.strategy} · ${r.audience}`}/><Section><div className="ap-two"><div><span className="ap-eyebrow">{r.capability || r.type}</span><p>{r.description}</p>{r.date && <p>{r.date}</p>}</div>{r.image && <SkeletonImage src={r.image} alt={r.title}/>}</div>{work && <dl style={{ marginTop: 50 }}>{[['Client / partner', r.client], ['Mandate', r.mandate], ['Investment or capital challenge', r.challenge], ['Asime role', r.capability], ['Approach', r.approach], ['Key outputs', r.outputs], ['Results / outcomes', r.outcomes], ['Relevant strategy', r.strategy], ['Geography', r.geography]].map(([t, b]) => <div className="ap-detail-list" key={t}><dt>{t}</dt><dd>{b}</dd></div>)}</dl>}<div className="ap-buttons"><Button href={enquiry(r.title)}>Discuss a similar assignment</Button><Button outline href={work ? '/work.html' : '/insights.html'}>Back to {work ? 'our work' : 'insights'}</Button></div></Section></>; }
function About() { return <><section className="ap-about-hero" aria-labelledby="about-hero-title">
    <img className="ap-about-hero-image" src="/images/about-hero.png" alt="" {...{ fetchpriority: 'high' }}/>
    <div className="ap-wrap ap-about-hero-content">
        <h1 id="about-hero-title">Building Africa’s<br/><span>institutional capital</span></h1>
        <p>Asime Partners is a pan-African investment education, LP/GP advisory, research and innovative capital solutions firm supporting pension funds, philanthropies, institutional investors and fund managers to achieve better impact and returns</p>
    </div>
</section><section className="ap-story" aria-labelledby="story-title"><div className="ap-wrap">
    <span className="ap-eyebrow">Our story</span>
    <h2 id="story-title">Asi le Asime: hand in hand</h2>
    <div className="ap-story-layout">
        <article className="ap-story-origin">
            <h3>Our origin</h3>
            <p className="ap-story-opening">Asime is an Ewe (Ghana) expression associated with “in the hand” and “the market.” “Asi le Asime” evokes being hand in hand — a relationship founded on trust, mutual commitment and a bond sealed by the handshake.</p>
            <p>Capital is entrusted to people. Markets connect capital with opportunity. And successful investment is built on relationships. We believe enduring institutional partnerships are built hand in hand, commitment by commitment.</p>
            <p>Our work sits at the intersection of investment capability, institutional advisory, capital solutions and market intelligence. We bring global investment standards together with deep knowledge of African markets, institutions and investment ecosystems.</p>
            <strong>Our word is our bond</strong>
        </article>
        <div className="ap-story-values">{[
            ['Trust', 'Our word is our bond.'],
            ['Stewardship', 'Capital entrusted to us carries responsibility.'],
            ['Rigour', 'We earn trust through disciplined thinking.'],
            ['Partnership', 'Asi le Asime. Hand in hand.'],
            ['Excellence', 'Global standards, grounded in African markets.'],
            ['Impact', 'Capital should create lasting value.'],
        ].map(([title, body], index) => <article key={title} className={`ap-story-value${index % 2 === 0 ? ' ap-story-value-yellow' : ''}`}><h3>{title}</h3><p>{body}</p></article>)}</div>
    </div>
</div></section><TeamSection/><section id="markets" className="ap-markets" aria-labelledby="markets-title"><div className="ap-wrap">
    <div className="ap-markets-heading"><div><span className="ap-eyebrow">Markets</span><h2 id="markets-title">Pan-African perspective.<br/><span>Local understanding.</span></h2></div><p>Working across Anglophone, Francophone and Lusophone African markets, with offices in Accra and Nairobi.</p></div>
    <div className="ap-markets-layout">
        <div className="ap-markets-map"><img src="/images/markets-world-map.jpeg" alt="Dotted world map" loading="lazy" width="1600" height="886"/><svg className="ap-markets-locations" viewBox="0 0 1600 886" role="img" aria-label="Locations: New York, USA; Accra, Ghana; and Nairobi, Kenya">
            <g><circle className="ap-map-halo" cx="350" cy="236" r="19"/><circle className="ap-map-dot" cx="350" cy="236" r="8"/><path d="m350 236 50 48h170"/><text x="410" y="316">New York, USA</text></g>
            <g><circle className="ap-map-halo" cx="727" cy="427" r="19"/><circle className="ap-map-dot" cx="727" cy="427" r="8"/><path d="M727 427 682 475H535"/><text x="535" y="507">Accra, Ghana</text></g>
            <g><circle className="ap-map-halo" cx="901" cy="472" r="19"/><circle className="ap-map-dot" cx="901" cy="472" r="8"/><path d="m901 472 55 40h177"/><text x="965" y="544">Nairobi, Kenya</text></g>
        </svg></div>

    </div>
</div></section><div className="ap-wrap ap-about-profile"><a href="/asime-profile.html" download className="ap-button">Download profile<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"/></svg></a></div><FinalCta /></>; }
function Partners() {
    const logos = [...awardsContent.items.filter(item => !partnerLogos.some(partner => partner.name === item.name)), ...partnerLogos];
    const smallerLogos = new Set(['Impact Investing Ghana', 'Stanford Seed', 'Global Affairs Canada', 'Fate Foundation', 'Investisseurs et Partenaires', 'Gather Ventures', 'Acumen', 'Novastar Ventures']);
    return <div className="ap-partners-v2">
    <section className="ap-partners-banner" aria-labelledby="partners-hero-title"><div className="ap-wrap">
        <span className="ap-partners-banner-label">Our partners</span>
        <h1 id="partners-hero-title">Clients & Partners</h1>
        <p>Connecting expertise and institutions.</p>
        <a href="#partner-directory" className="ap-partners-banner-link">Meet our network <span aria-hidden="true">↓</span></a>
    </div></section>
    <section id="partner-directory" className="ap-partners-v2-directory"><div className="ap-wrap">
        <div className="ap-partners-v2-intro"><h2>Professional education from global frameworks to African practitioner-led delivery.</h2><p>Relationships built on Trust and Bond for institutional capability and African capital-market development.</p></div>
        <div className="ap-partners-v2-logos">{logos.map(item => <div key={item.name} className={smallerLogos.has(item.name) ? 'ap-partner-logo-enlarged' : undefined}><SkeletonImage src={item.logo} alt={item.name} loading="lazy"/></div>)}<div className="ap-partners-v2-name">Flourish Africa</div></div>
    </div></section>
    <FinalCta />
</div>; }

function Events() { return <><section className="ap-events-hero" aria-labelledby="events-title"><img src="/images/events-hero.webp" alt="" fetchPriority="high"/><div className="ap-wrap"><h1 id="events-title">Our Events</h1><p>Institutional briefings, CIO roundtables and practitioner-led learning. Connect with the people shaping Africa’s alternative-investment landscape.</p><a className="ap-events-cta" href="#upcoming-events">Explore events <span aria-hidden="true">↓</span></a></div></section><Section id="upcoming-events" eyebrow="Upcoming events" title="Stay close to the conversation.">{eventRecords.length ? <div className="ap-grid">{eventRecords.map(event => <article className="ap-card" key={event.id}><span className="ap-eyebrow">{event.format} · {event.date}</span><h3>{event.title}</h3><p>{event.description}</p><p>{event.location}</p><a href={event.href} className="ap-link">Register interest ↗</a></article>)}</div> : <p>No upcoming public dates are listed yet. Register your interest in the next institutional briefing or discuss a bespoke session.</p>}<div className="ap-buttons"><Button href={enquiry('Events and roundtables')}>Register event interest</Button><Button outline href={enquiry('Bespoke institutional session')}>Request a private session</Button></div></Section><Section white eyebrow="Previous activity" title="Investment education in practice."><RecordsCards records={workRecords.filter(x => x.audience === 'Academy')}/></Section><Network /></>; }
function Careers() {
    return <div className="ap-careers-page">
        <section className="ap-careers-hero" aria-labelledby="careers-title">
            <img className="ap-careers-hero-image" src="/images/careers-hero.jpg" alt="Business professional adjusting a navy suit in a modern office building" fetchPriority="high"/>
            <div className="ap-wrap ap-careers-hero-content"><h1 id="careers-title">Your expertise.<br/>Africa’s <em>next chapter.</em></h1><p>Help build the capability, insight and connections that move Africa’s institutional capital forward.</p><div className="ap-buttons"><Button href={enquiry('Careers')}>Express career interest</Button></div></div>
            
        </section>
        <section className="ap-careers-applications" aria-label="Application pathways"><div className="ap-wrap ap-careers-application-grid">
            {[{ title: 'Apply as a Tech Startup', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfpzW1nZql7jUDlGI0vTgApR67ivszhv5C6rgzwesb9JspteA/viewform', number: '01' }, { title: 'Apply as an SME / SGB', href: 'https://docs.google.com/forms/d/e/1FAIpQLSfR3MQGBpXJxTMy5wRbnE0CVNpitWWBoHebJ_WZ0mQr0tqAJw/viewform', number: '02' }].map(application => <a className="ap-careers-application-card" href={application.href} target="_blank" rel="noopener noreferrer" aria-label={`${application.title} (opens in a new tab)`} key={application.number}><span className="ap-careers-application-icon" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{application.number === '01' ? <><rect x="9" y="9" width="14" height="14" rx="2"/><path d="M13 13h6v6h-6zM12 4v5m8-5v5m-8 14v5m8-5v5M4 12h5m-5 8h5m14-8h5m-5 8h5"/></> : <><rect x="4" y="10" width="24" height="17" rx="2"/><path d="M11 10V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3M4 17a30 30 0 0 0 24 0M13 18h6v4h-6z"/></>}</svg></span><h2>{application.title}</h2><span className="ap-careers-application-action">Start your application <span aria-hidden="true">↗</span></span></a>)}
        </div></section>
    </div>;
}
function Missing() { return <HeroTitle eyebrow="Page not found" title="Let’s find the right starting point." body="The requested item is not available. Explore Asime’s capabilities or contact our team."/>; }
export default function Site() {
    const currentPath = location.pathname.split('/').pop()?.replace('.html', '') || 'index';
    const path = currentPath === 'institutional-investors' ? 'pension-funds' : currentPath;
    let content: ReactNode;
    if (path === 'index')
        content = <Home />;
    else if (path === 'academy' || path === 'training')
        content = <Academy />;
    else if ((path === 'programme' || path.startsWith('programme-')))
        content = <Programme />;
    else if (audiences.some(x => x.id === path))
        content = <Audience id={path}/>;
    else if (capabilities.some(x => x.id === path))
        content = <Capability id={path}/>;
    else if (path === 'who-we-serve')
        content = <><HeroTitle showCta={false} eyebrow="Who We Serve" title="Institutional capital starts with people." body={introduction}/><Section><div className="ap-grid ap-grid-two">{audiences.map(a => <article className="ap-card" key={a.id}><h3>{a.title}</h3><p>{a.body}</p><a className="ap-link" href={`/${a.id}.html`}>Explore your offering ↗</a></article>)}</div></Section><FinalCta /></>;
    else if (path === 'what-we-do')
        content = <><HeroTitle eyebrow="What We Do" title="From capability to capital." body={introduction}/><Section><Capabilities /></Section><FinalCta /></>;
    else if (path === 'alternatives' || path === 'sectors')
        content = <Alternatives />;
    else if (path === 'work' || path === 'portfolio')
        content = <RecordBrowser work/>;
    else if (path === 'insights')
        content = new URLSearchParams(location.search).get('type') === 'Research' ? <Research /> : <RecordBrowser />;
    else if ((path === 'case-study' || path.startsWith('case-study-')))
        content = <RecordDetail work/>;
    else if ((path === 'article' || path.startsWith('article-')))
        content = <RecordDetail />;
    else if (path === 'about')
        content = <About />;
    else if (path === 'partners')
        content = <Partners />;
    else if (path === 'events')
        content = <Events />;
    else if (path === 'network')
        content = <><HeroTitle eyebrow="Institutional Capital Network" title="Where Africa’s alternative-investment community connects." body="Pension funds, CIOs, trustees, insurers, family offices, sovereign investors, fund managers, DFIs, investment professionals, advisors and development partners."/><Network /></>;
    else if ((path === 'work-with-us' || path === 'careers'))
        content = <Careers />;
    else if (path === 'stages')
        content = <><HeroTitle eyebrow="Investment lifecycle" title="Support across the investment lifecycle." body="Align capability, strategy and capital structures with your institutional mandate."/><Section><div className="ap-grid">{framework.map(([t, b]) => <article className="ap-card" key={t}><h3>{t}</h3><p>{b}</p></article>)}</div></Section><FinalCta /></>;
    else
        content = <Missing />;
    useEffect(() => { const target = decodeURIComponent(location.hash.slice(1)); if (target) {
        if (path === 'index' && (target === 'team' || target === 'geographies')) {
            location.replace(`/about.html#${target === 'team' ? 'team' : 'markets'}`);
            return;
        }
        const aliases: Record<string, string> = { management: 'alternatives', 'our-capabilities': 'platform', technology: 'platform', team: 'who-we-serve', geographies: 'who-we-serve' };
        document.getElementById(target)?.scrollIntoView();
        if (!document.getElementById(target) && aliases[target])
            document.getElementById(aliases[target])?.scrollIntoView();
    } }, [path]);
    return <div className={`ap-site${path === 'capital-solutions' ? ' ap-capital-solutions-page' : ''}`}><Navbar variant={path === 'index' ? 'home' : (['about', 'partners', 'academy', 'advisory', 'alternatives', 'capital-solutions', 'intelligence', 'investment-professionals', 'pension-funds', 'family-offices', 'fund-managers', 'work-with-us', 'careers'].includes(path) || path.startsWith('case-study')) ? 'transparent' : 'solid'}/><main id="main-content">{content}</main><Footer /><CookieBanner /></div>;
}
