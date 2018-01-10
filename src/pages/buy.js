import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { Product } from '../components/Product/Product';
import { Banner } from '../components/Banner/Banner';

import bannerMobileImg from '../images/banner-mobile.jpg';
import bannerImg from '../images/banner.jpg';

function BuyPage({ data, location }) {
	return (
		<div className="main">
			<TitleAndMetaTags title="Buy online" pathname="buy" />

			<Product
				postcodes={data.allPostcodesJson.edges[0].node.allowed}
				stockists={data.allStockistsJson.edges}
				location={location}
			/>

			<Banner img={bannerImg} mobileImg={bannerMobileImg} />

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
	query allStockistsBuyQueryAndAllPostcodesBuyQuery {
		allPostcodesJson {
			edges {
				node {
					allowed
				}
			}
		}
		allStockistsJson {
			edges {
				node {
					name
					address
					postCode
				}
			}
		}
	}
`;

export default BuyPage;
