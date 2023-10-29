import Image from "next/image";
import { styled } from "styled-components";

export const ServicesContainer = styled.section`
    position: relative;
    padding-bottom: 60px;
`

export const ServicesContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-family: var(--font-montserrat);
        color: var(--color-white);
        font-weight: 300;
        font-size: 36px;
        max-width: 700px;
        margin: 0 auto;
        padding-bottom: 15px;
        padding-top: 60px;
        padding-bottom: 60px;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const ServiceItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 672px;
    justify-content: center;
    padding-bottom: 40px;
    
`

export const ServiceItem = styled.div`
    display: flex;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.20);
    border-radius: 6px;
    background-color: var(--color-white);
    padding: 20px;
    margin: 10px;
    width: 316px;
    height: 112px;
    justify-content: space-between;
    align-items: start;

    h3 {
        color: var(--color-text);
        font-family: var(--font-dmSans);
        max-width: 200px;
        font-size: 18px;
    }


    @media(max-width: 380px) {
        width: 100%;
        height: auto;
        margin-left: 20px;
        margin-right: 20px;

        h3 {
            padding-left: 10px;
        }
    }
`
export const Icon = styled(Image)`
    width: 46px;
    height: 46px;
    align-self: top;
`
