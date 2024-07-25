module.exports = ({ env }) => ({
  seo: {
    enabled: true,
  },
  'all-in-one-accessibility': {
    enabled: true,
    resolve: './node_modules/strapi-plugin-all-in-one-accessibility',
    config: {
    },
  },
  scheduler: {
    enabled: true,
    config: {
      contentTypes: {
        'api::article.article': {},
        'api::page.page': {}
      }
    }
  },
});
