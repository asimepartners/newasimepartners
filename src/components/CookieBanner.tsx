import { useEffect, useState } from 'react';
export default function CookieBanner() {
    const [visible, setVisible] = useState(false);
    useEffect(() => { try {
        setVisible(!localStorage.getItem('jaza-cookie-consent'));
    }
    catch {
        setVisible(true);
    } }, []);
    function choose(choice: 'necessary' | 'accepted') { try {
        localStorage.setItem('jaza-cookie-consent', choice);
    }
    catch { /* Storage can be disabled. */ } setVisible(false); window.dispatchEvent(new CustomEvent('asime:consent', { detail: choice })); }
    return visible ? <aside className="ap-cookie" aria-label="Cookie preferences"><p>We use optional analytics cookies. Essential functions always work. <a href="/privacy.html">Privacy policy</a></p><div className="ap-cookie-actions"><button onClick={() => choose('necessary')}>Decline</button><button onClick={() => choose('accepted')}>Accept</button></div></aside> : null;
}
