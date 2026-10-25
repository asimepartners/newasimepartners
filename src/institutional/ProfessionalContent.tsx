import { enquiry } from './content';
import './pension-content.css';

const challenges = [
    [
        "A skills gap",
        "Private markets are rarely covered in degrees or in-house training, so professionals learn on the job."
    ],
    [
        "Credentials that open doors",
        "Employers and institutional investors increasingly look for recognised qualifications."
    ],
    [
        "Curricula built elsewhere",
        "Global programmes lean on developed-market cases and rarely reflect African realities."
    ],
    [
        "Fast-moving specialist areas",
        "Islamic finance and digital assets demand specialist knowledge, and regulation keeps shifting."
    ],
    [
        "Little time to learn",
        "Working professionals need applied, flexible formats that fit around demanding roles."
    ],
    [
        "Limited peer networks",
        "Few forums connect professionals with peers, practitioners and real deal exposure."
    ]
];
const challengeImages = [
    {
        "src": "/images/professionals-skills-gap.jpg",
        "alt": "Illustration of professionals crossing a cliff gap on a book bridge, labelled Identifying skill gaps"
    },
    {
        "src": "/images/professionals/unsplash-credentials.jpg",
        "alt": "Graduate celebrating an educational qualification"
    },
    {
        "src": "/images/professionals-curricula-elsewhere.jpg",
        "alt": "Graphic reading Alternative Investments in 2026: What's changing in the CAIA curriculum, with a rising bar chart"
    },
    {
        "src": "/images/professionals-specialist-areas.jpg",
        "alt": "Graphic reading Islamic Finance and Crypto Insights: Navigating Ethical Digital Assets"
    },
    {
        "src": "/images/professionals-little-time.jpg",
        "alt": "Cover of The Intelligent Investor, the definitive book on value investing"
    },
    {
        "src": "/images/professionals/unsplash-black-network.jpg",
        "alt": "Professionals sharing ideas during a conversation"
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
        "Alternatives foundations",
        "Private equity, venture capital, private credit, infrastructure and real assets, taught from structure to returns.",
        "a working grasp of asset classes, fund structures and returns."
    ],
    [
        "Academy",
        "Recognised credentials",
        "Preparation for professional qualifications, including CAIA, through our Preferred Partner status.",
        "a clear route to a globally recognised credential."
    ],
    [
        "Academy · Intelligence",
        "African case studies and deal analysis",
        "Applied analysis of real African funds, deals and portfolios, not borrowed examples.",
        "a toolkit of African cases you can reuse at work."
    ],
    [
        "Academy",
        "Islamic finance and alternatives",
        "Sharia-compliant structures, screening and governance applied to alternative investments.",
        "working knowledge of Islamic structures and their market."
    ],
    [
        "Academy · Intelligence",
        "Digital assets for institutions",
        "Digital assets, custody, regulation and risk, framed for institutional decision-makers.",
        "a risk and regulatory framework for digital assets."
    ],
    [
        "Academy",
        "Capstone and professional network",
        "Build and defend an institutional-style portfolio with a cohort of peers and expert facilitators.",
        "a portfolio project and a lasting professional network."
    ]
];
const outcomes = [
    [
        "Command of the asset classes",
        "Structures, economics and risks across private markets."
    ],
    [
        "An applied capstone portfolio",
        "A defended, institutional-style allocation."
    ],
    [
        "An African case-study toolkit",
        "Frameworks and examples to use in your own work."
    ],
    [
        "Specialist competence",
        "Islamic finance and digital assets, where relevant to your role."
    ],
    [
        "Credential readiness",
        "A clear plan toward CAIA and other qualifications."
    ],
    [
        "A professional network",
        "Peers, facilitators and alumni across the continent."
    ]
];
const deliveryIcons = [
    'M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 6 6M7 10h6m-3-3v6',
    'M3 5h6c2 0 3 1 3 2v14c0-2-2-3-4-3H3V5Zm18 0h-6c-2 0-3 1-3 2m0 14c0-2 2-3 4-3h5V5',
    'M4 20V10m8 10V4m8 16v-7M2 20h20',
    'M3 12h4l3-7 4 14 3-7h4M3 3v18h18',
];
const stages = [
    { title: 'Assess', body: 'Map your skills, role and goals to the right path.', programmes: [['Skills and goals assessment', 'Bespoke', enquiry('Skills and goals assessment')]] },
    { title: 'Learn', body: 'Master the asset classes and the specialist areas.', programmes: [['Alternatives foundations', 'Executive education', '/academy.html'], ['Islamic finance track', 'Specialist module', '/programme-islamic-finance.html'], ['Digital assets track', 'Specialist module', '/programme-digital-assets.html']] },
    { title: 'Apply', body: 'Work real African cases and defend your portfolio.', programmes: [['African Investor Academy', 'Applied capstone', '/programme-african-lp-academy.html']] },
    { title: 'Certify and connect', body: 'Prepare for credentials and join the alumni network.', programmes: [['Credential preparation (CAIA)', 'Preferred Partner route', '/programme-private-markets-academy.html'], ['Alumni and peer network', 'Ongoing', enquiry('Alumni and peer network')]] },
];

export default function ProfessionalContent() {
    return <div className="ap-pension-content">
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">The challenge</span><h2>The asset class is growing. The skills are not keeping up.</h2><p>Alternatives are moving into African portfolios faster than the talent pipeline that can analyse, structure and govern them.</p></header><div className="ap-pension-grid ap-pension-two">{challenges.map(([title, body], index) => <article className="ap-pension-card ap-pension-challenge" key={title}><div className="ap-pension-challenge-media"><img src={challengeImages[index].src} alt={challengeImages[index].alt} loading="lazy"/></div><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
        <section className="ap-section ap-pension-help"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How we help</span><h2>Skills, credentials and networks for the next generation of allocators.</h2></header><div className="ap-pension-grid">{services.map(([category, title, body, output], index) => <article className="ap-pension-card ap-pension-service" key={title}><div className="ap-pension-service-top"><svg className="ap-pension-service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={serviceIcons[index]}/></svg><span className="ap-eyebrow ap-pension-service-label">{category}</span></div><h3>{title}</h3><p>{body}</p><div className="ap-pension-service-result"><p><strong>You get</strong>{output}</p></div></article>)}</div><p className="ap-pension-note">Taught by practitioners, built on African cases, aligned to global standards.</p></div></section>
        <section className="ap-section"><div className="ap-wrap ap-pension-grid ap-pension-two"><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-team.jpg" alt="Professionals learning together in a team discussion" loading="lazy"/><span className="ap-eyebrow">For early and mid-career professionals</span><h2>Build your foundations and credentials</h2><p>You need structured knowledge, recognised qualifications and applied experience to move up.</p><a className="ap-link" href="/programme-african-lp-academy.html">Start with: the African Investor Academy <span aria-hidden="true">↗</span></a></article><article className="ap-pension-card ap-pension-audience-card"><img className="ap-pension-audience-image" src="/images/professionals/unsplash-black-professional.jpg" alt="Professional working with a tablet" loading="lazy"/><span className="ap-eyebrow">For senior executives and CIOs</span><h2>Sharpen your edge on allocation</h2><p>You need advanced portfolio construction, manager selection and specialist topics, without losing weeks to a classroom.</p><a className="ap-link" href="/programme-cio-alternatives-programme.html">Start with: the CIO Alternatives Programme <span aria-hidden="true">↗</span></a></article></div></section>
        <section id="pension-flagship-programmes" className="ap-section ap-pension-band"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">How it is delivered</span><h2>From foundations to leadership.</h2><p>Each stage builds on the last. Join at the stage that fits your role today.</p></header><ol className="ap-pension-stages">{stages.map((stage, i) => <li className="ap-pension-card" key={stage.title}><span className="ap-pension-step"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={deliveryIcons[i]}/></svg></span><h3>{stage.title}</h3><p>{stage.body}</p><div className="ap-pension-programmes">{stage.programmes.map(([title, format, href]) => <a href={href} key={title}><strong>{title}</strong><small>{format}</small></a>)}</div></li>)}</ol></div></section>
        <section className="ap-section ap-pension-outcomes"><div className="ap-wrap"><header className="ap-heading"><span className="ap-eyebrow">Outcomes</span><h2>What you walk away with.</h2><p>Knowledge you can use on Monday, credentials you can show and a network that lasts beyond the programme.</p></header><div className="ap-pension-grid ap-pension-two">{outcomes.map(([title, body], index) => <article className="ap-pension-outcome" key={title}><svg className="ap-pension-outcome-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={["M14 3H5v18h14V8l-5-5Zm0 0v5h5M8 12h8m-8 4h5", serviceIcons[1], "M9 5h12M9 12h12M9 19h12M3 5l1 1 2-3M3 12l1 1 2-3M3 19l1 1 2-3", serviceIcons[2], serviceIcons[3], serviceIcons[4], serviceIcons[5], serviceIcons[0]][index]}/></svg><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div></section>
        <section className="ap-section"><div className="ap-wrap"><header className="ap-heading"><h2>A deeper bench of African investment talent.</h2><p>When more African professionals can analyse, structure and govern alternative investments, institutions decide better and capital reaches African enterprise.</p></header><div className="ap-pension-grid">{[['Skills that stay in Africa', 'Local talent leading local capital.'], ['Credentials recognised globally', 'African professionals competing on equal terms.'], ['A connected community', 'Peers who raise standards together.']].map(([title, body]) => <article className="ap-pension-outcome ap-pension-benefit-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>

    </div>;
}
