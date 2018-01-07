module.exports = {
	siteMetadata: {
		title: 'Dona Rita',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-transformer-json',
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#f09a7a',
				showSpinner: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
			},
		},
		'gatsby-plugin-netlify',
	],
};
