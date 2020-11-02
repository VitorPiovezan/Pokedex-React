import React, {useEffect, useState} from 'react'
import api from '../../api/api'
import pokedex from '../../assets/images/pokedex.png'

import { 
    Container, 
    Header, 
    Menu, 
    Imagem, 
    Main, 
} from '../Home/styles'

import {
    useParams
} from 'react-router-dom'

export default function Individual() {

    let { id } = useParams();

    const [imgPokemon, setImgPokemon] = useState('');

    useEffect(() => {
        api.get(id)
        .then(res =>{
            setImgPokemon(res.data.sprites.front_default)
        });

    }, [])


return (
    
    <Container>
        <Header>
            <a href="/"><Menu>
                <Imagem src={pokedex}/>
            </Menu></a>
        </Header>

        <Main>
            <img src={imgPokemon}/>
        </Main>

    </Container>

    );
}