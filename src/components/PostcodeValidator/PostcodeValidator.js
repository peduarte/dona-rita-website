import React from 'react';

export class PostcodeValidator extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };
	}

	render() {
		return (
			<div>
				<input
					type="text"
					id="postcode"
					placeholder="EG: E3 3AF"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<button type="button" id="postCodeButton" onClick={this.handleSubmit}>
					Check
				</button>
			</div>
		);
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	handleSubmit = () => {
		const { onValidPostcode, onInvalidPostcode } = this.props;
		const { value } = this.state;

		fetch(`https://api.postcodes.io/postcodes/${value}`)
			.then(response => response.json())
			.then(data => {
				const { status, result } = data;
				if (status === 200) {
					onValidPostcode(result.postcode, result.outcode);
					return;
				}
				onInvalidPostcode(value);
			});
	};
}
