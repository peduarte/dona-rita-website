import React from 'react';
import Typist from 'react-typist';

export class Typewriter extends React.Component {
	constructor(props) {
		super(props);

		this.state = { typing: true, counter: 0 };
	}

	handleDone = () => {
		this.setState({ typing: false }, () => {
			this.setState(prevState => {
				return { typing: true, counter: prevState.counter + 1 };
			});
		});
	};

	render() {
		const typewriter = (
			<span className={this.props.className}>
				<Typist
					className="typist"
					startDelay={this.state.counter === 0 ? 1500 : 0}
					stdTypingDelay={50}
					avgTypingDelay={120}
					cursor={{ show: false }}
					onTypingDone={this.handleDone}>
					{this.props.texts.map((text, i) => {
						return (
							<span key={`${text}-${i}`}>
								{text}
								<Typist.Backspace count={text.length + 1} delay={750} />
								<Typist.Delay ms={250} />
							</span>
						);
					})}
				</Typist>{' '}
			</span>
		);

		return this.state.typing ? typewriter : null;
	}
}
