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
				`}
			></button>
		</div>
	);
};

export default Sidebar;
