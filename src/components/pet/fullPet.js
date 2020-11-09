import React from "react";
import axios from "../../instances/axios-pets";
import Style from "./pet.module.css";
import Footer from "../banners/footer/footer";
import firebase from "../../instances/firebase";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

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
				data.map((item) =>
					item.id == id
						? item.Pets.map((pet) => (resp[1] == pet.id ? this.setState({ pet: pet }) : 'console.log("error ID")'))
						: ""
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleClick = () => {
		const database = firebase.database();

		var param = this.props.match.params.id;
		var resp = param.split("_");
		const id = resp[0];
		if (this.props.isUserLoggedIn) {
			let uid = this.props.uid;
			axios
				.get(`/Fundaciones.json`, {})
				.then((res) => {
					const data = res.data;
					data.map((item, i) =>
						item.id == id
							? item.Pets.map((pet, index) =>
									resp[1] == pet.id
										? database
												.ref("Fundaciones/" + i + "/Pets/" + index + "/Interesados/" + uid + "/")
												.set(this.props.userName) &&
										  this.props.onUserClick(index, { nombre: pet.nombre, imagen: pet.imagen }, uid)
										: 'console.log("error ID")'
							  )
							: ""
					);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			this.props.history.push(`/login`);
		}
	};

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
						<button onClick={this.handleClick}>Estoy interesado!</button>
					</div>
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
	return {
		onUserClick: (petId, pet, uid) => dispatch(actionCreators.addPet(petId, pet, uid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FullPet);
