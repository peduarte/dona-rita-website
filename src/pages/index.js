import React from 'react';
import Link from 'gatsby-link';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Product } from '../components/Product/Product';
import { Contact } from '../components/Contact/Contact';
import { Typewriter } from '../components/Typewriter/Typewriter';
import { Banner } from '../components/Banner/Banner';
import { FakeImg } from '../components/FakeImg/FakeImg';

import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import ritaImg from '../images/rita.jpg';
import bannerImg from '../images/banner.jpg';
import bannerMobileImg from '../images/banner-mobile.jpg';

function IndexPage({ data, location }) {
	return (
		<div className="main">
			<TitleAndMetaTags />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Dona Rita<br />
						Pão de Queijo.
						<span className="title-desc">Brazilian cheese</span>
						<Typewriter
							className="title-desc"
							texts={[
								'bread.',
								'buns.',
								'balls.',
								'rolls.',
								'puffs.',
								'goodness.',
							]}
						/>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							A proper Pão de Queijo is a two-bite business: crunchy on the
							outside and fluffy on the inside. Made with cassava flour and
							fresh cheese, it’s a farmer’s take on traditional European bread -
							without the wheat. Pão de Queijo is a staple snack at most cafes,
							restaurants and dinner parties across Brazil. It’s cheesily
							addictive and naturally gluten free.
						</p>
						<p className="measure">
							Try pairing it with a short black coffee São Paulo style, or
							spread thickly with guava<sup className="-yellow">&#9679;</sup>{' '}
							jam for a sweet contrast.
						</p>

						<p>
							<Link to="/story" className="button">
								Read our story
							</Link>
						</p>
					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
							Guava jam is made with guava, a tropical fruit that’s sweet and
							aromatic. It’s the most popular dip for Pão de Queijo. You can use
							your favourite english jam as a substitute.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="gallery fake-img-group">
						<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 fake-img-wrapper">
							<FakeImg className="-three-x-two" img={img2} />
						</div>

						<div className="col fluid md-3 fake-img-wrapper">
							<FakeImg className="-two-x-three" img={ritaImg} />
						</div>
					</div>
				</div>
			</Section>

			<Section className="-blue">
				<div className="grid">
					<h1 className="col md-push-1 lg-push-2">Eat it</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h3 className="measure-wider">Find a shop</h3>
						<p className="measure-wider">
							Buy our frozen bake-at-home packs from a few shops around London.
						</p>
						<p className="measure-wider">
							<Link to="/stockists" className="button">
								See stockists
							</Link>
						</p>
					</div>

					{/* <div className="col md-3 lg-2">
		<h3>Find a shop</h3>
		<p className="small">Buy our frozen bake-at-home packs from a few shops around London.</p>
		<p style="margin-top: 30px;"><a href="/stockists" className="button">See stockists</a></p>
	</div> */}
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={img1} />
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2">
						<h2 className="h1">It’s pronounced pown-deh-kay-zho.</h2>
					</div>
				</div>
			</Section>

			<Product
				postcodes={data.allPostcodesJson.edges[0].node.allowed}
				stockists={data.allStockistsJson.edges}
				location={location}
			/>

			<Banner img={bannerImg} mobileImg={bannerMobileImg} />

			<Section className="-salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							A crunchy outside giving way to a cloud-like interior. Sounds ace,
							right? Right.
						</h3>
						<p>Tom Howells – TimeOut London</p>
					</blockquote>
				</div>
			</Section>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export const pageQuery = graphql`
	query allStockistsBuyQueryAndAllPostcodesIndexQuery {
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

export default IndexPage;
