import { enquiry } from './content';
import './pension-content.css';

const challenges = [
    [
        "Capital without capacity",
        "Local investors and managers lack the skills to absorb and deploy the capital partners want to mobilise."
    ],
    [
        "One-off training",
        "Short workshops rarely change behaviour, processes or decisions inside institutions."
    ],
    [
        "Results that are hard to show",
        "Boards and donors want evidence of outcomes, not attendance counts."
    ],
    [
        "Gains that fade",
        "Programmes lose momentum when external funding or expert support ends."
    ],
    [
        "Poor context fit",
        "Generic curricula ignore local regulation, currency and market realities."
    ],
    [
        "Local capital on the sidelines",
        "Pension funds, insurers and local managers are not yet ready to invest alongside development capital."
    ]
];
const challengeImages = [
    {
        "src": "/images/professionals/unsplash-black-team.jpg",
        "alt": "Professionals collaborating in Lagos"
    },
    {
        "src": "/images/professionals/unsplash-mentoring.jpg",
        "alt": "Colleagues learning together at a laptop"
    },
    {
        "src": "/images/professionals/unsplash-markets.jpg",
        "alt": "Financial market indicators"
    },
    {
        "src": "/images/professionals/unsplash-focused-work.jpg",
        "alt": "Professional working independently in Nigeria"
    },
    {
        "src": "/images/professionals/unsplash-digital-finance.jpg",
        "alt": "Financial analysis on a mobile device"
    },
    {
        "src": "/images/professionals/unsplash-black-network.jpg",
        "alt": "Professionals discussing ideas"
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
        "Advisory · Intelligence",
        "Market diagnostic and programme design",
        "Assess institutions, regulation and market gaps, then design a programme around a clear theory of change.",
        "a diagnostic and programme blueprint tied to your objectives."
    ],
    [
        "Academy",
        "Tailored capability programmes",
        "Cohort-based training for pension funds, insurers, banks, regulators and fund managers, adapted to each country.",
        "bespoke curricula and trained cohorts."
    ],
    [
        "Advisory · Academy",
        "Embedded implementation support",
        "Experts working alongside institutions to put new policies, processes and tools into practice.",
        "working processes and a clean hand-over."
    ],
    [
        "Capital Solutions",
        "Local capital mobilisation",
        "Prepare local institutions and managers to co-invest alongside development capital, including in blended structures.",
        "a pipeline of investment-ready local LPs and managers."
    ],
    [
        "Intelligence",
        "Monitoring, evaluation and learning",
        "Baselines, indicators and reporting designed in from the start, so results can be shown and learned from.",
        "a results framework and donor-ready reporting."
    ],
    [
        "Advisory",
        "Policy and regulatory dialogue",
        "Support regulators and policymakers to enable and oversee alternative investments.",
        "policy briefs and regulator training."
    ]
];
const outcomes = [
    [
        "Market diagnostic and theory of change",
        "A shared view of gaps, priorities and goals."
    ],
    [
        "Tailored curriculum and cohorts",
        "Content adapted to local regulation and context."
    ],
    [
        "Institutions with working processes",
        "Policies, committees and tools in use."
    ],
    [
        "A pipeline of investment-ready partners",
        "Local LPs and managers ready to co-invest."
    ],
    [
        "Results framework and reporting",
        "Baselines, indicators and donor-ready reports."
    ],
    [
        "A hand-over plan",
        "Capability that continues after funding ends."
    ]
];
const deliveryIcons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6M7 10h6m-3-3v6',
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
];
const stages = [
    { title: 'Diagnose', body: 'Map institutions, regulation and capability gaps.', programmes: [['Market diagnostic', 'Bespoke', enquiry('Market diagnostic')]] },
    { title: 'Design', body: 'Shape the programme, curriculum and results framework.', programmes: [['Tailored programme design', 'Bespoke', enquiry('Tailored programme design')]] },
    { title: 'Deliver', body: 'Run cohorts for institutions, managers and professionals.', programmes: [['African Investor Academy', 'Executive programme', '/programme-african-lp-academy.html'], ['Investment Committee Academy', '1–3 day governance programme', '/programme-investment-committee-academy.html'], ['Emerging Manager Programme', 'Cohort-based programme', '/programme-emerging-manager-programme.html']] },
    { title: 'Embed and evaluate', body: 'Support implementation, hand over and report results.', programmes: [['Embedded implementation', '9-month hands-on programme', enquiry('Embedded development programme implementation')], ['Monitoring and evaluation', 'Reporting to partners', enquiry('Monitoring and evaluation')]] },
];

export default function DevelopmentContent() {
    return <div className="ap-pension-content">
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">The challenge</span><h2>Funding is available. Local capacity to use it well is not.</h2><p>Market-building programmes succeed when local institutions can evaluate, allocate and govern capital. Too often the training stops before that capability exists.</p></header><div className="ap-pension-grid ap-pension-two">{challenges.map(([title, body], index) => <article className="ap-pension-card ap-pension-challenge" key={title}><div className="ap-pension-challenge-media"><img src={challengeImages[index].src} alt={challengeImages[index].alt} loading="lazy"/></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="ap-section ap-pension-help"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How we help</span><h2>Tailored programmes that leave lasting capability behind.</h2></header><div className="ap-pension-grid">{services.map(([category, title, body, output], index) => <article className="ap-pension-card ap-pension-service" key={title}><div className="ap-pension-service-top"><svg className="ap-pension-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={serviceIcons[index]}/></svg><span className="ap-eyebrow ap-pension-service-label">{category}</span></div><h3>{title}</h3><p>{body}</p><div className="ap-pension-service-result"><p><strong>You get</strong>{output}</p></div></article>)}</div><p className="ap-pension-note">Global standards, applied to African markets, with no manager conflicts.</p></div></section>
        <section className="ap-section"><div className="ap-wrap ap-pension-grid ap-pension-two"><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-professional.jpg" alt="Professional reviewing information on a tablet" loading="lazy"/><span className="ap-eyebrow">For DFIs and multilaterals</span><h2>Find investable local partners</h2><p>You need credible local investors and managers, mobilised co-investment and results you can report to your board.</p><a className="ap-link" href={enquiry('Market diagnostic')}>Start with: a market diagnostic <span aria-hidden="true">↗</span></a></article><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-network.jpg" alt="Professionals discussing ideas and programme goals" loading="lazy"/><span className="ap-eyebrow">For donors, foundations and technical assistance funders</span><h2>Fund programmes that last</h2><p>You need capability that outlives the grant, with clear evidence of what changed.</p><a className="ap-link" href={enquiry('Tailored market-building programme')}>Start with: a tailored market-building programme <span aria-hidden="true">↗</span></a></article></div></section>
        <section id="pension-flagship-programmes" className="ap-section ap-pension-band"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How it is delivered</span><h2>From diagnostic to lasting capability.</h2><p>Each stage has a clear output, and results are tracked from the first day.</p></header><ol className="ap-pension-stages">{stages.map((stage, i) => <li className="ap-pension-card" key={stage.title}><span className="ap-pension-step"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={deliveryIcons[i]}/></svg></span><h3>{stage.title}</h3><p>{stage.body}</p><div className="ap-pension-programmes">{stage.programmes.map(([title, format, href]) => <a href={href} key={title}><strong>{title}</strong><small>{format}</small></a>)}</div></li>)}</ol></div></section>
        <section className="ap-section ap-pension-outcomes"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Outcomes</span><h2>What your programme delivers.</h2><p>Capability that stays in country, with evidence you can take to your board, donors and stakeholders.</p></header><div className="ap-pension-grid ap-pension-two">{outcomes.map(([title, body], index) => <article className="ap-pension-outcome" key={title}><svg className="ap-pension-outcome-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={["M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5", serviceIcons[1], "M9 5h12M9 12h12M9 19h12M3 5l1 1 2-3M3 12l1 1 2-3M3 19l1 1 2-3", serviceIcons[2], serviceIcons[3], serviceIcons[4], serviceIcons[5], serviceIcons[0]][index]}/></svg><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><h2>Local institutions that mobilise capital for African development.</h2><p>When local investors and managers are ready, public funding can help unlock private and local capital, and results last beyond the programme.</p></header><div className="ap-pension-grid">{[['Lasting local capacity', 'Skills that stay in country.'], ['Results you can report', 'Designed in from day one.'], ['Aligned to your mandate', 'Programmes shaped around your objectives.']].map(([title, body]) => <article className="ap-pension-outcome ap-pension-benefit-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    </div>;
}
