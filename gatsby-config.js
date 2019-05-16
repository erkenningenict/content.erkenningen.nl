const remark = require('remark');
const visit = require('unist-util-visit');

const lunrPlugin = lunr => builder => {
  // Include dutch language features
  require('lunr-languages/lunr.du')(lunr);

  // Reset pipeline and re-add trimmer and stopwordfilter, but not stemmer (which causes unwanted search issues)
  builder.pipeline.reset();
  builder.searchPipeline.reset();
  builder.pipeline.add(lunr.du.trimmer, lunr.du.stopWordFilter);
};

module.exports = {
  siteMetadata: {
    title: 'Erkenningen.nl',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                singleLink: 'single-link',
                info: 'custom-block-info',
              },
            },
          },
          'gatsby-remark-component',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en', // Use en, because du will override custom pipeline
            plugins: [lunrPlugin],
          },
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 50 } },
          { name: 'excerpt', store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            excerpt: node => {
              let excerpt = '';
              const tree = remark().parse(node.internal.content);
              visit(tree, 'text', node => {
                excerpt += node.value + ' ';
              });
              return excerpt;
            },
          },
        },
        filename: 'search_index.json',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140291354-1',
        head: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
