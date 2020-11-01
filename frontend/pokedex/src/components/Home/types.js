import React, {useState, useEffect} from 'react';

import {
    ViewType,
    TextType
} from './styles_pokemon'

const ListTypes = (props) => {

    const [background, setBackground] = useState('')
    const [color, setColor] = useState('')

    useEffect(() => {
    if (props.name === 'bug'){
        setBackground('#729f3f')
        setColor('#fff')
    }else if (props.name === 'dark'){
        setBackground('#707070')
        setColor('#fff')
    }else if  (props.name === 'dragon'){
        setBackground('#f16e57')
        setColor('#fff')
    }else if  (props.name === 'electric'){
        setBackground('#eed535')
        setColor('#000')
    }else if  (props.name === 'fairy'){
        setBackground('#fdb9e9')
        setColor('#000')
    }else if  (props.name === 'fighting'){
        setBackground('#d56723')
        setColor('#fff')
    }else if  (props.name === 'fire'){
        setBackground('#fd7d24')
        setColor('#fff')
    }else if  (props.name === 'flying'){
        setBackground('#3dc7ef')
        setColor('#000')
    }else if  (props.name === 'ghost'){
        setBackground('#7b62a3')
        setColor('#fff')
    }else if  (props.name === 'grass'){
        setBackground('#9bcc50')
        setColor('#fff')
    }else if  (props.name === 'ground'){
        setBackground('#f7de3f')
        setColor('#000')
    }else if  (props.name === 'ice'){
        setBackground('#51c4e7')
        setColor('#000')
    }else if  (props.name === 'normal'){
        setBackground('#a4acaf')
        setColor('#fff')
    }else if  (props.name === 'poison'){
        setBackground('#b97fc9')
        setColor('#fff')
    }else if  (props.name === 'psychic'){
        setBackground('#f366b9')
        setColor('#fff')
    }else if  (props.name === 'rock'){
        setBackground('#a38c21')
        setColor('#fff')
    }else if  (props.name === 'steel'){
        setBackground('#9eb7b8')
        setColor('#000')
    }else if  (props.name === 'water'){
        setBackground('#4592c4')
        setColor('#fff')
    }
    }, []);

    return (

        <ViewType color={background}>
            <TextType color={color}>{props.name}</TextType>
        </ViewType>

    )


}

export default ListTypes;