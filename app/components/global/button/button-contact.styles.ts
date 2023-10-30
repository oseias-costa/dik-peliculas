import styled from "styled-components";

export const ButtonContainer = styled.a`
    background-color: #23F318;
    border-radius: 8px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 12px;
    padding-bottom: 12px;
    position: relative;
    font-family: var(--font-dmSans);
    font-size: 25px;
    color: var(--color-text);
    cursor: pointer;
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: .2s linear;

    &:hover {
        box-shadow: rgba(35, 243, 24, 0.35) 0px 15px 45px;
        transform: rotateY(3deg);
    }
`