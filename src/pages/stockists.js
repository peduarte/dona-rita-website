import React from 'react'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags'
import { Section } from '../components/Section/Section'
import { Contact } from '../components/Contact/Contact'
import { FakeImg } from '../components/FakeImg/FakeImg'
import { Banner } from '../components/Banner/Banner'

import stockImg from '../images/stock.jpg'
import fullWidthImageTwoHandsImg from '../images/full-width-image-twohands.jpg'

function Stockist({ className, shop }) {
	return (
		<div className={`col sm-10 md-3 ${className}`}>
			<div>
				<h3>{shop.name}</h3>
				<h4>{shop.area}</h4>
				<address>
					{shop.address}
					<br />
					{shop.postCode}
				</address>
				<a
					href="https://www.google.com/maps/dir/?api=1&destination={ shop.postCode }"
					className="small faded"
					target="_blank">
					View on map
				</a>
			</div>
		</div>
	)
}

function StockistsPage({ data }) {
	const groups = []
	for (let group in data) {
		groups.push(data[group])
	}

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

				{groups.map((group, index) => {
					return (
						<div className="grid stockist-list" key={`group-${index}`}>
							{group.edges.map((shop, index) => {
								return (
									<Stockist
										key={shop.node.name}
										shop={shop.node}
										className={index === 0 ? 'md-push-2 lg-push-3' : ''}
									/>
								)
							})}
						</div>
					)
				})}
			</Section>

			<Section className="-blue center">
				<div className="grid">
					<h2>Can't find Dona Rita Pão de Queijo near you?</h2>
					<p>Bring our Product Request Form to your favourite store.</p>
					<a
						className="button"
						href="./product-request-form.pdf"
						target="_blank">
						Get request form
					</a>
				</div>
			</Section>

			<Banner
				img={fullWidthImageTwoHandsImg}
				mobileImg={fullWidthImageTwoHandsImg}
			/>

			<Section className="-blue stockist-interest">
				<div className="grid">
					<h2 className="h1 col md-push-1 lg-push-2">
						Interested in stocking?
					</h2>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure-wider">
							We're currently growing our network of retailers in London. If
							you're interested in stocking our product at your store, please
							call Clara on +447952216979 or email us at{' '}
							<a href="mailto:oi@donarita.co.uk">oi@donarita.co.uk</a>.
							Distributors welcome.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={stockImg} />
					</div>
				</div>
			</Section>

			<Contact />
		</div>
	)
}

export const pageQuery = graphql`
	query allStockistsQuery {
		group1: allStockistsJson(limit: 3) {
			...mutualFields
		}

		group2: allStockistsJson(limit: 3, skip: 3) {
			...mutualFields
		}

		group3: allStockistsJson(limit: 3, skip: 6) {
			...mutualFields
		}
	}

	fragment mutualFields on StockistsJsonConnection {
		edges {
			node {
				name
				area
				address
				postCode
			}
		}
	}
`

export default StockistsPage
