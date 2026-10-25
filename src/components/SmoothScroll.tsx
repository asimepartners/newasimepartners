'use client';

import { useMemo, useSyncExternalStore, type ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import 'lenis/dist/lenis.css';

const query = '(prefers-reduced-motion: no-preference) and (pointer: fine)';
function subscribe(callback: () => void) {
    const media = matchMedia(query);
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
}
function getSnapshot() { return matchMedia(query).matches; }
function getServerSnapshot() { return false; }

function ScrollBridge() {
    useSmoothScroll();
    return null;
}

/** Mounted once per React entry point; preferences never remount the page content. */
export default function SmoothScroll({ children }: { children: ReactNode }) {
    const smoothWheel = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const options = useMemo(() => ({
        duration: .85, smoothWheel, syncTouch: false, autoRaf: false,
        allowNestedScroll: true,
        prevent: (node: HTMLElement) => !!node.closest('.ap-mega, [role="dialog"], textarea, select'),
    }), [smoothWheel]);
    return <ReactLenis root options={options}><ScrollBridge/>{children}</ReactLenis>;
}
