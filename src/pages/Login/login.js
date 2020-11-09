import React from "react";
import styles from "./login.module.css";
import Swal from "sweetalert2";
import loginImg from "../../imagenes/Login.png";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class Login extends React.Component {
	state = {
		isUserLoggedIn: this.props.isUserLoggedIn,
		userName: "",
		password: "",
		error: "",
	};

	componentDidUpdate() {
		if (this.state.isUserLoggedIn) {
			this.props.history.push("/");
		} else if (this.state.error !== "") {
			Swal.fire({
				title: "Error",
				text: this.state.error,
				icon: "error",
				confirmButtonText: "Aceptar",
			}).then((result) => {
				this.props.onClearError();
			});
		}
	}

	componentWillReceiveProps(nextState) {
		this.setState({
			isUserLoggedIn: nextState.isUserLoggedIn,
			uid: nextState.uid,
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
				<h1 className={styles.titulo}>Iniciar Sesión</h1>
				<div className={styles.logGrid}>
					<div>
						<img className={styles.imagen} src={loginImg} />
					</div>
					<div className={styles.logDiv}>
						<form onSubmit={this.handleSubmit}>
							<ul className={styles.logCreate}>
								<li className={styles.lItem}>
									<a activeClassName={styles.selected} href="/login">
										<a>Iniciar Sesión</a>
									</a>
								</li>
								<li className={styles.lItem}>
									<a activeClassName={styles.selected} href="/signUp">
										<a>Crear Cuenta</a>
									</a>
								</li>
							</ul>
							<li className={styles.lItem2}>
								<p className={styles.txt}>Usuario</p>
								<input
									className={styles.lInput}
									type="text"
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
							<button type="submit">Ingresar</button>
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
		onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.logIn(authData, onSuccessCallback)),
		onClearError: () => dispatch(actionCreators.clearError()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
