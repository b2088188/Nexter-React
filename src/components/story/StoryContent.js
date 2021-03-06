import React from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const StoryContent = () => {
	return (
		<div
			css={`
				background: var(--color-grey-light-1);
				grid-column: col-start 5 / full-end;
				padding: 6rem 8vw;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				@media only screen and (max-width: 50em) {
					grid-row: 5/6;
					grid-column: 1/-1;
				}
			`}
		>
			<h3
				css={`
					font-size: 1.6rem;
					color: var(--color-primary);
					text-transform: uppercase;
					margin-bottom: 2rem;
				`}
			>
				Happy Customers
			</h3>
			<h2
				css={`
					font-style: italic;
					font-size: 4rem;
					color: var(--color-grey-dark-1);
					line-height: 1.1;
					margin-bottom: 3rem;
				`}
			>
				&ldquo;The best decision of our lives&rdquo;
			</h2>
			<p
				css={`
					font-size: 1.5rem;
					font-style: italic;
					margin-bottom: 4rem;
				`}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam nisi vitae sapiente,
				accusantium, voluptatum ex.
			</p>
			<Button>Find your own home</Button>
		</div>
	);
};

export default StoryContent;
