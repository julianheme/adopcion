import React from "react";
import styles from "./signUp.module.css";
import registerImg from "../../imagenes/register.png";

export default class SignUp extends React.Component {
	render() {
		const l = {
			main: {
				background: "#fff",
				padding: "3%",
			},
			titulo: {
				fontSize: "90px",
				fontFamily: "Cookie-Regular",
				textAlign: "center",
				fontWeight: "normal",
				padding: "0% 3%",
			},
			logGrid: {
				display: "grid",
				gridTemplateColumns: "repeat(2, 50%)",
			},
			imagen: {
				width: "100%",
				heigth: "auto",
				padding: "1.5% 3% 3% 3%",
			},
			logDiv: {
				marginLeft: "30%",
				display: "flex",
				listStyle: "none",
			},
			logCreate: {
				display: "flex",
				flexDirection: "row",
				listStyle: "none",
				width: "300px",
				padding: "0",
				borderBottom: "solid #c8cccc 1px",
			},
			lItem: { margin: "2%", padding: "10px" },
			lItem2: { margin: "auto", padding: "3px" },
			lInput: { margin: "auto", padding: "5px", width: "270px" },
			txt: { margin: "0", padding: "0", color: "#919797" },
			terms: { margin: "0", padding: "0", fontSize: "12px", color: "#fe1177" },
		};
		return (
			<div style={l.main}>
				<h1 style={l.titulo}>Crear Cuenta</h1>
				<div style={l.logGrid}>
					<div>
						<img style={l.imagen} src={registerImg} />
					</div>
					<div style={l.logDiv}>
						<form>
							<ul style={l.logCreate}>
								<li style={l.lItem}>
									<a href="/login">
										<a>Iniciar Sesión</a>
									</a>
								</li>
								<li style={l.lItem}>
									<a href="/signUp">
										<a>Crear Cuenta</a>
									</a>
								</li>
							</ul>
							<li style={l.lItem2}>
								<p style={l.txt}>Correo</p>
								<input style={l.lInput} type="email" />
							</li>
							<li style={l.lItem2}>
								<p style={l.txt}>Contraseña</p>
								<input style={l.lInput} type="password" />
							</li>

							<li style={l.lItem2}>
								<input type="checkbox" />
								<a style={l.terms}>Aceptar términos y condiciones</a>
							</li>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
