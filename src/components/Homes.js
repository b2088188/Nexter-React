import React from 'react';
import styled from 'styled-components/macro';
import Card from './Card';

const Homes = () => {
	return (
		<section
			css={`
				grid-column: center-start/center-end;
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
				grid-gap: 7rem;
				margin: 15rem 0;
			`}
		>
			<Card
				imageSrc='/images/house-1.jpeg'
				title='Beautiful Family House'
				country='USA'
				rooms='5'
				area='325'
				price='1,200,000'
			/>
			<Card
				imageSrc='/images/house-2.jpeg'
				title='Modern Glass Villa'
				country='Canada'
				rooms='6'
				area='450'
				price='2,750,000'
			/>
			<Card
				imageSrc='/images/house-3.jpeg'
				title='Cozy Country House'
				country='UK'
				rooms='4'
				area='250'
				price='850,000'
			/>
			<Card
				imageSrc='/images/house-4.jpeg'
				title='Large Rustical Villa'
				country='Portugal'
				rooms='6'
				area='480'
				price='1,950,000'
			/>
			<Card
				imageSrc='/images/house-5.jpeg'
				title='Majestic Palace House'
				country='Germany'
				rooms='18'
				area='4230'
				price='9,500,000'
			/>
			<Card
				imageSrc='/images/house-6.jpeg'
				title='Modern Family Apartment'
				country='Italy'
				rooms='3'
				area='180'
				price='600,000'
			/>
		</section>
	);
};

export default Homes;
