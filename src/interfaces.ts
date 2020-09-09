export interface BodyStyle {
  color?: string;
  fontFamily?:
    | "Arial, 'Helvetica Neue', Helvetica, sans-serif"
    | "'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace"
    | "Georgia, Times, 'Times New Roman', serif"
    | "Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif"
    | 'Tahoma, Verdana, Segoe, sans-serif'
    | "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif"
    | 'Verdana, Geneva, sans-serif';
  fontSize?: '12px' | '14px' | '16px' | '18px';
}

export interface HeadingStyle extends BodyStyle {
  backgroundColor?: string;
}

export interface CustomStyle {
  heading?: HeadingStyle;
  body?: BodyStyle;
}

export type SocialShare = 'twitter' | 'facebook' | 'google' | 'faithlife';

export interface RefTaggerSettings {
  addLogosLink?: boolean;
  bibleReader?: 'bible.faithlife';
  bibleVersion?:
    | 'AB'
    | 'ASV'
    | 'DAR'
    | 'ESV'
    | 'GW'
    | 'HCSB'
    | 'KJV'
    | 'LEB'
    | 'MESSAGE'
    | 'NASB'
    | 'NCV'
    | 'NIV'
    | 'NIRV'
    | 'NKJV'
    | 'NLT'
    | 'DOUAYRHEIMS'
    | 'YLT';
  caseInsensitive?: boolean;
  convertHyperlinks?: boolean;
  customStyle?: CustomStyle;
  dropShadow?: boolean;
  linksOpenNewWindow?: boolean;
  logosLinkIcon?: 'dark' | 'light';
  noSearchClassNames?: string[];
  noSearchTagNames?: string[];
  roundCorners?: boolean;
  socialSharing?: SocialShare[];
  tagChapters?: boolean;
  tooltipStyle?: 'dark';
  useTooltip?: boolean;
}

export interface RefTaggerWindowObject {
  settings: RefTaggerSettings;
  tag?: () => any;
}

declare global {
  interface Window {
    refTagger: RefTaggerWindowObject;
  }
}
