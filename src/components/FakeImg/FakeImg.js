import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

export class FakeImg extends React.Component {
	constructor(props) {
		super(props);

		this.state = { inView: false };
	}

	handleChange = isVisible => {
		this.setState({ inView: isVisible });
	};

	render() {
		return (
			<VisibilitySensor
				onChange={this.handleChange}
				partialVisibility
				active={!this.state.inView}>
				<div
					className={`fake-img ${this.props.className} ${
						this.state.inView ? 'is-loaded' : ''
					}`}
					style={{ backgroundImage: `url(${this.props.img})` }}
				/>
			</VisibilitySensor>
		);
	}
}
