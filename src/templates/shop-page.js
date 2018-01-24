import React from 'react';
import graphql from 'graphql';
import Content, { HTMLContent } from '../components/Content';

export const ShopPageTemplate = ({ title, content, contentComponent }) => {
	const PageContent = contentComponent || Content;

	return (
		<section className="section section--gradient">
			<div className="container">
				<div className="columns">
					<div className="column is-10 is-offset-1">
						<div className="section">
							<h2 className="title is-size-3 has-text-weight-bold is-bold-light">
								{title}
							</h2>
							<PageContent className="content" content={content} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<ShopPageTemplate
			contentComponent={HTMLContent}
			title={post.frontmatter.title}
			content={post.html}
		/>
	);
};

export const shopPageQuery = graphql`
	query ShopPage($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`;
