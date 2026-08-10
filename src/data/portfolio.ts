/* ── Portfolio companies ─────────────────────────────────── */

export type PlatformTag = "Asime Ventures" | "Jaza Rift" | "REIT" | "Assets"

export type SectorTag =
  | "digital health"
  | "biotech"
  | "medtech"
  | "femtech"
  | "fintech"
  | "agritech"
  | "insuretech"
  | "climatech"
  | "mobility"

export interface PortfolioCompany {
  name: string
  logo: string
  platforms: PlatformTag[]
  sectors: SectorTag[]
  href?: string
  logoScale?: "lg" | "xl" | "2xl"
}

export const portfolioPlatformTags: PlatformTag[] = [
  "Asime Ventures",
  "Jaza Rift",
  "REIT",
  "Assets",
]

export const portfolioSectorTags: SectorTag[] = [
  "digital health",
  "biotech",
  "medtech",
  "femtech",
  "fintech",
  "agritech",
  "insuretech",
  "climatech",
  "mobility",
]

export const portfolioPage = {
  title: "Our Portfolio",
  body: "Explore companies across our multi-strategy platforms spanning private markets, health & bio, real estate, and listed digital assets.",
  heroImage: "/images/more/partner.jpg",
  backLabel: "Back to home",
  emptyLabel: "No companies match these filters.",
  allLabel: "All",
  platformLabel: "Platform",
  sectorLabel: "Sectors",
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    name: "Bamboo",
    logo: "/images/portfolio/bamboo.png",
    platforms: ["Assets"],
    sectors: ["fintech"],
  },
  {
    name: "Bankly",
    logo: "/images/portfolio/bankly.png",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
  },
  {
    name: "Zuri Health",
    logo: "/images/portfolio/zuri-health.jpg",
    platforms: ["Jaza Rift"],
    sectors: ["digital health"],
    logoScale: "2xl",
  },
  {
    name: "Orbit Health",
    logo: "/images/portfolio/orbit-health.png",
    platforms: ["Jaza Rift"],
    sectors: ["digital health", "medtech"],
    logoScale: "lg",
  },
  {
    name: "Impact Investing Ghana",
    logo: "/images/portfolio/impact-investing-ghana.webp",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "lg",
  },
  {
    name: "Wahu",
    logo: "/images/portfolio/wahu.webp",
    platforms: ["Asime Ventures"],
    sectors: ["mobility", "climatech"],
  },
  {
    name: "FreezeLink",
    logo: "/images/portfolio/freezelink.jpg",
    platforms: ["Asime Ventures"],
    sectors: ["climatech", "agritech"],
    logoScale: "lg",
  },
  {
    name: "Synnefa",
    logo: "/images/portfolio/synnefa.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
  },
  {
    name: "Appruve",
    logo: "/images/portfolio/appruve.png",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "xl",
  },
  {
    name: "Accra Angels Network",
    logo: "/images/portfolio/accra-angels-network.png",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "lg",
  },
  {
    name: "Maalicard",
    logo: "/images/portfolio/maalicard.jpeg",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "lg",
  },
  {
    name: "CodeLn",
    logo: "/images/portfolio/codeln.png",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "lg",
  },
  {
    name: "GrowForMe",
    logo: "/images/portfolio/growforme.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
    logoScale: "lg",
  },
  {
    name: "Fluna",
    logo: "/images/portfolio/fluna.webp",
    platforms: ["Asime Ventures"],
    sectors: ["fintech", "femtech"],
    logoScale: "lg",
  },
  {
    name: "SESI Technologies",
    logo: "/images/portfolio/sesi-technologies.webp",
    platforms: ["Asime Ventures"],
    sectors: ["climatech"],
    logoScale: "xl",
  },
  {
    name: "Meru Greens",
    logo: "/images/portfolio/meru-greens.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
    logoScale: "lg",
  },
  {
    name: "Solar Now",
    logo: "/images/portfolio/solar-now.webp",
    platforms: ["Asime Ventures"],
    sectors: ["climatech"],
    logoScale: "xl",
  },
  {
    name: "PowerGen",
    logo: "/images/portfolio/powergen.webp",
    platforms: ["Asime Ventures"],
    sectors: ["climatech"],
    logoScale: "xl",
  },
  {
    name: "Lono",
    logo: "/images/portfolio/lono.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech", "climatech"],
    logoScale: "xl",
  },
  {
    name: "Mace Foods",
    logo: "/images/portfolio/macefoods.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
  },
  {
    name: "Rent to Own",
    logo: "/images/portfolio/rent-to-own.png",
    platforms: ["Asime Ventures"],
    sectors: ["fintech", "mobility"],
    logoScale: "lg",
  },
  {
    name: "Zonful Energy",
    logo: "/images/portfolio/zonful-energy.png",
    platforms: ["Asime Ventures"],
    sectors: ["climatech"],
    logoScale: "lg",
  },
  {
    name: "Phema Agri",
    logo: "/images/portfolio/phema-agri.png",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
    logoScale: "xl",
  },
  {
    name: "Figorr",
    logo: "/images/portfolio/figorr.png",
    platforms: ["Asime Ventures"],
    sectors: ["climatech", "fintech"],
    logoScale: "lg",
  },
  {
    name: "Kigali Farms",
    logo: "/images/portfolio/kigali-farms.jpeg",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
  },
  {
    name: "Revna Biosciences",
    logo: "/images/portfolio/revna-biosciences.png",
    platforms: ["Jaza Rift"],
    sectors: ["biotech", "medtech"],
    logoScale: "lg",
  },
  {
    name: "Redavia",
    logo: "/images/portfolio/redavia.png",
    platforms: ["Asime Ventures"],
    sectors: ["climatech"],
    logoScale: "lg",
  },
  {
    name: "Jaguza",
    logo: "/images/portfolio/jaguza.jpeg",
    platforms: ["Asime Ventures"],
    sectors: ["agritech"],
    logoScale: "lg",
  },
  {
    name: "Send",
    logo: "/images/portfolio/send.jpeg",
    platforms: ["Asime Ventures"],
    sectors: ["fintech"],
    logoScale: "xl",
  },
  {
    name: "Plural",
    logo: "/images/portfolio/plural.jpeg",
    platforms: ["Jaza Rift"],
    sectors: ["digital health"],
  },
  {
    name: "Kena Health",
    logo: "/images/portfolio/kena-health.webp",
    platforms: ["Jaza Rift"],
    sectors: ["digital health", "medtech"],
  },
]
