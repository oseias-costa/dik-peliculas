import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
`

export const BackgroundImage = styled(Image)`
    object-fit: cover;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Description = styled.div`
    background: rgba(0, 0, 0, 0.70);
    text-align: center;
    padding-top: 60px;
    padding-bottom: 60px;
    margin-top: 40px;
    margin-bottom: 15px;
    position: relative;
    width: 100%;

    h1 {
        font-family: var(--font-montserrat);
        color: var(--color-white);
        font-weight: 300;
        font-size: 36px;
        max-width: 800px;
        margin: 0 auto;
    }

    h2 {
        font-family: var(--font-montserrat);
        color: var(--color-green);
        font-weight: 300;
        font-size: 50px;
        max-width: 700px;
        margin: 0 auto;
        padding-bottom: 15px;
    }

    @media(max-width: 740px){
        padding-left: 20px;
        padding-right: 20px;
        top: 80px;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-top: 100px;
        margin-bottom: 100px;

        h2 {
            font-size: 40px;
        }

        h1 {
            font-size: 30px;
        }
    }
`

export const LogoImg = styled(Image)`
    position: relative;
    width: 500px;
    height: auto;
    
    @media(max-width: 740px){
        width: 100%;
        height: auto; 
        padding-left: 20px;
        padding-right: 20px;
    }
`