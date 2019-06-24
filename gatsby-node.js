const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    const dirSplit = path.parse(slug).dir.split(path.sep);
    if (dirSplit.length > 0 && dirSplit[0] === '') {
      dirSplit.shift(); // because path starts with /, '' is always at position 0
    }
    let type = 'page';
    console.log('dirsplit:', slug, 'dir', dirSplit[0]);
    switch (dirSplit[0]) {
      case 'projects':
        type = 'project';
        break;
      case 'blog':
        type = 'post';
        break;
      case 'page':
        type = 'page';
        break;
    }

    createNodeField({
      node,
      name: 'type',
      value: type,
    });

    if (type === 'project') {
      if (dirSplit.length > 1) {
        createNodeField({
          node,
          name: 'projectType',
          value: dirSplit[1],
        });
      } else {
        throw new Error('each project needs a type');
      }
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  // console.log("#DH# actoins", actions);
  const { createPage } = actions;
  // return new Promise((resolve, reject) => {
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMarkdownRemark.edges.map(({ node }) => {
      console.log('Node.field.type', JSON.stringify(node));
      let templatePath = './src/templates/page.js';
      switch (node.fields.slug) {
        case '/':
          templatePath = './src/templates/home-page.js';
          break;
        case '/zoeken/':
          templatePath = './src/templates/search-page.js';
          break;
      }
      console.log('#DH# Pages', node.fields.slug, templatePath);
      createPage({
        path: node.fields.slug,
        component: path.resolve(templatePath),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      });
    });
    // resolve();
    // });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@erkenningen\/ui/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
