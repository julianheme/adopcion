import React from "react";
import BannerP from "../../components/banners/main/bannerP";
import axios from "axios";
import Fundaciones from "../../components/fundacion/fundaciones";
import Contactanos from "../../components/contactanos/contactanos";
import styles from "./home.module.css";
import Tiendas from "../../components/tienda/tiendas";
import Display from "../../components/banners/display/display";
import Fundacion from "../../components/fundacion/fundacion";
import Tarjetas from "../../components/tarjetas/tarjetas";

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
				<h1>Pets by Zeri</h1>
				<BannerP />
				<Display title={"Fundaciones Aliadas"}>
					{this.state.fundaciones.map((fundacion, index) => {
						return <Fundacion nombre={fundacion.nombre} imagen={fundacion.imagen} key={index} id={index} />;
					})}
				</Display>
				<h2>Fundaciones Aliadas</h2>
				<Tarjetas arreglo={this.state.fundaciones} marca="fundaciones" />

				<h2>Tiendas Aliadas</h2>
				<Tarjetas arreglo={this.state.tiendas} marca="tiendas" />
			</div>
		);
	}
}
