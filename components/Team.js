import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { SectionTitle, HeadLine } from '../shared/Style'
import bruna from '../public/images/Bruna.png'
import gabriel from '../public/images/Gabriel.png'
import gustavo from '../public/images/Gustavo.png'
import jaspreet from '../public/images/Jaspreet.png'
import mizuho from '../public/images/Mizuho.png'
import olivia from '../public/images/Olivia.png'
import yebin from '../public/images/Yebin.png'
import Link from 'next/link'
import linkedin from '../public/images/linkedin.svg'
import { globalColor } from '../shared/Style'

const Team = () => {
	return (
		<TeamWrapper id='team'>
			<div className='textWrapper'>
				<SectionTitle>Meet the team</SectionTitle>
				<HeadLine className='headLine'>It&#39;s all about the people</HeadLine>
			</div>

			<TeamContainer>
				{/* Bruna */}
				<div className='card'>
					<Image className='image' src={bruna} alt='Bruna Weiss' />
					<Link href='https://www.linkedin.com/in/brunaweiss/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Bruna <br /> Weiss
					</h4>

					<h5 className='role'>UX / UI Designer</h5>
				</div>

				{/* Gabriel */}
				<div className='card'>
					<Image className='image' src={gabriel} alt='Gabriel Watanabe' />
					<Link href='https://www.linkedin.com/in/gabrielwatanabe/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Gabriel <br /> Watanabe
					</h4>

					<h5 className='role'>Full-stack developer</h5>
				</div>

				{/* Gustavo */}
				<div className='card'>
					<Image className='image' src={gustavo} alt='Gustavo Monte' />
					<Link href='https://www.linkedin.com/in/gustavo-monte/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Gustavo <br /> Monte
					</h4>

					<h5 className='role'>Full-stack developer</h5>
				</div>

				{/* Jaspreet */}
				<div className='card'>
					<Image className='image' src={jaspreet} alt='Jaspreet Bhatti' />
					<Link href='https://www.linkedin.com/in/ijaspreetbhatti/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Jaspreet <br /> Bhatti
					</h4>

					<h5 className='role'>Full-stack developer</h5>
				</div>

				{/* Mizuho */}
				<div className='card'>
					<Image className='image' src={mizuho} alt='Mizuho Tohma' />
					<Link href='https://www.linkedin.com/in/mizuhotohma/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Mizuho <br /> Tohma
					</h4>

					<h5 className='role'>Front-end developer</h5>
				</div>

				{/* Olivia */}
				<div className='card'>
					<Image className='image' src={olivia} alt='Olivia Underdah' />
					<Link href='https://www.linkedin.com/in/oliviaunderdah/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Olivia <br /> Underdah
					</h4>

					<h5 className='role'>Full-stack developer</h5>
				</div>

				{/* Yebin */}
				<div className='card'>
					<Image className='image' src={yebin} alt='Yebin Cho' />
					<Link href='https://www.linkedin.com/in/yebincho/'>
						<a className='linkedin' target='_blank'>
							<Image src={linkedin} alt='linkedin icon' />
						</a>
					</Link>
					<h4 className='name'>
						Yebin <br /> Cho
					</h4>

					<h5 className='role'>Front-end developer</h5>
				</div>
			</TeamContainer>
		</TeamWrapper>
	)
}

const TeamWrapper = styled.div`
	max-width: 900px;
	display: flex;
	flex-direction: column;
	align-self: center;
	justify-content: center;
	margin-top: 10vh;
	margin-bottom: 8.7vh;

	.textWrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		@media (min-width: 800px) {
			margin-bottom: 4.6vh;
			align-items: flex-start;
			justify-content: flex-start;
		}

		.headLine {
			width: 80%;
			text-align: center;
			margin: 0;
			margin-top: 1.9vh;

			@media (min-width: 800px) {
				text-align: left;
			}
		}
	}
`

const TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media screen and (min-width: 800px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 2.4rem;
	}

	.card {
		width: 195px;
		height: auto;
		position: relative;
		margin-top: 40px;

		@media screen and (min-width: 800px) {
			margin-top: 0;
		}

		.linkedin {
			width: 32px;
			height: 32px;
			position: absolute;
			top: 8px;
			right: 9px;
		}

		.name {
			margin: 0;
			margin-top: 8px;
			color: ${globalColor.primary};
			font-weight: 600;
			line-height: 32px;
			font-size: 24px;
		}

		.role {
			margin-top: 4px;
			color: ${globalColor.grey100};
			font-weight: 400;
			font-size: 18px;
			line-height: 26px;
		}
	}
`

export default Team
