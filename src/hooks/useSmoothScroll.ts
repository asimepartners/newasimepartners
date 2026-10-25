'use client';

import { useGSAP } from '@gsap/react';
import { useLenis } from 'lenis/react';
import type Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);
type ScrollWindow = Window & { __lenis?: Lenis };

/** One clock drives desktop smoothing and scroll reveals; touch keeps native scrolling. */
export function useSmoothScroll() {
    const lenis = useLenis();
    useGSAP(() => {
        if (!lenis) return;
        const win = window as ScrollWindow;
        win.__lenis = lenis;
        const tick = (seconds: number) => lenis.raf(seconds * 1000);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add(tick);
        const navigateAnchor = (event: MouseEvent) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
            if (!anchor || anchor.download || (anchor.target && anchor.target !== '_self')) return;
            const url = new URL(anchor.href, location.href);
            if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash || url.hash === '#') return;
            let target: HTMLElement | null;
            try { target = document.getElementById(decodeURIComponent(url.hash.slice(1))); } catch { return; }
            if (!target) return;
            event.preventDefault();
            const offset = (document.querySelector('header')?.getBoundingClientRect().height ?? 96) + 16;
            history.pushState(null, '', url.hash);
            const focus = () => {
                const previous = target.getAttribute('tabindex');
                if (previous === null) target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
                if (previous === null) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
            };
            if (lenis) {
                lenis.resize();
                lenis.start();
                lenis.scrollTo(target.getBoundingClientRect().top + scrollY - offset, { onComplete: focus, immediate: matchMedia('(prefers-reduced-motion: reduce)').matches });
            } else {
                window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - offset, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
                focus();
            }
        };
        const syncLock = () => {
            if (document.hidden || document.body.style.overflow === 'hidden') lenis?.stop();
            else lenis?.start();
        };
        const locks = new MutationObserver(syncLock);
        locks.observe(document.body, { attributes: true, attributeFilter: ['style'] });
        document.addEventListener('visibilitychange', syncLock);
        syncLock();
        document.addEventListener('click', navigateAnchor);
        return () => {
            document.removeEventListener('click', navigateAnchor);
            locks.disconnect();
            document.removeEventListener('visibilitychange', syncLock);
            gsap.ticker.remove(tick);
            lenis.off('scroll', ScrollTrigger.update);
            if (win.__lenis === lenis) delete win.__lenis;
        };
    }, { dependencies: [lenis], revertOnUpdate: true });
}
