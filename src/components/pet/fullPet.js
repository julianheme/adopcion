import React from "react";
import { withRouter } from "react-router-dom";
import axios from "../../instances/axios-pets";
import Style from "./pet.module.css";
import Footer from "../banners/footer/footer";

class FullPet extends React.Component {
	constructor() {
		super();
		this.state = { pet: {} };
	}

	componentDidMount() {
		var param = this.props.match.params.id;
		var resp = param.split("_");
		const id = resp[0];
		axios
			.get(`/Fundaciones.json`, {})
			.then((res) => {
				const data = res.data;
				data.find((item) =>
					item.id === id
						? item.Pets.map((pet) => (resp[1] == pet.id ? this.setState({ pet: pet }) : 'console.log("error ID")'))
						: 'console.log("error")'
				);
				/*
                this.setState({pet: data});
				const data = res.data;
				data.map((item) => (item.id === id ? this.setState({ fundacion: item }) : <Redirect to="/" />));*/
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<div className={Style.grid}>
					<div>
						<img className={Style.img} src={this.state.pet.imagen} alt={this.state.pet.imagen} />
					</div>
					<div className={Style.item}>
						<h2>{this.state.pet.nombre}</h2>
						<p>{this.state.pet.descripcion}</p>
						<p>Edad: {this.state.pet.edad}</p>
						<p>Genero: {this.state.pet.genero}</p>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(FullPet);
