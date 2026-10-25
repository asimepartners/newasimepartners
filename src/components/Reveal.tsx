'use client';

import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Progressive enhancement: content is visible without JavaScript or with reduced motion. */
export default function Reveal({ children, className }: { children: ReactNode; className?: string }) {
    const root = useRef<HTMLDivElement>(null);
    useGSAP(() => {
        const media = gsap.matchMedia();
        media.add('(prefers-reduced-motion: no-preference)', () => {
            const element = root.current;
            if (!element || element.getBoundingClientRect().top < innerHeight * .9) return;
            gsap.from(element, {
                y: 24, opacity: 0, duration: .65, ease: 'power3.out',
                scrollTrigger: { trigger: element, start: 'top 92%', once: true },
                clearProps: 'transform,opacity',
            });
        });
        return () => media.revert();
    }, { scope: root });
    return <div ref={root} className={className}>{children}</div>;
}
