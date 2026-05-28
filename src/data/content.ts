/* ────────────────────────────────────────────────────────────
   Asime Partners — CMS-ready data layer
   Content sourced from https://asimepartners.com/
   ──────────────────────────────────────────────────────────── */

export const siteBrand = {
  name: "Asime Partners",
  logo: "/asime-logo-transparent.png",
  logoWordmark: "/asime-wordmark.png",
  tagline: "Venture Capital | Private Credit | Angel Investing | Investment Advisory",
  email: "info@asimepartners.com",
  linkedin: "https://linkedin.com/company/asimepartners",
};

export interface ThesisArea {
  icon: string;
  title: string;
  description: string;
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
  eyebrow: "At the core of Asime Partners is our purpose",
  headline: "Unleashing Africa's Potential",
  headlineAccent: "",
  subheadline: "Alternatives | Advisory | AI & Innovations",
  ctaSecondary: { label: "Apply Now", href: "#apply" },
};

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
    label: "Investment Advisory",
    href: "#advisory",
    children: [
      { label: "Capabilities", href: "#capabilities" },
      { label: "Geographies", href: "#geographies" },
      { label: "Sectors", href: "#sectors" },
      { label: "Our Work", href: "#our-work" },
    ],
  },
  {
    label: "Investment Management",
    href: "#management",
    children: [
      { label: "Chale Fund", href: "#apply" },
      { label: "Venture Capital", href: "#management" },
      { label: "Private Credit", href: "#management" },
      { label: "Angel Investing", href: "#management" },
    ],
  },
  {
    label: "Insights",
    href: "#insights",
    children: [
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
    title: "Investment Advisory",
    summary: "Trusted advisors across Africa.",
    description:
      "M&A advisory, due diligence, and investment structuring for investors and growing businesses.",
    href: "#capabilities",
    cta: "View capabilities",
    image: "/images/01.jpg",
    imageAlt: "Investment advisory",
  },
  management: {
    eyebrow: "Management",
    title: "Investment Management",
    summary: "Capital deployed through focused platforms.",
    description:
      "Venture, credit, and impact pathways for gender-inclusive SMEs and high-potential ventures.",
    href: "#apply",
    cta: "Apply now",
    image: "/images/02.jpg",
    imageAlt: "Investment management",
  },
};

export interface InvestmentPlatform {
  name: string;
  description: string;
  href: string;
}

export const investmentPlatforms: InvestmentPlatform[] = [
  {
    name: "Chale Fund",
    description: "Impact-focused capital for gender-inclusive SMEs in Ghana and across Africa.",
    href: "#apply",
  },
  {
    name: "Venture Capital",
    description: "Early and growth-stage investments in technology-enabled and impact ventures.",
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

export interface MissionStatement {
  lead: string;
  accent: string;
}

export const ourPeopleStatements: MissionStatement[] = [
  {
    lead: "Our team of mission-driven professionals ",
    accent: "brings deep investment and business-building expertise across Africa.",
  },
  {
    lead: "We build solutions to the challenges that ",
    accent: "inhibit capital flows to underserved markets and communities.",
  },
  {
    lead: "We connect investors to impact-driven opportunities that ",
    accent: "promote women's economic empowerment and inclusive growth.",
  },
];

export interface HighlightedWorkItem {
  platform: string;
  country: string;
  title: string;
  description: string;
  href: string;
}

export const highlightedWorkIntro = {
  eyebrow: "Highlighted Work",
  headline: "We combine local presence and networks",
  headlineAccent: "with reach across Africa",
};

export const highlightedWork: HighlightedWorkItem[] = [
  {
    platform: "Investment Advisory",
    country: "Ghana",
    title: "Gender-Smart SME Fund Structuring & Capital Mobilization",
    description: "Advisory support for impact investors deploying capital into gender-inclusive SMEs across West Africa.",
    href: "#advisory",
  },
  {
    platform: "Chale Fund",
    country: "Ghana",
    title: "Impact Investment for Inclusive SME Growth",
    description: "Mobilizing and managing capital for ventures that advance women's economic empowerment.",
    href: "#apply",
  },
  {
    platform: "Venture Capital",
    country: "Nigeria",
    title: "Tech-Enabled Ventures in Climate & Digital Solutions",
    description: "Venture backing for startups leveraging AI and climate-resilient models in African markets.",
    href: "#apply",
  },
  {
    platform: "Investment Advisory",
    country: "Kenya",
    title: "M&A and Transaction Advisory for Growth-Stage SMEs",
    description: "End-to-end deal support including diligence, valuation, and structuring for cross-border transactions.",
    href: "#advisory",
  },
  {
    platform: "Private Credit",
    country: "Senegal",
    title: "Working Capital Solutions for Scaling MSMEs",
    description: "Private credit facilities supporting operational growth for established small businesses.",
    href: "#apply",
  },
  {
    platform: "Investment Advisory",
    country: "South Africa",
    title: "Executive Training & Capacity Building Programs",
    description: "Leadership development and technical assistance for founders navigating capital markets.",
    href: "#capabilities",
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
  { title: "We are", phrase: "biased to action" },
  { title: "We think", phrase: "deliberately" },
  { title: "We never", phrase: "compromise on integrity" },
  { title: "We expect", phrase: "excellence" },
  { title: "We", phrase: "authentically care" },
  { title: "We can", phrase: "all belong here" },
  { title: "We act with", phrase: "humility" },
  { title: "We prioritize", phrase: "results" },
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
    "Asime Partners exists to unleash Africa's potential — deploying venture capital, private credit, angel investing, and investment advisory services for sustainable growth in underserved markets.",
    "We use a gender-smart approach across our work, facilitating investments that deliver financial returns while improving economic opportunity for women and communities.",
  ],
};

export const capabilitiesIntro = {
  eyebrow: "Capabilities",
  headline: "What we deliver for investors and founders",
};

export const sectorsIntro = {
  eyebrow: "Sectors",
  headline: "Where we invest and advise",
};

export const advisoryIntro = {
  eyebrow: "Investment Advisory",
  headline: "Trusted advisors across the capital stack",
  body: "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services.",
};

export const footerColumns = {
  businesses: [
    { label: "Asime Partners", href: "#group" },
    { label: "Chale Fund", href: "#apply" },
    { label: "Venture Capital", href: "#management" },
    { label: "Private Credit", href: "#management" },
    { label: "Angel Investing", href: "#management" },
  ],
  regions: [
    { label: "Ghana", href: "#geographies" },
    { label: "West Africa", href: "#geographies" },
    { label: "Sub-Saharan Africa", href: "#geographies" },
    { label: "East Africa", href: "#geographies" },
  ],
  resources: [
    { label: "Insights", href: "#insights" },
    { label: "Working with Us", href: "#apply" },
    { label: "Apply Now", href: "#apply" },
    { label: "Privacy", href: "/privacy" },
  ],
};

/* ── What We Do ──────────────────────────────────────────── */

export const whatWeDoIntro = {
  eyebrow: "What We Do",
  headline: "Investing in Africa's",
  headlineAccent: "Inclusive Growth",
  body: "Asime Partners deploys capital and advisory services across Africa — connecting investors to impact-driven opportunities in climate, alternative assets, technology, and inclusive SME growth.",
};

export const whatWeDoPillars = [
  {
    number: "01",
    label: "Inclusion",
    title: "Disability & Inclusion Investing",
    body: "Our overall goal is to use a gender smart approach to facilitate investments into viable SMEs for a financial return as well as to improve women's access to quality employment, leadership opportunities and products and services that improve economic opportunities and social well-being for females in general.",
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
    body: "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services — maximizing returns while aligning with your values.",
    href: "#framework",
  },
];

/* ── Core Focus Areas (Thesis section) ───────────────────── */

export const thesisIntro = {
  eyebrow: "Our Focus",
  headline: "Capital, impact, and advisory for inclusive African enterprise",
  body: [
    "Asime Partners connects capital to impact-driven investments that promote women's economic empowerment, gender equality, and sustainable SME growth across Ghana and the African continent.",
    "We combine venture capital, private credit, angel investing, and investment advisory to unlock Africa's potential for investors, founders, and communities alike.",
  ],
};

export const investmentThesisAreas: ThesisArea[] = [
  {
    icon: "♿",
    title: "Disability & Inclusion Investing",
    description:
      "Our overall goal is to use a gender smart approach to facilitate investments into viable SMEs for a financial return as well as to improve women's access to quality employment, leadership opportunities and products and services that improve economic opportunities and social well-being for females in general.",
  },
  {
    icon: "🌿",
    title: "Impact Investment & SME Fund Management",
    description:
      "Our aim is to mobilize and invest capital to support the growth and development of gender inclusive SMEs in Ghana and other African countries. With our expertise in Impact Investing and Responsible Investment, we deploy investment strategies that intentionally create positive social or environmental impact as well as a financial return for investors. Our focus is to connect capital to impact-driven investments that promote women's economic empowerment and gender equality.",
  },
  {
    icon: "📊",
    title: "Investment Advisory & Business Support Services",
    description:
      "We help businesses boost their performance, increase growth and enhance the developmental impact of their operations through tailored business development support and investment advisory services. We work closely with you to understand your unique goals and risk tolerance, tailoring a strategy that maximizes returns while aligning with your values. The goal is to deliver tailored technical assistance and capacity building support to help you optimize your business, minimize risks, and seize opportunities in an ever-changing market.",
  },
];

/* ── Service Lines (How We Invest section) ───────────────── */

export const howWeInvestIntro = {
  title: "What We Do",
  body: "We offer integrated services across climate and impact, alternative investments, technology, transactions, and leadership development.",
};

export const thesisAreas: ThesisArea[] = [
  {
    icon: "🌿",
    title: "Climate & Impact",
    description:
      "Investing at the intersection of climate resilience and social impact — deploying capital to ventures and SMEs that create measurable environmental and community outcomes across Africa.",
  },
  {
    icon: "📈",
    title: "Alternative Investments",
    description:
      "Access to non-traditional asset classes and structures — private credit, co-investments, and tailored vehicles for investors seeking diversified exposure to African markets.",
  },
  {
    icon: "🤖",
    title: "AI Systems",
    description:
      "Supporting technology-enabled businesses and AI-driven solutions that improve operational efficiency, decision-making, and scale for SMEs and growth-stage companies.",
  },
  {
    icon: "🤝",
    title: "M&A Advisory",
    description:
      "Strategic buy-side and sell-side support — due diligence, valuation, deal structuring, and transaction execution for investors and business owners across African markets.",
  },
  {
    icon: "🎓",
    title: "Executive Training",
    description:
      "Capacity building and leadership development for founders, executives, and investment teams — equipping leaders to navigate growth, governance, and capital markets in Africa.",
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
      "Deploying capital to investments that intentionally create positive environmental and social impact alongside financial returns — with a focus on gender-inclusive SMEs across Ghana and Africa.",
  },
  {
    label: "Alternative Investments",
    title: "Alternative Investments",
    description:
      "Structuring and managing alternative investment vehicles — including private credit and co-investment opportunities — for investors seeking diversified African market exposure.",
  },
  {
    label: "AI Systems",
    title: "AI Systems & Technology",
    description:
      "Advising and supporting technology-enabled businesses leveraging AI and digital systems to improve efficiency, scale operations, and compete in evolving African markets.",
  },
  {
    label: "M&A Advisory",
    title: "M&A Advisory",
    description:
      "End-to-end transaction support including market analysis, due diligence, valuation, negotiation, and deal execution for investors and business owners.",
  },
  {
    label: "Executive Training",
    title: "Executive Training",
    description:
      "Tailored technical assistance and capacity building for founders and leadership teams — helping optimize operations, minimize risks, and seize opportunities in dynamic markets.",
  },
  {
    label: "Inclusion",
    title: "Disability & Inclusion Investing",
    description:
      "A gender-smart approach to facilitating investments into viable SMEs — improving women's access to quality employment, leadership opportunities, and products that advance economic and social well-being.",
  },
];

/* ── Work With Us (Innovation Lab section) ───────────────── */

export const innovationLabsIntro = {
  body: [
    "Partner with Asime Partners to access capital, advisory expertise, and a network built for inclusive growth across Africa.",
    "Apply to Chale Fund: Impact-focused funding for qualifying ventures and SMEs.",
    "Apply as a Tech Startup: For technology-enabled companies seeking venture or angel capital.",
    "Apply SME/MSME/SGB: For small and growing businesses seeking growth capital and advisory support.",
    "Partner With Us: For investors, institutions, and corporates looking to co-invest or collaborate on impact-driven opportunities.",
  ],
};

export const globalHealthInnovationAreas: ThesisArea[] = [
  {
    icon: "🤝",
    title: "Partner With Us",
    description:
      "Collaborate with Asime Partners on co-investments, fund structures, or strategic initiatives across venture capital, private credit, and impact investing in Africa.",
  },
  {
    icon: "💰",
    title: "Apply to Chale Fund",
    description:
      "Submit your application to the Chale Fund for impact-driven capital supporting gender-inclusive SMEs and ventures across Ghana and Africa.",
  },
  {
    icon: "🚀",
    title: "Apply as a Tech Startup",
    description:
      "Technology startups seeking venture or angel investment — particularly in AI systems, climate tech, and digital solutions for African markets.",
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
      "Identify high-potential SMEs and ventures aligned with our gender-smart and impact-driven investment mandate.",
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
      "Hands-on advisory, capacity building, and business development support to help portfolio companies scale sustainably.",
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
    "We invest and advise across Africa — with a primary focus on Ghana and expanding presence across key African markets.",
    "Our gender-smart, impact-driven approach connects capital to viable SMEs and ventures that create lasting economic opportunity for women and underserved communities.",
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

/* ── Insights ────────────────────────────────────────────── */

export const insightsIntro = {
  eyebrow: "Who We Are",
  headline: "Building inclusive capital markets in Africa",
};

export type InsightBannerTone = "green" | "navy";

export interface InsightCard {
  image: string;
  platform: string;
  bannerTone: InsightBannerTone;
  date: string;
  label: string;
  title: string;
  href: string;
}

export const insightCards: InsightCard[] = [
  {
    image: "/news/1.jpeg",
    platform: "Chale Fund",
    bannerTone: "green",
    date: "12.05.2026",
    label: "Announcement",
    title: "Asime Partners expands Chale Fund mandate across West Africa",
    href: "#apply",
  },
  {
    image: "/news/02.jpeg",
    platform: "Venture Capital",
    bannerTone: "green",
    date: "23.04.2026",
    label: "Announcement",
    title: "Inspired Evolution backs gender-smart venture growth through new investment",
    href: "#management",
  },
  {
    image: "/news/03.jpeg",
    platform: "Investment Advisory",
    bannerTone: "navy",
    date: "14.04.2026",
    label: "Article",
    title: "What inclusive capital deployment reveals about real opportunity in emerging markets",
    href: "#capabilities",
  },
];

/* ── Questions ───────────────────────────────────────────── */

export const faqItems: FaqItem[] = [
  {
    question: "What does Asime Partners do?",
    answer: [
      "Asime Partners is a venture capital, private credit, angel investing, and investment advisory firm focused on unleashing Africa's potential.",
      "We offer Climate & Impact investing, Alternative Investments, AI Systems advisory, M&A Advisory, and Executive Training — with a core focus on disability & inclusion investing, impact investment & SME fund management, and investment advisory services.",
    ],
  },
  {
    question: "Where do you invest?",
    answer: [
      "We operate across Africa, with a primary focus on Ghana and other African countries. Our impact strategies target gender-inclusive SMEs that promote women's economic empowerment and gender equality.",
    ],
  },
  {
    question: "What is Disability & Inclusion Investing?",
    answer: [
      "We use a gender-smart approach to facilitate investments into viable SMEs for financial return while improving women's access to quality employment, leadership opportunities, and products and services that improve economic opportunities and social well-being.",
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
      "We mobilize and invest capital to support the growth of gender-inclusive SMEs in Ghana and across Africa. Our strategies intentionally create positive social or environmental impact alongside financial returns for investors.",
    ],
  },
];

/* ── Apply CTA ───────────────────────────────────────────── */

export const applyCta = {
  headline: "Work With Us",
  body: "Partner with Asime Partners, apply to the Chale Fund, or submit your proposal as a tech startup or SME/MSME/SGB.",
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
    city: "Pan-Africa",
    lines: ["Pan-African investments", "Regional advisory presence"],
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
  company: ["About", "What We Do", "Where We Work", "Contact"],
};
