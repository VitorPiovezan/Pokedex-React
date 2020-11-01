import React, {useEffect, useState} from 'react'
import api from '../../api/api'
import pokedex from '../../assets/images/pokedex.png'
import ListItems from './pokemon'

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
    ButtonDropdown,
    Pokemons
} from './styles'
import Individual from '../Pokemon/individual'



export default function Home() {

    const [pokemon, setPokemon] = useState([])
    const [att, setAtt] = useState(0)

     useEffect(() => {
         const way = '?offset='+att+'&limit=20';
         api.get(way)
         .then(res => {
             setPokemon(res.data.results);
         })
     }, [att]);

     let listaDeItens = null

     if (pokemon !== null) {
        listaDeItens = pokemon.map(item => {
            return <ListItems
                key={item.name}
                name={item.name}
                url={item.url}
            />
        })
    }

    function Update(){
        setAtt(att + 20);
    }

    function UnUpdate(){
        setAtt(att - 20);
    }

    function Avancar(){
        if(att === 0){
            return <div><button onClick={Update}><p>Avançar</p></button></div>
        }else{
            return  <div>
                        <button onClick={UnUpdate}><p>Voltar</p></button>
                        <button onClick={Update}><p>Avançar</p></button>
                    </div> 
        }

    } 

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
            <Pokemons>
            {listaDeItens}
            </Pokemons>
            <Avancar/>
        </Main>
    </Container>

    );
}




// <DivButtonSearch>
// <ButtonDropdown type="button">Todos Tipos</ButtonDropdown>
// </DivButtonSearch>