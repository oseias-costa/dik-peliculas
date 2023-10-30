import styled from "styled-components";

export const CallContainer = styled.section`
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
        position: relative;
        font-family: var(--font-montserrat);
        font-weight: 300;
        font-size: 36px;
        color: var(--color-white);
    }

    p {
        position: relative;
        font-family: var(--font-dmSans);
        color: var(--color-white);
        padding-bottom: 40px;
        padding-top: 20px;
        max-width: 700px;
        font-size: 22px;
        margin: 0 auto;
    }
`