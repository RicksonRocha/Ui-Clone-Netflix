import styled from "styled-components";

export const MovieRow = styled.div`
    margin-bottom: 30px;
`
export const Title = styled.h2`
    margin: 0 0 0 30px;
`
export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 30px;
`
export const List = styled.div`
    width: 99999999px;
`
export const Item = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`
export const Img = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    :hover {
        transform: scale(1);
    }
`