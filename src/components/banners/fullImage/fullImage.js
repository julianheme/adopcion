import React from 'react';
import style from './fullImage.module.css'

const FullImage = (props) => {
    const img = props.image
    function changeBG() {

    }
    return (
        <div className={style.main} style={{'background':`url(${img}) no-repeat center`, backgroundSize: '100% 100%'}}>
            {props.children}
        </div>
    );
};

export default FullImage;