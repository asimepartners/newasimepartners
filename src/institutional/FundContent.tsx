import { enquiry } from './content';
import './pension-content.css';

const challenges = [
    [
        "No track record yet",
        "Many LPs screen out first-time, solo and country-specific funds, whatever the quality of the team."
    ],
    [
        "A long, unfunded runway",
        "Reaching first close can take years, and managers often fund salaries, legal costs and travel themselves."
    ],
    [
        "Currency mismatch",
        "Dollar funds meet local-currency LPs, and hedging is costly. Returns can disappear at the portfolio level."
    ],
    [
        "Local LPs not yet ready",
        "Pension funds and insurers need education, regulatory clarity and ticket sizes that fit their balance sheets."
    ],
    [
        "Dependence on a few anchors",
        "DFIs are vital but can be slow and mandate-bound. A narrow LP base is a fragile one."
    ],
    [
        "Institutional standards on a thin team",
        "Governance, valuation, ESG, reporting, exit planning and talent retention all need to be LP-grade from day one."
    ]
];
const challengeImages = [
    {
        "src": "/images/fund-manager-track-record.png",
        "alt": "Investment professional reviewing financial charts and portfolio data on a laptop"
    },
    {
        "src": "/images/fund-manager-unfunded-runway.jpg",
        "alt": "Laptop, calculator and financial charts used for budget planning"
    },
    {
        "src": "/images/fund-manager-currency-mismatch.png",
        "alt": "One pound coin on a currency exchange-rate chart"
    },
    {
        "src": "/images/fund-manager-local-lps.png",
        "alt": "Illustration of investors holding sections of a portfolio allocation chart"
    },
    {
        "src": "/images/fund-manager-anchor-investors.png",
        "alt": "Professional reviewing documents beside a laptop"
    },
    {
        "src": "/images/fund-manager-institutional-standards.png",
        "alt": "City business district and waterfront illuminated at dusk"
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
    [
        "Advisory",
        "Fund strategy and architecture",
        "Thesis, structure, size, terms and currency approach designed around what your target LPs can actually commit.",
        "a defensible thesis, fund structure and terms."
    ],
    [
        "Advisory · Intelligence",
        "Track record and positioning",
        "Turn individual and team experience into a case LPs can underwrite, even without a Fund I history.",
        "a track-record narrative and LP-ready pitch."
    ],
    [
        "Capital Solutions",
        "Fundraising strategy and LP targeting",
        "A phased plan across DFIs, local institutions, family offices and philanthropic or catalytic capital.",
        "an LP target map and phased fundraising plan."
    ],
    [
        "Academy · Advisory",
        "Local institutional LP engagement",
        "Education and structures that help pension funds and insurers back local managers within their mandates.",
        "an engagement plan and materials for local LPs."
    ],
    [
        "Advisory",
        "Currency, risk, valuation and exits",
        "Currency approach, ESG, valuation and portfolio construction, with exit routes planned from the start.",
        "a risk, valuation and exit framework."
    ],
    [
        "Advisory · Intelligence",
        "LP due diligence, data room and reporting",
        "Prepare for institutional scrutiny before LPs ask, and report in the format they expect.",
        "a data room and DDQ that stand up to review."
    ]
];
const outcomes = [
    [
        "Fund thesis and strategy paper",
        "The investment case, edge and market evidence."
    ],
    [
        "Fund structure and terms",
        "Size, currency, fees and governance matched to your LPs."
    ],
    [
        "Fund financial model",
        "Assumptions, fund mechanics, cash flows and sensitivities."
    ],
    [
        "LP target map and fundraising plan",
        "Who to approach, in what order, with what ask."
    ],
    [
        "Data room and DDQ",
        "Policies, track record and reporting LPs can verify."
    ],
    [
        "Risk, ESG, valuation and exit framework",
        "The standards institutions expect, applied to your market."
    ]
];
const deliveryIcons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6M7 10h6m-3-3v6',
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
];
const stages = [
    { title: 'Diagnose', body: 'Assess readiness against what your target LPs will test.', programmes: [['Institutional readiness assessment', 'Bespoke', enquiry('Institutional readiness assessment')]] },
    { title: 'Build', body: 'Design the thesis, strategy, processes and LP engagement approach.', programmes: [['Emerging Manager GP Academy', 'Structured institutional readiness programme', '/programme-gp-academy.html']] },
    { title: 'Raise', body: 'Target the right LPs and prepare the data room and materials.', programmes: [['Fundraising and LP engagement support', 'Bespoke advisory', enquiry('Fundraising and LP engagement support')]] },
    { title: 'Institutionalise', body: 'Grow from Fund I to institutional scale with peers and experts.', programmes: [['Emerging Manager Programme', 'Cohort-based programme', '/programme-emerging-manager-programme.html']] },
];

export default function FundContent() {
    return <div className="ap-pension-content">
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">The challenge</span><h2>Strong deals. A long road to first close.</h2><p>African and emerging market managers often have the pipeline and local insight. The fundraising system is built around criteria they cannot yet meet.</p></header><div className="ap-pension-grid ap-pension-two">{challenges.map(([title, body], index) => <article className="ap-pension-card ap-pension-challenge" key={title}><div className="ap-pension-challenge-media"><img src={challengeImages[index].src} alt={challengeImages[index].alt} loading="lazy"/></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="ap-section ap-pension-help"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How we help</span><h2>Strategy, positioning and structures that LPs can back.</h2></header><div className="ap-pension-grid">{services.map(([category, title, body, output], index) => <article className="ap-pension-card ap-pension-service" key={title}><div className="ap-pension-service-top"><svg className="ap-pension-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={serviceIcons[index]}/></svg><span className="ap-eyebrow ap-pension-service-label">{category}</span></div><h3>{title}</h3><p>{body}</p><div className="ap-pension-service-result"><p><strong>You get</strong>{output}</p></div></article>)}</div><p className="ap-pension-note">Built by practitioners who have designed, modelled and raised blended and impact funds across Africa.</p></div></section>
        <section className="ap-section"><div className="ap-wrap ap-pension-grid ap-pension-two"><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-team.jpg" alt="Professionals collaborating at a computer in Lagos" loading="lazy"/><span className="ap-eyebrow">For first-time managers</span><h2>Get to a credible first close</h2><p>You need a sharp thesis, a track-record story and a plan to fund the runway to first close.</p><a className="ap-link" href="/programme-gp-academy.html">Start with: the Emerging Manager GP Academy <span aria-hidden="true">↗</span></a></article><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-network.jpg" alt="Professionals sharing ideas in a business conversation" loading="lazy"/><span className="ap-eyebrow">For emerging managers, Fund I to Fund II</span><h2>Scale to institutional standard</h2><p>You need institutional processes, a wider LP base and the credentials to raise your next fund.</p><a className="ap-link" href="/programme-emerging-manager-programme.html">Start with: the Emerging Manager Programme <span aria-hidden="true">↗</span></a></article></div></section>
        <section id="pension-flagship-programmes" className="ap-section ap-pension-band"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How it is delivered</span><h2>From thesis to institutional scale.</h2><p>Each stage has a clear output. Start where your fund is today.</p></header><ol className="ap-pension-stages">{stages.map((stage, i) => <li className="ap-pension-card" key={stage.title}><span className="ap-pension-step"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={deliveryIcons[i]}/></svg></span><h3>{stage.title}</h3><p>{stage.body}</p><div className="ap-pension-programmes">{stage.programmes.map(([title, format, href]) => <a href={href} key={title}><strong>{title}</strong><small>{format}</small></a>)}</div></li>)}</ol></div></section>
        <section className="ap-section ap-pension-outcomes"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Outcomes</span><h2>What your firm walks away with.</h2><p>Documents and capabilities that LPs ask for, built to institutional standard and ready to reuse for your next fund.</p></header><div className="ap-pension-grid ap-pension-two">{outcomes.map(([title, body], index) => <article className="ap-pension-outcome" key={title}><svg className="ap-pension-outcome-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={["M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5", serviceIcons[1], "M9 5h12M9 12h12M9 19h12M3 5l1 1 2-3M3 12l1 1 2-3M3 19l1 1 2-3", serviceIcons[2], serviceIcons[3], serviceIcons[4], serviceIcons[5], serviceIcons[0]][index]}/></svg><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="ap-section ap-pension-work-cards"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Selected work</span><h2>Experience that informs our approach.</h2></header><div className="ap-pension-work-grid">
            <article className="ap-pension-work-card"><span className="ap-pension-work-category">Fund managers · West Africa</span><h3>West Africa fund of funds: financial modelling</h3><h4>Context</h4><p>A global impact fund manager wanted a target $50 million blended capital structure for a working capital debt fund, to attract international impact investors and development partners.</p><h4>What we did</h4><p>Built the financial model: key assumptions, fund mechanics, cash flow modelling, sensitivities and graphs.</p><a href="/case-study-west-africa-fund-of-funds-financial-modelling.html">Read case study</a></article>
            <article className="ap-pension-work-card"><span className="ap-pension-work-category">Fund managers · Africa</span><h3>Global impact fund: blended capital facility</h3><h4>Context</h4><p>A global impact fund needed a pan-African facility offering working capital to agribusiness, renewable energy and healthcare companies in East and West Africa.</p><h4>What we did</h4><p>Advised on design, financial modelling and initial testing, including potential currency catalytic first-loss shares.</p><a href="/case-study-global-impact-fund.html">Read case study</a></article>
        </div></div></section>
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><h2>Stronger African managers, more capital for African enterprise.</h2><p>When emerging managers reach institutional standard, local and global capital can back them, and that capital reaches the businesses and sectors that need it.</p></header><div className="ap-pension-grid">{[['From Fund I to Fund II', 'Repeat managers, not one-off funds.'], ['Local capital backing local managers', 'Pension and insurance capital, informed.'], ['Governance LPs can verify', 'Institutional from day one.']].map(([title, body]) => <article className="ap-pension-outcome ap-pension-benefit-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    </div>;
}
