import Head from 'next/head'
import styled from 'styled-components'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import Team from '../components/Team'
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

      <Wrapper>
        <Header />
        <Hero />
        <FeatureContainer />
        <About />
        <Team />
      </Wrapper>
      <Footer />
    </Container>
  )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-right: 6.2vw;
    padding-left: 6.2vw;

    @media screen and (min-width:800px) {
        padding-right: 14.9vw;
        padding-left: 14.9vw;
    }
`

const Container = styled.div`
  margin: 0;
  padding: 0;
`
