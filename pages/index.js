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
				<p>Courte</p>
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
