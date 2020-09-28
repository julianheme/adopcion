import React, {Component} from "react";
import ZeriContact from "../../imagenes/petsByZeriContact.png";
import Style from "./contactanos.module.css";
import Send from "../buttons/send/send";

const Contactanos = (props) => {
    return (
        <div className={Style.grid}>
            <h2>Contáctanos</h2>
            <form action="">
                <input className={Style.input} placeholder={'Nombre'} type="text" required/><br/>
                <input className={Style.input} placeholder={'Correo electrónico'} type="email" required/><br/>
                <textarea className={Style.input} name="" id="" rows="10" placeholder={'Qué nos quieres decir'}/><br/>
                <button className={`hvr-grow ${Style.button}`} type={"submit"}>Enviar</button>
            </form>
        </div>
    );
};

export default Contactanos;
