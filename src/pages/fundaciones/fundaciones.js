import React from "react";
import axios from "../../instances/axios-pets";
import styles from "./fundaciones.module.css";
import Tarjetas from "../../components/tarjetas/tarjetas";
import Footer from "../../components/banners/footer/footer";

export default class FundacionesP extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [] };
	}
	componentDidMount() {
		axios
			.get("/.json", {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundaciones: data.Fundaciones });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className={styles.main}>
				<div className={styles.wrapper}>
					<h1>Fundaciones Aliadas</h1>
					<Tarjetas arreglo={this.state.fundaciones} marca="fundaciones" />
				</div>
				<Footer />
			</div>
		);
	}
}
