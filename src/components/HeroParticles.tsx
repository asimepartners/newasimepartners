import { useEffect, useId, useRef } from 'react';
import type { Container } from '@tsparticles/engine';

let engineReady: Promise<typeof import('@tsparticles/engine')> | undefined;
function loadEngine() {
    engineReady ??= Promise.all([import('@tsparticles/engine'), import('@tsparticles/slim')])
        .then(async ([engine, { loadSlim }]) => { await loadSlim(engine.tsParticles); return engine; });
    return engineReady;
}

export default function HeroParticles({ paused = false }: { paused?: boolean }) {
    const id = `asime-particles-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
    const host = useRef<HTMLDivElement>(null);
    const container = useRef<Container | undefined>(undefined);
    const pauseRequested = useRef(paused);
    const inView = useRef(true);
    useEffect(() => {
        pauseRequested.current = paused;
        if (paused || !inView.current) container.current?.pause();
        else container.current?.play();
    }, [paused]);
    useEffect(() => {
        const media = matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 701px)');
        let generation = 0;
        let disposed = false;
        const setup = async () => {
            const current = ++generation;
            container.current?.destroy();
            container.current = undefined;
            if (!media.matches || disposed) return;
            const { tsParticles } = await loadEngine();
            if (disposed || current !== generation) return;
            const instance = await tsParticles.load({ id, options: {
                fullScreen: { enable: false }, fpsLimit: 30, detectRetina: false,
                pauseOnBlur: true, pauseOnOutsideViewport: true,
                particles: {
                    number: { value: 28 }, color: { value: ['#fcd116', '#ffffff'] },
                    opacity: { value: { min: .1, max: .3 } }, size: { value: { min: 1, max: 2 } },
                    move: { enable: true, speed: .25, outModes: { default: 'out' } },
                    links: { enable: true, distance: 145, color: '#fcd116', opacity: .08, width: 1 },
                },
                interactivity: { events: { onHover: { enable: false }, onClick: { enable: false } } },
            } });
            if (disposed || current !== generation) { instance?.destroy(); return; }
            container.current = instance;
            if (pauseRequested.current || !inView.current) instance?.pause();
        };
        const configure = () => { void setup().catch(() => { /* Decorative background is optional. */ }); };
        const observer = new IntersectionObserver(([entry]) => {
            inView.current = entry.isIntersecting;
            if (!entry.isIntersecting || pauseRequested.current) container.current?.pause();
            else container.current?.play();
        });
        if (host.current) observer.observe(host.current);
        configure();
        media.addEventListener('change', configure);
        return () => {
            disposed = true; generation++;
            observer.disconnect();
            media.removeEventListener('change', configure);
            container.current?.destroy(); container.current = undefined;
        };
    }, [id]);
    return <div ref={host} id={id} className="ap-hero-particles" aria-hidden="true"/>;
}
