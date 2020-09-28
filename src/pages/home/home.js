import React from "react";
import BannerP from "../../components/banners/main/bannerP";
import axios from "axios";
import Fundaciones from "../../components/fundacion/fundaciones";
import Contactanos from "../../components/contactanos/contactanos";
import styles from "./home.module.css";
import Tiendas from "../../components/tienda/tiendas";
import Display from "../../components/banners/display/display";
import Fundacion from "../../components/fundacion/fundacion";
import CircleImage from "../../components/banners/display/content/circleImage";
import Tarjeta from "../../components/tarjetas/tarjeta";
import Tienda from "../../components/tienda/tienda";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [], tiendas: [] };
		this.shuffledF = [];
		this.shuffledT = [];
	}

	componentDidMount() {
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.shuffledF = data.fundaciones.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.shuffledT = data.tiendas.sort(() => Math.random() - Math.random()).slice(0, 4);
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

				<Display title={"Fundaciones Aliadas"} link={"/fundaciones"}>
					{this.shuffledF.map((fundacion, index) => {
						return <Tarjeta nombre={fundacion.nombre} imagen={fundacion.imagen} key={index} id={index} marca='fundaciones' />;
					})}
				</Display>
				<div className={styles.div}>
					<h2>Pets</h2>
					<div className={styles.grid}>
						aqui van los animales choko

					</div>
				</div>
				<Display title={"Tiendas Aliadas"} link={"/tiendas"}>
					{this.shuffledT.map((tienda, index) => {
						return <Tienda nombre={tienda.nombre} imagen={tienda.imagen} key={index} id={index} />;
					})}
				</Display>
			</div>
		);
	}
}
