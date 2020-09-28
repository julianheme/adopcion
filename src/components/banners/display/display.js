import React from 'react';
import Style from './display.module.css'

const Display = (props) => {
    const bg = props.bg
    let style
    if (bg === 'white'){
        style = Style.divW
    } else {
        style = Style.div
    }
    return (
        <div className={style}>
            <h2>{props.title}</h2>
            <div className={Style.grid}>
                {props.children}
            </div>
            <a href={props.link}><button className={`hvr-grow ${Style.button}`}>Ver más</button></a>
        </div>
    );
};

export default Display;