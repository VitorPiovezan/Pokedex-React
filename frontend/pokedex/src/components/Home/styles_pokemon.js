

import styled from 'styled-components';

export const Pokemon = styled.div`
    width: 200px;
    padding: 20px;
    transition: .3s;


    &:hover {
        margin-top: -6px;
        transition: .2s

    }
`;


export const TitleDiv = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Id = styled.p`
    font-size: 10pt;
    color: #707070;
    padding: 5px 5px;
`;


export const Title = styled.p`
    font-size: 14pt;
    color: #4484ce;
    font-weight: bold;
    padding: 5px 0px;
    margin-top: -4px;
`;


export const PokemonView = styled.div`
    width: 100%;
    height: 200px;
    background-color: #EEE;
    border-radius: 15px;
`;


export const ImagePokemon = styled.img`
    width: 150px;
    height: 150px;
    padding: 25px;
`;

export const Link = styled.a`
    text-decoration: none;
`


//Tipos de pokemon

export const ViewType = styled.div`
    width: 60px;
    height: 20px;
    border-radius: 8px;
    text-align: center;
    margin-left: 5px;
    background-color: ${props => props.color};
`

export const TextType = styled.p`
    padding: 3px;
    font-size: 10pt;
    color: ${props => props.color};
`

export const ViewTypesPokemon = styled.div`
    display: flex;
    padding: 5px;
    flex-direction: row;
    margin: -35px 0px 0px -2px;
`