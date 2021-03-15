import React from 'react';
import styled from 'styled-components/macro';

const Footer = () => {
	return (
		<footer
			css={`
				background: var(--color-secondary);
				grid-column: full-start / full-end;
				padding: 8rem;
			`}
		>
			<ul
				css={`
					list-style: none;
					display: grid;
					grid-template: auto/repeat(auto-fit, minmax(15rem, 1fr));
					grid-gap: 2rem;
					align-items: center;
				`}
			>
				<FooterItem>Find your dream home</FooterItem>
				<FooterItem>Request proposal</FooterItem>
				<FooterItem>Download home planner</FooterItem>
				<FooterItem>Contact us</FooterItem>
				<FooterItem>Submit your property</FooterItem>
				<FooterItem>Come work with us!</FooterItem>
			</ul>
			<p
				css={`
					font-size: 1.4rem;
					color: var(--color-grey-light-2);
					margin: 6rem auto 0;
					text-align: center;
				`}
			>
				&copy; Copyright 2021 by Jonas. Feel free to use this project for your own purpose.
			</p>
		</footer>
	);
};

function FooterItem({ children }) {
	return (
		<li>
			<a
				css={`
					&:link,
					&:visited {
						font-size: 1.4rem;
						color: #fff;
						text-decoration: none;
						font-family: var(--font-display);
						text-transform: uppercase;
						text-align: center;
						padding: 1.5rem;
						display: block;

						transition: background-color 0.25s, transform 0.25s;
					}
					&:hover {
						background-color: rgba(255, 255, 255, 0.05);
						transform: translateY(-5px);
					}
				`}
				href='#'
			>
				{children}
			</a>
		</li>
	);
}

export default Footer;
