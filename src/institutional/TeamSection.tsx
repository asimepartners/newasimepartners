import SkeletonImage from '@/components/SkeletonImage';
import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin01Icon } from '@hugeicons/core-free-icons';
import { teamContent } from '@/data/content';
import './team-section.css';

export default function TeamSection() {
    const members = teamContent.members.filter(member =>
        !/Engineer|Engineering/.test(member.role) && member.name !== 'Betty Nduku');

    const freda = members.find(member => member.name === 'Freda Egyir');
    const cards = members.map(member => member.name === 'Freda Egyir' ? null : member);
    if (freda) cards.splice(4, 0, freda);
    cards.splice(4, 0, null, null, null, null);
    const emmanuel = teamContent.members.find(member => member.name === 'Emmanuel Devi');
    const jamesIndex = cards.findIndex(member => member?.name === 'James Hanson');
    if (emmanuel && jamesIndex !== -1) cards.splice(jamesIndex, 0, emmanuel);
    const abenaIndex = cards.findIndex(member => member?.name === 'Abena Opoku-Acquah');
    if (abenaIndex !== -1) {
        const [abena] = cards.splice(abenaIndex, 1);
        cards.splice(cards.indexOf(null), 0, abena);
    }

    const firstRowNames = ['Sewu-Steve Tawia', 'Benson Njriru', 'Abena Opoku-Acquah'];
    const firstRow = firstRowNames.flatMap(name => members.filter(member => member.name === name));
    const remainingCards = cards.filter(member => !member || !firstRowNames.includes(member.name));
    cards.splice(0, cards.length, ...firstRow, {
        name: 'John Kohler',
        image: '/images/Team/john-kohler.webp',
        role: 'Senior Advisor, Expert Facilitator',
        linkedin: 'https://www.linkedin.com/in/jokohler/',
    }, ...remainingCards);

    const facilitators = [
        { name: 'Winfred Kumi', image: '/images/Team/winfred-matched.png', role: 'Principal Facilitator, West Africa', linkedin: 'https://www.linkedin.com/in/winfred-kumi-aa5568a7/' },
        { name: 'Hedwig Siewertsen', image: '/images/Team/hedwig-matched.png', role: 'Senior Advisor, Expert Facilitator', linkedin: 'https://www.linkedin.com/in/hedwig-siewertsen-70b25414/' },
        { name: 'Munya Chiura', image: '/images/Team/munya-chiura.png', role: 'Facilitator, Digital Assets & Fintech', linkedin: 'https://www.linkedin.com/in/munyachiura-theafricawewant--/' },
    ];
    for (const facilitator of facilitators) {
        const placeholderIndex = cards.findIndex((member, index) => index >= 4 && member === null);
        if (placeholderIndex !== -1) cards.splice(placeholderIndex, 1, facilitator);
    }

    const fredaIndex = cards.findIndex(member => member?.name === 'Freda Egyir');
    if (fredaIndex > 0 && cards[fredaIndex - 1] === null) cards.splice(fredaIndex - 1, 1);
    const justinaIndex = cards.findIndex(member => member?.name === 'Freda Egyir');
    cards.splice(justinaIndex === -1 ? cards.length : justinaIndex, 0, {
        name: 'JUSTINA YAA MENSAH',
        image: '/images/Team/justina-matched.png',
        role: 'Facilitator, Gender & Inclusion',
        linkedin: 'https://www.linkedin.com/in/justina-mensah/',
    });

    return <section id="team" className="ap-section ap-people" aria-labelledby="people-title">
        <div className="ap-wrap">
            <div className="ap-people-heading">
                <div><span className="ap-eyebrow">Our people</span><h2 id="people-title">Practitioner-led.<br/><span>Institutionally focused.</span></h2></div>
                <p>Investment, advisory and institutional-capital experience. A shared commitment to Africa’s long-term growth.</p>
            </div>
            <div className="ap-people-divider"><span>The team</span><p>Expertise across markets. Perspective across disciplines.</p></div>
            <div className="ap-people-grid">{cards.filter((member): member is NonNullable<typeof member> => member !== null && member.name !== 'James Hanson').map(member => <article className="ap-person" key={member.name}>
                <div className="ap-person-photo">{!member.image ? <div className="ap-person-placeholder-photo" aria-label={`${member.name} portrait coming soon`}><svg viewBox="0 0 120 120" width="120" height="120" fill="none" aria-hidden="true"><circle cx="60" cy="42" r="20" fill="currentColor"/><path d="M22 108c0-25 17-40 38-40s38 15 38 40" fill="currentColor"/></svg></div> : <SkeletonImage src={member.name === 'Emmanuel Devi' ? '/images/Team/emmanuel-portrait.webp' : member.name === 'Freda Egyir' ? '/images/Team/freda-portrait.webp' : member.image} alt={member.name} loading="lazy"/>}</div>
                <div className="ap-person-info"><h3>{member.name}</h3><p>{member.role}</p>
                    {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`View ${member.name} on LinkedIn`} title={`${member.name} on LinkedIn`} style={{ color: '#fcd116' }}><HugeiconsIcon icon={Linkedin01Icon} size={32} strokeWidth={2} aria-hidden="true" /></a>}
                </div>
            </article>)}</div>
        </div>
    </section>;
}
