import Image from "next/image";
import { styled } from "styled-components";

export const FooterContainer = styled.section`
  background-color: var(--color-text);
  padding-top: 42px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 740px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled(Image)`
  width: 300px;
  height: auto;

  @media (max-width: 740px) {
    width: 100%;
    height: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ContainerLogo = styled.div`
  div {
    display: flex;

    @media (max-width: 740px) {
      justify-content: center;
    }
  }
`;

export const IconMedia = styled(Image)``;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;

  a {
    font-family: var(--font-dmSans);
    color: var(--color-white);
    padding-bottom: 5px;
    transition: 0.2s linear;

    &:hover {
      color: #23f318;
    }
  }
  @media (max-width: 740px) {
    padding-top: 30px;
    padding-bottom: 30px;

    a {
      text-align: center;
    }
  }
`;

export const LocationContainer = styled.div`
  div {
    display: flex;
  }

  div > p {
    font-family: var(--font-dmSans);
    color: var(--color-white);
    padding-left: 20px;
    max-width: 240px;
    text-aling: left;
    font-size: 16px;
  }
`;
