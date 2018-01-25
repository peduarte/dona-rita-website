import React from 'react';

import { TitleAndMetaTags } from '../../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../../components/Section/Section';

function Shops({ data }) {
	return (
		<div className="main">
			<TitleAndMetaTags title="Stockists" pathname="stockists" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Where to buy<br />
						<span className="salmon">
							Bake-at-home<br />frozen packs.
						</span>
					</h1>
				</div>

				<div className="grid">
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<h2>{node.frontmatter.name}</h2>
					))}
				</div>
			</Section>
		</div>
	);
}

export default Shops;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query ShopsQuery {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
						name
						area
						address
						postcode
						outcode
					}
				}
			}
		}
	}
`;
