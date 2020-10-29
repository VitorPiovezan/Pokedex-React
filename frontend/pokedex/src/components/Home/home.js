import React from 'react'
import logo_pokemon from '../../assets/images/logo_pokemon.png'
import pokedex from '../../assets/images/pokedex.png'

import { Container, Header, Menu, Imagem, Text } from './styles'


export default function Home() {
  return (
    
    <Container>
        <Header>
            <Menu>
                <Imagem src={logo_pokemon}/>
            </Menu>
        </Header>



    </Container>

    );
}

