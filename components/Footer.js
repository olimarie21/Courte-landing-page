import React from 'react'
import styled from 'styled-components'
import { DescriptiveText, globalColor } from '../shared/Style'

const Footer = () => {
	return (
		<FooterWrapper id='contact'>
			<h1 className='footerTitle'>
				We made Courte happen.{'window' > '800px' ? <br /> : null}
				Can you imagine what else can we create?
			</h1>

			<DescriptiveText className='footerDescriptive'>
				Contact us at courte.spaceduck@gmail.com
			</DescriptiveText>

			<p className='copyright'>© 2022 Courte. All Rights Reserved.</p>
		</FooterWrapper>
	)
}

const FooterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding-right: 6.2vw;
	padding-left: 6.2vw;
	background-color: ${globalColor.grey100};
	margin-top: 8.6vh;

	@media screen and (min-width: 800px) {
		padding-right: 14.9vw;
		padding-left: 14.9vw;
	}

	.footerTitle {
		color: ${globalColor.grey0};
		margin: 9vh 0 0 0;
		font-weight: 700;
		font-size: 42px;
		line-height: 54px;
	}

	.footerDescriptive {
		margin-top: 2.8vh;
		color: ${globalColor.grey0};
		font-weight: 400;
	}

	.copyright {
		font-size: 12px;
		color: ${globalColor.grey0};
		margin-top: 8.6vh;
	}
`

export default Footer
