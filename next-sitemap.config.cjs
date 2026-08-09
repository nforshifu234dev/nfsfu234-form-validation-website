/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://form-validation.nforshifu234dev.com',

  generateRobotsTxt: true,

  changefreq: 'weekly',

  priority: 0.7,

  transform: async (config, url) => ({
    loc: url,
    changefreq: config.changefreq,
    priority: url.includes('/docs/v3/')
      ? 0.9
      : config.priority,
    lastmod: new Date().toISOString()
  })
}