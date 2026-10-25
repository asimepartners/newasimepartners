import HeroParticles from '@/components/HeroParticles';
import SkeletonImage from '@/components/SkeletonImage';
import { useEffect, useState } from 'react';
import { enquiry } from './content';
import './home-hero.css';

const slides = [
    {
        label: 'Our platforms',
        title: <><span style={{ color: '#fcd116' }}>Explore alternative capital</span>{' '}<span style={{ color: '#fff' }}>and impact investments</span></>,
        body: <>Global standards. African experience.<br />One framework for institutional and impact investors</>,
        cta: 'Navigate Africa’s markets', href: '/#platform',
        image: '/images/sliders/accra-independence-arch.jpg', credentials: false,
    },
    {
        label: 'Academy', title: <><span style={{ color: '#fcd116' }}>Learn alternatives</span>{' '}<span style={{ color: '#fff' }}>the way Africa invests</span></>,
        body: 'Professional programmes combining global frameworks with African and Emerging Markets applications',
        cta: 'Explore Academy programmes', href: '/academy.html#programmes',
        image: '/images/sliders/accra-city-aerial.jpg', credentials: false,
    },
    {
        label: 'Credentials', title: <><span style={{ color: '#fcd116' }}>Apply global standards.</span>{' '}<span style={{ color: '#fff' }}>Deliver African impact</span></>,
        body: 'Recognised credentials and specialist learning tracks to deliver impact at scale',
        cta: 'Earn your credentials', href: '/academy.html#credentials',
        image: '/images/sliders/twilight-city-dome.webp', credentials: true,
    },
    {
        label: 'Asset owners & DFIs', title: <><span style={{ color: '#fcd116' }}>Allocate to African alternatives</span>{' '}<span style={{ color: '#fff' }}>with confidence</span></>,
        body: 'Build the capability to evaluate and allocate to African alternatives and impact investments',
        cta: 'Build your allocation capability', href: enquiry('African alternatives allocation'),
        image: '/images/optimized/institutional-network-1920.webp', credentials: false,
    },
    {
        label: 'Fund managers', title: <><span style={{ color: '#fcd116' }}>Become institutional-grade.</span><br /><span style={{ color: '#fff' }}>Emerging managers</span></>,
        body: 'Strategy, governance, investment process and track record for Africa’s fund managers',
        cta: 'Assess your LP readiness', href: enquiry('LP readiness assessment'),
        image: '/images/optimized/fund-manager-network-1920.webp', credentials: false,
    },
];

const credentials = [
    { image: '/images/Certifications/caia-logo.png', alt: 'CAIA Association' },
    { image: '/images/Certifications/ethica-institute-logo.png', alt: 'Ethica Institute of Islamic Finance' },
    { image: '/images/Certifications/images.png', alt: 'Digital Frontiers Institute' },
    { image: '/images/Certifications/logo-ande.png', alt: 'Aspen Network of Development Entrepreneurs', inverse: true },
];

export default function HomeHero() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches);
    const [hovered, setHovered] = useState(false);
    const rotating = !paused && !hovered;

    useEffect(() => {
        const motion = matchMedia('(prefers-reduced-motion: reduce)');
        const stopForReducedMotion = () => { if (motion.matches) setPaused(true); };
        motion.addEventListener('change', stopForReducedMotion);
        return () => motion.removeEventListener('change', stopForReducedMotion);
    }, []);

    useEffect(() => {
        if (!rotating) return;
        const timer = setInterval(() => setActive(index => (index + 1) % slides.length), 8500);
        return () => clearInterval(timer);
    }, [rotating]);

    function selectSlide(index: number) {
        setActive((index + slides.length) % slides.length);
        setPaused(true);
    }

    return <section className="ap-carousel" aria-label="Asime Partners platforms" aria-roledescription="carousel"
        onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
        onFocusCapture={event => { if (!event.currentTarget.contains(event.relatedTarget) && !(event.target instanceof Element && event.target.closest('.ap-carousel-pause'))) setPaused(true); }}>
        {slides.map((slide, index) => <SkeletonImage key={slide.label} src={slide.image}
            className={`ap-carousel-image${active === index ? ' is-active' : ''}`}
            alt="" aria-hidden="true" fetchPriority={index === 0 ? 'high' : 'low'} />)}
        <HeroParticles paused={paused || hovered}/>
        <div className="ap-carousel-wrap">
            <div className="ap-carousel-copy" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
                {slides.map((slide, index) => {
                    const Heading = index === 0 ? 'h1' : 'h2';
                    return <div key={slide.label} id={`home-slide-${index + 1}`}
                        className={`ap-carousel-panel${slide.credentials ? ' ap-carousel-panel-credentials' : ''}${active === index ? ' is-active' : ''}`}
                        role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
                        aria-hidden={active !== index}>
                        <div className="ap-carousel-text">
                            <Heading className="ap-carousel-heading">{slide.title}</Heading>
                            <p className="ap-carousel-body">{slide.body}</p>
                            <a className="ap-carousel-cta" href={slide.href} tabIndex={active === index ? 0 : -1}>
                                {slide.cta}<span aria-hidden="true">→</span>
                            </a>
                        </div>
                        {slide.credentials && <aside className="ap-carousel-credentials" aria-label="Credentials and partners">
                            <div className="ap-carousel-logo-grid">{credentials.map(credential =>
                                <div className="ap-carousel-logo" key={credential.alt}>
                                    <SkeletonImage src={credential.image} alt={credential.alt} className={credential.inverse ? 'ap-carousel-logo-inverse' : undefined} />
                                </div>
                            )}</div>
                        </aside>}
                    </div>;
                })}
            </div>
            <div className="ap-carousel-footer">
                <nav className="ap-carousel-platforms" aria-label="Our platforms">
                    <a href="/academy.html">Academy</a><span aria-hidden="true">·</span>
                    <a href="/advisory.html">Advisory</a><span aria-hidden="true">·</span>
                    <a href="/capital-solutions.html">Capital Solutions</a><span aria-hidden="true">·</span>
                    <a href="/intelligence.html">Intelligence</a>
                </nav>
                <div className="ap-carousel-navigation" aria-label="Slide controls">
                    <div className="ap-carousel-dots" role="group" aria-label="Choose a slide">
                        {slides.map((slide, index) => <button type="button" key={slide.label}
                            aria-label={`Show slide ${index + 1}: ${slide.label}`} aria-controls={`home-slide-${index + 1}`}
                            aria-current={active === index ? 'true' : undefined} onClick={() => selectSlide(index)}><span /></button>)}
                    </div>
                    <div className="ap-carousel-arrows">
                        <button type="button" className="ap-carousel-arrow" aria-label="Previous slide" onClick={() => selectSlide(active - 1)}>‹</button>
                        <button type="button" className="ap-carousel-arrow" aria-label="Next slide" onClick={() => selectSlide(active + 1)}>›</button>
                    </div>
                    <button type="button" className="ap-carousel-pause" aria-pressed={paused} onClick={() => setPaused(value => !value)}>
                        {paused ? 'Resume slides' : 'Pause slides'}
                    </button>
                </div>
            </div>
        </div>
    </section>;
}
