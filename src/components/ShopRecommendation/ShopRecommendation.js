import React from 'react';

export function ShopRecommendation({ stockists, outcode }) {
	return (
		<div className="postcode-message postcode-shop">
			<h4>🎉 Head down to your nearest store to buy your frozen pack.</h4>
			{stockists
				.filter(({ node }) => node.frontmatter.outcode === outcode)
				.map(({ node }) => (
					<div key={node.frontmatter.name}>
						<address>
							{node.frontmatter.name}
							<br />
							{node.frontmatter.address}
							<br />
							{node.frontmatter.postCode}
						</address>
						<a
							href={`https://www.google.com/maps/dir/?api=1&destination=${
								node.frontmatter.postCode
							}`}
							target="_blank">
							View on map
						</a>
					</div>
				))}
		</div>
	);
}
