import { Component, type ReactNode } from 'react';
import './skeleton.css';

export default function PageSkeleton() {
  const home = location.pathname === '/' || location.pathname === '/index.html';
  return <div className={`ap-page-skeleton${home ? ' ap-page-skeleton-home' : ''}`} role="status" aria-label="Loading page" aria-busy="true">
    <div aria-hidden="true">
      <div className="ap-skeleton-header"><span className="ap-skeleton-block ap-skeleton-brand"/><span className="ap-skeleton-block ap-skeleton-nav"/></div>
      <div className="ap-skeleton-hero">
        <span className="ap-skeleton-block ap-skeleton-title"/>
        <span className="ap-skeleton-block ap-skeleton-title ap-skeleton-short"/>
        <span className="ap-skeleton-block ap-skeleton-copy"/>
        <span className="ap-skeleton-block ap-skeleton-copy ap-skeleton-short"/>
        {home && <span className="ap-skeleton-block ap-skeleton-button"/>}
      </div>
      <div className="ap-skeleton-cards">{[0, 1, 2].map(index => <div key={index}><span className="ap-skeleton-block ap-skeleton-media"/><span className="ap-skeleton-block ap-skeleton-copy"/><span className="ap-skeleton-block ap-skeleton-copy ap-skeleton-short"/></div>)}</div>
    </div>
  </div>;
}

export class PageLoadBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div className="ap-page-load-error" role="alert"><p>The page couldn’t load. Please try again.</p><button onClick={() => location.reload()}>Reload page</button></div>;
    return this.props.children;
  }
}
