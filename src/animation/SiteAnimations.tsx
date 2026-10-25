'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Each engine owns different nodes: GSAP headings, Anime arrow icons, Motion cards. */
export default function SiteAnimations() {
    useGSAP((_context, contextSafe) => {
        if (!contextSafe) return;
        let disposed = false;
        let teardown: (() => void) | undefined;
        void Promise.all([
            import('gsap/SplitText'), import('animejs'),
        ]).then(contextSafe(([{ SplitText }, { animate }]: [typeof import('gsap/SplitText'), typeof import('animejs')]) => {
            if (disposed) return;
            gsap.registerPlugin(ScrollTrigger, SplitText);
            const media = gsap.matchMedia();
            media.add('(prefers-reduced-motion: no-preference)', () => {
                const main = document.querySelector('main');
                if (!main) return;
                const splits: SplitText[] = [];
                const context = gsap.context(() => {
                    const title = main.querySelector<HTMLElement>('h1');
                    if (title && !title.closest('.ap-carousel') && title.getBoundingClientRect().bottom > 0) {
                        const split = SplitText.create(title, { type: 'words', aria: 'auto' });
                        splits.push(split);
                        gsap.from(split.words, {
                            y: 18, opacity: 0, duration: .65, stagger: .025, ease: 'power2.out',
                            onComplete: () => split.revert(),
                        });
                    }
                    main.querySelectorAll<HTMLElement>('.ap-people-heading, .ap-partners-v2-intro, .ap-case-overview').forEach(heading => {
                        if (heading.getBoundingClientRect().top < innerHeight * .9) return;
                        gsap.from(heading, {
                            y: 24, opacity: 0, duration: .6, ease: 'power2.out',
                            scrollTrigger: { trigger: heading, start: 'top 92%', once: true },
                            clearProps: 'transform,opacity',
                        });
                    });
                }, main);
                const active = new Map<Element, ReturnType<typeof animate>>();
                const nudge = (event: Event) => {
                    if (!(event.target instanceof Element)) return;
                    const control = event.target.closest('.ap-button, .wf-photo-card, .ap-partners-banner-link');
                    const icon = control?.querySelector('.wf-photo-card-cta-icon, .ap-button>span, .ap-partners-banner-link>span');
                    if (!icon || (event instanceof PointerEvent && event.pointerType === 'touch')) return;
                    if (event instanceof MouseEvent && event.relatedTarget instanceof Node && control?.contains(event.relatedTarget)) return;
                    active.get(icon)?.revert();
                    active.set(icon, animate(icon, { x: [0, 4, 0], duration: 360, ease: 'outQuad' }));
                };
                main.addEventListener('pointerover', nudge);
                main.addEventListener('focusin', nudge);
                return () => {
                    main.removeEventListener('pointerover', nudge);
                    main.removeEventListener('focusin', nudge);
                    active.forEach(animation => animation.revert());
                    context.revert();
                    splits.forEach(split => split.revert());
                };
            });
            ScrollTrigger.refresh(true);
            teardown = () => media.revert();
        })).catch(() => { /* Content remains visible if an animation chunk cannot load. */ });
        let refreshFrame = 0;
        const scheduleRefresh = () => {
            if (disposed) return;
            cancelAnimationFrame(refreshFrame);
            refreshFrame = requestAnimationFrame(() => { if (!disposed) ScrollTrigger.refresh(true); });
        };
        const onImageLoad = (event: Event) => { if (event.target instanceof HTMLImageElement) scheduleRefresh(); };
        document.addEventListener('load', onImageLoad, true);
        document.fonts.addEventListener('loadingdone', scheduleRefresh);
        void document.fonts.ready.then(scheduleRefresh);
        return () => {
            disposed = true;
            cancelAnimationFrame(refreshFrame);
            document.removeEventListener('load', onImageLoad, true);
            document.fonts.removeEventListener('loadingdone', scheduleRefresh);
            teardown?.();
        };
    }, []);
    return null;
}
