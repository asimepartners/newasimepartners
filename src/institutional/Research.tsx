import { useState } from 'react';
import { enquiry } from './content';
import { researchTopics } from './records';
import './research.css';

const themes = ['Market outlook', 'Institutional capital', 'Private credit', 'Fund managers', 'Islamic finance', 'Digital assets', 'Portfolio construction'];
export default function Research() {
    const [query, setQuery] = useState('');
    const topics = researchTopics.map((title, index) => ({ title, theme: themes[index] })).filter(topic => `${topic.title} ${topic.theme}`.toLowerCase().includes(query.toLowerCase()));
    return <div className="ap-research-page">
        <section className="ap-research-hero"><div className="ap-wrap ap-research-hero-grid"><div><h1>Better questions<br/><em>Stronger investment decisions</em></h1><p>Explore the forces shaping African alternative investments and institutional capital.</p><a className="ap-research-button" href="#research-agenda">Explore our research agenda <span aria-hidden="true">↓</span></a></div><figure><img src="/images/intelligence/institutional-research.jpg" alt="Professional presenting financial research during a video call" fetchPriority="high"/><figcaption>African perspective. Institutional focus.</figcaption></figure></div></section>
        <section className="ap-research-agenda" id="research-agenda"><div className="ap-wrap"><div className="ap-research-agenda-heading"><div><span className="ap-eyebrow">Our research agenda</span><h2>The questions<br/>moving capital forward.</h2></div><p>Explore themes for institutional briefings. Contact us to discuss research availability or commission a tailored assignment.</p></div><div className="ap-research-toolbar"><label htmlFor="research-search">Find a research theme</label><input id="research-search" type="search" placeholder="Search topics or investment themes" value={query} onChange={event => setQuery(event.target.value)}/><span role="status">{topics.length} {topics.length === 1 ? 'theme' : 'themes'}</span></div><div className="ap-research-grid">{topics.map(topic => <article className="ap-research-card" key={topic.title}><span className="ap-eyebrow">{topic.theme}</span><h3>{topic.title}</h3><a className="ap-research-link" href={enquiry(topic.title)}>Request a briefing <span aria-hidden="true">↗</span></a></article>)}</div>{!topics.length && <div className="ap-research-empty"><h3>No themes found.</h3><p>Try another topic or explore the full research agenda.</p><button onClick={() => setQuery('')}>Show all themes</button></div>}</div></section>

    </div>;
}
