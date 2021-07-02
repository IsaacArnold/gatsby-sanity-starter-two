const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async (graphql, actions) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      pages: allSanityPage {
        nodes {
          title
          slug {
            current
          }
          _id
        }
      }
    }
  `);
  // Create pages
  result.data.pages.nodes.forEach((page) => {
    const slug = page.slug ? page.slug.current : "/";

    createPage({
      path: slug,
      component: path.resolve(`./src/templates/page.js`),
      context: { _id: page._id },
    });
  });
};
