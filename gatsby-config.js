const remark = require('remark');
const visit = require('unist-util-visit');

module.exports = {
  siteMetadata: {
    title: 'Erkenningen.nl'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          camelCase: false
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
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
                info: 'custom-block-info'
              }
            }
          },
          'gatsby-remark-component'
        ]
      }
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: ['title', 'excerpt'],
        // How to resolve each field's value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            excerpt: node => {
              const excerptLength = 136; // Hard coded excerpt length
              let excerpt = '';
              console.log('#DH# raw', node.internal.content);
              // const tree = remark().parse(node.rawMarkdownBody);
              const tree = remark().parse(node.internal.content);
              visit(tree, 'text', node => {
                excerpt += node.value;
              });
              console.log('#DH# except', excerpt);
              return excerpt;
            }
          }
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
