import React from "react";
import axios from "../../instances/axios-pets";
import Style from "./pet.module.css";
import Footer from "../banners/footer/footer";
import firebase from "../../instances/firebase";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Swal from "sweetalert2";

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
			Swal.fire("Mascota agregada", "Podrás ver las mascotas de tu interés en tu perfil", "success");
		} else {
			this.props.history.push(`/login`);
		}
	};

	render() {
		return (
			<div>
				<div className={Style.grid}>
					<div className={Style.item}>
						<h2 className={Style.title}>{this.state.pet.nombre}</h2>
						<p>{this.state.pet.descripcion}</p>
						<p className={Style.p}>
							<b>Edad:</b> {this.state.pet.edad}
						</p>
						<p className={Style.p}>
							<b>Género:</b> {this.state.pet.genero}
						</p>
						<p className={Style.p}>
							<b>Descripción: </b>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae quam id ex condimentum auctor nec
							placerat sem. Nulla luctus, ligula sed condimentum sollicitudin, leo ex dictum magna, quis volutpat ex
							lacus et orci. Proin et dui ante. Etiam bibendum purus et iaculis faucibus. Maecenas sodales, augue vel
							consectetur rutrum, magna nisl suscipit neque, in dapibus tellus enim ut neque. Maecenas sed vulputate
							dolor. Morbi ligula nunc, consequat in erat id, rutrum aliquet leo. Aenean varius finibus diam. Sed vitae
							metus posuere, suscipit lorem ac, maximus turpis. Proin viverra rhoncus est, vel fringilla ante eleifend
							eget.
						</p>
						<button className={`hvr-grow ${Style.button}`} onClick={this.handleClick}>
							Estoy interesado!
						</button>
					</div>
					<div>
						<img className={Style.img} src={this.state.pet.imagen} alt={this.state.pet.imagen} />
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
