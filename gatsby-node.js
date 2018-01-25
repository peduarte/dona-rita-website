// Implement the Gatsby API `createPages`. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators }) => {
	// We need `createRedirect` action in `boundActionCreators` collection
	// to make the redirection magic happen.
	// https://www.gatsbyjs.org/docs/bound-action-creators/
	const { createRedirect } = boundActionCreators;

	// create the one-off redirect
	// https://www.gatsbyjs.org/docs/bound-action-creators/#createRedirect
	createRedirect({
		fromPath: '/stockists',
		isPermanent: true,
		redirectInBrowser: true,
		toPath: '/shops'
	});
};
