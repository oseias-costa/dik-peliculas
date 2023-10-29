"use client";
import * as S from "./headeline.styles";
import Background from '@/public/images/headline/background-headline.png'
import Logo from '@/public/images/headline/logo-dik.svg'
import { headlineData } from "./headeline-data";
import ButtonContact from "../global/button/ButtonContact";

export default function Headline(){
    return(
        <S.HeadlineContainer>
            {/* <Image alt='Img' src={Background} fill={true} style={{ objectFit: "cover"}}/> */}
            <S.BackgroundImage alt='Img' src={Background} fill={true} quality={100}/>
            <S.LogoImg alt='Logo Dik Películas' src={Logo} />
            <S.Description>
                <h2>{headlineData.title}</h2>
                <h1>{headlineData.subtitle}</h1>
            </S.Description>
            <ButtonContact text="Solicite seu Orçamento Gratuitamente" />
        </S.HeadlineContainer>
    )
}