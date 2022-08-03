import Link from 'next/link'
import styled from 'styled-components'
import { globalColor } from '../shared/Style'

const MobileMenu = (props) => {
	const { showMenu, setShowMenu } = props

	return (
		<>
			{showMenu ? (
				<Container>
					<Menu>
						<MenuItem onClick={() => setShowMenu(false)}>
							<Link href='#features' passHref={true}>
								<a>Features</a>
							</Link>
						</MenuItem>
						<MenuItem onClick={() => setShowMenu(false)}>
							<Link href='#about' passHref={true}>
								<a>About</a>
							</Link>
						</MenuItem>
						<MenuItem onClick={() => setShowMenu(false)}>
							<Link href='#team' passHref={true}>
								<a>Team</a>
							</Link>
						</MenuItem>
						<MenuItem onClick={() => setShowMenu(false)}>
							<Link href='#contact' passHref={true}>
								<a>Contact</a>
							</Link>
						</MenuItem>
					</Menu>
				</Container>
			) : null}
		</>
	)
}

const Container = styled.div`
	position: fixed;
	bottom: 0;
	right: 50%;
	transform: translateX(50%);
	padding: 0;
	display: flex;
	flex-direction: column;
	z-index: 2;
	width: 100vw;
	height: 90vh;
	background: ${globalColor.grey0};
`

const Menu = styled.ul`
	justify-content: center;
	align-items: center;
	background: ${globalColor.grey0};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
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

export default MobileMenu
