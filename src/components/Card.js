import React from 'react';
import styled from 'styled-components/macro';

const Card = ({ imageSrc, title, country, rooms, area, price }) => {
	return (
		<div
			css={`
				background: var(--color-grey-light-1);
				display: grid;
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 3.5rem 0;
			`}
		>
			<img
				src={imageSrc}
				alt='House 1'
				css={`
					width: 100%;
					grid-row: 1/2;
					grid-column: 1 / -1;
					z-index: 2;
				`}
			/>
			<svg
				css={`
					grid-row: 1/2;
					grid-column: 2/3;
					fill: var(--color-primary);
					height: 2.5rem;
					width: 2.5rem;
					z-index: 4;
					justify-self: end;
					margin: 1rem;
				`}
			>
				<use href='/images/sprite.svg#icon-heart-full'></use>
			</svg>
			<h5
				css={`
					grid-row: 1/2;
					grid-column: 1/-1;
					z-index: 3;
					font-family: var(--font-display);
					font-size: 1.6rem;
					text-align: center;
					padding: 1.25rem;
					background: var(--color-secondary);
					color: #fff;
					font-weight: 400;
					width: 80%;
					justify-self: center;
					align-self: end;
					transform: translateY(50%);
				`}
			>
				{title}
			</h5>
			<div
				css={`
					margin-top: 2.5rem;
					font-size: 1.5rem;
					margin-left: 2rem;
					display: flex;
					align-items: center;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						height: 2rem;
						width: 2rem;
						margin-right: 1rem;
					`}
				>
					<use href='/images/sprite.svg#icon-map-pin'></use>
				</svg>
				<p>{country}</p>
			</div>
			<div
				css={`
					margin-top: 2.5rem;
					font-size: 1.5rem;
					margin-left: 2rem;
					display: flex;
					align-items: center;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						height: 2rem;
						width: 2rem;
						margin-right: 1rem;
					`}
				>
					<use href='/images/sprite.svg#icon-profile-male'></use>
				</svg>
				<p>{rooms} rooms</p>
			</div>
			<div
				css={`
					font-size: 1.5rem;
					margin-left: 2rem;
					display: flex;
					align-items: center;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						height: 2rem;
						width: 2rem;
						margin-right: 1rem;
					`}
				>
					<use href='/images/sprite.svg#icon-expand'></use>
				</svg>
				<p>
					{area} m<sup>2</sup>
				</p>
			</div>
			<div
				css={`
					font-size: 1.5rem;
					margin-left: 2rem;
					display: flex;
					align-items: center;
				`}
			>
				<svg
					css={`
						fill: var(--color-primary);
						height: 2rem;
						width: 2rem;
						margin-right: 1rem;
					`}
				>
					<use href='/images/sprite.svg#icon-key'></use>
				</svg>
				<p>${price}</p>
			</div>
			<button
				css={`
					grid-column: 1/-1;
				`}
			>
				Contact realtor
			</button>
		</div>
	);
};

export default Card;
