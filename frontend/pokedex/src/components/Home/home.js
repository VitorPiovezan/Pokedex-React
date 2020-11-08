import React, {useEffect, useState} from 'react';
import api from '../../api/api';
import pokedex from '../../assets/images/pokedex.png';
import pokebolaAberta from '../../assets/images/pokebola_2.png';
import pokebolaFechada from '../../assets/images/pokebola_1.png';
import ListItems from './pokemon';
import Dropdown from 'react-dropdown'

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
    const [colorPokemon, setColorPokemon] = useState('')
    const [typeOptions, setTypeOptions] = useState([])
    const [typePokemon, setTypePokemon] = useState('')
    const [colorOptions, setColorOptions] = useState([])
    const [locationPokemon, setLocationPokemon] = useState('')
    const [locationOptions, setLocationOptions] = useState([])
    const [locationOptionsBusca, setLocationOptionsBusca] = useState([])

        useEffect(() => {

            api.get('pokemon-color/')
            .then(res => {
                const array = res.data.results.map(item => ({value: item.name, label: item.name}))
                setColorOptions(array)
                
            })

            api.get('type/')
            .then(res => {
                const array = res.data.results.map(item => ({value: item.name, label: item.name}))
                setTypeOptions(array)
            })

            api.get('location-area/?offset=0&limit=700')
            .then(res => {
                const array = res.data.results.map(item => ({value: item.name.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' '), label: item.name.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')}))
                console.log(array)
                const arrayBusca = res.data.results.map(item => ({value: item.name, label: item.name}))
                setLocationOptions(array)
                setLocationOptionsBusca(arrayBusca)
            })




            console.log(colorOptions)

            if (colorPokemon !== "" && colorPokemon.value !== 'All_Colors'){
                api.get('pokemon-color/'+colorPokemon.value)
                .then(res => {
                    setPokemon(res.data.pokemon_species)
                })
            } 
            
            else if (typePokemon !== "" && typePokemon.value !== 'All'){
                api.get('type/'+typePokemon.value)
                .then(res => {
                    setPokemon(res.data.pokemon)
                })
            }

            else {
                allPokemons()
            }

        }, [att, colorPokemon, typePokemon]);

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

    function allPokemons(){
        const way = '?offset='+att+'&limit=20';
            api.get('pokemon'+way)
            .then(res => {
                setPokemon(res.data.results);
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
                        <ButtonDropdown><Dropdown options={colorOptions} onChange={setColorPokemon} value={colorPokemon} placeholder="All Colors" /></ButtonDropdown>
                        <ButtonDropdown><Dropdown options={typeOptions} onChange={setTypePokemon} value={typePokemon} placeholder="All Types" /></ButtonDropdown>
                        <ButtonDropdown><Dropdown options={locationOptions} onChange={setLocationPokemon} value={locationPokemon} placeholder="All Regions" /></ButtonDropdown>
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