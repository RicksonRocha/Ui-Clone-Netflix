import styled from "styled-components";

export const Featured = styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;
`

export const ImageFillVertical = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 50%);
`

export const ImageFillHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 20%, transparent 60%);
`

export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
`
export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    > * {
        margin-right: 15px;
        display: inline-block; //lado a lado, com propriedade width
    }
`
export const Points = styled.div`
    color: #46d369;
`
export const Year = styled.div`
    
`
export const Seasons = styled.div``
export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
`
export const BtnArea = styled.div`
    margin-top: 15px;

    a {
        display: inline-block;
        font-size: 20px;
        font-weight: bold;
        padding: 15px;
        border-radius: 5px;
        text-decoration: none;
        margin-right: 15px;
        background-color: ${(props) => props.theme === 'light' ? '#fff' : '#000'};
    }
`
export const Genres = styled.div``