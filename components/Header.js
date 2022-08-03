import { react, useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { globalColor } from '../shared/Style'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const Header = () => {
	const [showMenu, setShowMenu] = useState(false)

	return (
		<>
			<HeaderContainer secondary={showMenu}>
				<TextContainer>
					<Image
						width={128}
						height={24}
						src={'/images/courte_logo.svg'}
						alt={'Courte Logo'}
					/>

					<HamburgerContainer onClick={(e) => setShowMenu(!showMenu)}>
						<Image
							width={30}
							height={30}
							src={'/images/hamburger-menu.svg'}
							alt='Menu icon'
						/>
					</HamburgerContainer>

					<DesktopMenu>
						<MenuItem>
							<Link href='#features' passHref={true}>
								<a>Features</a>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#about' passHref={true}>
								<a>About</a>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#team' passHref={true}>
								<a>Team</a>
							</Link>
						</MenuItem>
						<MenuItem>
							<Link href='#contact' passHref={true}>
								<a>Contact</a>
							</Link>
						</MenuItem>
					</DesktopMenu>
				</TextContainer>
			</HeaderContainer>
			{showMenu ? (
				<MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
			) : null}
		</>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	max-height: 72px;
	padding: 24px;
	justify-content: center;
	flex-direction: row;
	top: 0;
	left: 0;
	align-items: center;
	background: ${globalColor.grey0};
	z-index: 4;

	position: ${(props) => (props.secondary ? 'sticky' : 'relative')};
	flex-direction: @media screen and (min-width: 768px) {
		position: sticky;
	}
`
const TextContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 900px;
	justify-content: space-between;
`
const DesktopMenu = styled.ul`
	display: none;
	@media (min-width: 768px) {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 40px;
		font-size: 18px;
		font-weight: 600;
	}
`
const MenuItem = styled.li`
	margin: 0;
	padding: 0;
`

const HamburgerContainer = styled.div`
	display: block;

	@media screen and (min-width: 768px) {
		display: none;
	}
`
export default Header
