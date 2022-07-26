import Head from 'next/head'
import Feature from '../components/Feature'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

export default function Home() {
	return (
		<Container>
			<Head>
				<title>Courte</title>
				<meta
					name='description'
					content='Discover a better way to play tennis'
				/>
				<link rel='icon' href='/CourteIcon.ico' />
			</Head>

			<Test>
				<Feature
					featureTitle='Explore'
					featureHeadline='Find tennis courts and check their availability'
					featureDescription='Save time by planning to visit parks with the shortest wait time and have easy access to all available court options in your community.'
					featureImg='/images/image-explore.png'
				/>
				<Feature
					featureTitle='Play'
					featureHeadline='Join or queue at a court and track your play time'
					featureDescription='Simplify the use and sharing of courts by organizing players in a queue system—and don’t lose sight of your place in line with notifications!'
					featureImg='/images/image-play.png'
				/>
				<Feature
					featureTitle='Match'
					featureHeadline='Set your preferences and pair up with a player'
					featureDescription='Cut down on communication and have a glance at other users’ looking for someone to play based on your preferences.'
					featureImg='/images/image-match.png'
				/>
			</Test>
		</Container>
	)
}

const Container = styled.div`
	padding: 0 6.2vw;
	width: 100%;
	height: 100vh;
`
const Test = styled.main`
	font-weight: 700;

	p {
		margin: 0;
	}
`
