import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.section`
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 60px;
  padding-bottom: 60px;
  flex-wrap: wrap;
`;

export const Img = styled(Image)`
  width: 200px;
  height: auto;

  @media (max-width: 740px) {
    //width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const AboutDescription = styled.div`
  padding-left: 40px;

  h2 {
    font-family: var(--font-montserrat);
    color: var(--color-green);
    font-size: 42px;
    font-weight: 300;
    padding-bottom: 20px;
    padding-top: 15px;
  }

  p {
    max-width: 400px;
    font-family: var(--font-dmSans);
    color: var(--color-text);
    font-size: 20px;
  }

  @media (max-width: 740px) {
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
