export function shopifyOptions(afterInitCb, afterRenderCb) {
	return {
		product: {
			iframe: false,
			buttonDestination: 'directCheckout',
			variantId: 'all',
			width: '240px',
			contents: {
				img: false,
				title: false,
				price: false,
				description: false,
				button: true,
				quantity: true,
				options: false // Hide variants
			},
			text: {
				button: 'Buy me'
			},
			events: {
				afterInit: afterInitCb,
				afterRender: afterRenderCb
			}
		},
		cart: {
			popup: false
		}
	};
}
