export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export type SocialLinks = {
  gitHub: string;
  twitter: string;
  linkedIn: string;
};

export type UserData = {
  name: string;
  jobTitle: string;
  socialLinks: SocialLinks;
};
