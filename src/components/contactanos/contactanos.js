import React, {Component} from "react";
import ZeriContact from "../../imagenes/petsByZeriContact.png";
import Style from "./contactanos.module.css";
import Send from "../buttons/send/send";
import Footer from "../banners/footer/footer";

const Contactanos = (props) => {
    return (
        <div>
        <div className={Style.grid}>
            <h1>Contáctanos</h1>
            <form action="">
                <input className={Style.input} placeholder={'Nombre'} type="text" required/><br/>
                <input className={Style.input} placeholder={'Correo electrónico'} type="email" required/><br/>
                <textarea className={Style.input} name="" id="" rows="10" placeholder={'Qué nos quieres decir'}/><br/>
                <button className={`hvr-grow ${Style.button}`} type={"submit"}>Enviar</button>
            </form>
        </div>
            <Footer/>
        </div>
    );
};

export default Contactanos;
