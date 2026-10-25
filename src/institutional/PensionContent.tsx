import { enquiry } from './content';
import './pension-content.css';

const challenges = [
    ['Trustee knowledge gap', 'Boards are asked to approve private market investments they were never trained to assess.'],
    ['Regulatory and impact expectations', 'Rules permit alternatives but say little about implementation, while members increasingly expect measurable impact.'],
    ['Fiduciary exposure', 'Trustees carry personal responsibility for decisions made on behalf of members.'],
    ['Manager and liquidity risk', 'Hard to separate strong African managers from weak ones, and to pace commitments against cash flows.'],
];
const challengeImages = [
    {
        "src": "/images/pension-trustee-knowledge-gap.jpg",
        "alt": "Finance and Investment Summit poster featuring four speakers"
    },
    {
        "src": "/images/professionals/unsplash-markets.jpg",
        "alt": "Financial market data on a trading screen"
    },
    {
        "src": "/images/pension-fiduciary-exposure.jpg",
        "alt": "Notebook reading Fiduciary Duty with a fountain pen resting on it"
    },
    {
        "src": "/images/pension-manager-liquidity-risk.jpg",
        "alt": "Open hand beneath a risk gauge graphic with warning icons"
    }
];
const serviceIcons = [
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7l-9-4Zm-4 9 3 3 5-6',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
    'M3 9 12 3l9 6H3Zm2 3v6m7-6v6m7-6v6M3 21h18',
    'M20 4C10 3 4 7 4 13a7 7 0 0 0 7 7c6 0 9-6 9-16ZM4 21 15 10',
];
const services = [
    ['Academy', 'Trustee and executive education', 'Plain-language, case-based training so every trustee can ask the right questions about private markets.', 'a board that shares one framework and vocabulary.'],
    ['Advisory · Intelligence', 'Alternatives strategy and allocation', 'An allocation approach built around your liabilities, funding position and regulatory limits.', 'a board-ready investment policy and allocation framework.'],
    ['Academy · Advisory', 'Investment committee governance', 'Decision protocols and training that raise the quality of every committee paper.', 'committee protocols you can defend to members and regulators.'],
    ['Advisory · Intelligence', 'Manager selection, pacing and monitoring', 'Score managers on equal terms, then keep commitments aligned with cash flows.', 'a scored shortlist, pacing model and quarterly monitoring pack.'],
    ['Capital Solutions', 'Alternative capital solutions', 'Routes into private equity, venture, private credit, infrastructure and real assets, matched to your risk and liquidity needs.', 'a structured plan to deploy capital through funds or direct structures.'],
    ['Advisory · Intelligence', 'Impact investing', 'Define impact objectives, set measurable targets and report outcomes to members using recognised standards.', 'an impact policy, measurement framework and annual impact report.'],
];
const outcomes = [
    ['Investment policy statement', 'Aligned with your mandate and regulation.'],
    ['Allocation framework', 'Targets, ranges and implementation path.'],
    ['Manager scorecard and shortlist', 'Consistent criteria across every candidate.'],
    ['Committee governance protocol', 'Clear roles, papers and decision rules.'],
    ['Pacing model and monitoring pack', 'Commitments matched to liquidity.'],
    ['Capital deployment plan', 'Routes into funds and structures matched to your risk and liquidity.'],
    ['Impact framework and annual report', 'Objectives, metrics and reporting that members and regulators can follow.'],
    ['Trained trustees and executives', 'People on your board and team who can carry it on.'],
];
const deliveryIcons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6M7 10h6m-3-3v6',
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
];
const stages = [
    { title: 'Diagnose', body: 'Assess trustee knowledge, mandate, funding position and regulatory limits.', programmes: [['Fund readiness review', 'Bespoke', enquiry('Fund readiness review')]] },
    { title: 'Build capability', body: 'Train trustees, executives and committee members.', programmes: [['African Pension Alternatives Academy', '3–5 day executive programme', '/programme-african-pension-alternatives-academy.html'], ['Investment Committee Academy', '1–3 day governance programme', '/programme-investment-committee-academy.html']] },
    { title: 'Design and select', body: 'Build the portfolio, set impact targets and choose managers.', programmes: [['CIO Alternatives Programme', 'Executive intensive · bespoke', '/programme-cio-alternatives-programme.html']] },
    { title: 'Embed and monitor', body: 'Hand over with experts alongside your team, including monitoring and impact reporting.', programmes: [['Embedded implementation', '9-month hands-on programme', enquiry('Embedded pension implementation')]] },
];

export default function PensionContent() {
    return <div className="ap-pension-content">
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">The challenge</span><h2>Alternatives are permitted. Confidence is the constraint.</h2><p>Pension boards are under pressure to diversify into private markets. Few have the shared knowledge, process and governance to do it defensibly.</p></header><div className="ap-pension-grid ap-pension-two">{challenges.map(([title, body], index) => <article className="ap-pension-card ap-pension-challenge" key={title}><div className="ap-pension-challenge-media"><img src={challengeImages[index].src} alt={challengeImages[index].alt} loading="lazy"/></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="ap-section ap-pension-help"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How we help</span><h2>Knowledge, capital and impact, built for your fund.</h2></header><div className="ap-pension-grid">{services.map(([category, title, body, output], index) => <article className="ap-pension-card ap-pension-service" key={title}><div className="ap-pension-service-top"><svg className="ap-pension-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={serviceIcons[index]}/></svg><span className="ap-eyebrow ap-pension-service-label">{category}</span></div><h3>{title}</h3><p>{body}</p><div className="ap-pension-service-result"><p><strong>You get</strong>{output}</p></div></article>)}</div></div></section>
        <section className="ap-section"><div className="ap-wrap ap-pension-grid ap-pension-two"><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-team.jpg" alt="Professionals collaborating at a computer in Lagos" loading="lazy"/><span className="ap-eyebrow">For trustees</span><h2>Understand what you are approving</h2><p>You need to grasp the risks, meet your duty to members and show that your process was sound.</p><a className="ap-link" href="/programme-african-pension-alternatives-academy.html">Start with: the African Pension Alternatives Academy <span aria-hidden="true">↗</span></a></article><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-network.jpg" alt="Professionals sharing ideas in a business conversation" loading="lazy"/><span className="ap-eyebrow">For pension fund managers and CIOs</span><h2>Bring the board a defensible plan</h2><p>You need an allocation, a manager process your committee can follow, impact you can evidence and monitoring that avoids liquidity surprises.</p><a className="ap-link" href="/programme-cio-alternatives-programme.html">Start with: the CIO Alternatives Programme <span aria-hidden="true">↗</span></a></article></div></section>
        <section id="pension-flagship-programmes" className="ap-section ap-pension-band"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How it is delivered</span><h2>From diagnosis to hand-over.</h2><p>Each stage has a clear output. Programmes slot in where they fit, so you can start at the stage that matches your institution.</p></header><ol className="ap-pension-stages">{stages.map((stage, i) => <li className="ap-pension-card" key={stage.title}><span className="ap-pension-step"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={deliveryIcons[i]}/></svg></span><h3>{stage.title}</h3><p>{stage.body}</p><div className="ap-pension-programmes">{stage.programmes.map(([title, format, href]) => <a href={href} key={title}><strong>{title}</strong><small>{format}</small></a>)}</div></li>)}</ol></div></section>
        <section className="ap-section ap-pension-outcomes"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Outcomes</span><h2>What your fund and board walk away with.</h2><p>Concrete documents and capabilities your board can approve, audit and reuse.</p></header><div className="ap-pension-grid ap-pension-two">{outcomes.map(([title, body], index) => <article className="ap-pension-outcome" key={title}><svg className="ap-pension-outcome-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={["M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5", serviceIcons[1], "M9 5h12M9 12h12M9 19h12M3 5l1 1 2-3M3 12l1 1 2-3M3 19l1 1 2-3", serviceIcons[2], serviceIcons[3], serviceIcons[4], serviceIcons[5], serviceIcons[0]][index]}/></svg><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="ap-section ap-pension-work-cards"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Selected work</span><h2>Experience that informs our approach.</h2></header><div className="ap-pension-work-grid">
            <article className="ap-pension-work-card"><span className="ap-pension-work-category">Institutional investors · Africa</span><h3>Private credit for capital allocators</h3><h4>Context</h4><p>Investment committees targeting emerging markets and Africa needed a view on credit products.</p><h4>What we did</h4><p>Recommended on private credit, sovereign debt and other credit products, drawing on derivatives and credit risk experience across Europe and Africa.</p><a href="/case-study-private-credit-for-capital-allocators.html">Read case study</a></article>
            <article className="ap-pension-work-card"><span className="ap-pension-work-category">Institutional investors · Qatar</span><h3>Sovereign wealth fund — Africa market entry</h3><h4>Context</h4><p>Middle Eastern investment audiences needed a clearer understanding of African markets and investment opportunities.</p><h4>What we did</h4><p>Presented the African investment landscape with HEC Qatar and Qatar universities, using comparative case studies across European, African and Middle Eastern markets.</p><h4>Delivered</h4><p className="ap-pension-work-result">Investment landscape presentations and market-development perspectives.</p><a href="/case-study-sovereign-wealth-fund-africa-market-entry.html">Read case study</a></article>
        </div></div></section>
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><h2>Better-governed pension capital, better outcomes for members.</h2><p>When trustees allocate with confidence, members are better protected and long-term capital reaches the businesses and infrastructure that build economies.</p></header><div className="ap-pension-grid">{[['Stronger governance', 'Decisions committees can defend.'], ['More capable allocators', 'Skills that stay in the institution.'], ['Impact you can measure', 'Reported to members and regulators.']].map(([title, body]) => <article className="ap-pension-outcome ap-pension-benefit-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    </div>;
}
