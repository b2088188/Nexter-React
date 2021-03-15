import React from 'react';
import styled from 'styled-components/macro';

const Gallery = () => {
	return (
		<section
			css={`
				background: var(--color-grey-light-1);
				grid-column: full-start / full-end;
				display: grid;
				grid-template: repeat(7, 5vw) / repeat(8, 1fr);
				grid-gap: 1.5rem;
				padding: 1.5rem;
				& img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					display: block;
				}
			`}
		>
			<figure
				css={`
					grid-row: 1 / span 2;
					grid-column: 1 / span 2;
				`}
			>
				<img src='/images/gal-1.jpeg' alt='Gallery Image 1' />
			</figure>
			<figure
				css={`
					grid-row: 1 / span 3;
					grid-column: 3 / span 3;
				`}
			>
				<img src='/images/gal-2.jpeg' alt='Gallery Image 2' />
			</figure>
			<figure
				css={`
					grid-row: 1 / span 2;
					grid-column: 6/7;
				`}
			>
				<img src='/images/gal-3.jpeg' alt='Gallery Image 3' />
			</figure>
			<figure
				css={`
					grid-row: 1 / span 2;
					grid-column: 7/-1;
				`}
			>
				<img src='/images/gal-4.jpeg' alt='Gallery Image 4' />
			</figure>
			<figure
				css={`
					grid-row: 3 / span 3;
					grid-column: 1 / span 2;
				`}
			>
				<img src='/images/gal-5.jpeg' alt='Gallery Image 5' />
			</figure>
			<figure
				css={`
					grid-row: 4 / span 2;
					grid-column: 3 / span 2;
				`}
			>
				<img src='/images/gal-6.jpeg' alt='Gallery Image 6' />
			</figure>
			<figure
				css={`
					grid-row: 4/5;
					grid-column: 5/6;
				`}
			>
				<img src='/images/gal-7.jpeg' alt='Gallery Image 7' />
			</figure>
			<figure
				css={`
					grid-row: 3 / span 2;
					grid-column: 6 / span 2;
				`}
			>
				<img src='/images/gal-8.jpeg' alt='Gallery Image 8' />
			</figure>
			<figure
				css={`
					grid-row: 3 / span 3;
					grid-column: 8/-1;
				`}
			>
				<img src='/images/gal-9.jpeg' alt='Gallery Image 9' />
			</figure>
			<figure
				css={`
					grid-row: 6 / span 2;
					grid-column: 1/2;
				`}
			>
				<img src='/images/gal-10.jpeg' alt='Gallery Image 10' />
			</figure>
			<figure
				css={`
					grid-row: 6 / span 2;
					grid-column: 2 / span 2;
				`}
			>
				<img src='/images/gal-11.jpeg' alt='Gallery Image 11' />
			</figure>
			<figure
				css={`
					grid-row: 6/-1;
					grid-column: 4 /5;
				`}
			>
				<img src='/images/gal-12.jpeg' alt='Gallery Image 12' />
			</figure>
			<figure
				css={`
					grid-row: 5 / span 3;
					grid-column: 5 / span 3;
				`}
			>
				<img src='/images/gal-13.jpeg' alt='Gallery Image 13' />
			</figure>
			<figure
				css={`
					grid-row: 6/-1;
					grid-column: 8/-1;
				`}
			>
				<img src='/images/gal-14.jpeg' alt='Gallery Image 14' />
			</figure>
		</section>
	);
};

export default Gallery;
