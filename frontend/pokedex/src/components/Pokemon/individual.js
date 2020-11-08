import React, {useEffect, useState} from 'react'
import api from '../../api/api'
import pokedex from '../../assets/images/pokedex.png'
import ListTypes from '../Home/types'
import ListAbilities from '../Pokemon/abilities'

import { 
    Container, 
    Header, 
    Menu, 
    Imagem, 
    Main, 
} from '../Home/styles'

import {
    TitlePokemon,
    SubTitlePokemon,
    Search,
    PokemonAbility,
    DivImgPokemon,
    ImgPokemonIndividual,
    DivEspecificacoes,
    DivColunaUm,
    TitleColunaUm,
    ColunaUm,
    LinhaUm,
    DivColunaDois,
    TitleColunaDois,
    ColunaDois,
    Linha,
    AbilityDiv,
    PokemonEvolutions,
    DivEvolutions,
    TitleEvolutions
} from './styles'

import {
    useParams
} from 'react-router-dom'


export default function Individual() {

    let { id } = useParams();

    const [imgPokemon, setImgPokemon] = useState('');
    const [pokemonId, sePokemonId] = useState('');
    const [nameCorrect, setNameCorrect] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [type, setType] = useState([]);
    const [abilities, setAbilities] = useState([]);


    useEffect(() => {
        api.get('pokemon/'+id)
        .then(res =>{
            setImgPokemon(res.data.sprites.front_default);
            setWeight(res.data.weight / 10 + ' kg');
            setHeight(res.data.height / 10 + ' m');
            setType(res.data.types);
            setAbilities(res.data.abilities);

            if (res.data.sprites.other.dream_world.front_default === null){
                setImgPokemon(res.data.sprites.front_default)
            }else {
                setImgPokemon(res.data.sprites.other.dream_world.front_default)
            }

            if(res.data.id <= 9){
                sePokemonId('00'+res.data.id)
            } else if(res.data.id > 9 && res.data.id <= 99){
                sePokemonId('0'+res.data.id)
            } else {
                sePokemonId(res.data.id)
            }

            setNameCorrect(
                id.substring(0, 1).toUpperCase().concat(id.substring(1))
              );
        });

    }, [])

    let listaDeTipos = null

     if (type !== null) {
        listaDeTipos = type.map(item => {
            return <ListTypes
                key={item.type.name}
                name={item.type.name}
            />
        })
    }

    let abilitiesPokemons = null

     if (abilities !== null) {
        abilitiesPokemons = abilities.map(item => {
            return <ListAbilities
                key={item.ability.name}
                name={item.ability.name}
                url={item.ability.url}
            />
        })
    }


return (
    
    <Container>
        <Header>
            <a href="/"><Menu>
                <Imagem src={pokedex}/>
            </Menu></a>
        </Header>

        <Main>
            <Search>
                <TitlePokemon>{nameCorrect}</TitlePokemon>
                <SubTitlePokemon>Nº{pokemonId}</SubTitlePokemon>
            </Search>
            
            <PokemonAbility>

                <DivImgPokemon>
                    <ImgPokemonIndividual src={imgPokemon}/>
                </DivImgPokemon>

                <DivEspecificacoes>

                    <Linha>
                        <DivColunaUm>
                            <TitleColunaUm>Weight</TitleColunaUm>
                            <ColunaUm>{weight}</ColunaUm>
                        </DivColunaUm>

                        <DivColunaDois>
                            <TitleColunaDois>Height</TitleColunaDois>
                            <ColunaDois>{height}</ColunaDois>
                        </DivColunaDois>
                    </Linha>

                    <Linha>
                        <DivColunaUm>
                            <TitleColunaUm>Types</TitleColunaUm>
                            <LinhaUm>{listaDeTipos}</LinhaUm>
                        </DivColunaUm>
                    </Linha>

                    <Linha>
                        <DivColunaUm>
                            <TitleColunaUm>Abilities</TitleColunaUm>
                            <AbilityDiv>{abilitiesPokemons}</AbilityDiv>
                        </DivColunaUm>
                    </Linha>

                </DivEspecificacoes>

            </PokemonAbility>

            <PokemonEvolutions>
                <DivEvolutions>
                    <TitleEvolutions>Evolutions</TitleEvolutions>
                    
                </DivEvolutions>
            </PokemonEvolutions>
    
        </Main>

    </Container>

    );
}