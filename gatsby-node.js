// const _ = require("lodash");
// const path = require("path");
// const { createFilePath } = require("gatsby-source-filesystem");

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   return graphql(`
//     {
//       allMarkdownRemark(limit: 1000) {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//             frontmatter {
//               tags
//               path
//               templateKey
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       result.errors.forEach(e => console.error(e.toString()));
//       return Promise.reject(result.errors);
//     }

//     const posts = result.data.allMarkdownRemark.edges;

//     posts.forEach(edge => {
//       const id = edge.node.id;
//       createPage({
//         path: edge.node.fields.slug,
//         tags: edge.node.frontmatter.tags,
//         component: path.resolve(
//           `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
//         ),
//         // additional data can be passed via context
//         context: {
//           id
//         }
//       });
//     });

//     // Tag pages:
//     let tags = [];
//     // Iterate through each post, putting all found tags into `tags`
//     posts.forEach(edge => {
//       if (_.get(edge, `node.frontmatter.tags`)) {
//         tags = tags.concat(edge.node.frontmatter.tags);
//       }
//     });
//     // Eliminate duplicate tags
//     tags = _.uniq(tags);

//     // Make tag pages
//     tags.forEach(tag => {
//       const tagPath = `/tags/${_.kebabCase(tag)}/`;

//       createPage({
//         path: tagPath,
//         component: path.resolve(`src/templates/tags.js`),
//         context: {
//           tag
//         }
//       });
//     });
//   });
// };

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: `slug`,
//       node,
//       value
//     });
//   }
// };

// test
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allFile(filter: { extension: { eq: "md" } }) {
//           edges {
//             node {
//               absolutePath
//               relativeDirectory
//               name
//             }
//           }
//         }
//       }
//     `)
//       .then(result => {
//         if (result.errors) {
//           return reject(result.errors);
//         }

//         // Create markdown pages.
//         result.data.allFile.edges.forEach(
//           ({ node: { absolutePath, relativeDirectory, name } }) => {
//             // if (name === "index") {
//             //   return createPage({
//             //     path: `${relativeDirectory}/index`,
//             //     component: absolutePath
//             //   });
//             // }
//             createPage({
//               path: `${relativeDirectory}/${name}`,
//               component: absolutePath
//             });
//           }
//         );
//       })
//       .then(resolve);
//   });
// };
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });

    const dirSplit = path.parse(slug).dir.split(path.sep);
    if (dirSplit.length > 0 && dirSplit[0] === "") {
      dirSplit.shift(); // because path starts with /, '' is always at position 0
    }

    let type = "page";
    switch (dirSplit[0]) {
      case "projects":
        type = "project";
        break;
      case "blog":
        type = "post";
        break;
      case "page":
        type = "";
        break;
    }

    createNodeField({
      node,
      name: "type",
      value: type
    });

    if (type === "project") {
      if (dirSplit.length > 1) {
        createNodeField({
          node,
          name: "projectType",
          value: dirSplit[1]
        });
      } else {
        throw new Error("each project needs a type");
      }
    }
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
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
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        const templatePath =
          node.fields.type === "project"
            ? "./src/templates/project.js"
            : "./src/templates/page.js";
        createPage({
          path: node.fields.slug,
          component: path.resolve(templatePath),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
