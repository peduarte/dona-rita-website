import React from 'react';

import { FakeImg } from '../FakeImg/FakeImg';

export function Banner({ img, mobileImg }) {
	return (
		<div className="banner">
			<FakeImg className="banner-img -small -three-x-two" img={mobileImg} />
			<FakeImg className="banner-img -medium -sixteen-x-seven" img={img} />
		</div>
	);
}
