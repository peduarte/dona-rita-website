import React from 'react';
import Link from 'gatsby-link';

import { TitleAndMetaTags } from '../../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../../components/Section/Section';

function ShopsPage({ data }) {
	const { edges: posts } = data.allMarkdownRemark;
	return (
		<div className="main">
			<TitleAndMetaTags title="SHOPS" pathname="shops" />

			<Section>
				<div className="grid">
					<div className="col">Hello</div>
					<div className="col">
						{posts.map(post => (
							<Link to={post.node.frontmatter.path}>
								{post.node.frontmatter.title}-{post.node.frontmatter.postcode}///
							</Link>
						))}
					</div>
				</div>
			</Section>
		</div>
	);
}

export default ShopsPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query ShopsQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						path
						postcode
					}
				}
			}
		}
	}
`;
