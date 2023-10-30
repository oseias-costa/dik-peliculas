"use client";
import Image from "next/image";
import { CallContainer } from "./call.styles";
import Background from '@/public/images/call/contact.png'
import { callData } from "./call-data";
import ButtonContact from "../global/button/ButtonContact";

export default function Call(){
    return(
        <CallContainer>
            <Image 
                src={Background} alt='Dik Películas para Carro em Jaguaruna SC' 
                fill={true}
                style={{objectFit: 'cover'}}
            />
            <h2>{callData.title}</h2>
            <p>{callData.description}</p>
            <ButtonContact text={callData.buttonText} />
        </CallContainer>
    )
}