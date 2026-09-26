/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bibeksah22.com.np",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
  exclude: ["/circle-glow", "/404"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/circle-glow"] }],
  },
  transform: async (config, path) => ({
    loc: path,
    changefreq: path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: path === "/" ? 1.0 : path.startsWith("/blog/") ? 0.6 : 0.8,
    lastmod: new Date().toISOString(),
  }),
};
