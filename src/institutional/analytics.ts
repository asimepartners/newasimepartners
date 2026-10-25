type AnalyticsWindow = Window & {
    dataLayer?: Record<string, unknown>[];
};
export function track(event: string, properties: Record<string, string> = {}) {
    try {
        if (localStorage.getItem('jaza-cookie-consent') !== 'accepted')
            return;
    }
    catch {
        return;
    }
    const w = window as AnalyticsWindow;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event, ...properties });
    window.dispatchEvent(new CustomEvent('asime:analytics', { detail: { event, ...properties } }));
}
export function installAnalytics() {
    document.addEventListener('click', e => {
        const link = (e.target as Element)?.closest<HTMLAnchorElement>('a');
        if (!link)
            return;
        if (link.hasAttribute('download'))
            track('profile_download', { path: location.pathname });
        else if (link.href.includes('/contact.html'))
            track('cta_click', { path: location.pathname, interest: new URL(link.href).searchParams.get('interest') || 'General enquiry' });
        else if ((link.href.includes('/programme.html') || link.href.includes('/programme-')))
            track('programme_interest', { programme: new URL(link.href).searchParams.get('id') || new URL(link.href).pathname.replace('/programme-', '').replace('.html', '') });
    });
}
