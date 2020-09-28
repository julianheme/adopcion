import React from "react";
import BannerP from "../../components/banners/main/bannerP";
import axios from "axios";
import styles from "./home.module.css";
import Display from "../../components/banners/display/display";
import CircleImage from "../../components/banners/display/content/circleImage";
import Tarjeta from "../../components/tarjetas/tarjeta";
import Footer from "../../components/banners/footer/footer";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [], tiendas: [], mascotas: [] };
		this.shuffledF = [];
		this.shuffledT = [];
		this.shuffledM = [];
	}

	componentDidMount() {
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.shuffledF = data.fundaciones.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.shuffledT = data.tiendas.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.shuffledM = data.mascotas.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.setState({ fundaciones: data.fundaciones, tiendas: data.tiendas, mascotas: data.mascotas });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className={styles.main}>
				{console.log(this.state.tiendas)}
				<BannerP />

				<Display title={"Fundaciones Aliadas"} link={"/fundaciones"} bg={"white"}>
					{this.shuffledF.map((fundacion, index) => {
						return (
							<Tarjeta
								nombre={fundacion.nombre}
								imagen={fundacion.imagen}
								key={index}
								id={fundacion.id}
								marca="fundaciones"
							/>
						);
					})}
				</Display>
				<h2>Pets</h2>
				<div className={styles.div}>
					{this.state.mascotas.map((pet, index) => (
						<Tarjeta nombre={pet.nombre} imagen={pet.imagen} key={index} id={pet.id} marca="pets" />
					))}
				</div>
				<Display title={"Tiendas Aliadas"} link={"/tiendas"} bg={"white"}>
					{this.shuffledT.map((tienda, index) => {
						return (
							<Tarjeta
								nombre={tienda.nombre}
								imagen={tienda.imagen}
								key={index}
								id={tienda.id}
								marca="tiendas"
								link={tienda.Link}
							/>
						);
					})}
				</Display>
				<Footer />
			</div>
		);
	}
}
