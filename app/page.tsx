import styles from "./page.module.css";
import {
  heroContent,
  heroStats,
  thesisIntro,
  thesisAreas,
  conveyorSteps,
  portfolio,
  fourCs,
  threeTs,
  diligenceCards,
  francoSection,
  insights,
  applyCta,
  offices,
  footerNav,
} from "@/lib/data";
import {
  AnimatedNav,
  AnimatedSection,
  FadeUp,
  FadeIn,
  StaggerParent,
  StaggerItem,
  ScaleIn,
} from "@/components/motion";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* ── Nav ──────────────────────────────────────────── */}
      <AnimatedNav className={styles.navWrap}>
        <nav className={styles.nav}>
          <a className={styles.brand} href="#">
            Jaza<span className={styles.brandAccent}>&nbsp;Rift</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#thesis">Thesis</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#framework">Framework</a>
            <a href="#insights">Insights</a>
            <a href="http://tinyurl.com/jazarift">Apply</a>
          </div>
          <a className={styles.navCta} href="http://tinyurl.com/jazarift" target="_blank">
            Get in Touch
          </a>
        </nav>
      </AnimatedNav>

      <main className={styles.main}>
        {/* ── Hero ────────────────────────────────────────── */}
        <section className={styles.hero}>
          {/* Decorative background shapes */}
          <div className={styles.heroShapes}>
            <span /><span /><span /><span /><span /><span />
          </div>

          <div className={styles.heroInner}>
            <FadeUp>
              <h1 className={styles.heroH1}>{heroContent.headline}</h1>
            </FadeUp>
            <FadeUp index={1}>
              <p className={styles.heroSub}>{heroContent.subheadline}</p>
            </FadeUp>
            <FadeUp index={2} className={styles.heroActions}>
              <a className={styles.heroBtnPrimary} href={heroContent.ctaSecondary.href}>
                {heroContent.ctaSecondary.label}
              </a>
            </FadeUp>
          </div>

          <StaggerParent className={styles.heroStats}>
            {heroStats.map((s) => (
              <ScaleIn key={s.label}>
                <div className={styles.heroStat}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </ScaleIn>
            ))}
          </StaggerParent>
        </section>

        {/* ── Investment Thesis ──────────────────────────── */}
        <AnimatedSection id="thesis" className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>{thesisIntro.eyebrow}</span>
            <h2>{thesisIntro.headline}</h2>
            {thesisIntro.body.map((para, i) => (
              <p key={i} className={styles.sectionBody}>{para}</p>
            ))}
          </div>
          <StaggerParent className={styles.gridFour}>
            {thesisAreas.map((area, i) => (
              <StaggerItem key={area.title} index={i}>
                <article className={styles.thesisCard}>
                  <span className={styles.thesisIcon}>{area.icon}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Innovation Continuum ──────────────────────────────── */}
        <AnimatedSection className={styles.conveyorBand}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>The Innovation Continuum</span>
            <h2>From Invention to Investment</h2>
            <p>A seamless pipeline from idea to Pan-African scale.</p>
          </div>
          <StaggerParent className={styles.conveyorGrid}>
            {conveyorSteps.map((step, i) => (
              <StaggerItem key={step.num} index={i}>
                <article className={styles.conveyorCard}>
                  <span className={styles.conveyorNum}>{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span className={styles.conveyorTag}>{step.tag}</span>
                </article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Portfolio ──────────────────────────────────── */}
        <AnimatedSection id="portfolio" className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Portfolio</span>
            <h2>Innovations We&apos;re Backing</h2>
          </div>
          <StaggerParent className={styles.gridThree}>
            {portfolio.map((co, i) => (
              <StaggerItem key={co.name} index={i}>
                <article className={styles.portfolioCard}>
                  <span className={styles.portfolioCat}>{co.category}</span>
                  <h3>{co.name}</h3>
                  <p>{co.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Framework (3Ts + 4Cs) ──────────────────────── */}
        <AnimatedSection id="framework" className={styles.section}>
          <div className={styles.frameworkIntro}>
            <div className={styles.frameworkIntroText}>
              <div className={styles.sectionHead}>
                <span className={styles.sectionLabel}>Our Framework</span>
                <h2>How We Invest</h2>
                <p>
                  We evaluate all investments through our 3Ts framework — a rigorous
                  but founder-friendly approach.
                </p>
              </div>
            </div>
            <div className={styles.fourCsRow}>
              {fourCs.map((c) => (
                <div key={c.label} className={styles.fourCBadge}>
                  <strong>{c.code}</strong>
                  <span>{c.label}</span>
                </div>
              ))}
            </div>
          </div>

          <StaggerParent className={styles.gridThree}>
            {threeTs.map((t, i) => (
              <StaggerItem key={t.title} index={i}>
                <article className={styles.ttCard}>
                  <div className={styles.ttCode}>{t.code}</div>
                  <h3>{t.title}</h3>
                  <p>{t.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerParent>

          <StaggerParent className={styles.gridTwo}>
            {diligenceCards.map((d, i) => (
              <StaggerItem key={d.title} index={i}>
                <article className={styles.diligenceCard}>
                  <div className={styles.diligenceLabel}>{d.label}</div>
                  <h3>{d.title}</h3>
                  <p>{d.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Francophone Africa ─────────────────────────── */}
        <AnimatedSection className={styles.francoBand}>
          <div className={styles.francoTop}>
            <div className={styles.francoStat}>
              <div className={styles.francoStatNum}>{francoSection.stat}</div>
              <div className={styles.francoStatLabel}>{francoSection.statLabel}</div>
            </div>
            <div className={styles.francoContent}>
              <h2>{francoSection.headline}</h2>
              {francoSection.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <StaggerParent className={styles.francoCountries}>
            {francoSection.countries.map((c) => (
              <ScaleIn key={c}>
                <span className={styles.countryTag}>{c}</span>
              </ScaleIn>
            ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Insights ───────────────────────────────────── */}
        <AnimatedSection id="insights" className={styles.section}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionLabel}>Insights</span>
            <h2>Thinking on African Health Innovation</h2>
          </div>

          {insights
            .filter((ins) => ins.featured)
            .map((ins) => (
              <FadeUp key={ins.title}>
                <article className={styles.insightFeatured}>
                  <span className={styles.insightLabel}>{ins.label}</span>
                  <h3>{ins.title}</h3>
                  <p>{ins.description}</p>
                  <div className={styles.insightYear}>
                    Jaza Rift Ventures · {ins.year}
                  </div>
                </article>
              </FadeUp>
            ))}

          <StaggerParent className={styles.gridTwo}>
            {insights
              .filter((ins) => !ins.featured)
              .map((ins, i) => (
                <StaggerItem key={ins.title} index={i}>
                  <article className={styles.insightCard}>
                    <span className={styles.insightLabel}>{ins.label}</span>
                    <h3>{ins.title}</h3>
                    <p>{ins.description}</p>
                    <div className={styles.insightYear}>{ins.year}</div>
                  </article>
                </StaggerItem>
              ))}
          </StaggerParent>
        </AnimatedSection>

        {/* ── Apply CTA ──────────────────────────────────── */}
        <AnimatedSection id="apply" className={styles.applyBand}>
          <h2>{applyCta.headline}</h2>
          <p>{applyCta.body}</p>
          <div className={styles.applyPills}>
            <span className={styles.applyPill}>T</span>
            <span className={styles.applyPill}>T</span>
            <span className={styles.applyPill}>T</span>
          </div>
          <a href={applyCta.buttonHref} className={styles.btnWhite}>
            {applyCta.buttonLabel}
          </a>
        </AnimatedSection>
      </main>

      {/* ── Footer ───────────────────────────────────────── */}
      <FadeIn>
        <footer className={styles.footer}>
          <div className={styles.footerTop}>
            <div>
              <div className={styles.footerBrand}>
                Jaza Rift
              </div>
              <p className={styles.footerTagline}>
                Catalyzing positive change in healthcare across Africa through
                targeted investments, expert advisory, and ground-level innovation.
              </p>
              <div className={styles.footerOffices}>
                {offices.map((o) => (
                  <div key={o.city} className={styles.officeBlock}>
                    <h4>{o.city}</h4>
                    {o.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.footerCol}>
              <h4>Platform</h4>
              <ul>
                {footerNav.platform.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4>Network</h4>
              <ul>
                {footerNav.network.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>

            <div className={styles.footerCol}>
              <h4>Company</h4>
              <ul>
                {footerNav.company.map((item) => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Jaza Rift Ventures. All rights reserved.</p>
            <p className={styles.footerPartner}>
              In partnership with Villgro Africa · info@jazarift.com
            </p>
          </div>
        </footer>
      </FadeIn>
    </div>
  );
}
