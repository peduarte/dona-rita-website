import React from 'react';

import { TitleAndMetaTags } from '../components/TitleAndMetaTags/TitleAndMetaTags';
import { Section } from '../components/Section/Section';
import { Contact } from '../components/Contact/Contact';
import { FakeImg } from '../components/FakeImg/FakeImg';

import ingredientsImg from '../images/ingredients.jpg';

function IngredientsPage() {
	return (
		<div className="main">
			<TitleAndMetaTags title="Ingredients" pathname="ingredients" />
			<Section>
				<div className="grid">
					<h1 className="col -block md-push-1 lg-push-2 title">
						Ingredients &amp;<br />
						allergens.
					</h1>
				</div>

				<div className="grid">
					<div className="col md-7 lg-5 md-push-1 lg-push-2 lg-push-3">
						<p className="measure">
							The ingredients used in Dona Rita's Pão de Queijo are: cassava
							(tapioca) flour, our secret combination of cheese, semi skimmed
							milk, fresh eggs, sea salt, and unsalted organic butter.
						</p>

						<p className="measure">
							They contain <strong>milk</strong> and <strong>egg</strong>. They{' '}
							<strong>don't contain gluten</strong>. They're prepared and baked
							in our gluten free kitchen – so there's no risk of cross
							contamination.
						</p>
						<p>
							We use the best ingredients when they are at their freshest. 0%
							preservatives or additives, 100% real food.
						</p>
					</div>
				</div>

				<div className="grid">
					<div className="col fluid md-7 md-push-1 lg-6 lg-push-2">
						<FakeImg className="-three-x-two" img={ingredientsImg} />
					</div>
				</div>
			</Section>

			<Section>
				<Contact />
			</Section>
		</div>
	);
}

export default IngredientsPage;
