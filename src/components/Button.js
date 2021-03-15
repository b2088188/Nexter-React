import React from 'react';
import styled from 'styled-components/macro';

const Button = ({ children }) => {
	return (
		<button
			css={`
				background: var(--color-primary);
				color: #fff;
				border: none;
				border-radius: 0;
				font-family: var(--font-display);
				font-size: 1.5rem;
				text-transform: uppercase;
				padding: 1.8rem 3rem;
				cursor: pointer;
				transition: background 0.25s;
				&:hover {
					background: var(--color-primary-dark);
				}
			`}
		>
			{children}
		</button>
	);
};

export default Button;
