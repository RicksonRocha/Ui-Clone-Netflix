import React from "react";

import { Featured, ImageFillHorizontal, ImageFillVertical, Name, Info, Points, Year, Seasons, Description, Genres } from './FeatureMovie.styles'

export default ({ item }) => {

    return (
        <Featured style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})` }}>
            <ImageFillVertical>
                <ImageFillHorizontal>
                    <Name>{item.original_name}</Name>
                    <Info>
                        <Points>{item.vote_average}</Points>
                        <Year></Year>
                        <Seasons>{item.number_of_seasons} temporada{item.number_of_seasons != 1 ? 's' : ''}</Seasons>
                    </Info>
                    <Description>{item.overview}</Description>
                    <Genres><strong>Gênero:</strong></Genres>
                </ImageFillHorizontal>
            </ImageFillVertical>
        </Featured>
    )
}