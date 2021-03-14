import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
	box-sizing:border-box;
	font-size:62.5%;
}
	:root{
--color-primary: #c69963;
--color-primary-dark: #B28451;
--color-secondary: #101d2c;
--color-grey-light-1: #f9f7f6;
--color-grey-light-2: #aaa;
--color-grey-dark-1: #54483A;
--color-grey-dark-2: #6D5D4B;
--font-primary: 'Nunito', sans-serif;
--font-display: 'Josefin Sans', sans-serif;
	}
	body{
		font-family: var(--font-primary);
		color:var(--color-grey-dark-2);
		font-weight: 300;
		line-height:1.4;
	}
	*,
	*:before,
	*:after{
		margin:0;
		padding:0;
		box-sizing:inherit;
	}
`;

export default GlobalStyle;
