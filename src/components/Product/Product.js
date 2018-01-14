import React from 'react';
import ReactGA from 'react-ga';
import queryString from 'query-string';

import { ProductHolder } from './ProductHolder';
import { PostcodeValidator } from '../PostcodeValidator/PostcodeValidator';
import { ShopRecommendation } from '../ShopRecommendation/ShopRecommendation';

import productImg from '../../images/product.png';

function SignUpForm({ postcode, outcode }) {
	return (
		<div className="postcode-message postcode-nope">
			<form
				action="//donarita.us16.list-manage.com/subscribe/post?u=eacce3d5004edba44cd8a399b&amp;id=23c2a13999"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="delivery-interest-form"
				target="_blank"
				noValidate>
				<h4>Sorry, we don't deliver there.</h4>
				<p>
					But we’re expanding fast! To vote for your area, enter your email
					address.
				</p>
				<div className="mc-field-group">
					<input
						type="email"
						placeholder="Your email address"
						name="EMAIL"
						id="mce-EMAIL"
					/>
					<input
						type="text"
						value={postcode}
						name="POSTCODE"
						id="mce-POSTCODE"
						hidden
					/>
					<input
						type="text"
						value={outcode}
						name="OUTCODE"
						id="mce-OUTCODE"
						hidden
					/>
					<button id="delivery-form-button">Vote</button>
				</div>

				{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
				<div
					style={{ position: 'absolute', left: '-5000px' }}
					aria-hidden="true">
					<input
						type="text"
						name="b_eacce3d5004edba44cd8a399b_23c2a13999"
						tabIndex="-1"
						value=""
					/>
				</div>
			</form>
		</div>
	);
}

export class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userHasInteracted: false,
			postcode: '',
			outcode: '',
			isValid: false,
			isDeliverable: false
		};
	}

	handleValidPostcode = (postcode, outcode) => {
		const isDeliverable = this.props.postcodes.indexOf(outcode) > -1;

		this.setState(prevState => {
			return {
				userHasInteracted: true,
				postcode,
				outcode,
				isValid: true,
				isDeliverable
			};
		});
	};

	handleInvalidPostcode = postcode => {
		this.setState(prevState => {
			return {
				userHasInteracted: true,
				postcode,
				outcode: '',
				isValid: false,
				isDeliverable: false
			};
		});
	};

	getParsedQueryString = () => {
		return queryString.parse(this.props.location.search);
	};

	shouldSkipValidation = () => {
		return this.getParsedQueryString().skip !== undefined ? true : false;
	};

	getInitialQty = () => {
		return this.getParsedQueryString().qty;
	};

	componentWillUpdate(nextProps, nextState) {
		if (nextState.isValid && process.env.NODE_ENV !== 'development') {
			ReactGA.event({
				category: 'Postcode',
				action: nextState.isDeliverable ? 'deliverable' : 'undeliverable',
				label: nextState.outcode
			});
		}
	}

	render() {
		return (
			<div className="section product-section">
				<div className="grid">
					<div className="col sm-11 sm-push-1 md-6 md-push-0 lg-5 lg-push-1">
						<img src={productImg} />
					</div>

					<div className="col fluid md-6 lg-5">
						<h1 style={{ marginTop: 0 }}>Bake-at-home frozen pack.</h1>
						<h3 className="color-salmon1">15 cheesy balls – £5.</h3>

						{this.props.soldout && (
							<div>
								<h3 className="color-salmon1 yellow">SOLD OUT.</h3>
								<p className="small">
									We'll be back next year with many more cheese balls, watch
									this space.
								</p>
							</div>
						)}

						{!this.props.soldout && (
							<div className="postcode" id="postcode-holder">
								<p className="small">
									We're a small family business and we only deliver in certain
									postcodes. Enter your postcode below and let's hope we can
									deliver to you.
								</p>

								{!this.state.isDeliverable &&
									!this.shouldSkipValidation() && (
										<PostcodeValidator
											onValidPostcode={this.handleValidPostcode}
											onInvalidPostcode={this.handleInvalidPostcode}
										/>
									)}

								{(this.state.isDeliverable || this.shouldSkipValidation()) && (
									<ProductHolder initialQty={this.getInitialQty()} />
								)}

								{!this.state.isValid &&
									this.state.userHasInteracted && (
										<p className="postcode-message">
											Please enter a valid postcode.
										</p>
									)}

								{this.state.isValid &&
									!this.state.isDeliverable &&
									this.state.userHasInteracted && (
										<div>
											<SignUpForm
												postcode={this.state.postcode}
												outcode={this.state.outcode}
											/>
											<ShopRecommendation
												stockists={this.props.stockists}
												outcode={this.state.outcode}
											/>
										</div>
									)}
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
