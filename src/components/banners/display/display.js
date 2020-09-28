import React from 'react';
import Style from './display.module.css'

const Display = (props) => {
    return (
        <div className={Style.div}>
            <h2>{props.title}</h2>
            <div className={Style.grid}>
                {props.children}
            </div>
        </div>
    );
};

export default Display;