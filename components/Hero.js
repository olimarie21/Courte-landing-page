import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import hero from '../public/images/hero.png'
import { globalColor } from '../shared/Style'
import { DescriptiveText } from '../shared/Style'

const Hero = () => {
    return (
        <HeroWrapper>
            <div className="imageWrapper">
                <Image className="heroImage" src={hero} alt="Courte Icon" />
            </div>

            <div className="textWrapper">
                <h1>Discover a better way to play tennis.</h1>
                <DescriptiveText className="descriptiveText">
                    Courte is a mobile application that offers a comprehensive solution to facilitate the use and share of public tennis courts.
                </DescriptiveText>
            </div>

            <div className="buttonWrapper">
                <a href="#about">
                    <button className="button">
                        <h3>Learn More</h3>
                    </button>
                </a>
            </div>

        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;

    .imageWrapper{
        display: flex;
        justify-content: center;
        .heroImage {
            width: 100%;
            height: auto;
        }
    }

    .textWrapper{
        margin-top: 3.7vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1{
            margin: 0;
            color: ${globalColor.grey100};
            font-weight: 700;
            font-size: 42px;
            line-height: 54px;
        }

        .descriptiveText{
            margin-top: 2.1vh;
        }
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
`

export default Hero