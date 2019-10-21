export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * full url, no username
   */
  linkedin?: string;
  /**
   * full url, no username
   */
  github?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
}

const config: WebsiteConfig = {
  title: 'Khalal Walker',
  description: 'Personal Blog',
  coverImage: 'img/black-sand.jpeg',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://www.khalal.dev',
  twitter: 'https://twitter.com/khalalw',
  linkedin: 'https://www.linkedin.com/in/khalalw',
  github: 'https://www.github.com/khalalw',
  showSubscribe: false,
  mailchimpAction:
    'https://gmail.us20.list-manage.com/subscribe/post?u=5270a4cb75ff9c778a77f6cd0&amp;id=34781dafcd',
  mailchimpName: 'MERGE1',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'qteMOdJLPSS-Cpm5ck8Yo4LIWGcaCbFfWdw7IFTP63w',
};

export default config;
