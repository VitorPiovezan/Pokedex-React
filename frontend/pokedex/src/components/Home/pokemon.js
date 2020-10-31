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
    Link
} from './styles_pokemon';

const ListItems = (props) => {

    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const [att, setAtt] = useState(0);
    const [nameCorrect, setNameCorrect] = useState('');
    const [type, setType] = useState([])

    useEffect(() => {
        api.get(props.name)
            .then(res => {
                setId(res.data.id);
                setImage(res.data.sprites.front_default);
                res.data.types.map(item => {setType([...type, {type: item.type.name}])}) 
                console.log(type);         
                setNameCorrect(props.name.substring(0,1).toUpperCase().concat(props.name.substring(1)));
            });
    }, [att]);

    return (
        <Pokemon>
                
            <Link href="">
                <TitleDiv>
                    <Id>Nº{id}</Id>
                    <Title>{nameCorrect}</Title>
                </TitleDiv>
                <PokemonView>
                    <ImagePokemon src={image}/>
                </PokemonView> 
            </Link>
        </Pokemon>

    )


}

export default ListItems;