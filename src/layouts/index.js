import React from 'react';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import '../_sass/index.scss';

const faviconSizes = [16, 32, 64];

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSadNotice: true
		};
	}

	componentDidMount() {
		const { location } = this.props;
		ReactGA.initialize('UA-88250609-1');
		ReactGA.pageview(location.pathname + location.search);
	}

	componentDidUpdate() {
		const { location } = this.props;
		ReactGA.pageview(location.pathname + location.search);
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat"
						rel="stylesheet"
					/>
					{faviconSizes.map(size => (
						<link
							rel="icon"
							type="image/png"
							href={`/social/${size}x${size}.png`}
							sizes={`${size}x${size}`}
							key={`${size}x${size}`}
						/>
					))}
				</Helmet>
				{this.state.showSadNotice && (
					<div className="sad-notice">
						<div className="sad-notice-inner">
							<h3>Time to say goodbye.</h3>
							<p>
								After a year filled with cheese balls, excitement and hard work we're
								stopping our project to focus on other life events. We had a blast and we
								couldn't have done it without you - Thank you! You can still browse our
								website but the online shop is now closed. If you'd like to read more
								about our closure,{' '}
								<a href="https://medium.com/@OiDonaRita/time-to-say-goodbye-e56803c3f084">
									read our goodbye letter
								</a>
								. If you really need some Pao de Queijo in your life, Rita might be able
								to offer a catering option. You can contact her at{' '}
								<a href="mailto:ritaduarte@hotmail.co.uk">ritaduarte@hotmail.co.uk</a>.
							</p>
							<button onClick={() => this.setState({ showSadNotice: false })}>
								Continue to website
							</button>
						</div>
					</div>
				)}
				<Nav />
				{children}
			</div>
		);
	}
}
