import React from 'react';
import styled from 'styled-components/macro';

const Sidebar = () => {
	return (
		<div
			css={`
				background: var(--color-primary);
				grid-column: sidebar-start / sidebar-end;
				grid-row: 1/-1;
				display: flex;
				justify-content: center;
				@media only screen and (max-width: 62.5em) {
					grid-row: 1/2;
					grid-column: 1/-1;
					justify-content: flex-end;
					align-items: center;
				}
			`}
		>
			<button
				css={`
					border: none;
					border-radius: 0;
					background-color: #fff;
					height: 2px;
					width: 4.5rem;
					margin-top: 4rem;
					&:before,
					&:after {
						content: '';
						background-color: inherit;
						height: 2px;
						width: 4.5rem;
						display: block;
					}
					&:before {
						transform: translateY(-1.5rem);
					}
					&:after {
						transform: translateY(1.3rem);
					}
					@media only screen and (max-width: 62.5em) {
						margin: 0 3rem 0;
						&:before {
							transform: translateY(-1.2rem);
						}
						&:after {
							transform: translateY(1rem);
						}
					}
				`}
			></button>
		</div>
	);
};

export default Sidebar;
