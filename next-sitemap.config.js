/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://www.buidlershub.xyz',
    generateRobotsTxt: true,
};

export default config;
