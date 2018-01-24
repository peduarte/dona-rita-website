const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators;

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___title] }
				limit: 1000
			) {
				edges {
					node {
						excerpt(pruneLength: 400)
						html
						id
						frontmatter {
							templateKey
							path
							title
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			result.errors.forEach(e => console.error(e.toString()));
			return Promise.reject(result.errors);
		}

		return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
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
	});
};
