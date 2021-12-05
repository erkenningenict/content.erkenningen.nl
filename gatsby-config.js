const path = require('path');

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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          content: path.resolve('./src/components/default-page.js'),
          search: path.resolve('./src/components/search-page.js'),
          default: path.resolve('./src/components/home-page.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/content`,
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
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'pages',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {
          // encode: 'balance',
          tokenize: 'full',
          // depth: 1,
          // async: false,
        },

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
        {
          allMdx {
            nodes {
              id
              frontmatter {
                title
              }
              slug
              rawBody
            }
          }
        }
      `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        // index: ['title', 'body'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        // store: ['id', 'slug', 'title'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allMdx.nodes.map((node) => ({
            id: node.id,
            slug: node.slug,
            title: node.frontmatter.title,
            body: node.rawBody,
          })),
      },
    },

    // {
    //   resolve: 'gatsby-plugin-flexsearch',
    //   options: {
    //     languages: ['nl'],
    //     type: 'Mdx',
    //     fields: [
    //       {
    //         name: 'title',
    //         indexed: true,
    //         resolver: 'title',
    //         attributes: {
    //           encode: 'balance',
    //           tokenize: 'full',
    //           // threshold: 6,
    //           depth: 1,
    //         },
    //         store: true,
    //       },
    //       {
    //         name: 'body',
    //         indexed: true,
    //         resolver: 'body',
    //         attributes: {
    //           encode: 'balance',
    //           tokenize: 'full',
    //           // threshold: 6,
    //           depth: 2,
    //         },
    //         store: false,
    //       },
    //       {
    //         name: 'url',
    //         indexed: false,
    //         resolver: 'slug',
    //         store: true,
    //       },
    //     ],
    //   },
    // },

    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140291354-1',
        head: true,
      },
    },
    // 'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
