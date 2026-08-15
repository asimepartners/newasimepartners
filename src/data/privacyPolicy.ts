export type PrivacyBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'definitions'; items: { term: string; text: string }[] }

export type PrivacySection = {
  title: string
  blocks: PrivacyBlock[]
}

export const privacyPolicy = {
  title: 'Privacy',
  updatedAt: 'Effective from 01 April 2018',
  sections: [
    {
      title: 'Introduction',
      blocks: [
        {
          type: 'p',
          text: 'Asime Partners (collectively “Asime Partners” “we”, “us” or “our”) are committed to protecting and respecting your privacy. This policy (and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Personal data means information about you from which we can identify you (either on its own, or by piecing it together with other information) (“Personal Data”).',
        },
        {
          type: 'p',
          text: 'This policy applies to our website www.asimepartners.com (which includes any microsites or subsections of this website which are hosted within our web environment) and to any services, including our online platform, which we make available to you through our website (our website, and services together are referred to in this policy as the “Website”). It also applies to our email communications and links within these communications (together referred to in this policy as “Emails”). It is important that you read this privacy policy together with any other privacy policy or fair processing notice we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data.',
        },
        {
          type: 'p',
          text: 'This privacy notice supplements the other notices and is not intended to override them. We may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from 01 April 2018. It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.',
        },
      ],
    },
    {
      title: 'Data Controller',
      blocks: [
        {
          type: 'p',
          text: 'For the purpose of the General Data Protection Regulation ((EU) 2016/679) (“GDPR”) and all other related data protection legislation, the data controller is Asime Partners Limited.',
        },
        {
          type: 'p',
          text: 'You have the right to make a complaint at any time to the Information Commissioner’s Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO so please contact us in the first instance by email to: info@asimepartners.com',
        },
      ],
    },
    {
      title: 'Cookies',
      blocks: [
        {
          type: 'p',
          text: 'This website uses cookies to anonymously track site usage to maintain a safe and secure site and identify potential improvements and additions. This data will be kept for a period of 14 months to allow analysis of year on year performance.',
        },
      ],
    },
    {
      title: 'Portal users',
      blocks: [
        {
          type: 'p',
          text: 'If you are a user of our portal, the data collected includes but is not limited to your personal data of name and email address to identify you.',
        },
        {
          type: 'p',
          text: 'Your usage of the portal may also be monitored to allow us to identify patterns of usage and to allow us to contact users regarding their access and any corrections of data.',
        },
      ],
    },
    {
      title: 'Contact Us',
      blocks: [
        {
          type: 'p',
          text: 'Don’t hesitate to contact us if you have any questions about this privacy policy.',
        },
        {
          type: 'p',
          text: 'Via Email: info@asimepartners.com',
        },
      ],
    },
  ] satisfies PrivacySection[],
}
