import Image from "next/image";
import { styled } from "styled-components";

export const BenefitsContainer = styled.section`
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px;

    h2 {
        font-family: var(--font-montserrat);
        color: var(--color-green);
        font-weight: 300;
        font-size: 36px;
        max-width: 700px;
        margin: 0 auto;
        padding-bottom: 15px;
        padding-top: 60px;
        padding-bottom: 60px;
        text-align: center;
    }

    @media(max-width: 740px){
        h2 {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`

export const BenefitsItem = styled.div`
    display: flex;
    padding-bottom: 45px;

    p {
        color: var(--color-text);
        font-family: var(--font-dmSans);
        max-width: 600px;
        padding-left: 40px;
    }

    @media(max-width: 740px){
        flex-direction: column;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;

        p {
            padding-left: 0px;
            text-align: center;
            padding-top: 20px;
        }
    }
`

export const Icon = styled(Image)`
    width: 62px;
    height: 62px;
`