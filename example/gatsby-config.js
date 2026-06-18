const config = require('./config');

const normalizeIcon = (icon) => (typeof icon === 'string' ? ['fas', icon] : icon);
const normalizeIconItems = (items = []) => items.map((item) => ({
  ...item,
  icon: normalizeIcon(item.icon),
}));

const siteMetadata = {
  ...config,
  education: normalizeIconItems(config.education),
  interests: normalizeIconItems(config.interests),
  social: normalizeIconItems(config.social),
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-academic',
      options: {
        contentPath: 'content',
        googleAnalyticTrackingId: config.googleAnalyticTrackingId,
        defaultLanguage: 'en',
        pages: config.pages,
        tagColors: config.tagColors,
        author: config.author,
        icon: './static/favicon.png',
      },
    },
  ],
  siteMetadata,
  pathPrefix: config.pathPrefix,
};
