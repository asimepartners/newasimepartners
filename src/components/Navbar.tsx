import { useEffect, useRef, useState } from 'react';
import type Lenis from 'lenis';
import SiteAnimations from '@/animation/SiteAnimations';
import { navigation } from '@/institutional/content';
import '@/institutional/site.css';
import '@/institutional/site-polish.css';
function NavDropdown({ group }: { group: (typeof navigation)[number] }) {
    const dropdownId = `nav-dropdown-${group.title.toLowerCase().replace(/\s+/g, '-')}`;
    const [expanded, setExpanded] = useState(false);
    const root = useRef<HTMLDivElement>(null);
    const toggle = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        if (!expanded) return;
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !root.current?.contains(event.target)) setExpanded(false);
        };
        document.addEventListener('pointerdown', closeOutside);
        return () => document.removeEventListener('pointerdown', closeOutside);
    }, [expanded]);
    return <div className="ap-nav-dropdown" ref={root}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => { if (!root.current?.contains(document.activeElement)) setExpanded(false); }}
        onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}
        onKeyDown={event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setExpanded(false);
                toggle.current?.focus();
            }
        }}>
        <button ref={toggle} className="ap-nav-dropdown-toggle" type="button"
            aria-expanded={expanded} aria-controls={dropdownId}
            onClick={() => setExpanded(value => !value)}>
            {group.title}<svg aria-hidden="true" className="ap-nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div id={dropdownId} className="ap-nav-dropdown-panel" hidden={!expanded}>
            {group.links.map(link => <a key={link.href} href={link.href} aria-current={location.pathname === link.href ? 'page' : undefined} onClick={() => setExpanded(false)}><span className="ap-nav-link-label">{link.label}</span></a>)}
        </div>
    </div>;
}

export default function Navbar({ variant = 'home' }: {
    variant?: 'home' | 'solid' | 'transparent';
}) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
    useEffect(() => {
        const updateHeader = () => setScrolled(window.scrollY > 24);
        updateHeader();
        window.addEventListener('scroll', updateHeader, { passive: true });
        return () => window.removeEventListener('scroll', updateHeader);
    }, []);
    const trigger = useRef<HTMLButtonElement>(null);
    const menu = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!open)
            return;
        const menuTrigger = trigger.current;
        const previous = document.body.style.overflow;
        const background = Array.from(document.querySelectorAll<HTMLElement>('main, footer, .ap-desktop-nav, .ap-header-cta'));
        const previousInert = background.map(element => element.inert);
        background.forEach(element => { element.inert = true; });
        document.body.style.overflow = 'hidden';
        (window as Window & { __lenis?: Lenis }).__lenis?.stop();
        menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setOpen(false);
                trigger.current?.focus();
            }
            if (e.key === 'Tab') {
                const nodes = [trigger.current, ...Array.from(menu.current?.querySelectorAll<HTMLElement>('a,button') ?? [])].filter((x): x is HTMLElement => !!x);
                const first = nodes[0], last = nodes[nodes.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
                else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };
        document.addEventListener('keydown', onKey);
        return () => { document.body.style.overflow = previous; if (previous !== 'hidden') (window as Window & { __lenis?: Lenis }).__lenis?.start(); background.forEach((element, index) => { element.inert = previousInert[index]; }); document.removeEventListener('keydown', onKey); menuTrigger?.focus(); };
    }, [open]);
    return <><SiteAnimations/><a className="ap-skip" href="#main-content">Skip to content</a><header className={`ap-header ${variant !== 'solid' ? 'ap-header-home' : ''}${variant === 'transparent' ? ' ap-header-transparent' : ''}${scrolled ? ' ap-header-scrolled' : ''}`}>
 <a href="/" aria-label="Asime Partners home"><img className="ap-logo" src="/asime-logo-white.png" alt="Asime Partners" width="155" height="48"/></a>
 <nav className="ap-desktop-nav" aria-label="Primary">{navigation.map(g => ['Who We Serve', 'What We Do', 'Insights', 'Who We Are'].includes(g.title) ? <NavDropdown key={g.title} group={g} /> : <a key={g.title} href={g.href} aria-current={location.pathname === g.href ? 'page' : undefined}>{g.title}</a>)}</nav>
 <div className="ap-header-actions"><a className="ap-header-cta" href="/contact.html">Talk to Asime <span aria-hidden="true">→</span></a><button ref={trigger} type="button" className="ap-menu-toggle" aria-expanded={open} aria-controls="asime-menu" onClick={() => setOpen(!open)}>{open ? 'Close ×' : 'Menu ☰'}</button></div>
 </header>{open && <div ref={menu} id="asime-menu" data-lenis-prevent className="ap-mega" role="dialog" aria-modal="true" aria-label="Site navigation"><div className="ap-mega-top"><p>Global standards. African Experience. Alternative capital.</p></div><div className="ap-mega-grid">{navigation.map(g => <nav key={g.title} aria-label={g.title}><a className="ap-eyebrow" href={g.href}>{g.title}</a>{g.links.map(l => <a key={l.label} href={l.href} aria-current={location.pathname === l.href ? 'page' : undefined} onClick={() => setOpen(false)}>{l.label}</a>)}</nav>)}</div></div>}</>;
}
