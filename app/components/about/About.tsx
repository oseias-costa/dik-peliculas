"use client";
import { aboudData } from "./about-data";
import * as S from "./about.styles";
import Logo from '@/public/images/about/logo-about.svg'
import AboutPhoto from '@/public/images/about/quem-somos.png'

export default function About(){
    return(
        <S.AboutContainer>
            <S.AboutPhoto src={AboutPhoto} alt='Dik Películas' />
            <S.AboutDescription>
                <h2>{aboudData.title}</h2>
                <p>{aboudData.discription}</p>
                <S.Img src={Logo} alt='Películas para vidros da Casa e Carro - Dik Películas' />
            </S.AboutDescription>
        </S.AboutContainer>
    )
}