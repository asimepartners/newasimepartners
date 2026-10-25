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
    return visible ? <aside className="ap-cookie" aria-label="Cookie preferences"><div><strong>Your privacy matters.</strong><p>Choose whether to allow optional analytics. Essential site functions remain available with either choice. <a href="/privacy.html">Privacy policy</a></p></div><div className="ap-cookie-actions"><button onClick={() => choose('necessary')}>Necessary only</button><button onClick={() => choose('accepted')}>Accept analytics</button></div></aside> : null;
}
