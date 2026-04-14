/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.contactcenterusa.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/services", "/industries", "/contact"];
    const medPriority = ["/about", "/blog", "/faq", "/why-us", "/solutions"];

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: highPriority.includes(path)
        ? 1.0
        : medPriority.includes(path)
        ? 0.8
        : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
