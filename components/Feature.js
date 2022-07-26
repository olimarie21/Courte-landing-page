import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const grey = '#283237'
const primaryRed = 'rgba(255, 51, 0, 1)'

export const Section = styled.h4`
	color: ${primaryRed};
	font-size: 18px;
	font-weight: 600;
	margin: 32px 0 16px 0;
`

export const HeadLine = styled.h1`
	font-size: 34px;
	font-weight: 600;
	color: ${grey};
	margin: 0;
	margin-bottom: 16px;
`

export const Description = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 26px;
	color: ${grey};
	margin: 0;
`

export const ImageContainer = styled.div`
	background-color: ${(props) =>
		props.secondary === 'Explore'
			? 'rgba(251, 235, 208, 1)'
			: props.secondary === 'Play'
			? 'rgba(219, 243, 214, 1)'
			: 'rgba(255, 234, 227, 1)'};
	width: 342px;
	height: 314px;
	border-radius: 6px;
`

export const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 120px 24px;
`

const Feature = (props) => {
	const {
		featureTitle,
		featureHeadline,
		featureDescription,
		featureImg,
		backgroundColor,
	} = props
	return (
		<FeatureContainer>
			<ImageContainer secondary={featureTitle}>
				<Image
					src={featureImg}
					alt='feature'
					width={'342px'}
					height={'314px'}
				/>
			</ImageContainer>
			<Section>{featureTitle}</Section>
			<HeadLine>{featureHeadline}</HeadLine>
			<Description>{featureDescription}</Description>
		</FeatureContainer>
	)
}

export default Feature
