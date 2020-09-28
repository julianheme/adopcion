import React from "react";
import BannerP from "../../components/banners/main/bannerP";
import axios from "axios";
import Fundaciones from "../../components/fundacion/fundaciones";
import Contactanos from "../../components/contactanos/contactanos";
import styles from "./home.module.css";
import Tiendas from "../../components/tienda/tiendas";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [], tiendas: [] };
	}

	componentDidMount() {
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundaciones: data.fundaciones, tiendas: data.tiendas });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className={styles.main}>
				<BannerP />
				<h2>Fundaciones Aliadas</h2>
				<Fundaciones fundaciones={this.state.fundaciones} />
				<h2>Tiendas Aliadas</h2>
				<Tiendas tiendas={this.state.tiendas} />
				<Contactanos titulo={"Contáctanos"} titulo2={"Quienes somos"} />
			</div>
		);
	}
}
