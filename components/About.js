import React from 'react'
import styled from 'styled-components'
import { DescriptiveText, globalColor, HeadLine, SectionTitle } from '../shared/Style'
import about from '../public/images/image-about.png'
import Image from 'next/image'

const About = () => {
    return (
        <AboutWrapper id="about">
            <div className="imageWrapper">
                <Image className="aboutImage" src={about} alt="Courte description" />
            </div>

            <div className="textWrapper">
                <SectionTitle className="about">About</SectionTitle>
                <HeadLine className="headLine">A solution tailored for public tennis courts.</HeadLine>
                <DescriptiveText className="descriptiveText">
                    In-person arrangements to share public tennis courts is not practical. Courte is here to help make using and sharing the court as easy as the press of a button.
                </DescriptiveText>
                <div className="buttonWrapper">
                    <a href="https://drive.google.com/file/d/1XQgTxRATp4E8i65Dc6P9IMJRDuY_sOr-/view" rel="noreferrer" target="_blank">
                        <button className="button">
                            <h3>View proposal</h3>
                        </button>
                    </a>
                </div>
            </div>


        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${globalColor.grey20};
    height: 100%;
    border-radius: 8px;
    padding-right: 6.2vw;
    padding-left: 6.2vw;
    padding-bottom: 4.8vh;
    margin-top: 13.7vh;

    @media screen and (min-width:800px) {
        flex-direction: row;
        gap: 10vw;
        padding-right: 3.2vw;
        padding-left: 9.1vw;
        padding-bottom: 3.9vh;
    }

    .imageWrapper{
        margin-top: 3.7vh;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        display: flex;
        flex-direction: center;
        width: 70%;

        @media screen and (min-width: 800px) {
                width: 25vw;
            }


        .aboutImage {
            width: 100%;
            height: auto;
            
        }
    }
    
    .textWrapper{
        margin-top: 6.2vh;

        @media screen and (min-width:800px) {
            width: 44vw;
        }

        .headLine{
            margin-top: 1.9vh;
            margin-bottom:0;
        }
        .about{
            margin: 0;
        }
        .descriptiveText{
            margin-top: 1.9vh;
        }
        .buttonWrapper{
            margin-top: 4.9vh;
            .button{
                cursor: pointer;
                width: 194px;
                height: 43px;
                background-color: ${globalColor.primary};
                border: none;
                border-radius: 8px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 10px 16px;
                gap: 10px;
                
                h3{
                    color: ${globalColor.grey0};
                    font-weight:600;
                    font-family: 'outfit', sans-serif;
                }
            }
        }
    }

    `

export default About