import React from "react";
import { MovieRow, Title, ListArea, List, Item, Img } from './MovieRow.styles'

export default ({ title, items }) => {
    return (
        <MovieRow>
            <Title>{title}</Title>
            <ListArea>
                <List>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Item key={key}>
                            <Img src={`https://image.tmdb.org/t/p/w300${item.poster_path !== null && item.poster_path}`} alt={item.origin_name} />
                        </Item>
                    ))}
                </List>
            </ListArea>
        </MovieRow>
    )
}