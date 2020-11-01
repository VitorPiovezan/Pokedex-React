import React, {useState, useEffect} from 'react';
import api from '../../api/api';
import Individual from '../Pokemon/individual'

import {
    Pokemon,
    TitleDiv,
    Id,
    Title,
    PokemonView,
    ImagePokemon,
    Link,
    ViewTypesPokemon
} from './styles_pokemon';

import ListTypes from './types';

const ListItems = (props) => {

    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const [att, setAtt] = useState(0);
    const [nameCorrect, setNameCorrect] = useState('');
    const [type, setType] = useState([]);

    useEffect(() => {
        api
          .get(props.name)
          .then(({ data }) => {
            setId(data.id);
            setImage(data.sprites.front_default);
            setType(data.types);
            setNameCorrect(
              props.name.substring(0, 1).toUpperCase().concat(props.name.substring(1))
            );
          })
          .catch((err) => console.error(err));
    
      }, []);

    let listaDeTipos = null

     if (type !== null) {
        listaDeTipos = type.map(item => {
            return <ListTypes
                key={item.type.name}
                name={item.type.name}
            />
        })
    }
    

    return (
        <Pokemon>
                
            <Link>
                <TitleDiv>
                    <Id>Nº{id}</Id>
                    <Title>{nameCorrect}</Title>
                </TitleDiv>
                <PokemonView>
                    <ImagePokemon src={image}/>
                    <ViewTypesPokemon>{listaDeTipos}</ViewTypesPokemon>
                </PokemonView> 
            </Link>
        </Pokemon>

    )


}

export default ListItems;