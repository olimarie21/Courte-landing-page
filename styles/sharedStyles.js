import styled from 'styled-components'

// color vars
export const colors = {
	primaryRed: 'rgba(255, 51, 0, 1)',
	darkGrey: '#283237',
	lightOrange: 'rgba(251, 235, 208, 1)',
	lightGreen: 'rgba(219, 243, 214, 1)',
	lightRed: 'rgba(255, 234, 227, 1)',
	lightGrey: 'rgba(234, 237, 239, 1)',
}

export const SectionTitle = styled.h4`
	color: ${colors.primaryRed};
	font-size: 18px;
	font-weight: 600;
	margin: 32px 0 16px 0;
`

export const HeadLine = styled.h1`
	font-size: 34px;
	font-weight: 600;
	color: ${colors.darkGrey};
	margin: 0;
	margin-bottom: 16px;
`

export const DescriptiveText = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 26px;
	color: ${colors.darkGrey};
	margin: 0;
`
