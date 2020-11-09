import React from "react";
import styles from "./signUp.module.css";
import registerImg from "../../imagenes/register.png";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class SignUp extends React.Component {
	state = {
		isUserLoggedIn: "",
		userName: "",
		password: "",
		error: "",
	};

	componentDidUpdate() {
		if (this.state.isUserLoggedIn) {
			this.props.history.push("/");
		} else if (this.state.error !== "") {
			Swal.fire({
				title: "Ha ocurrido un error",
				text: this.state.error,
				icon: "error",
				confirmButtonText: "Entendido",
			}).then((result) => {
				this.props.onClearError();
			});
		}
	}

	componentWillReceiveProps(nextState) {
		this.setState({
			isUserLoggedIn: nextState.isUserLoggedIn,
			error: nextState.error,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.userName,
			password: this.state.password,
		};

		this.props.onUserLogin(userData, () => {
			this.props.history.push(`/`);
		});
	};

	handleChange = (e, target) => {
		var updatedState = {
			...this.state,
		};
		updatedState[target] = e.target.value;
		this.setState({
			userName: updatedState.userName,
			password: updatedState.password,
		});
	};

	render() {
		return (
			<div className={styles.main}>
				<h1 className={styles.titulo}>Crear Cuenta</h1>
				<div className={styles.logGrid}>
					<div>
						<img className={styles.imagen} src={registerImg} />
					</div>
					<div className={styles.logDiv}>
						<form onSubmit={this.handleSubmit}>
							<ul className={styles.logCreate}>
								<li className={styles.lItem}>
									<a href="/login">
										<a>Iniciar Sesión</a>
									</a>
								</li>
								<li className={styles.lItem}>
									<a href="/signUp">
										<a>Crear Cuenta</a>
									</a>
								</li>
							</ul>
							<li className={styles.lItem2}>
								<p className={styles.txt}>Correo</p>
								<input
									className={styles.lInput}
									type="email"
									onChange={(e) => {
										this.handleChange(e, "userName");
									}}
								/>
							</li>
							<li className={styles.lItem2}>
								<p className={styles.txt}>Contraseña</p>
								<input
									className={styles.lInput}
									type="password"
									onChange={(e) => {
										this.handleChange(e, "password");
									}}
								/>
							</li>

							<li className={styles.lItem2}>
								<input type="checkbox" />
								<a className={styles.terms}>Aceptar términos y condiciones</a>
							</li>
							<button type="submit">registrarme</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
		loadingAuth: state.authStore.loadingAuth,
		error: state.errorStore.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
		onClearError: () => dispatch(actionCreators.clearError()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
