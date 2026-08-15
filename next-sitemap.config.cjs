/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://form-validation.nforshifu234dev.com',

  generateRobotsTxt: true,

  changefreq: 'weekly',

  priority: 0.5,

  transform: async (config, url) => {
    let priority = 0.5

    if (url === `${config.siteUrl}/hello`) {
      return null
    }

    if (url === '/') {
      priority = 1.0
    } else if (url === '/docs/v3' || url.startsWith('/docs/v3/')) {
      priority = 0.9
    } else if (url === '/examples' || url.startsWith('/examples/')) {
      priority = 0.8
    } else if (url === '/blog' || url.startsWith('/blog/')) {
      priority = 0.7
    } else if (url === '/docs/v2' || url.startsWith('/docs/v2/')) {
      priority = 0.5
    } else if (url === '/faq') {
      priority = 0.6
    } else if (url === '/about') {
      priority = 0.5
    } else if (url === '/contact') {
      priority = 0.4
    }

    return {
      loc: url,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString()
    }
  }
}