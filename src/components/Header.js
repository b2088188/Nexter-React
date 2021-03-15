import React from 'react';
import styled from 'styled-components/macro';
import Button from 'components/Button';

const Header = () => {
	return (
		<header
			css={`
				background: var(--color-grey-dark-1);
				grid-column: full-start/col-end 6;
				background-image: linear-gradient(rgba(16, 29, 44, 0.93), rgba(16, 29, 44, 0.93)),
					url(/images/hero.jpeg);
				background-size: cover;
				background-position: center;
				display: grid;
				grid-template: 1fr min-content 6rem 1fr / max-content;
				grid-gap: 1.5rem 0;
				padding: 4rem 8rem 8rem;

				& button {
					align-self: start;
					justify-self: start;
				}
			`}
		>
			<img
				css={`
					height: 3rem;
					justify-self: center;
				`}
				src='/images/logo.png'
				alt='Nexter logo'
			/>
			<h3>Your own home:</h3>
			<h1
				css={`
					font-size: 4.5rem;
					color: var(--color-grey-light-1);
					line-height: 1;
				`}
			>
				The ultimate personal freedom
			</h1>
			<Button>View our properties</Button>
			<div
				css={`
					display: grid;
					font-size: 1.6rem;
					color: var(--color-grey-light-2);
					grid-template: auto/1fr max-content 1fr;
					grid-gap: 0 1.5rem;
					align-items: center;
					&:before,
					&:after {
						content: '';
						height: 1px;
						display: block;
						background-color: currentColor;
					}
					&:before {
					}
					&:after {
					}
				`}
			>
				Seen on
			</div>
			<div
				css={`
					display: grid;
					grid-template: auto/repeat(4, 1fr);
					grid-gap: 3rem;
					justify-items: center;
					& > * {
						height: 2.5rem;
						filter: brightness(0.7);
					}
				`}
			>
				<img src='/images/logo-bbc.png' alt='Seen on logo 1' />
				<img src='/images/logo-forbes.png' alt='Seen on logo 2' />
				<img src='/images/logo-techcrunch.png' alt='Seen on logo 3' />
				<img src='/images/logo-bi.png' alt='Seen on logo 4' />
			</div>
		</header>
	);
};

export default Header;
