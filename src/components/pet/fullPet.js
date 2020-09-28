import React from "react";
import {withRouter} from "react-router-dom";
import axios from "axios";
import Style from './pet.module.css'
import Footer from "../banners/footer/footer";

class FullPet extends React.Component {
    constructor() {
        super();
        this.state = {pet: {}};
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        axios
            .get(`https://api.npoint.io/0f9ca95d1058038e320a/mascotas/${id}`, {})
            .then((res) => {
                const data = res.data;
                this.setState({pet: data});
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
            <div  className={Style.grid}>
                <div>
                    <img className={Style.img} src={this.state.pet.imagen} alt={this.state.pet.imagen}/>
                </div>
                <div className={Style.item}>
                    <h2>{this.state.pet.nombre}</h2>
                    <p>{this.state.pet.descripcion}</p>
                    <p>Edad: {this.state.pet.Edad}</p>
                    <p>Genero: {this.state.pet.Genero}</p>
                </div>
            </div>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(FullPet);
