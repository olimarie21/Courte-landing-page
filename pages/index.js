import Head from 'next/head'
import styled from 'styled-components'
import Header from '../components/Header'
import FeatureContainer from '../components/FeatureContainer'

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

			<Header />
			<FeatureContainer />
		</Container>
	)
}

const Container = styled.div`
	padding: 0;
	max-width: 900px;
`
const Test = styled.main`
	font-weight: 700;
	max-width: 900px;

	p {
		margin: 0;
	}
`
