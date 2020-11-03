import React, {useState, useEffect} from 'react';
import api from '../../api/api';
import Individual from '../Pokemon/individual'
import defaultPhoto from '../../assets/images/silueta_pikachu.png'

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
    const [image, setImage] = useState(null);
    const [att, setAtt] = useState(0);
    const [nameCorrect, setNameCorrect] = useState('');
    const [type, setType] = useState([]);

    useEffect(() => {
        api
          .get(props.name)
          .then(({ data }) => {
            if(data.id <= 9){
                setId('00'+data.id)
            } else if(data.id > 9 && data.id <= 99){
                setId('0'+data.id)
            } else {
                setId(data.id)
            }
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

    function ImagePokemonDefault(){
        if (image === null || image === '' || image === 'null'){
            return <ImagePokemon src={defaultPhoto} />
        }else {
            return <ImagePokemon src={image}/>
        }
    }
    

    return (
        <Pokemon>
                
            <Link href={"/pokemon/"+props.name}>
                <TitleDiv>
                    <Id>Nº{id}</Id>
                    <Title>{nameCorrect}</Title>
                </TitleDiv>
                <PokemonView>
                    <ImagePokemonDefault/>
                    <ViewTypesPokemon>{listaDeTipos}</ViewTypesPokemon>
                </PokemonView> 
            </Link>
        </Pokemon>

    )


}

export default ListItems;