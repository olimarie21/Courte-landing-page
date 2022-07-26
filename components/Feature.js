import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {
	SectionTitle,
	HeadLine,
	DescriptiveText,
	globalColor,
} from '../shared/Style'

export const ImageContainer = styled.div`
	background-color: ${(props) =>
		props.secondary === 'Explore'
			? globalColor.lightOrange
			: globalColor.secondary === 'Play'
			? globalColor.lightGreen
			: globalColor.lightRed};
	width: 342px;
	height: 314px;
	border-radius: 6px;
	position: relative;
	@media (min-width: 800px) {
		width: 430px;
		height: 395px;
	}
`

export const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 120px 24px;
	@media (min-width: 800px) {
		flex-direction: row;
	}
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 800px) {
		margin-left: 42px;
	}
	max-width: 430px;
	max-height: 395px;
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
					layout='fill'
					quality={100}
				/>
			</ImageContainer>
			<InfoContainer>
				<SectionTitle>{featureTitle}</SectionTitle>
				<HeadLine>{featureHeadline}</HeadLine>
				<DescriptiveText>{featureDescription}</DescriptiveText>
			</InfoContainer>
		</FeatureContainer>
	)
}

export default Feature
