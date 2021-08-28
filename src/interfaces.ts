export interface RefTaggerSettings {
  addLogosLink?: boolean;
  bibleReader?: 'bible.faithlife' | 'biblia';
  bibleVersion?:
    | 'AB'
    | 'ASV'
    | 'DAR'
    | 'ESV'
    | 'GW'
    | 'HCSB'
    | 'KJV'
    | 'LEB'
    | 'LSG'
    | 'MESSAGE'
    | 'NASB'
    | 'NCV'
    | 'NIV'
    | 'NIRV'
    | 'NKJV'
    | 'NLT'
    | 'DOUAYRHEIMS'
    | 'YLT'
    | string;
  caseInsensitive?: boolean;
  convertHyperlinks?: boolean;
  customStyle?: CustomStyle;
  dropShadow?: boolean;
  linksOpenNewWindow?: boolean;
  logosLinkIcon?: 'dark' | 'light';
  noSearchClassNames?: string[];
  noSearchTagNames?: string[];
  rootNode?: Node;
  roundCorners?: boolean;
  socialSharing?: SocialShare[];
  tagChapters?: boolean;
  tooltipStyle?: 'dark' | 'light';
  useTooltip?: boolean;
  lang?: string;
}

export interface CustomStyle {
  heading?: HeadingStyle;
  body?: BodyStyle;
}

export interface HeadingStyle extends BodyStyle {
  backgroundColor?: string;
}

export interface BodyStyle {
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  moreLink?: MoreLinkStyle;
}

export interface MoreLinkStyle {
  color?: string;
}

export type SocialShare = 'twitter' | 'facebook' | 'google' | 'faithlife';

export interface RefTaggerWindowObject {
  settings: RefTaggerSettings;
  tag?: () => any;
}

export interface Language {}

declare global {
  interface Window {
    refTagger: RefTaggerWindowObject;
  }
}
