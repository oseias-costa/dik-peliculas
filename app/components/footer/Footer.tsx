"use client";
import Image from "next/image";
import * as S from "./footer.styles";
import Logo from "@/public/images/headline/frame-logo.svg";
import WhatsappIcon from "@/public/images/footer/whatsapp-icon-footer.svg";
import Instagram from "@/public/images/footer/Instagram.svg";
import Location from "@/public/images/footer/location.webp";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.ContainerLogo>
        <S.Img src={Logo} alt="Películas Para Carros Jaguaruna" />
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=5548999406153&text=Ol%C3%A1!%20Vim%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20pel%C3%ADculas."
            target="_blank"
          >
            <S.IconMedia
              src={WhatsappIcon}
              alt="Whatsapp da Dik Películas para casa"
            />
          </a>
          <a href="https://www.instagram.com/dikpeliculas/" target="_blank">
            <S.IconMedia
              src={Instagram}
              alt="Instagram da Dik películas para carros e residências"
            />
          </a>
        </div>
      </S.ContainerLogo>
      <S.ContainerMenu>
        <a href="#Inicio">Início</a>
        <a href="#Serviços">Serviços</a>
        <a href="#Película">Película</a>
      </S.ContainerMenu>
      <S.LocationContainer>
        <div>
          <Image
            src={Location}
            alt="Instalar Películas em Jaguaruna SC"
            width={26}
          />
          <p>RSC-442, Jaguaruna - SC Cep 88715-000</p>
        </div>
      </S.LocationContainer>
    </S.FooterContainer>
  );
}
