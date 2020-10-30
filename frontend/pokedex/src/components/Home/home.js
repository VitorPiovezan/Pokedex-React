import React from 'react'
import pokedex from '../../assets/images/pokedex.png'

import { 
    Container, 
    Header, 
    Menu, 
    Imagem, 
    Search, 
    SearchTitle, 
    Main, 
    SearchName, 
    SearchAdvanced,
    SearchNameInput,
    Input,
    DivButtonSearch,
    ButtonDropdown
} from './styles'


export default function Home() {
  return (
    
    <Container>
        <Header>
            <Menu>
                <Imagem src={pokedex}/>
            </Menu>
        </Header>

        <Main>
            <Search>
                <SearchName>
                    <SearchTitle color="#4484CE">Search by Name</SearchTitle>
                    <Input><SearchNameInput type="text" id="searchName" name="searchName" placeholder="Search for Pokemon"/></Input>
                
                </SearchName>
                <SearchAdvanced>
                    <SearchTitle color="#707070">Advanced Search</SearchTitle>
                    <DivButtonSearch>
                        <ButtonDropdown type="button" name="button" placeholder="Todos Tipos"/>
                        <ButtonDropdown type="button" name="button" placeholder="Todos Tipos"/>
                        <ButtonDropdown type="button" name="button" placeholder="Todos Tipos"/>
                    </DivButtonSearch>
                </SearchAdvanced>
            </Search>
        </Main>

    </Container>

    );
}




// <DivButtonSearch>
// <ButtonDropdown type="button">Todos Tipos</ButtonDropdown>
// </DivButtonSearch>