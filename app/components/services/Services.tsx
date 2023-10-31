"use client";
import Image from "next/image";
import * as S from "./services.styles";
import Background from '@/public/images/services/services-background.png'
import { servicesData } from "./services-data";
import Check from '@/public/images/services/check.svg'
import ButtonContact from "../global/button/ButtonContact";


export default function Services(){
    const services = servicesData.services.map(item => {
        return(
            <S.ServiceItem key={item.id}>
                <S.Icon src={Check} alt='Melhores películas de Jaguaruna e região de Santa Catarina' />
                <h3>{item.service}</h3>
            </S.ServiceItem>
        )
    })

    return(
        <S.ServicesContainer id='Serviços'>
            <Image 
                src={Background} 
                alt='Serviços Dik Películas Jaguaruna SC Películas Baratas e com muita Qualidade' 
                fill={true} 
                quality={100}
                style={{
                    backgroundRepeat: 'round',
                    objectFit: 'cover'
                }}
            />
            <S.ServicesContent>
                <h2>{servicesData.title}</h2>
                <S.ServiceItems>
                    {services}
                </S.ServiceItems>
                <ButtonContact text="Conheça nossos Serviços!" />
            </S.ServicesContent>
        </S.ServicesContainer>
    )
}