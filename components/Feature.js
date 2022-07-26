import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {
	SectionTitle,
	HeadLine,
	DescriptiveText,
	colors,
} from '../styles/sharedStyles'

export const ImageContainer = styled.div`
	background-color: ${(props) =>
		props.secondary === 'Explore'
			? colors.lightOrange
			: props.secondary === 'Play'
			? colors.lightGreen
			: colors.lightRed};
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
	const { featureTitle, featureHeadline, featureDescription, featureImg } =
		props
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
			<SectionTitle>{featureTitle}</SectionTitle>
			<HeadLine>{featureHeadline}</HeadLine>
			<DescriptiveText>{featureDescription}</DescriptiveText>
		</FeatureContainer>
	)
}

export default Feature
