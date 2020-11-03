import React, {useEffect, useState} from 'react';
import api from '../../api/api';
import pokedex from '../../assets/images/pokedex.png';
import pokebolaAberta from '../../assets/images/pokebola_2.png';
import pokebolaFechada from '../../assets/images/pokebola_1.png';
import ListItems from './pokemon';

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
    Pokemons,
    ViewAvancarHome,
    ButtonAvancarHome,
    ButtonBackHome,
    ViewAvancarPos,
    DivPokebola,
    PokebolaAbertaImg,
    PokebolaFechadaImg
} from './styles'



export default function Home() {

    const [pokemon, setPokemon] = useState([]);
    const [att, setAtt] = useState(0);
    const [pokebola, setPokebola] = useState(0);

     useEffect(() => {
         const way = '?offset='+att+'&limit=20';
         api.get(way)
         .then(res => {
             setPokemon(res.data.results);
         })
     }, []);

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
        window.scrollTo(0, 0);
        setAtt(att + 20);
    }

    function UnUpdate(){
        window.scrollTo(0, 0);
        setAtt(att - 20);
    }

    function Avancar(){
        if(att === 0){
            return <ViewAvancarHome><ButtonAvancarHome onClick={Update}>Avançar</ButtonAvancarHome></ViewAvancarHome>
        }else{
            return  <ViewAvancarPos>
                        <ButtonBackHome onClick={UnUpdate}>Voltar</ButtonBackHome>
                        <ButtonAvancarHome onClick={Update}>Avançar</ButtonAvancarHome>
                    </ViewAvancarPos> 
        }

    } 

    function AbrirPokebola(){
        if (pokebola === 0){
            setPokebola(1)
        } else{
            setPokebola(0)
        }
    }

    function Pokebola(){
        if (pokebola === 0){
            return <PokebolaFechadaImg src={pokebolaFechada} width="50px"/>
        } else{
            return <PokebolaAbertaImg src={pokebolaAberta} width="50px"/>
        }
    }

  return (
    
    <Container>
        <Header>
            <Menu>
                <Imagem src={pokedex}/>
                <DivPokebola onClick={AbrirPokebola}><Pokebola/></DivPokebola>
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
                        <ButtonDropdown>All Species</ButtonDropdown>
                        <ButtonDropdown>All Regions</ButtonDropdown>
                        <ButtonDropdown>All Colors</ButtonDropdown>
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