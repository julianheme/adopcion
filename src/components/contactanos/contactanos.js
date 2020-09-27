import React, { Component } from "react";
import ZeriContact from "../../imagenes/petsByZeriContact.png";
const Contactanos = (props) => {
	const l = {
		main: { padding: "3%", width: "100%" },
		titulo: {
			fontSize: "90px",
			fontFamily: "Cookie-Regular",
			textAlign: "center",
			fontWeight: "normal",
			padding: "0% 3%",
		},
		grid: { display: "grid", gridTemplateColumns: "60% 40%" },
		item1: { column: "span 1", width: "100%" },
		item2: { column: "span 1", width: "100%", margin: "0% auto" },
		input: {
			width: "80%",
			resize: "none",
			padding: "2%",
			fontSize: "16px",
			fontFamily: "Poppins-Regular",
			borderRadius: "10px",
			border: "none",
			outline: "none",
			boxShadow: "2px 2px 15px -1px rgba(0,0,0,0.15)",
			display: "block",
			margin: "1.5% auto",
		},
		smallgrid: { display: "grid", gridTemplateColumns: "50% 50%", width: "100%" },
		miniitem: { columns: "span 1" },
		image: { width: "80%" },
		subtitulo: { marginTop: "0px" },
		icono: { display: "block", height: "1.6em", float: "left" },
	};
	const m = {
		main: { padding: "2%", width: "100%" },
		titulo: {
			fontSize: "78.75px",
			fontFamily: "Cookie-Regular",
			textAlign: "center",
			fontWeight: "normal",
		},
		grid: { display: "grid", gridTemplateColumns: "60% 40%" },
		item1: { columns: "span 1", width: "100%" },
		item2: { columns: "span 2", width: "100%", margin: "auto", textAlign: "center" },
		input: {
			width: "70%",
			resize: "none",
			padding: "2%",
			marginBottom: "3%",
			fontSize: "14px",
			fontFamily: "Poppins-Regular",
			borderRadius: "10px",
			border: "none",
			outline: "none",
			boxShadow: "2px 2px 15px -1px rgba(0,0,0,0.15)",
			display: "block",
			margin: "0.5% auto",
		},
		smallgrid: { display: "grid", gridTemplateColumns: "50% 50%", width: "100%" },
		miniitem: { columns: "span 1", fontSize: "14px" },
		image: { width: "80%" },
		subtitulo: { marginTop: "0px" },
		icono: { display: "block", height: "1.6em", float: "left" },
	};
	const s = {
		main: { padding: "3%", width: "100%" },
		titulo: {
			fontSize: "67.5px",
			fontFamily: "Cookie-Regular",
			textAlign: "center",
			fontWeight: "normal",
		},
		grid: { display: "grid", gridTemplateColumns: "100%" },
		item1: { columns: "span 1", width: "100%" },
		item2: { columns: "span 2", width: "100%" },
		input: {
			width: "100%",
			resize: "none",
			padding: "2%",
			marginBottom: "3%",
			fontSize: "16px",
			fontFamily: "Poppins-Regular",
			borderRadius: "10px",
			border: "none",
			outline: "none",
			boxShadow: "2px 2px 15px -1px rgba(0,0,0,0.15)",
		},
		smallgrid: { display: "grid", gridTemplateColumns: "100%", width: "100%" },
		miniitem: { column: "span 1" },
		image: { width: "100%" },
		icono: { display: "block", height: "1.6em", float: "left" },
	};
	return (
		<div style={l.main}>
			<h1>Contáctanos</h1>
			<div style={l.grid}>
				<div style={l.item1}>
					<h2 style={l.subtitulo}>{props.titulo2}</h2>
					<img src={ZeriContact} style={l.image} alt="Pets by Zeri Dev" />
					<div style={l.smallgrid}>
						<div style={l.miniitem}>
							<h3 style={{ display: "inline-block", marginTop: "0px" }}>master@zeri.dev</h3>
						</div>
						<div style={l.miniitem}>
							<h3 style={{ display: "inline-block", marginTop: "0px" }}>
								(+57) 315 557 0782
								<br />
							</h3>
						</div>
					</div>
				</div>
				<div style={l.item2}>
					<form id="contactForm">
						<input style={l.input} name="from_name" type="text" placeholder={"Nombre"} />
						<br />
						<input style={l.input} name="email" type="email" placeholder={"Correo electrónico"} />
						<br />
						<input style={l.input} name="subject" type="text" placeholder={"Asunto"} />
						<br />
						<textarea
							style={l.input}
							name="message"
							rows={"6"}
							placeholder={"Cuentanos tu interés en esta iniciativa!"}
						/>
						<br />
						<button /*className={styles.button} type={"submit"}*/>Enviar</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contactanos;
