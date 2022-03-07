import React, {useState, useEffect} from 'react';
import api from '../../api/api';
import ShortEffect from './short_effect'
import {
    AbilityText
} from './styles'

const ListAbilities = (props) => {

    const [shortEffect, setShortEffect] = useState([]);

    useEffect(() => {
        api.get(props.url)
        .then(res =>{
            setShortEffect(res.data.effect_entries)
        });

    }, [])

    let shortEffectData = null

     if (shortEffect !== null) {
        shortEffectData = shortEffect.map(item => {
            return <ShortEffect
                key={item.short_effect}
                name={item.short_effect}
                language={item.language.name}
            />
        })
    }

    return (
        <div><AbilityText>{props.name}</AbilityText>
        {shortEffectData}
        </div>

    )


}

export default ListAbilities;