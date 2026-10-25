'use client';

import { useCallback, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip, useGSAP);

/** Capture before React changes the results, then animate only layout wrappers. */
export function useFlipResults(resultKey: string) {
    const root = useRef<HTMLDivElement>(null);
    const state = useRef<ReturnType<typeof Flip.getState> | null>(null);
    const tween = useRef<ReturnType<typeof Flip.from> | null>(null);
    const capture = useCallback(() => {
        if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        tween.current?.progress(1).kill();
        state.current = Flip.getState(root.current?.querySelectorAll('[data-flip-id]') ?? []);
    }, []);
    useGSAP(() => {
        if (!state.current || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        tween.current = Flip.from(state.current, {
            targets: root.current?.querySelectorAll('[data-flip-id]'),
            duration: .4, ease: 'power2.out', scale: true,
        });
        state.current = null;
    }, { scope: root, dependencies: [resultKey], revertOnUpdate: true });
    useGSAP(() => {
        const media = matchMedia('(prefers-reduced-motion: reduce)');
        const stop = () => { if (media.matches) { tween.current?.progress(1).kill(); state.current = null; } };
        media.addEventListener('change', stop);
        return () => { media.removeEventListener('change', stop); tween.current?.progress(1).kill(); };
    }, { scope: root });
    return { root, capture };
}
