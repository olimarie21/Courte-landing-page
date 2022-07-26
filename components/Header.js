import react from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { globalColor } from '../shared/Style'

const Header = () => {
	return (
		<HeaderContainer>
			<Image
				width={128}
				height={24}
				src={'/images/courte_logo.svg'}
				alt={'Courte Logo'}
			/>

			{/* <Image
				width={30}
				height={30}
				src={'/images/hamburger-menu.svg'}
				alt='Menu icon'
			/> */}

			<DesktopMenu>
				<MenuItem>Features</MenuItem>
				<MenuItem>About</MenuItem>
				<MenuItem>Team</MenuItem>
				<MenuItem>Contact</MenuItem>
			</DesktopMenu>
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	max-height: 72px;
	padding: 24px;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	left: 0;
	background: ${globalColor.grey0};
	z-index: 4;
`

const DesktopMenu = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 40px;
	font-size: 18px;
	font-weight: 600;
`
const MenuItem = styled.li`
	margin: 0;
	padding: 0;
`
export default Header
