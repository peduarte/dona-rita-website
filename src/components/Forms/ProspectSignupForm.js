import React from 'react';

export function ProspectSignupForm({ postcode, outcode }) {
	return (
		<div className="postcode-message postcode-nope">
			<form
				action="//donarita.us16.list-manage.com/subscribe/post?u=eacce3d5004edba44cd8a399b&amp;id=23c2a13999"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="delivery-interest-form"
				target="_blank"
				noValidate>
				<h4>Sorry, we don't deliver there.</h4>
				<p>But we’re expanding fast! To vote for your area, enter your email address.</p>
				<div className="mc-field-group">
					<input
						type="email"
						placeholder="Your email address"
						name="EMAIL"
						id="mce-EMAIL"
					/>
					<input
						type="text"
						defaultValue={postcode}
						name="POSTCODE"
						id="mce-POSTCODE"
						hidden
					/>
					<input
						type="text"
						defaultValue={outcode}
						name="OUTCODE"
						id="mce-OUTCODE"
						hidden
					/>
					<button id="delivery-form-button">Vote</button>
				</div>

				{/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
				<div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
					<input
						type="text"
						name="b_eacce3d5004edba44cd8a399b_23c2a13999"
						tabIndex="-1"
						value=""
					/>
				</div>
			</form>
		</div>
	);
}
