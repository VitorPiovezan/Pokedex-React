import React, {useEffect, useState} from 'react'
import api from '../../api/api'
import pokedex from '../../assets/images/pokedex.png'

import { 
    Container, 
    Header, 
    Menu, 
    Imagem, 
    Search, 
    Main, 
} from '../Home/styles'



export default function Individual() {

  return (
    
    <Container>
        <Header>
            <Menu>
                <Imagem src={pokedex}/>
            </Menu>
        </Header>

        <Main>
            
            <Search>
                <p>funfo</p>
            </Search>
        </Main>

    </Container>

    );
}