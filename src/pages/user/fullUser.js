import React from "react";
import { mdiDelete, mdiLogoutVariant } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./fullUser.module.css";
import firebase from "../../instances/firebase";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class fullUser extends React.Component {
	state = {
		pets: {},
	};

	componentDidMount() {
		const database = firebase.database();
		var ref = database.ref(`Users/${this.props.uid}/Pets`);
		ref.once(
			"value",
			(snapshot) => {
				let pets = {
					...snapshot.val(),
				};
				this.setState({ pets });
			},
			function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			}
		);
	}

	componentDidUpdate() {
		if (this.props.isUserLoggedIn) {
			const database = firebase.database();
			var ref = database.ref(`Users/${this.props.uid}/Pets`);
			ref.once(
				"value",
				(snapshot) => {
					let pets = {
						...snapshot.val(),
					};
					this.setState({ pets });
				},
				function (errorObject) {
					console.log("The read failed: " + errorObject.code);
				}
			);
		} else {
			this.props.history.push(`/login`);
		}
	}

	handleDelete = (petId) => {
		this.props.onDelete(petId, this.props.uid);
	};

	handleLogOut = (e) => {
		e.preventDefault();
		this.props.onLogOut();
	};

	render() {
		const pets = Object.values(this.state.pets).map(function (obj, i) {
			let newObj = {
				id: i,
				...obj,
			};
			return newObj;
		});

		return (
			<div>
				<div className={styles.ui}>
					<h1>Bienvenido</h1>
					<Icon
						path={mdiLogoutVariant}
						title="cerrar sesión"
						size={2}
						className={styles.logOutBtn}
						onClick={this.handleLogOut}
					/>
				</div>
				<h2>Mascotas</h2>
				<div className={styles.list}>
					{pets.map((i) => {
						return (
							<div className={styles.item}>
								<img src={i.imagen} className={styles.petImg} />
								<h2 className={styles.text}>{i.nombre}</h2>
								<div onClick={() => this.handleDelete(i.id)}>
									<Icon path={mdiDelete} title="Ya no estoy interesado" size={1} className={styles.deleteBtn} />
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLogOut: () => dispatch(actionCreators.logOut()),
		onDelete: (petId, uid) => dispatch(actionCreators.rmPet(petId, uid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(fullUser);
