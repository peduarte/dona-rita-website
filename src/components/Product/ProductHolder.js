import React from 'react';

import { CalendarIcon } from '../../icons/CalendarIcon';
import { shopifyOptions } from './shopifyOptions';
import { loadScript } from '../../utils/loadScript';

export class ProductHolder extends React.Component {
	constructor(props) {
		super(props);

		this.buyButton = null;
		this.qtyInput = null;
		this.Product = null;

		this.state = { isBelowMin: false };
	}

	onInputChange = event => {
		if (Number(event.target.value) >= this.props.minQty) {
			this.buyButton.removeAttribute('disabled');
			this.setState({ isBelowMin: false });
		} else {
			this.buyButton.setAttribute('disabled', 'disabled');
			this.setState({ isBelowMin: true });
		}
	};

	afterShopifyInit = component => {
		this.Product.selectedQuantity = this.props.initialQty;

		this.buyButton = component.node.querySelector('.shopify-buy__btn');
		this.qtyInput = component.node.querySelector('.shopify-buy__quantity');

		this.buyButton.setAttribute('disabled', 'disabled');

		this.qtyInput.addEventListener('change', this.onInputChange);
		this.qtyInput.addEventListener('blur', this.onInputChange);
		this.qtyInput.addEventListener('keyup', this.onInputChange);
	};

	afterShopifyRender = component => {
		if (this.Product.selectedQuantity < this.props.minQty) {
			this.Product.selectedQuantity = this.props.minQty;
		}
	};

	shopifyReady = ui => {
		ui.createComponent('product', {
			id: [9367035273],
			node: document.getElementById('product-inject'),
			moneyFormat: '%C2%A3%7B%7Bamount%7D%7D',
			options: shopifyOptions(this.afterShopifyInit, this.afterShopifyRender)
		});

		// 💩 everytime `ui.createComponent` is called is adds a new product to
		// to `ui.components.product` array. I can't find a way to append the
		// input to the dom without calling `createComponent`. Because of this
		// I need to ensure `this.Product` always refers to the latest instance
		// of `ui.components.product`
		const length =
			ui.components.product.length > 1 ? ui.components.product.length - 1 : 0;
		this.Product = ui.components.product[length];
	};

	componentDidMount() {
		const shopifyBuyInit = () => {
			const client = window.ShopifyBuy.buildClient({
				domain: 'dona-rita.myshopify.com',
				apiKey: '260e658ec8cdc689ca1342a79adba733',
				appId: '6'
			});

			window.ShopifyBuy.UI.onReady(client).then(ui => this.shopifyReady(ui));
		};

		if (window.ShopifyBuy && window.ShopifyBuy.UI) {
			shopifyBuyInit();
		} else {
			loadScript(
				'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
			).then(shopifyBuyInit, error => {
				throw new Error(`Failed to load script: ${error}`);
			});
		}
	}

	componentWillUnmount() {
		this.qtyInput.removeEventListener('change', this.onInputChange);
		this.qtyInput.removeEventListener('blur', this.onInputChange);
		this.qtyInput.removeEventListener('keyup', this.onInputChange);
	}

	render() {
		return (
			<div>
				<div id="product-holder">
					<p className="small delivery-date">
						<CalendarIcon /> Delivery: we will email you to find a convenient delivery
						date
					</p>
					<div id="product-inject" />
				</div>
				{this.state.isBelowMin && (
					<p className="postcode-message message-qty">
						The minimum order quantity is {this.props.minQty}.
					</p>
				)}
			</div>
		);
	}
}

ProductHolder.defaultProps = {
	minQty: 2,
	initialQty: 2
};
