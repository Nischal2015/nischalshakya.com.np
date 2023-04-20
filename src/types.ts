export interface MetaSeo {
  title?: string;
  robots?: string;
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

export type Month =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';
export interface AchievementProps {
  title?: string;
  school?: string;
  education?: string;
  company?: string;
  employeeType?: string;
  startMonth: Month;
  startYear: string;
  endMonth?: Month;
  endYear: string;
  skills?: string[];
  description?: string;
  companyLocation?: string;
  location?: 'On-site' | 'Hybrid' | 'Remote';
}
