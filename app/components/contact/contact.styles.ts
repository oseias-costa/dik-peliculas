import Image from "next/image";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  padding-top: 63px;
`;

export const Contacts = styled.div`
  padding-left: 40px;
  h2 {
    font-family: var(--font-montserrat);
    color: var(--color-green);
    font-size: 36px;
    font-weight: 300;
  }
  @media (max-width: 740px) {
    padding-top: 0px;
    padding-bottom: 30px;
    padding-left: 20px;
    padding-right: 20px;

    h2 {
      text-align: center;
    }
  }
`;

export const ContactItem = styled.div`
  display: flex;
  padding-top: 30px;
  align-items: start;

  div {
    padding-left: 20px;
  }

  .Contact__Content {
    max-width: 300px;
    padding-top: 10px;
    font-family: var(--font-dmSans);
    color: var(--color-text);
    max-width: 200px;
  }

  .Contact__Content-phone {
    font-size: 22px;
    padding-top: 10px;
    font-family: var(--font-dmSans);
    color: var(--color-text);
  }

  .Contact__Title {
    font-family: var(--font-dmSans);
    color: var(--color-text);
  }
`;

export const Img = styled(Image)`
  @media (max-width: 740px) {
    object-fit: cover;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Icon = styled(Image)`
  width: 32px;
  height: auto;
`;
