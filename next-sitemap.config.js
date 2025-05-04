/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://citybreak.world',
  generateRobotsTxt: true,
  outDir: './dist',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://citybreak.world/sitemap.xml'
    ]
  }
}
