import { enquiry } from './content';
import './pension-content.css';

const challenges = [
    [
        "Where to start",
        "Principals want to move beyond grants and listed assets but lack a clear entry point."
    ],
    [
        "Impact without rigour",
        "It is hard to set objectives, measure outcomes and avoid impact-washing."
    ],
    [
        "Access and context",
        "International families lack local networks. Local families lack global benchmarks and structures."
    ],
    [
        "Thin in-house capacity",
        "Small teams must assess funds, direct deals and governance without institutional resources."
    ]
];
const challengeImages = [
    {
        "src": "/images/professionals/unsplash-black-network.jpg",
        "alt": "Professionals sharing ideas in a business conversation"
    },
    {
        "src": "/images/professionals/unsplash-markets.jpg",
        "alt": "Financial market data on a trading screen"
    },
    {
        "src": "/images/professionals/unsplash-black-professional.jpg",
        "alt": "Professional working with a tablet"
    },
    {
        "src": "/images/professionals/unsplash-black-team.jpg",
        "alt": "Professionals collaborating at a computer in Lagos"
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
        "Academy",
        "Principal and family education",
        "Alternatives and impact investing explained for principals, family members and next-generation leaders.",
        "one shared language across the family and team."
    ],
    [
        "Advisory",
        "Impact and alternatives strategy",
        "A strategy that connects family values, return needs and risk appetite across grants, impact and market-rate capital.",
        "an investment and impact policy that fits your mission."
    ],
    [
        "Capital Solutions",
        "Alternative capital solutions",
        "Routes into private equity, venture, private credit, infrastructure and real assets, through funds or direct structures.",
        "a structured plan to deploy capital."
    ],
    [
        "Advisory · Intelligence",
        "Manager and deal due diligence",
        "Funds and direct opportunities scored on equal terms, with local intelligence behind every view.",
        "a scored shortlist and due diligence reports."
    ],
    [
        "Advisory · Intelligence",
        "Impact measurement and reporting",
        "Define impact objectives, set targets and report outcomes using recognised standards.",
        "an impact framework and annual impact report."
    ],
    [
        "Academy · Advisory",
        "Governance and mission alignment",
        "Decision processes for family councils, foundation boards and investment committees, including mission- and programme-related investments.",
        "protocols your family and trustees can stand behind."
    ]
];
const outcomes = [
    [
        "Investment and impact policy",
        "Aligned with family values and return needs."
    ],
    [
        "Capital allocation framework",
        "Grants, impact and market-rate capital in one view."
    ],
    [
        "Manager and deal scorecard",
        "Consistent criteria for funds and direct deals."
    ],
    [
        "Governance protocol",
        "Clear roles for family, board and committee."
    ],
    [
        "Capital deployment plan",
        "Routes into funds and structures that fit your risk and liquidity."
    ],
    [
        "Impact framework and annual report",
        "Objectives, metrics and reporting for stakeholders."
    ]
];
const deliveryIcons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6M7 10h6m-3-3v6',
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
];
const stages = [
    { title: 'Clarify', body: 'Map family values, capital, goals and constraints.', programmes: [['Family capital and mission review', 'Bespoke', enquiry('Family capital and mission review')]] },
    { title: 'Build capability', body: 'Educate principals, family members and teams.', programmes: [['African Investor Academy', 'Executive programme', '/programme-african-lp-academy.html'], ['Investment Committee Academy', '1–3 day governance programme', '/programme-investment-committee-academy.html']] },
    { title: 'Design and deploy', body: 'Build the portfolio, set impact targets and choose partners.', programmes: [['Impact and alternatives portfolio design', 'Bespoke advisory', enquiry('Impact and alternatives portfolio design')]] },
    { title: 'Embed and report', body: 'Hand over with experts alongside your team, including impact reporting.', programmes: [['Embedded implementation', '9-month hands-on programme', enquiry('Embedded family office implementation')]] },
];

export default function FamilyContent() {
    return <div className="ap-pension-content">
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">The challenge</span><h2>The intent is clear. The path is not.</h2><p>Families and philanthropies want their capital to do more than preserve wealth or fund grants. Turning that intent into a disciplined portfolio is the hard part.</p></header><div className="ap-pension-grid ap-pension-two">{challenges.map(([title, body], index) => <article className="ap-pension-card ap-pension-challenge" key={title}><div className="ap-pension-challenge-media"><img src={challengeImages[index].src} alt={challengeImages[index].alt} loading="lazy"/></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="ap-section ap-pension-help"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How we help</span><h2>Knowledge, capital and impact, built for your family.</h2></header><div className="ap-pension-grid">{services.map(([category, title, body, output], index) => <article className="ap-pension-card ap-pension-service" key={title}><div className="ap-pension-service-top"><svg className="ap-pension-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={serviceIcons[index]}/></svg><span className="ap-eyebrow ap-pension-service-label">{category}</span></div><h3>{title}</h3><p>{body}</p><div className="ap-pension-service-result"><p><strong>You get</strong>{output}</p></div></article>)}</div></div></section>
        <section className="ap-section"><div className="ap-wrap ap-pension-grid ap-pension-two"><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-mentoring.jpg" alt="Professionals sharing guidance at a laptop in Lagos" loading="lazy"/><span className="ap-eyebrow">For local family offices and philanthropies</span><h2>Add global standards to local strength</h2><p>You bring relationships and context. You need institutional structures, benchmarks and access to global practice.</p><a className="ap-link" href="/programme-african-lp-academy.html">Start with: the African Investor Academy <span aria-hidden="true">↗</span></a></article><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-focused-work.jpg" alt="Professional concentrating at a laptop in Nigeria" loading="lazy"/><span className="ap-eyebrow">For international family offices and philanthropies</span><h2>Enter Africa with local insight</h2><p>You bring capital and global practice. You need vetted access, market intelligence and on-the-ground due diligence.</p><a className="ap-link" href={enquiry('Africa market entry briefing')}>Start with: an Africa market entry briefing <span aria-hidden="true">↗</span></a></article></div></section>
        <section id="pension-flagship-programmes" className="ap-section ap-pension-band"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How it is delivered</span><h2>From family mission to portfolio.</h2><p>Each stage has a clear output. Start at the stage that matches where your family or foundation is today.</p></header><ol className="ap-pension-stages">{stages.map((stage, i) => <li className="ap-pension-card" key={stage.title}><span className="ap-pension-step"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={deliveryIcons[i]}/></svg></span><h3>{stage.title}</h3><p>{stage.body}</p><div className="ap-pension-programmes">{stage.programmes.map(([title, format, href]) => <a href={href} key={title}><strong>{title}</strong><small>{format}</small></a>)}</div></li>)}</ol></div></section>
        <section className="ap-section ap-pension-outcomes"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Outcomes</span><h2>What your family or foundation walks away with.</h2><p>Concrete documents and capabilities that your principals, trustees and next generation can approve and reuse.</p></header><div className="ap-pension-grid ap-pension-two">{outcomes.map(([title, body], index) => <article className="ap-pension-outcome" key={title}><svg className="ap-pension-outcome-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={["M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5", serviceIcons[1], "M9 5h12M9 12h12M9 19h12M3 5l1 1 2-3M3 12l1 1 2-3M3 19l1 1 2-3", serviceIcons[2], serviceIcons[3], serviceIcons[4], serviceIcons[5], serviceIcons[0]][index]}/></svg><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><h2>Family capital that earns returns and changes outcomes.</h2><p>When families and philanthropies invest with rigour, patient capital reaches the businesses and communities it was meant to serve.</p></header><div className="ap-pension-grid">{[['Values and capital aligned', 'One policy across giving and investing.'], ['Impact you can measure', 'Reported to your stakeholders.'], ['A legacy across generations', 'Decisions the next generation can build on.']].map(([title, body]) => <article className="ap-pension-outcome ap-pension-benefit-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    </div>;
}
