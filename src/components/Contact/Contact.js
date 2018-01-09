import React from 'react';

export function Contact() {
	return (
		<div>
			<div className="grid">
				<h1 className="col md-push-1 lg-push-2">Contact us</h1>
			</div>

			<div className="grid">
				<p className="col sm-12 md-5 lg-3 md-push-1 lg-push-3 contact">
					Call Clara at
					<span className="contact-phone">+44 (0) 79522 16979</span>
					<span className="contact-or">
						<span>or</span>
					</span>
					drop us a line at
					<a href="mailto:oi@donarita.co.uk" className="contact-link">
						oi@donarita.co.uk
					</a>
				</p>

				<div className="col fluid md-3 lg-2 md-push-1 lg-push-2 button-group">
					<a href="https://instagram.com/OiDonaRita" className="button -block">
						Instagram
					</a>
					<a href="https://twitter.com/OiDonaRita" className="button -block">
						Twitter
					</a>
					<a href="https://facebook.com/OiDonaRita" className="button -block">
						Facebook
					</a>
				</div>
			</div>
		</div>
	);
}
