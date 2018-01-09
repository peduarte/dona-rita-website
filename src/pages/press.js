import React from 'react'

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags'
import { Section } from '../components/Section/Section'
import { Contact } from '../components/Contact/Contact'
import { Banner } from '../components/Banner/Banner'

import fullWidthImageDarkImg from '../images/full-width-image-dark.jpg'
import eveningStandardImg from '../images/press-logos/evening-standard.png'
import timeoutImg from '../images/press-logos/timeout.png'
import theSundayTimesImg from '../images/press-logos/the-sunday-times.png'
import viceImg from '../images/press-logos/vice.png'
import msnImg from '../images/press-logos/msn.png'
import londonistImg from '../images/press-logos/londonist.png'
import munchiesImg from '../images/press-logos/munchies.png'
import metroImg from '../images/press-logos/metro.png'

function PressPage() {
	return (
		<div className="main">
			<TitleAndMetaTags title="Press" pathname="press" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Press.<br />
						<span className="salmon">Word on the street.</span>
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							We’ve only been trading since March but the media are already
							getting excited about Dona Rita. Here are some of the names that
							wrote an article about us.
						</p>
					</div>
				</div>

				<div className="grid press-icons">
					<div className="col sm-6 md-2 md-push-3">
						<a
							href="http://www.standard.co.uk/goingout/restaurants/p-o-de-queijo-in-london-brazilian-cheese-bread-comes-to-old-street-a3530296.html"
							target="_blank">
							<img src={eveningStandardImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://www.timeout.com/london/blog/a-brazilian-cheese-balls-pop-up-is-coming-to-london-050917"
							target="_blank">
							<img src={timeoutImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://www.instagram.com/p/BTo1qaajvIP/?taken-by=sundaytimesfood"
							target="_blank">
							<img src={theSundayTimesImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://munchies.vice.com/en_uk/article/a3dw4g/pao-de-queijo-is-cheesy-gluten-free-comfort-food"
							target="_blank">
							<img src={viceImg} />
						</a>
					</div>
				</div>
				<div className="grid press-icons">
					<div className="col sm-6 md-2 md-push-3">
						<a
							href="https://www.msn.com/en-gb/news/other/p%C3%A3o-de-queijo-in-london-brazilian-cheese-bread-comes-to-old-street/ar-BBAIZ5w"
							target="_blank">
							<img src={msnImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="http://londonist.com/london/things-to-do/things-to-do-in-london-this-week-8-14-may-2017"
							target="_blank">
							<img src={londonistImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="https://munchies.vice.com/en_uk/article/a3dw4g/pao-de-queijo-is-cheesy-gluten-free-comfort-food"
							target="_blank">
							<img src={munchiesImg} />
						</a>
					</div>
					<div className="col sm-6 md-2">
						<a
							href="http://metro.co.uk/2017/07/14/19-of-the-best-gluten-free-market-stands-in-london-you-have-to-try-6753012/"
							target="_blank">
							<img src={metroImg} />
						</a>
					</div>
				</div>
			</Section>

			<Banner img={fullWidthImageDarkImg} mobileImg={fullWidthImageDarkImg} />

			<div className="section -salmon testimonial">
				<div className="grid">
					<blockquote className="col md-9 md-push-1 lg-push-2">
						<h3 className="h1">
							Forget cronuts and duffins, there’s a new baked good in town.
						</h3>
						<p>Ben Norum — Evening standard</p>
					</blockquote>
				</div>
			</div>
			<Contact />
		</div>
	)
}

export default PressPage
