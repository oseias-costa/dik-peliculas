"use client";
import ButtonContact from "../global/button/ButtonContact";
import { benefitsData } from "./benefits-data";
import * as S from "./benefits.styles";
import CortePhoto from '@/public/images/benefits/corte.png'

export default function Benefits(){
    const benefits = benefitsData.benefits.map(item => {
        return(
            <S.BenefitsItem key={item.id}>
                <S.Icon src={item.icon} alt={item.content}/>
                <p>{item.content}</p> 
            </S.BenefitsItem>
        )
    })

    return(
        <S.BenefitsContainer>
            <h2>{benefitsData.title}</h2>
            <S.Corte src={CortePhoto} alt='Corte 100% computadorizado' />
            {benefits}
            <ButtonContact text="Solicite seu Orçamento Gratuitamente" />
        </S.BenefitsContainer>
    )
}