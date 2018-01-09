import React from 'react'
import Link from 'gatsby-link'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags'
import { Section } from '../components/Section/Section'
import { Contact } from '../components/Contact/Contact'
import { FakeImg } from '../components/FakeImg/FakeImg'
import { Banner } from '../components/Banner/Banner'

import fullWidthImageRollingImg from '../images/full-width-image-rolling.jpg'
import storyImg from '../images/story.jpg'
import familyImg from '../images/family.jpg'

function StoryPage() {
	return (
		<div className="main">
			<TitleAndMetaTags title="Story" pathname="story" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						This is our story.<br />
						<span className="salmon">A family adventure.</span>
					</h1>
				</div>
				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-square" img={storyImg} />
					</div>
				</div>
				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<h2>
							Rita’s saudade<sup className="-yellow">&#9679;</sup>
						</h2>
					</div>

					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							When Rita left the tropics for Norwich she missed Pão de Queijo so
							much she started baking it from scratch. For the last 15 years
							she’s been perfecting her secret family recipe. Now her little
							cheese bread is so delicious, some people think it’s better than
							the original. We can’t wait for you to try it.
						</p>
						<p>
							<Link to="/ingredients" className="button">
								Our ingredients
							</Link>
						</p>
					</div>

					<div className="col md-3 lg-2">
						<p className="small faded footnote -yellow" data-id="&#9679;">
							Saudade is a feeling of nostalgia and homesickness characteristic
							of Brazilian temperament. This portuguese word has no translation.
						</p>
					</div>
				</div>
			</Section>

			<Banner
				img={fullWidthImageRollingImg}
				mobileImg={fullWidthImageRollingImg}
			/>

			<Section className="-white">
				<div className="grid">
					<div className="col md-push-1 lg-push-3">
						<h2>Family business</h2>
					</div>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-3">
						<p className="measure">
							Rita is already renowned for her Pão de Queijo with her family and
							friends.
						</p>

						<p className="measure">
							And none more so than with Clara, her son Pedro’s girlfriend.
							Allergic to gluten, Pão de Queijo has quickly become a staple in
							Clara’s diet, and she continues to be in awe of the tasty and
							fluffy gluten free snacks.
						</p>

						<p className="measure">
							A truly family enthused adventure, Rita’s dream is for Londoners
							to try her delicious Brazilian bites, and with the help of Clara
							and Pedro, to share them with everyone in town.
						</p>
					</div>

					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={familyImg} />
					</div>
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2 small faded">
						Family photo by <a href="https://munchies.com">Munchies</a>.
					</div>
				</div>
			</Section>

			<Contact />
		</div>
	)
}

export default StoryPage
