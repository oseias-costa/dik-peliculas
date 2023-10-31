"use client";
import { aboudData } from "./about-data";
import * as S from "./about.styles";
import Logo from '@/public/images/about/logo-about.svg'

export default function About(){
    return(
        <S.AboutContainer>
            <S.Img src={Logo} alt='Películas para vidros da Casa e Carro - Dik Películas' />
            <S.AboutDescription>
                <h2>{aboudData.title}</h2>
                <p>{aboudData.discription}</p>
            </S.AboutDescription>
        </S.AboutContainer>
    )
}