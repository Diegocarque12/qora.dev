export const SITE = {
  name: "Qora",
  url: "https://www.qora.dev",
  author: "Diego Carvajal",
  foundingYear: 2023,
  social: {
    instagram: "https://www.instagram.com/qora.dev_/",
    linkedin: "https://www.linkedin.com/in/luis-diego-carvajal/",
  },
  /**
   * Path to a 1200x630 share image, relative to the site root. While it is
   * null the layout emits no og:image and falls back to a summary card.
   */
  ogImage: "/og/default.png" as string | null,
} as const;
