import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactGA from 'react-ga';

import { Nav } from '../components/Nav/Nav';
import { CrossIcon } from '../icons/CrossIcon';
import './index.scss';

const faviconSizes = [16, 32, 64];

export default class TemplateWrapper extends React.Component {
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
							<button
								className="sad-notice-close"
								onClick={() => this.setState({ showSadNotice: false })}>
								<CrossIcon />
							</button>
							<h3>time to say goodbye</h3>
							<p>
								Critical dependencies: 42:378-385 This seems to be a pre-built
								javascript file. Though this is possible, it's not recommended.
								Try to require the original source to get better results.
							</p>
							<button onClick={() => this.setState({ showSadNotice: false })}>
								Continue to website
							</button>
						</div>
					</div>
				)}
				<Nav />
				{children()}
			</div>
		);
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func
};
