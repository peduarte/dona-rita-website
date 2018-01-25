const path = require('path');

exports.createPages = async ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	const allMarkdownQuery = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___title] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							templateKey
							path
							postcode
						}
					}
				}
			}
		}
	`);

	if (allMarkdownQuery.errors) {
		console.error(
			`Error found in gatsby-node.js (allMarkdownQuery): ${
				allMarkdownQuery.errors
			}`
		);
		throw new Error(
			`Error found in gatsby-node.js (allMarkdownQuery): ${
				allMarkdownQuery.errors
			}`
		);
	}

	allMarkdownQuery.data.allMarkdownRemark.edges.forEach(({ node }) => {
		const pagePath = node.frontmatter.path;

		createPage({
			path: pagePath,
			component: path.resolve(
				`src/templates/${String(node.frontmatter.templateKey)}.js`
			),
			// additional data can be passed via context
			context: {
				path: pagePath
			}
		});
	});
};
