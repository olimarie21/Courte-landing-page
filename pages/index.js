import Head from 'next/head'
import Feature from '../components/Feature'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Team from '../components/Team'

export default function Home() {
  return (
    <div>
      <Container>
        <Head>
          <title>Courte</title>
          <meta
            name='description'
            content='Discover a better way to play tennis'
          />
          <link rel='icon' href='/CourteIcon.ico' />
        </Head>


        <Hero />
        <About />
        <Team />
      </Container>
      <Footer />
    </div>
  )
}
const Container = styled.div`
  padding: 0 6.2vw;

  @media screen and (min-width: 800px) {
    padding: 0 14.9vw;
  }
`
