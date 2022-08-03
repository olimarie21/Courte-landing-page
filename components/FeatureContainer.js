import Feature from './Feature'
import styled from 'styled-components'

const FeatureContainer = () => {
	return (
		<Container id='features'>
			<Feature
				featureTitle='Explore'
				featureHeadline='Find tennis courts and check their availability'
				featureDescription='Save time by planning to visit parks with the shortest wait time and have easy access to all available court options in your community.'
				featureImg='/images/image-explore.png'
			/>
			<Feature
				featureTitle='Play'
				featureHeadline='Join or queue at a court and track your play time'
				featureDescription="Simplify the use and sharing of courts by organizing players in a queue system—and don't lose sight of your place in line with notifications!"
				featureImg='/images/image-play.png'
			/>
			<Feature
				featureTitle='Match'
				featureHeadline='Set your preferences and pair up with a player'
				featureDescription="Cut down on communication and find other users' looking for someone to play with based on your preferences."
				featureImg='/images/image-match.png'
			/>
		</Container>
	)
}

const Container = styled.div`
	padding: 0;
	margin: 0;
	margin-top: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default FeatureContainer
