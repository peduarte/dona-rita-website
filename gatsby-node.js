// Implement the Gatsby API `createPages`. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions }) => {
	// We need `createRedirect` action in `actions` collection
	// to make the redirection magic happen.
	// https://www.gatsbyjs.org/docs/bound-action-creators/
	const { createRedirect } = actions;

	// create the one-off redirect
	// https://www.gatsbyjs.org/docs/bound-action-creators/#createRedirect
	createRedirect({
		fromPath: '/stockists',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/shops'
	});
};
