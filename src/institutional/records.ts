import cases from '../content/case-studies.json';
import insights from '../content/insights.json';
import events from '../content/events.json';
export interface ContentRecord {
    id: string;
    title: string;
    description: string;
    image?: string;
    imageFit?: 'cover' | 'contain';
    audience: string;
    strategy: string;
    geography: string;
    type: string;
    capability?: string;
    client?: string;
    mandate?: string;
    challenge?: string;
    approach?: string;
    outputs?: string;
    outcomes?: string;
    href?: string;
    date?: string;
}
export interface EventRecord {
    id: string;
    title: string;
    description: string;
    date: string;
    format: string;
    location: string;
    href: string;
}
export const eventRecords: EventRecord[] = events;
export const workRecords: ContentRecord[] = cases as ContentRecord[];
export const insightRecords: ContentRecord[] = insights;
export const researchTopics = ['African Alternatives Outlook', 'Why African Pension Funds Under-Allocate to Private Markets', 'The Rise of African Private Credit', 'Building Institutional-Grade African Fund Managers', 'Islamic Finance and Africa’s Next Capital Cycle', 'Digital Assets and the Institutional Investor', 'The Future of African Pension Portfolio Construction'];
