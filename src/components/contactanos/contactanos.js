import React, { Component } from "react";
import axios from "../../instances/axios-pets";
import ZeriContact from "../../imagenes/petsByZeriContact.png";
import Style from "./contactanos.module.css";
import Footer from "../banners/footer/footer";
import firebase from "../../instances/firebase";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class Contactanos extends React.Component {
	state = {
		fundaciones: [],
		contacto: {},
	};

	componentDidMount() {
		axios
			.get(`/.json`, {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundaciones: data.Fundaciones });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const database = firebase.database();

		let name = e.target.name.value;
		let email = e.target.email.value;
		let fundacion = e.target.fundacion.value;
		let msg = e.target.msg.value;

		this.setState({ contacto: { nombre: name, email: email, msg: msg } });

		axios
			.get(`/Fundaciones.json`, {})
			.then((res) => {
				const data = res.data;
				data.map((item, i) =>
					item.id == fundacion
						? database.ref("Fundaciones/" + i + "/InterestedUsers/" + this.props.uid + "/").set(this.state.contacto)
						: ""
				);
			})
			.catch((error) => {
				console.log(error);
			});
		Swal.fire("Mensaje enviado correctamente", "La fundacion te respondera pronto!", "success");
	};

	render() {
		return (
			<div>
				<div className={Style.grid}>
					<h1>Contáctanos</h1>
					<form onSubmit={this.handleSubmit}>
						<input className={Style.input} placeholder={"Nombre"} type="text" id="name" required />
						<br />
						<input
							className={Style.input}
							placeholder={"Correo electrónico"}
							type="email"
							id="email"
							required
							value={this.props.isUserLoggedIn ? this.props.userName : ""}
						/>
						<br />
						<select defaultValue="def" className={Style.input} id="fundacion">
							<option value="def">Selecciona fundacion</option>
							{this.state.fundaciones.map((item) => {
								return <option value={item.id}>{item.nombre}</option>;
							})}
						</select>
						<br />
						<textarea className={Style.input} name="" id="" rows="10" placeholder={"Qué nos quieres decir"} id="msg" />
						<br />
						<button className={`hvr-grow ${Style.button}`} type={"submit"}>
							Enviar
						</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
		userName: state.authStore.user.userName,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contactanos);
