import React from "react";
import { mdiSquareEditOutline } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import styles from "./fullUser.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class fullUser extends React.Component {
	componentDidMount() {
		if (this.props.isUserLoggedIn) {
			this.props.onLoad(this.props.uid);
		}
	}

	render() {
		if (this.props.pets !== undefined)
			return (
				<div className={styles.list}>
					{this.props.pets.map((i) => {
						return (
							<div className={styles.item}>
								<p className={styles.text}>{i.nombre}</p>
								<div className={styles.btnGrid}>
									<button icon={mdiSquareEditOutline} title="Editar contenido" iconSize={1} flag="edit" />
									<button icon={mdiDelete} title="Eliminar entrada" iconSize={1} flag="delete" />
								</div>
							</div>
						);
					})}
				</div>
			);

		return "Cargando...";
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
		pets: state.userStore.pets,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: (uid) => dispatch(actionCreators.getMascotas(uid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(fullUser);
