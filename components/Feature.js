import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import {
	SectionTitle,
	HeadLine,
	DescriptiveText,
	globalColor,
} from '../shared/Style'

const Feature = (props) => {
	const { featureTitle, featureHeadline, featureDescription, featureImg } =
		props

	return (
		<FeatureContainer secondary={featureTitle}>
			<ImageContainer secondary={featureTitle}>
				<Image
					src={featureImg}
					alt='feature'
					width={'342px'}
					height={'314px'}
					objectPosition={'center'}
					objectFit={'cover'}
					quality={100}
				/>
			</ImageContainer>
			<InfoContainer secondary={featureTitle}>
				<SectionContainer>
					<Image
						src={'/images/explore.svg'}
						alt='explore'
						height={24}
						width={24}
					/>
					<SectionTitle>{featureTitle}</SectionTitle>
				</SectionContainer>
				<HeadLine>{featureHeadline}</HeadLine>
				<DescriptiveText>{featureDescription}</DescriptiveText>
			</InfoContainer>
		</FeatureContainer>
	)
}

const ImageContainer = styled.div`
	background-color: ${(props) => {
		switch (props.secondary) {
			case 'Explore':
				return globalColor.lightOrange
			case 'Play':
				return globalColor.lightGreen
			case 'Match':
				return globalColor.lightRed
		}
	}};
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 450px;
	max-height: 314px;
	height: 314px;
	border-radius: 6px;
	position: relative;
	@media (min-width: 800px) {
		width: 430px;
		height: 395px;
	}
`

const FeatureContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 0 120px 0;
	@media (min-width: 800px) {
		flex-direction: row-reverse;
		flex-direction: ${(props) => {
		if (props.secondary === 'Play') {
			return 'row-reverse'
		} else {
			return 'row'
		}
	}};
		align-items: center;
	}
`

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (min-width: 800px) {
		margin-left: ${(props) => {
		if (props.secondary === 'Play') {
			return '0px'
		} else {
			return '42px'
		}
	}};
		margin-right: ${(props) => {
		if (props.secondary === 'Play') {
			return '42px'
		} else {
			return '0px'
		}
	}};
	}
	max-width: 430px;
	max-height: 395px;
`

const SectionContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin: 32px 0 16px 0;
	gap: 10px;
	@media screen and (min-width: 800px) {
		margin-top: 0;
	}
`

export default Feature
