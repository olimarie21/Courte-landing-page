import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { globalColor } from '../shared/Style'

const Header = () => {
	return (
		<HeaderContainer>
			<Image
				width={'100%'}
				height={'100%'}
				src={'/images/courte-logo.svg'}
				alt={'Courte Logo'}></Image>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
`
