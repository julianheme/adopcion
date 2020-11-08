import React from "react";
import BannerP from "../../components/banners/main/bannerP";
import axios from "../../instances/axios-pets";
import styles from "./home.module.css";
import Display from "../../components/banners/display/display";
import CircleImage from "../../components/banners/display/content/circleImage";
import Tarjeta from "../../components/tarjetas/tarjeta";
import Footer from "../../components/banners/footer/footer";

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [], tiendas: [] };
		this.shuffledF = [];
		this.shuffledT = [];
		this.shuffledM = [];
	}

	componentDidMount() {
		axios
			.get("/.json", {})
			.then((res) => {
				const data = res.data;
				let petsArr = data.Fundaciones.map((data) => data.Pets);
				const Pets = this.prettierPets(petsArr);

				this.shuffledF = data.Fundaciones.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.shuffledM = Pets.sort(() => Math.random() - Math.random()).slice(0, 4);
				this.shuffledT = data.Tiendas.sort(() => Math.random() - Math.random()).slice(0, 4);

				this.setState({
					fundaciones: data.Fundaciones,
					mascotas: Pets,
					tiendas: data.Tiendas,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	prettierPets = (arr) => arr.reduce((acc, el) => acc.concat(el), []);

	render() {
		return (
			<div className={styles.main}>
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
