import React from "react";
import axios from "../../instances/axios-pets";
import styles from "./tiendas.module.css";
import Tarjetas from "../../components/tarjetas/tarjetas";
import Footer from "../../components/banners/footer/footer";

export default class TiendasP extends React.Component {
	constructor() {
		super();
		this.state = { tiendas: [] };
	}

	componentDidMount() {
		axios
			.get("/.json", {})
			.then((res) => {
				const data = res.data;
				this.setState({ tiendas: data.Tiendas });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className={styles.main}>
				<div className={styles.wrapper}>
					<h1>Tiendas Aliadas</h1>
					<Tarjetas arreglo={this.state.tiendas} marca="tiendas" />
				</div>
				<Footer />
			</div>
		);
	}
}
