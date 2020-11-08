import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import axios from "../../instances/axios-pets";
import style from "./fundacion.module.css";
import FullImage from "../banners/fullImage/fullImage";
import Tarjeta from "../tarjetas/tarjeta";

class FullFundacion extends React.Component {
	constructor() {
		super();
		this.state = { fundacion: {}, mascotas: [] };
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		axios
			.get(`/Fundaciones.json`, {})
			.then((res) => {
				const data = res.data;
				data.map((item) =>
					item.id === id ? this.setState({ fundacion: item, mascotas: item.Pets }) : <Redirect to="/" />
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className={style.full}>
				<img className={style.banner} src={this.state.fundacion.imagen} alt={this.state.fundacion.imagen} />
				<h2 className={style.title}>{this.state.fundacion.nombre}</h2>
				<div className={style.info}>
					<p>{this.state.fundacion.descripcion}</p>
				</div>
				<h2>Pets</h2>
				<div className={style.div}>
					{this.state.mascotas.map((pet, index) => (
						<Tarjeta
							nombre={pet.nombre}
							imagen={pet.imagen}
							key={index}
							id={this.state.fundacion.id}
							petId={pet.id}
							marca="pets"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default withRouter(FullFundacion);
