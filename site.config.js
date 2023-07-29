const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Bob",
    // image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    image: "/sh.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Data Scientist (Data Analyst)",
    bio: "최신 AI/ML 기술, 데이터 관련 동향을 공부하고 기록합니다.",
    email: "leeobw@gmail.com",
    linkedin: "databb",
    github: "datasbb",
    instagram: "",
  },
  projects: [
    {
      name: `temp`,
      href: "",
    },
  ],
  blog: {
    title: "[AI/데이터분석] 공부기록",
    description: "welcome to bb-log!",
  },

  // CONFIG configration (required)
  link: "https://bb-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "datasbb/bb-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
