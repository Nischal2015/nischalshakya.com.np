export interface MetaSeo {
  title?: string;
  description?: string;

  // Social
  socialTitle?: string;
  socialDescription?: string;
  socialImage?: string;
  socialImageAlt?: string;

  // Open Graph
  ogType?: 'website' | 'article' | 'profile';
  ogUrl?: string;

  // Twitter
  twitterCreator?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}
