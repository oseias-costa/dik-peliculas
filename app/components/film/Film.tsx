"use client";
import { filmData } from "./film-data";
import * as S from "./film.styles";
import Photo from '@/public/images/film/car.png'

export default function Film(){
    return(
        <S.FilmContainer>
            <S.FilmDescription>
                <h2>{filmData.title}</h2>
                <p>{filmData.content1}</p>
                <p>{filmData.content2}</p>
                <S.Img src={Photo} alt='Dik Películas Automotivas e Películas para Residências em Jaguaruna SC' />
            </S.FilmDescription>
        </S.FilmContainer>
    )
}