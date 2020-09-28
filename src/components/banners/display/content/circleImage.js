import React from 'react';
import gato from '../../../../imagenes/Gato1.jpg'
import Style from './circleImage.module.css'

const CircleImage = (props) => {
    return (
        <img className={Style.image} src={gato} alt={gato}/>
    );
};

export default CircleImage;