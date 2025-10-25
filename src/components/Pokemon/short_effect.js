import React from 'react';
import { ShortEffectText } from './styles';

const ShortEffect = props => {
  if (props.language === 'en') {
    return <ShortEffectText>{props.name}</ShortEffectText>;
  } else {
    return <p></p>;
  }
};
export default ShortEffect;
