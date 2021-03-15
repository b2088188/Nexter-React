import React from 'react';
import styled from 'styled-components/macro';

const Realtors = () => {
	return (
		<div
			css={`
				background: var(--color-secondary);
				grid-column: col-start 7 / full-end;
				padding: 3rem;
				display: grid;
				align-content: center;
				justify-content: center;
				grid-gap: 2rem 0;
				justify-items: center;
				@media only screen and (max-width: 50em) {
					grid-column: full-start/full-end;
				}
			`}
		>
			<h3
				css={`
					color: var(--color-primary);
					font-size: 1.6rem;
					text-transform: uppercase;
					font-weight: 400;
					font-family: var(--font-display);
				`}
			>
				Top 3 realtors
			</h3>
			<div
				css={`
					display: grid;
					grid-template: auto/min-content max-content;
					grid-gap: 5vh 2rem;
					align-items: center;
					& img {
						width: 7rem;
						border-radius: 50%;
						display: block;
					}
					@media only screen and (max-width: 50em) {
						grid-template: auto / repeat(3, min-content max-content);
					}
					@media only screen and (max-width: 37.5em) {
						grid-template: auto/min-content max-content;
					}
				`}
			>
				<img src='/images/realtor-1.jpeg' alt='Realtor 1' />
				<div>
					<h4
						css={`
							color: var(--color-grey-light-1);
							font-size: 1.9rem;
							font-weight: 400;
							font-family: var(--font-display);
						`}
					>
						Erik Feinman
					</h4>
					<p
						css={`
							text-transform: uppercase;
							color: var(--color-grey-light-2);
							margin-top: -3px;
						`}
					>
						245 houses sold
					</p>
				</div>
				<img src='/images/realtor-2.jpeg' alt='Realtor 2' />
				<div>
					<h4
						css={`
							color: var(--color-grey-light-1);
							font-size: 1.9rem;
							font-weight: 400;
							font-family: var(--font-display);
						`}
					>
						Kim Brown
					</h4>
					<p
						css={`
							text-transform: uppercase;
							color: var(--color-grey-light-2);
							margin-top: -3px;
						`}
					>
						212 houses sold
					</p>
				</div>
				<img src='/images/realtor-3.jpeg' alt='Realtor 3' />
				<div>
					<h4
						css={`
							color: var(--color-grey-light-1);
							font-size: 1.9rem;
							font-weight: 400;
							font-family: var(--font-display);
						`}
					>
						Toby Ramsey
					</h4>
					<p
						css={`
							text-transform: uppercase;
							color: var(--color-grey-light-2);
							margin-top: -3px;
						`}
					>
						198 houses sold
					</p>
				</div>
			</div>
		</div>
	);
};

export default Realtors;
