import React from "react";

import { Featured, ImageFillHorizontal, ImageFillVertical, Name, Info, Points, Year, Seasons, Description, BtnArea, Genres } from './FeatureMovie.styles'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    return (
        <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <ImageFillVertical>
                <ImageFillHorizontal>
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Points>{item.vote_average} pontos</Points>
                        <Year>{firstDate.getFullYear()}</Year>
                        <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</Seasons>
                    </Info>
                    <Description>{item.overview}</Description>
                    <BtnArea>
                        <a href={`/watch/${item.id}`} theme="light">&#x27A4; Assistir</a>
                        <a href={`/list/add/${item.id}`} theme={"dark"}>+ Minha Lista</a>
                    </BtnArea>
                    <Genres><strong>Gênero{genres.length > 1 && 's'}:</strong> {genres.join(', ')}</Genres>
                </ImageFillHorizontal>
            </ImageFillVertical>
        </Featured>
    )
}