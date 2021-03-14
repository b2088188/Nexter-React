import React from 'react';
import styled from 'styled-components/macro';

const StoryPictures = () => {
	return (
		<div
			css={`
				background-color: var(--color-primary);
				grid-column: full-start/col-end 4;
				display: grid;
				grid-template: repeat(6, 1fr) / repeat(6, 1fr);
				align-items: center;
				background-image: url(/images/back.jpg);
			`}
		>
			<img
				src='/images/story-1.jpeg'
				alt='Couple with new house'
				css={`
					width: 100%;
					grid-row: 2/6;
					grid-column: 2/6;
					box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);
				`}
			/>
			<img
				src='/images/story-2.jpeg'
				alt='New house'
				css={`
					width: 115%;
					grid-row: 4/6;
					grid-column: 4/-1;
					z-index: 1;
					box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.2);
				`}
			/>
		</div>
	);
};

export default StoryPictures;
