import React from 'react';
import styled from 'styled-components/macro';

const Features = () => {
	return (
		<section
			css={`
				grid-column: center-start / center-end;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
				margin: 15rem 0;
				grid-gap: 6rem;
				align-items: start;
			`}
		>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-global'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					World's best luxury homes
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Sapiente blanditiis iusto
					consequuntur, ducimus explicabo exercitationem!
				</p>
			</div>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-trophy'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					Only the best properties
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a
					eligendi aut quia.
				</p>
			</div>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-map-pin'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					All homes in top locations
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.
				</p>
			</div>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-key'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					New home in one week
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
					consectetur adipisicing elit.
				</p>
			</div>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-presentation'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					Top 1% realtors
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus
					pariatur voluptatibus.
				</p>
			</div>
			<div
				css={`
					display: grid;
					grid-template-columns: min-content auto;
					grid-gap: 1.5rem 2.5rem;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						width: 4.5rem;
						height: 4.5rem;
						grid-row: 1 / span 2;
						transform: translateY(-1rem);
					`}
				>
					<use href='/images/sprite.svg#icon-lock'></use>
				</svg>
				<h4
					css={`
						font-family: var(--font-display);
						font-weight: 400;
						color: var(--color-grey-dark-1);
						font-size: 1.9rem;
					`}
				>
					Secure payments on nexter
				</h4>
				<p
					css={`
						font-size: 1.7rem;
					`}
				>
					Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.
				</p>
			</div>
		</section>
	);
};

export default Features;
