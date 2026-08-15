/* ────────────────────────────────────────────────────────────
   Asime Partners, CMS-ready data layer
   Content sourced from https://asimepartners.com/
   ──────────────────────────────────────────────────────────── */

export const siteBrand = {
  name: "Asime Partners",
  logo: "/Asime.jpeg",
  logoWordmark: "/MainLogo.jpeg",
  tagline: "Structuring Alternative Capital. Modeling Impact Value. Driving Strategic Growth.",
  email: "info@asimepartners.com",
  linkedin: "https://linkedin.com/company/asimepartners",
  x: "https://x.com/asimepartners",
};

export interface ThesisArea {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface ConveyorStep {
  num: string;
  title: string;
  description: string;
  tag: string;
}

export interface FrameworkDetail {
  code: string;
  title: string;
  description: string;
}

export interface Office {
  city: string;
  lines: string[];
}

export interface FaqItem {
  question: string;
  answer: string[];
}

/* ── Hero ────────────────────────────────────────────────── */

export const heroContent = {
  headline: "Unleashing Africa’s Potential",
  headlineAccent: "",
  subheadline:
    "Trust and Bond that unlocks global capital for frontier markets alternative and impact investment strategies",
  ctaPrimary: { label: "GET IN TOUCH", href: "#apply" },
  ctaNav: { label: "Apply Now", href: "#apply" },
  typingText: "Platform, Alternative Investments, Advisory, Technology & AI",
  typingPhrases: ["Platform", "Alternative Investments", "Advisory", "Technology & AI"],
  scrollLabel: "SCROLL DOWN",
  focusAreas:
    "Climate & Impact | Alternative Investments | AI Systems | M&A Advisory | Executive Training",
  image: "/images/sliders/04.jpg?v=3",
  imageAlt:
    "Asime Partners team and partners across advisory, industry, and technology",
  slides: [
    "/images/sliders/04.jpg?v=3",
    "/images/sliders/01.jpg?v=3",
    "/images/sliders/02.jpg?v=3",
    "/images/sliders/03.jpg?v=3",
  ],
};

/* ── Awards & recognition ────────────────────────────────── */

export const awardsContent = {
  title: "They Trusted Us",
  items: [
    {
      name: "Mastercard",
      logo: "/images/clients/mastercard.png?v=2",
    },
    {
      name: "IFC — International Finance Corporation",
      logo: "/images/clients/ifc.png?v=2",
    },
    {
      name: "European Investment Fund",
      logo: "/images/clients/european-investment-fund.png?v=2",
    },
    {
      name: "Wellcome Trust",
      logo: "/images/clients/wellcome-trust.png?v=2",
    },
    {
      name: "Amref Health Africa",
      logo: "/images/clients/amref.png?v=3",
    },
    {
      name: "Africa Health Collaborative",
      logo: "/images/clients/africa-health-collaborative.png?v=3",
    },
    {
      name: "Impact Investing Ghana",
      logo: "/images/clients/impact-investing-ghana.png?v=2",
    },
    {
      name: "esquared.org.za",
      logo: "/images/clients/esquared.png?v=2",
    },
    {
      name: "Viktoria Business Angels Network",
      logo: "/images/clients/vban.png?v=2",
    },
  ],
};

export const primaryNavLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Advisory", href: "#advisory" },
  { label: "Alternatives", href: "#management" },
  { label: "Tech & AI", href: "#technology" },
  { label: "Media", href: "/media.html" },
  { label: "About Us", href: "#our-people" },
] as const;

/* ── Our Platform ────────────────────────────────────────── */

export interface PlatformCard {
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
}

export const platformIntro = {
  title: "Our Platform",
  body: "We’re a multi-strategy impact and alternative investment platform for Africa.",
  ctaLabel: "Explore our portfolio",
  ctaHref: "/portfolio.html",
};

export const platformCards: PlatformCard[] = [
  {
    title: "Asime Ventures",
    category: "Private Markets",
    description:
      "A diversified portfolio of 30+ initial angel investments. See our portfolio section. We have opportunities across infrastructure, Climate, Fintech, Mobility and Agribusiness.",
    href: "#our-work",
    image: "/images/platform/01-asime-ventures.jpg",
  },
  {
    title: "Jaza Rift",
    category: "Health & Bio",
    description:
      "Digital health, Medtech and Biotech investment platform. We have opportunities across healthcare assets across Africa (Hospitals, Clinics, Pharma manufacturing etc.).",
    href: "#management",
    image: "/images/platform/02-jaza-rift.jpg",
  },
  {
    title: "Real Estate",
    category: "Listed and Unlisted",
    description:
      "Diversified unlisted Real Estate portfolio to be listed in the near term. Commercial and Residential Real Estate. REITs in Kenya, Ghana, South Africa and Nigeria.",
    href: "#management",
    image: "/images/platform/03-reit.jpg?v=2",
  },
  {
    title: "Assets (Listed & Digital)",
    category: "Public Markets",
    description:
      "Government bonds, African equities and corporate bonds via reputable Emerging Markets fund managers. Stable coins, crypto and other digital assets.",
    href: "#management",
    image: "/images/platform/04-listed-digital.jpg",
  },
];

export const navGroups = [
  {
    label: "Asime Partners",
    href: "#group",
    children: [
      { label: "Our Mission", href: "#group" },
      { label: "Our Story", href: "#our-people" },
      { label: "Our Offices", href: "#geographies" },
    ],
  },
  {
    label: "Advisory",
    href: "#advisory",
    children: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Geographies", href: "#geographies" },
      { label: "Sectors", href: "#sectors" },
      { label: "Our Work", href: "#our-work" },
    ],
  },
  {
    label: "Investment",
    href: "#management",
    children: [
      { label: "Chale Fund", href: "#apply" },
      { label: "Venture Capital", href: "#management" },
      { label: "Private Credit", href: "#management" },
      { label: "Angel Investing", href: "#management" },
    ],
  },
  {
    label: "Technology",
    href: "#technology",
    children: [
      { label: "AI Systems", href: "#technology" },
      { label: "Data & Analytics", href: "#technology" },
      { label: "Digital Platforms", href: "#technology" },
    ],
  },
  {
    label: "Insights",
    href: "/media.html",
    children: [
      { label: "Media", href: "/media.html" },
      { label: "Insights", href: "#insights" },
      { label: "Who We Are", href: "#our-people" },
    ],
  },
  {
    label: "Our Team",
    href: "#apply",
    children: [
      { label: "Working with Us", href: "#apply" },
      { label: "Apply Now", href: "#apply" },
    ],
  },
] as const;

export const businessLines = {
  advisory: {
    eyebrow: "Advisory",
    title: "Business & Financial Advisory",
    summary: "Trusted advisors across Africa.",
    description:
      "Our professional services help organisations improve business and financial performance, manage growth, and achieve strategic objectives by integrating financial analysis with operational and strategic guidance. We support organisations to design, structure and launch funds of all types, including blended capital structures, impact funds and more complex investment vehicles.",
    href: "#advisory",
    cta: "Read More",
    image: "/images/advisory-card.jpg",
    imageAlt: "Investment advisory",
  },
  management: {
    eyebrow: "Alternative Investments",
    title: "Allocate from 5% to 25% to African Alpha",
    summary: "Capital deployed through focused platforms.",
    description:
      "We offer professional services to high-net-worth individuals, family offices, or institutional clients to design, manage, and execute strategies involving non-traditional asset classes beyond public equities, bonds, and cash. These can include: Private Equity, Private Credit, Real Assets, Digital Assets and other Structured Products.",
    href: "#management",
    cta: "Read More",
    image: "/images/02.jpg",
    imageAlt: "Investment management",
  },
  tech: {
    eyebrow: "Technology and AI",
    title: "Workflow automation and AI systems",
    summary: "Intelligent systems for modern investing.",
    description:
      "Our technology and AI Systems advisory offers a structured, expert-led engagement that helps you assess, plan, and implement AI and other advanced technology systems in a way that aligns with your strategic goals, risk tolerance, and operational realities. It starts with process mapping and automation, and combines technical domain expertise with business acumen to guide decision-making, governance, and execution to get to AI agents design and orchestration.",
    href: "#technology",
    cta: "Read More",
    image: "/sectors/ai.jpg",
    imageAlt: "Technology and AI systems",
  },
};

export interface InvestmentPlatform {
  name: string;
  description: string;
  href: string;
}

export const advisoryFocusAreas: InvestmentPlatform[] = [
  {
    name: "Climate & Impact",
    description: "Advisory for climate aligned and impact driven investments across Africa.",
    href: "#capabilities",
  },
  {
    name: "Alternative Investments",
    description: "Structuring and diligence across private markets and alternative assets.",
    href: "#capabilities",
  },
  {
    name: "AI Systems",
    description: "Technology and AI systems advisory for modern, scalable organizations.",
    href: "#capabilities",
  },
  {
    name: "M&A Advisory",
    description: "Mergers, acquisitions, and transaction advisory for growing businesses.",
    href: "#capabilities",
  },
];

export const investmentPlatforms: InvestmentPlatform[] = [
  {
    name: "Chale Fund",
    description: "Impact focused capital for gender inclusive SMEs in Ghana and across Africa.",
    href: "#apply",
  },
  {
    name: "Venture Capital",
    description: "Early and growth stage investments in technology enabled and impact ventures.",
    href: "#apply",
  },
  {
    name: "Private Credit",
    description: "Structured credit solutions for SMEs scaling operations across underserved markets.",
    href: "#apply",
  },
  {
    name: "Angel Investing",
    description: "Selective angel capital for founders building inclusive, scalable businesses.",
    href: "#apply",
  },
];

export const techPlatforms: InvestmentPlatform[] = [
  {
    name: "AI Systems",
    description: "AI models and automation that augment investment and advisory workflows.",
    href: "#technology",
  },
  {
    name: "Data & Analytics",
    description: "Data platforms turning market signals into actionable intelligence.",
    href: "#technology",
  },
  {
    name: "Digital Platforms",
    description: "Scalable digital infrastructure for portfolios and clients.",
    href: "#technology",
  },
];

export interface ServiceDetailItem {
  icon: string;
  title: string;
  body: string;
}

export interface ServiceDetail {
  eyebrow: string;
  headline: string;
  intro?: string;
  items: ServiceDetailItem[];
}

export const advisoryDetail: ServiceDetail = {
  eyebrow: "Advisory",
  headline:
    "Since 2015, our business and financial advisory team has been designing innovative and solution-driven financial structures in multiple geographies stages and sectors across Africa and other frontier and emerging markets, combining local insights with global expertise.",
  items: [
    {
      icon: "fund",
      title: "Fund Design and Structuring",
      body: "We bridge African investment potential with global capital markets by designing world-class fund structures across Europe, Middle East and the Americas. Our consulting services map your private equity, infrastructure, or liquid strategies to robust European (UCITS, AIFMD) and US/Cayman frameworks (Delaware LPs, Cayman Segregated Portfolio Companies). Utilizing premium global vehicles, we architect compliant, tax-efficient platforms that unlock cross-border distribution and maximize international investor mobilization. We specialise in blended capital structures with catalytic capital, permanent or evergreen vehicles for long-term capital preservation and impact.",
    },
    {
      icon: "modelling",
      title: "Advanced Financial Modelling & Valuation",
      body: "Our combined global experience and deep local expertise in Africa, enables us to deliver robust, institutional-grade and dynamic financial models that translate complex business data into clear, actionable strategic insights tailored to African realities. By combining meticulous multi-scenario forecasting with industry-standard valuation methodologies (DCF, VC method, EV/EBITDA, EV/GMV, comparable companies, and precedent transactions), we help you accurately determine asset value, mitigate transactional risk, and optimize capital allocation. Whether you are navigating an M&A transaction, raising capital, or planning long-term corporate strategy, our precise financial architecture provides the clarity needed to execute high-stakes decisions with absolute confidence.",
    },
    {
      icon: "cfo",
      title: "Fractional CFO Services",
      body: "Accelerate your growth with strategic financial leadership on demand, especially for startups, scale ups and SMEs/SGBs. We integrate seamlessly into your executive team to manage cash flow, optimize capital structure, and drive financial strategy. Get the sophisticated insights and oversight of a seasoned corporate CFO, tailored to your company's scale and budget.",
    },
    {
      icon: "manda",
      title: "M&A Advisory & Transaction Services",
      body: "Navigate high-stakes $5 to $100M corporate transactions with confidence. We provide comprehensive buy-side and sell-side advisory, including deep financial due diligence, deal structuring, and rigorous synergy valuation. Our experts protect your economic interests and maximize total value from letter of intent through post-closing integration.",
    },
    {
      icon: "risk",
      title: "Risk Management & Advisory",
      body: "Protect your company or fund from systemic volatility and unexpected financial threats. We identify, quantify, and mitigate complex balance sheet or fund investments risks, liquidity constraints, and operational vulnerabilities. Our team builds proactive mitigation frameworks that ensure capital preservation, business continuity, and regulatory compliance. We have experience in family office, funds, fund of funds and sovereign wealth funds risk and portfolio management.",
    },
    {
      icon: "raise",
      title: "Capital Raising Support & Investor Relations",
      body: "Secure the funding your business needs to scale effectively. We prepare companies for institutional investment by refining pitch narratives, building comprehensive data rooms, and structuring debt or equity instruments. We sit on your side of the table to help you attract the right capital partners on the best possible terms. We focus on capital raises of $2M or more for startups, and $5M or more for small and growing businesses in Africa.",
    },
  ],
};

export const managementDetail: ServiceDetail = {
  eyebrow: "Alternative Investments",
  headline: "Alternative Investments Across Our Platforms",
  items: [
    {
      icon: "overview",
      title: "Alternative Investment Landscape",
      body: "Alternative investments or alternative assets (not stocks, bonds, or cash) differ from traditional investment because they aren’t easily sold or converted into cash, such as private equity, private credit, real assets, digital assets, hedge funds, art collections, real estate investments and trusts (REITs), structured products etc. Africa's alternative investment landscape exceeds US $2 trillion in institutional capital, driven by private equity and venture capital, infrastructure and climate finance, real estate and agribusiness, and high-growth sectors like renewable energy and private credit.",
    },
    {
      icon: "advisory",
      title: "Strategic Investment Advisory",
      body: "We advise African and international family offices, funds, fund of funds, corporate ventures, pension funds and governments on alternative investment opportunities in Africa and beyond. We have a track record spanning Europe, the GCC and Africa across private markets (private equity, private debt, venture capital, venture debt, angel investments etc.), digital assets & finance, Islamic finance, green finance, climate finance and more.",
    },
    {
      icon: "venture",
      title: "Venture Capital",
      body: "Venture Capital (VC) is funding provided to startups and SMEs with high growth potential. It involves private investors exchanging capital for an ownership stake, aiming for substantial returns through company growth or acquisition. VC firms offer not only capital but also expertise and networks to support business development.",
    },
    {
      icon: "credit",
      title: "Private Credit",
      body: "Private Credit is non bank lending to startups and SMEs. It offers alternative financing options, often providing more flexibility and quicker access to funds compared to traditional bank loans. Private Credit investors exchange capital for debt instruments, expecting returns through interest payments.",
    },
    {
      icon: "angel",
      title: "Angel Investing & Syndicates",
      body: "Angel investing involves individual investors providing seed capital to early stage startups. Angel syndicates are groups of angel investors who pool resources and expertise to co invest in promising ventures. This funding stage often precedes larger VC investments, offering crucial support for startups to validate their business model and achieve initial growth milestones.",
    },
    {
      icon: "impact",
      title: "Impact Investing",
      body: "Impact investing focuses on generating both financial returns and positive social or environmental impact. It supports startups and SMEs addressing societal challenges like climate change or inequality. Investors prioritize companies with measurable impact metrics alongside financial performance, aiming to create a sustainable and equitable future.",
    },
    {
      icon: "islamic",
      title: "Islamic Finance",
      body: "Islamic Finance offers financial solutions for startups and SMEs aligned with Shariah principles. It emphasizes risk sharing, profit loss sharing, and avoiding interest (riba). Common Islamic financing models include Mudarabah (profit sharing), Musharakah (joint venture), and Murabaha (cost plus sale).",
    },
  ],
};

export const techDetail: ServiceDetail = {
  eyebrow: "Technology & AI",
  headline: "Intelligent Systems for Modern Businesses",
  items: [
    {
      icon: "workflow",
      title: "Workflow & Process Automation",
      body: "Workflow and process automation enables organisations to systematically replace manual, repetitive work with software-driven, rule-based processes to make operations faster, more accurate, and easier to manage. It dramatically improves the chances of AI Systems to be later adaptive, intelligent decision-making systems and agents.",
    },
    {
      icon: "ai-sme",
      title: "AI for SMEs / Startups",
      body: "Accelerate your startup or SME with our AI powered efficiency program: a rapid 5 day diagnostic pinpoints high impact tasks, then we deploy plug and play chatbots, auto marketing, and no code workflows using Copilot, Gemini, Zapier, or UiPath. You get measurable gains, 30 to 60% faster processes and lower costs, backed by cloud credits, grant guidance, and built in data governance. Let's unlock smarter operations in just 30 days.",
    },
    {
      icon: "ai-systems",
      title: "AI Systems",
      body: "We provide AI systems for SMEs and startups. We deploy intelligent AI agents that connect departments, automate complex tasks, and work continuously to drive unprecedented efficiency and innovation. Our AI systems include AI chatbots, AI marketing automation, AI no code workflows, AI data governance, and AI cloud credits. We work with you to identify the specific needs of your organization and develop a customized plan to meet those needs.",
    },
    {
      icon: "ai-talent",
      title: "AI Talent",
      body: "We provide outsourced AI talent. Our other services include AI talent development, AI talent management, AI talent retention, and AI talent assessment. We work with you to identify the specific skills and competencies needed for your organization and develop a customized plan to meet those needs.",
    },
  ],
};

export interface MissionStatement {
  lead: string;
  accent: string;
}

export const ourPeopleStatements: MissionStatement[] = [
  {
    lead: "Our team of mission driven professionals ",
    accent: "brings deep investment and business building expertise across Africa.",
  },
  {
    lead: "We build solutions to the challenges that ",
    accent: "inhibit capital flows to underserved markets and communities.",
  },
  {
    lead: "We connect investors to impact driven opportunities that ",
    accent: "promote women's economic empowerment and inclusive growth.",
  },
];

export const aboutContent = {
  eyebrow: "ABOUT US",
  title: "Unveiling Our Identity, Vision and Values",
  subheading:
    "We are an Africa focused alternative investment fund manager committed to driving positive financial, social and economic change across Anglophone and Francophone Africa.",
  image: "/images/about-agritech.jpg",
  imageAlt:
    "Aerial view of precision agricultural machines working across green crop fields",
  vision: {
    label: "Vision",
    body: "Unleash Africa’s potential",
  },
  mission: {
    label: "Mission",
    body: "Be the most trusted, reputable and performant gateway to Africa.",
  },
  values: {
    label: "Core Values",
    items: [
      { label: "People", full: "People & Relationships", icon: "people" as const },
      { label: "Inclusivity", full: "Diversity & Inclusivity", icon: "inclusivity" as const },
      { label: "Resilience", full: "Disruptive & Resilient", icon: "resilience" as const },
      { label: "Innovation", full: "Technology & Innovation", icon: "innovation" as const },
    ],
  },
  cta: { label: "Know More About Us", href: "#team" },
  meaning: {
    label: "What Asime means",
    quote:
      'Asime means "in the hand" or "the market" in Ewe, a West African language. By extension, the expression "Asi le Asime" means hand in hand, therefore a relationship based on Trust and Bond, in a way "my Word is my Bond" and the handshake seals the relationship.',
    attribution: "Sewu-Steve Tawia",
    role: "Managing Partner",
  },
  narrative: [
    "We are an Africa focused alternative investment fund manager. We are committed to driving positive financial, social and economic change. We develop responsible and impactful investment strategies that help promote youth, women and underrepresented people (people with disability, rural and displaced). We work at the nexus Climate, Gender, AI/ML and Accessibility to create jobs for all.",
    "Founded in 2015, Asime Partners has been recognized as a preferred early stage investment and tech M&A advisory firm with a reputation for successful global and local partnerships across Africa, both Anglophone and Francophone. We pride ourselves as the first true early venture capital investor in Ghana, with deep experience in technology across Fintech, Agritech, Retailtech, Digital Identity, Insuretech, AI/ML, Cybersecurity, Climate tech, Creative Industry tech, Beauty tech and Sports tech.",
  ],
};

export interface HighlightedWorkItem {
  platform: string;
  country: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export const highlightedWorkIntro = {
  eyebrow: "Highlighted Work",
  headline: "Our case studies:",
  headlineAccent: "at the heart of our missions",
};

export interface CaseStudy {
  category: string;
  question: string;
  href: string;
  media: "spheres" | "turbine" | "waveform";
}

export const caseStudies: CaseStudy[] = [
  {
    category: "Investment Advisory",
    question: "How do you establish yourself in a new market after an international acquisition?",
    href: "#advisory",
    media: "spheres",
  },
  {
    category: "Alternative Investments",
    question: "How can costs be sustainably optimized to create positive impact?",
    href: "#apply",
    media: "turbine",
  },
  {
    category: "M&A Advisory",
    question: "How do you reconcile standardized design with personalized products?",
    href: "#capabilities",
    media: "waveform",
  },
];

export const highlightedWork: HighlightedWorkItem[] = [
  {
    platform: "Investment Advisory",
    country: "Ghana",
    title: "Gender Smart SME Fund Structuring & Capital Mobilization",
    description: "Advisory support for impact investors deploying capital into gender inclusive SMEs across West Africa.",
    href: "#advisory",
    image: "/images/work/01.jpg",
  },
  {
    platform: "Chale Fund",
    country: "Ghana",
    title: "Impact Investment for Inclusive SME Growth",
    description: "Mobilizing and managing capital for ventures that advance women's economic empowerment.",
    href: "#apply",
    image: "/images/work/02.jpg",
  },
  {
    platform: "Venture Capital",
    country: "Nigeria",
    title: "Tech Enabled Ventures in Climate & Digital Solutions",
    description: "Venture backing for startups leveraging AI and climate resilient models in African markets.",
    href: "#apply",
    image: "/images/work/03.jpg",
  },
  {
    platform: "Investment Advisory",
    country: "Kenya",
    title: "M&A and Transaction Advisory for Growth Stage SMEs",
    description: "End to end deal support including diligence, valuation, and structuring for cross border transactions.",
    href: "#advisory",
    image: "/images/work/04.jpg",
  },
  {
    platform: "Private Credit",
    country: "Senegal",
    title: "Working Capital Solutions for Scaling MSMEs",
    description: "Private credit facilities supporting operational growth for established small businesses.",
    href: "#apply",
    image: "/images/work/05.jpg",
  },
  {
    platform: "Investment Advisory",
    country: "South Africa",
    title: "Executive Training & Capacity Building Programs",
    description: "Leadership development and technical assistance for founders navigating capital markets.",
    href: "#capabilities",
    image: "/images/work/06.jpg",
  },
];

export interface Virtue {
  title: string;
  phrase: string;
}

export const virtuesIntro = {
  eyebrow: "Our Values",
  headline: "In pursuit of our shared vision,",
  headlineAccent: "we embrace these principles",
  href: "#apply",
  linkLabel: "Learn about working with us",
};

export const virtues: Virtue[] = [
  { title: "We build", phrase: "People & Relationships" },
  { title: "We champion", phrase: "Diversity & Inclusivity" },
  { title: "We stay", phrase: "Disruptive & Resilient" },
];

export type ByTheNumbersIcon = "waves" | "orbit" | "star";

export const byTheNumbers = [
  {
    value: "4+",
    caption: "capital platforms spanning venture, credit, angel investing, and advisory",
    icon: "waves" as ByTheNumbersIcon,
  },
  {
    value: "54",
    caption: "markets reached across Africa",
    icon: "orbit" as ByTheNumbersIcon,
  },
  {
    value: "3",
    caption: "core focus areas in inclusion, impact, and investment advisory",
    icon: "star" as ByTheNumbersIcon,
  },
];

export const groupIntro = {
  eyebrow: "Asime Partners",
  headline: "Our Mission",
  body: [
    "Provide better risk adjusted return and impact by investing in and supporting enterprises built by underrepresented founders and teams across Africa, especially youth, women and people with disability.",
    "We work at the nexus of Climate, Gender, AI/ML and Accessibility to create jobs for all.",
  ],
};

export const capabilitiesIntro = {
  eyebrow: "Capabilities",
  headline: "What we deliver for investors and founders",
  lead: "From capital deployment to hands on advisory, we cover the full spectrum growth stage businesses and investors need to scale with confidence.",
};

export const sectorsIntro = {
  eyebrow: "Sectors",
  headline: "Where we invest and advise",
  lead: "Our expertise spans multiple sectors across Africa, drawing on the team’s deep networks and experience across 37+ countries.",
};

export const advisoryIntro = {
  eyebrow: "Investment Advisory",
  headline: "Trusted advisors across the capital stack",
  body: "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services.",
};

export const footerLead = {
  headline: "Let's unleash Africa's",
  headlineAccent: "potential together.",
  cta: { label: "Get in touch", href: "#apply" },
};

export const newsletterContent = {
  eyebrow: "Join the impact revolution",
  heading: "Subscribe to our newsletter",
  body: "Be the first to receive insights, updates, and expert perspectives on investing and building across Africa.",
  placeholder: "Enter your email",
  button: "Subscribe",
  finePrintLead: "By subscribing you agree to our",
  privacyLabel: "Privacy Policy",
  privacyHref: "/privacy",
  image: "/images/newsletter-bg.jpg",
};

export const footerLegal = {
  copyright:
    "Copyright © 2026 Asime Partners. All Rights reserved. Website design & build by Data Leap Technologies.",
  paragraphs: [
    "This website is operated and issued by Asime Partners Limited. No company in the Asime Partners is registered as an investment adviser in the United States, and this website should not be viewed as a solicitation of prospective investment advisory clients or investors from the United States.",
    "The information contained in this website is for general information purposes only. The information is provided by Asime Partners Limited, and whilst we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.",
    "Through this website you are able to link to other websites which are not under the control of Asime Partners Limited. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the website up and running smoothly. However, Asime Partners Limited takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.",
  ],
};

export const footerColumns = {
  explore: [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/#platform" },
    { label: "Capabilities", href: "/#our-capabilities" },
    { label: "Insights", href: "/#insights" },
  ],
  connect: [
    { label: "Team", href: "/#team" },
    { label: "Contact", href: "/contact.html" },
    { label: "Join Us", href: "/#apply" },
  ],
};

export const contactPage = {
  title: "Contact Us",
  heading: "Contact us",
  intro:
    "To get in touch, please fill out the general enquiries form below, or send an email to",
  complaints:
    "Any general or whistleblower complaints should be reported to",
  formTitle: "General Enquiries",
  nameLabel: "Full Name",
  emailLabel: "Email Address",
  messageLabel: "Message",
  messagePlaceholder: "Example Text",
  submitLabel: "Submit",
  submittingLabel: "Sending…",
  sentTitle: "Message sent",
  sentLabel: "Thank you. Your message has been sent to info@asimepartners.com. We will get back to you shortly.",
  sentCloseLabel: "Close",
  sendErrorLabel: "Something went wrong. Please try again or email info@asimepartners.com.",
  captchaErrorLabel: "Please wait a moment and try sending again.",
  recaptchaSiteKey: "6Ldu6YctAAAAADpu35RVprURheZ4hn4w3KkQbqzS",
  heroImage: "/images/platform/03-reit.jpg",
  officesTitle: "Offices",
  offices: [
    {
      city: "Accra",
      lines: ["Asime Partners", "Accra, Ghana", "info@asimepartners.com"],
      pin: { left: 49.2, top: 59.34 },
    },
    {
      city: "Nairobi",
      lines: ["Asime Partners", "Nairobi, Kenya", "info@asimepartners.com"],
      pin: { left: 59.81, top: 62.55 },
    },
  ],
  mapSrc: "/images/dotted-world.svg",
};

/* ── What We Do ──────────────────────────────────────────── */

export const whatWeDoIntro = {
  eyebrow: "Our Capabilities",
  headline: "Investing in Africa's",
  headlineAccent: "Inclusive Growth",
  body: "Asime Partners deploys capital and advisory services across Africa, connecting investors to impact driven opportunities in climate, alternative assets, technology, and inclusive SME growth.",
};

export const whatWeDoPillars = [
  {
    number: "01",
    label: "Inclusion",
    title: "Disability & Inclusion Investing",
    body: "Our overall goal is to use a gender smart approach to facilitate investments into viable SMEs for a financial return as well as to improve women's access to quality employment, leadership opportunities and products and services that improve economic opportunities and social well being for females in general.",
    href: "#thesis",
  },
  {
    number: "02",
    label: "Impact",
    title: "Impact Investment & SME Fund Management",
    body: "Our aim is to mobilize and invest capital to support the growth and development of gender inclusive SMEs in Ghana and other African countries. With our expertise in Impact Investing and Responsible Investment, we deploy investment strategies that intentionally create positive social or environmental impact as well as a financial return for investors.",
    href: "#thesis",
  },
  {
    number: "03",
    label: "Advisory",
    title: "Investment Advisory & Business Support",
    body: "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services, maximizing returns while aligning with your values.",
    href: "#framework",
  },
];

/* ── Core Focus Areas (Thesis section) ───────────────────── */

export const thesisIntro = {
  eyebrow: "Our Focus",
  headline: "Capital, impact, and advisory for inclusive African enterprise",
  body: [
    "Asime Partners connects capital to impact driven investments that promote women's economic empowerment, gender equality, and sustainable SME growth across Ghana and the African continent.",
    "We combine venture capital, private credit, angel investing, and investment advisory to unlock Africa's potential for investors, founders, and communities alike.",
  ],
};

export const investmentThesisAreas: ThesisArea[] = [
  {
    icon: "♿",
    title: "Disability & Inclusion Investing",
    description:
      "Our overall goal is to use a gender smart approach to facilitate investments into viable SMEs for a financial return as well as to improve women's access to quality employment, leadership opportunities and products and services that improve economic opportunities and social well being for females in general.",
  },
  {
    icon: "🌿",
    title: "Impact Investment & SME Fund Management",
    description:
      "Our aim is to mobilize and invest capital to support the growth and development of gender inclusive SMEs in Ghana and other African countries. With our expertise in Impact Investing and Responsible Investment, we deploy investment strategies that intentionally create positive social or environmental impact as well as a financial return for investors. Our focus is to connect capital to impact driven investments that promote women's economic empowerment and gender equality.",
  },
  {
    icon: "📊",
    title: "Investment Advisory & Business Support Services",
    description:
      "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services. We work closely with you to understand your unique goals and risk tolerance, tailoring a strategy that maximizes returns while aligning with your values. The goal is to deliver tailored technical assistance and capacity building support to help you optimize your business, minimize risks, and seize opportunities in an ever changing market.",
  },
];

/* ── Service Lines (How We Invest section) ───────────────── */

export const howWeInvestIntro = {
  title: "Our Capabilities",
  body: "We offer integrated services across climate and impact, alternative investments, technology, transactions, and leadership development.",
};

export const thesisAreas: ThesisArea[] = [
  {
    icon: "💳",
    title: "Financial Services",
    description:
      "We provide value-added advisory services across Fintech, Insurtech, and Web3, covering digital banking, payments, capital markets innovation, insurance product design, risk modelling, claims automation, stablecoins, blockchain, tokenization, and digital asset regulation. Several team members are Certified Digital Finance Professionals (CDFP), bringing specialized expertise in digital finance and emerging technologies.",
    image: "/sectors/Investment.jpg",
  },
  {
    icon: "🩺",
    title: "Healthcare",
    description:
      "We’re a leading advisor on Healthtech (Digital Health), Medtech (medical devices) & Biotech (and techbio) covering drug development, genetic engineering, cell therapies and diagnostics in Africa. We support organisations and startups to navigate regulatory approvals (local FDA, US FDA, CE Mark, WHO Prequalification, ISO 15189, ISO 20387, ISO 17043), market fit analysis, go-to-market strategies and funding mix (grants, equity, debt) adequate for each stage.",
    image: "/images/platform/02-jaza-rift.jpg",
  },
  {
    icon: "🌾",
    title: "Agribusiness & Agritech",
    description:
      "Our track record includes advising and managing over $180M in commercial food production (farming, seed supply, processing, and distribution) agribusinesses and agritech, applying modern technology tools like AI, drones, and software to make farming more efficient and sustainable.",
    image: "/images/about-agritech.jpg",
  },
  {
    icon: "⚡",
    title: "Climate & Renewable Energy Finance",
    description:
      "We have managed more than $180M worth of programs in Climate and Renewable Energy, and advised a wide range of clients from strategic, financial and operational to technology focused challenges for climate and renewable energy (including off-grid and on-grid energy solutions). This includes delivering strategic policy insights on climate resilience and climate mitigation, and identifying and securing investment opportunities across emerging and frontier markets.",
    image: "/images/engieer.jpg",
  },
  {
    icon: "🕌",
    title: "Islamic Finance & Shariah compliant investments",
    description:
      "Our team has experts with professional certifications such as Chartered Islamic Finance Executives (CIFE). This enables us to apply Shariah-compliant principles to market-leading corporate finance, financial planning, investment, and corporate finance, guiding clients to achieve their financial goals while adhering to ethical and religious standards.",
    image: "/images/advisory-card.jpg",
  },
  {
    icon: "🏗️",
    title: "Infrastructure & Development Finance",
    description:
      "We provide expert services to our clients to understand, design and implement unique models of infrastructure, notably for transport, energy and data/cloud (PPPs notably). We have built long-term relationships with DFIs, sovereign wealth funds, impact investors, credit funds and strategic corporates.",
    image: "/images/focused-confident-female-factory-worker-operating-industrial-machine-touching-control-board-using-tablet.jpg",
  },
];

/* ── Advisory Services ───────────────────────────────────── */

export const advisoryContent = {
  title: "Investment Advisory & Business Support Services",
  body: "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services. We work closely with you to understand your unique goals and risk tolerance, tailoring a strategy that maximizes returns while aligning with your values.",
};

export const diligenceCards = [
  {
    label: "Climate & Impact",
    title: "Climate & Impact Investing",
    description:
      "Deploying capital to investments that intentionally create positive environmental and social impact alongside financial returns, with a focus on gender inclusive SMEs across Ghana and Africa.",
  },
  {
    label: "Alternative Investments",
    title: "Alternative Investments",
    description:
      "Structuring and managing alternative investment vehicles, including private credit and co investment opportunities, for investors seeking diversified African market exposure.",
  },
  {
    label: "AI Systems",
    title: "AI Systems & Technology",
    description:
      "Advising and supporting technology enabled businesses leveraging AI and digital systems to improve efficiency, scale operations, and compete in evolving African markets.",
  },
  {
    label: "M&A Advisory",
    title: "M&A Advisory",
    description:
      "End to end transaction support including market analysis, due diligence, valuation, negotiation, and deal execution for investors and business owners.",
  },
  {
    label: "Executive Training",
    title: "Executive Training",
    description:
      "Tailored technical assistance and capacity building for founders and leadership teams, helping optimize operations, minimize risks, and seize opportunities in dynamic markets.",
  },
  {
    label: "Inclusion",
    title: "Disability & Inclusion Investing",
    description:
      "A gender smart approach to facilitating investments into viable SMEs, improving women's access to quality employment, leadership opportunities, and products that advance economic and social well being.",
  },
];

/* ── Work With Us (Innovation Lab section) ───────────────── */

export const innovationLabsIntro = {
  eyebrow: "Work With Us",
  headline: "Trust and Bond",
  lead: "We build relationships based on trust and bond with people, not processes.",
  body: [
    "Apply to Chale Fund: Impact focused funding for qualifying ventures and SMEs.",
    "Apply as a Tech Startup: For technology enabled companies seeking venture or angel capital.",
    "Apply SME/MSME/SGB: For small and growing businesses seeking growth capital and advisory support.",
    "Partner With Us: For investors, institutions, and corporates looking to co invest or collaborate on impact driven opportunities.",
  ],
};

export const globalHealthInnovationAreas: ThesisArea[] = [
  {
    icon: "🤝",
    title: "Partner With Us",
    description:
      "Collaborate with Asime Partners on co investments, fund structures, or strategic initiatives across venture capital, private credit, and impact investing in Africa.",
  },
  {
    icon: "💰",
    title: "Apply to Chale Fund",
    description:
      "Submit your application to the Chale Fund for impact driven capital supporting gender inclusive SMEs and ventures across Ghana and Africa.",
  },
  {
    icon: "🚀",
    title: "Apply as a Tech Startup",
    description:
      "Technology startups seeking venture or angel investment, particularly in AI systems, climate tech, and digital solutions for African markets.",
  },
  {
    icon: "🏢",
    title: "Apply SME/MSME/SGB",
    description:
      "Small and medium enterprises and small growing businesses seeking growth capital, private credit, or business development support.",
  },
];

export const conveyorSteps: ConveyorStep[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "Identify high potential SMEs and ventures aligned with our gender smart and impact driven investment mandate.",
    tag: "Sourcing",
  },
  {
    num: "02",
    title: "Evaluate",
    description:
      "Rigorous due diligence, market analysis, and impact assessment to ensure investments meet financial and social return criteria.",
    tag: "Due Diligence",
  },
  {
    num: "03",
    title: "Invest",
    description:
      "Deploy venture capital, private credit, or angel capital through tailored structures that support inclusive SME growth.",
    tag: "Capital Deployment",
  },
  {
    num: "04",
    title: "Support",
    description:
      "Hands on advisory, capacity building, and business development support to help portfolio companies scale sustainably.",
    tag: "Value Creation",
  },
  {
    num: "05",
    title: "Impact",
    description:
      "Measure and report on social, environmental, and gender outcomes alongside financial performance for all stakeholders.",
    tag: "Impact Measurement",
  },
];

/* ── Where We Work ───────────────────────────────────────── */

export const francoSection = {
  stat: "54",
  statLabel: "African Countries",
  headline: "Across Africa",
  body: [
    "We invest and advise across Africa, with a primary focus on Ghana and expanding presence across key African markets.",
    "Our gender smart, impact driven approach connects capital to viable SMEs and ventures that create lasting economic opportunity for women and underserved communities.",
  ],
  countries: [
    "Ghana",
    "Kenya",
    "Nigeria",
    "South Africa",
    "Senegal",
    "Rwanda",
  ],
};

export interface GeoLocation {
  key: string;
  label: string;
  color: string;
  left: number;
  top: number;
  z?: number;
  size?: "sm";
}

export const geoContent = {
  eyebrow: "Geographies",
  headline: "A global network for African opportunity",
  lead: "From West Africa to Europe and East Asia, we connect capital and expertise across borders to unlock growth in frontier markets.",
  mapSrc: "/images/dotted-world.svg",
  locations: [
    { key: "ghana", label: "Ghana", color: "#F5A623", left: 49.2, top: 59.34, z: 3, size: "sm" },
    { key: "kenya", label: "Kenya", color: "#3FB53F", left: 59.81, top: 62.55, z: 1 },
    { key: "luxemburg", label: "Luxemburg", color: "#3B7DED", left: 51.4, top: 30.47, z: 1 },
    { key: "us", label: "US", color: "#F0403D", left: 21.96, top: 38.49, z: 1 },
    { key: "southafrica", label: "South Africa", color: "#3FD4E8", left: 56.3, top: 80.5, z: 1 },
  ] as GeoLocation[],
};

/* ── Team ────────────────────────────────────────────────── */

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
}

export const teamContent = {
  eyebrow: "Our Team",
  headline: "The people behind Asime Partners",
  lead: "A mission driven team with deep investment, advisory, and technology expertise across Africa and beyond.",
  members: [
    {
      name: "Sewu-Steve Tawia",
      role: "Global MD & West Africa",
      image: "/images/Team/Sewu.jpg",
      linkedin: "https://www.linkedin.com/in/stevetawia",
    },
    {
      name: "Benson Njiru",
      role: "MD East Africa",
      image: "/images/Team/Benson.jpg",
      linkedin: "https://www.linkedin.com/in/benson-njiru-njagi/",
    },
    {
      name: "Freda Egyir",
      role: "Chief of Staff & Project Management",
      image: "/images/Team/Freda.jpg?v=2",
      linkedin: "https://www.linkedin.com/in/freda-egyir-4408161a1/",
    },
    {
      name: "Abena Opoku Acquah",
      role: "Principal, West Africa",
      image: "/images/Team/Abena.jpg",
      linkedin: "https://www.linkedin.com/in/abenaopokuacquah/",
    },
    {
      name: "Emmanuel Devi",
      role: "Head of Engineering & AI",
      image: "/images/Team/Emmauel.jpg",
      linkedin: "https://www.linkedin.com/in/emmanuel-devi-428721244/",
    },
    {
      name: "Prince Krampah",
      role: "AI/ML Engineer",
      image: "/images/Team/prince.jpg",
      linkedin: "https://www.linkedin.com/in/princekrampah/",
    },
    {
      name: "James Hanson",
      role: "Investment Associate & Financial Modelling",
      image: "/images/Team/james.jpg",
      linkedin: "https://www.linkedin.com/in/jameshanson27/",
    },
    {
      name: "Seyram Ametepeh",
      role: "Investment Analyst & Media and Communications",
      image: "/images/Team/Seyram.jpg",
      linkedin: "https://www.linkedin.com/in/seyram-ametepeh/",
    },
    {
      name: "Betty Nduku",
      role: "Investment Analyst, East Africa",
      image: "/images/Team/Betty.jpg",
      linkedin: "https://www.linkedin.com/in/betty-nduku-095733150/",
    },
    {
      name: "Prudence Mbolu",
      role: "Investment Analyst & Project Management",
      image: "/images/Team/Prudence.jpg",
      linkedin: "https://www.linkedin.com/in/prudence-mbolu/",
    },
  ] as TeamMember[],
};

/* ── Insights ────────────────────────────────────────────── */

export const insightsIntro = {
  headlineAccent: "Insights",
  headlineRest: "That Ignite Growth",
  body: "Discover ideas, tips, and inspiration to fuel your learning journey and professional success.",
  readMoreLabel: "Read more",
  readMoreHref: "https://linkedin.com/company/asimepartners",
};

export interface InsightCard {
  image: string;
  platform: string;
  date: string;
  title: string;
  href: string;
}

export const insightCards: InsightCard[] = [
  {
    image: "/news/1.jpeg",
    platform: "Chale Fund",
    date: "May 12, 2026",
    title: "Asime Partners expands Chale Fund mandate across West Africa",
    href: "#apply",
  },
  {
    image: "/news/02.jpeg",
    platform: "Venture Capital",
    date: "April 23, 2026",
    title: "Inspired Evolution backs gender smart venture growth through new investment",
    href: "#management",
  },
  {
    image: "/news/03.jpeg",
    platform: "Investment Advisory",
    date: "April 14, 2026",
    title: "What inclusive capital deployment reveals about real opportunity in emerging markets",
    href: "#capabilities",
  },
  {
    image: "/images/more/startup.jpg",
    platform: "Private Credit",
    date: "March 28, 2026",
    title: "How private credit is unlocking growth for African SMEs",
    href: "#management",
  },
  {
    image: "/images/more/partner.jpg",
    platform: "Partnerships",
    date: "March 10, 2026",
    title: "Building investor partnerships that scale impact across Africa",
    href: "#apply",
  },
  {
    image: "/sectors/ai.jpg",
    platform: "Technology & AI",
    date: "February 18, 2026",
    title: "Why AI systems are reshaping decision making for growing businesses",
    href: "#technology",
  },
];

/* ── Questions ───────────────────────────────────────────── */

export const faqItems: FaqItem[] = [
  {
    question: "What does Asime Partners do?",
    answer: [
      "Asime Partners is a venture capital, private credit, angel investing, and investment advisory firm focused on unleashing Africa's potential.",
      "We offer Climate & Impact investing, Alternative Investments, AI Systems advisory, M&A Advisory, and Executive Training, with a core focus on disability & inclusion investing, impact investment & SME fund management, and investment advisory services.",
    ],
  },
  {
    question: "Where do you invest?",
    answer: [
      "We operate across Africa, with a primary focus on Ghana and other African countries. Our impact strategies target gender inclusive SMEs that promote women's economic empowerment and gender equality.",
    ],
  },
  {
    question: "What is Disability & Inclusion Investing?",
    answer: [
      "We use a gender smart approach to facilitate investments into viable SMEs for financial return while improving women's access to quality employment, leadership opportunities, and products and services that improve economic opportunities and social well being.",
    ],
  },
  {
    question: "How can I work with Asime Partners?",
    answer: [
      "You can partner with us as an investor or institution, apply to the Chale Fund, submit an application as a tech startup, or apply as an SME/MSME/SGB seeking growth capital and advisory support.",
      "Visit the Work With Us section or contact us directly to get started.",
    ],
  },
  {
    question: "What is Impact Investment & SME Fund Management?",
    answer: [
      "We mobilize and invest capital to support the growth of gender inclusive SMEs in Ghana and across Africa. Our strategies intentionally create positive social or environmental impact alongside financial returns for investors.",
    ],
  },
];

/* ── Apply CTA ───────────────────────────────────────────── */

export const applyCta = {
  eyebrow: "Work With Us",
  headline: "Trust and Bond",
  body: "We build relationships based on trust and bond with people, not processes.",
  buttonLabel: "Contact Us",
  buttonHref: "mailto:info@asimepartners.com",
};

/* ── Footer ──────────────────────────────────────────────── */

export const offices: Office[] = [
  {
    city: "Ghana",
    lines: ["Accra, Ghana", "Primary market focus"],
  },
  {
    city: "Pan Africa",
    lines: ["Pan African investments", "Regional advisory presence"],
  },
];

export const footerNav = {
  platform: [
    "Climate & Impact",
    "Alternative Investments",
    "AI Systems",
    "M&A Advisory",
    "Executive Training",
  ],
  network: ["Partner With Us", "Chale Fund", "Tech Startups", "SME/MSME/SGB"],
  company: ["About", "Our Capabilities", "Where We Work", "Contact"],
};
