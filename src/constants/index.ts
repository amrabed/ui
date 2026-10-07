export interface SocialProfile {
  name: string;
  url: string;
  icon: string;
}

export interface EcosystemSite {
  id: "home" | "blog" | "courses";
  name: string;
  url: string;
  description: string;
}

export const ECOSYSTEM_SITES: Record<string, EcosystemSite> = {
  home: {
    id: "home",
    name: "Home",
    url: "https://amrabed.com",
    description: "Personal website & portfolio",
  },
  blog: {
    id: "blog",
    name: "Blog",
    url: "https://amrabed.com/blog",
    description: "Technical blog & articles",
  },
  courses: {
    id: "courses",
    name: "Courses",
    url: "https://amrabed.com/courses",
    description: "Course archives & lecture materials",
  },
};

export const DEFAULT_PROFILES = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/amrabed",
  },
  {
    name: "GitHub",
    url: "https://github.com/amrabed",
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=vdrgnAYAAAAJ",
  },
  {
    name: "Medium",
    url: "https://amrabed.medium.com",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/2070636/amrabed",
  },
  {
    name: "X",
    url: "https://twitter.com/amr_abed",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@amr-abed",
  },
  {
    name: "Goodreads",
    url: "https://goodreads.com/user/show/15582377-amr-abed",
  },
] as const;

export const AUTHOR = {
  name: "Amr Abed",
  url: "https://amrabed.com",
  avatarUrl: "https://amrabed.com/amrabed.webp",
};
