import React from "react";
import styles from "./signUp.module.css";
import registerImg from "../../imagenes/register.png";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import Footer from "../../components/banners/footer/footer";

class SignUp extends React.Component {
	state = {
		userName: "",
		password: "",
		telefono: "",
		direccion: "",
	};

	componentDidUpdate() {
		if (this.state.isUserLoggedIn) {
			this.props.history.push("/");
		}
	}

	componentWillReceiveProps(nextState) {
		this.setState({
			isUserLoggedIn: nextState.isUserLoggedIn,
			//error: nextState.error,
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const userData = {
			email: this.state.userName,
			password: this.state.password,
			telefono: this.state.telefono,
			direccion: this.state.direccion,
		};

		this.props.onUserLogin(userData, () => {
			this.props.history.push(`/`);
		});
	};

	handleChange = (e, target) => {
		const re = /^[0-9\b]+$/;

		var updatedState = {
			...this.state,
		};
		updatedState[target] = e.target.value;
		console.log(updatedState[target]);
		this.setState({
			userName: updatedState.userName,
			password: updatedState.password,
			telefono: updatedState.telefono,
			direccion: updatedState.direccion,
		});
	};

	render() {
		return (
	<div>
			<div className={styles.main}>
				<h1>Crear Cuenta</h1>
				<div className={styles.logGrid}>
					<div>
						<img className={styles.imagen} src={registerImg} />
					</div>
					<div className={styles.logDiv}>
						<form onSubmit={this.handleSubmit}>
							<ul className={styles.logCreate}>
								<li className={styles.lItem}>
									<a href="/login">
										<a className={styles.a}>Iniciar Sesión</a>
									</a>
								</li>
								<li className={styles.lItem}>
									<a href="/signUp">
										<a className={styles.a}>Crear Cuenta</a>
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
								<p className={styles.txt}>Telefono</p>
								<input
									className={styles.lInput}
									type="text"
									onChange={(e) => {
										this.handleChange(e, "telefono");
									}}
								/>
							</li>
							<li className={styles.lItem2}>
								<p className={styles.txt}>Dirección</p>
								<input
									className={styles.lInput}
									type="text"
									onChange={(e) => {
										this.handleChange(e, "direccion");
									}}
								/>
							</li>
							<li className={styles.lItem2}>
								<label htmlFor="confirm"><input type="checkbox" id={'confirm'} required />
								<a className={styles.terms}>Es usted mayor de 21 años?</a></label>
							</li>
							<button className={styles.button} type="submit">Registrarme</button>
						</form>
					</div>
				</div>
			</div>
		<Footer/>
	</div>
		);

	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
		loadingAuth: state.authStore.loadingAuth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onUserLogin: (authData, onSuccessCallback) => dispatch(actionCreators.signUp(authData, onSuccessCallback)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
