import React from 'react';

export function ShopRecommendation({ stockists, outcode }) {
	return (
		<div className="postcode-message postcode-shop">
			<h4>🎉 Head down to your nearest store to buy your frozen pack.</h4>
			{stockists.filter(shop => shop.node.outcode === outcode).map(shop => (
				<div key={shop.node.name}>
					<address>
						{shop.node.name}
						<br />
						{shop.node.address}
						<br />
						{shop.node.postCode}
					</address>
					<a
						href={`https://www.google.com/maps/dir/?api=1&destination=${
							shop.node.postCode
						}`}
						target="_blank">
						View on map
					</a>
				</div>
			))}
		</div>
	);
}
