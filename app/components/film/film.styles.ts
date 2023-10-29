import Image from "next/image";
import styled from "styled-components";

export const FilmContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: var(--color-white);
`

export const FilmDescription = styled.div`
    border-radius: 6px 6px 0px 0px;
    background-color: #6C9DC6;
    max-width: 800px;
    padding-top: 30px;
    text-align: center;

    h2 {
        font-family: var(--font-montserrat);
        font-size: 36px;
        max-width: 600px;
        margin: 0 auto;
        padding-bottom: 15px;
        position: relative;
        top: 30px;
        font-weight: 300;
    }

    p {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-dmSans);
        position: relative;
        top: 50px;
        z-index: 2;
        font-size: 20px;
    }

    &:last-child{
        p {
            padding-top: 15px;
        }
    }

    @media(max-width: 800px){
        margin-left: 20px;
        margin-right: 20px;

        p {
            font-size: 16px;
        }

        p, h3 {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`

export const Img = styled(Image)`
    max-width: 800px;
    height: auto;
    position: relative;
    top: 10px;
    border-radius: 0px 0px 6px 6px;

    @media(max-width: 800px){
        width: 100%;
    }
`