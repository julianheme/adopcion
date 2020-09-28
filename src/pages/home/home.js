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
		this.start = React.createRef();
		this.fundaciones = React.createRef();
		this.tiendas = React.createRef();
		this.contacto = React.createRef();
	}

	componentDidMount() {
		let scrollTo = this.props.location.hash;
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundaciones: data.fundaciones, tiendas: data.tiendas });
			})
			.catch((error) => {
				console.log(error);
			});
		if (scrollTo === "#fundaciones") {
			window.scrollTo({ top: this.fundaciones.current.offsetTop - 50, behavior: "smooth" });
		} else if (scrollTo === "#tiendas") {
			window.scrollTo({ top: this.tiendas.current.offsetTop - 50, behavior: "smooth" });
		} else if (scrollTo === "#contacto") {
			window.scrollTo({ top: this.contacto.current.offsetTop - 50, behavior: "smooth" });
		} else {
			window.scrollTo({ top: this.start.current.offsetTop - 50, behavior: "smooth" });
		}
	}
	componentDidUpdate() {
		let scrollTo = this.props.location.hash;
		if (scrollTo === "#fundaciones") {
			window.scrollTo({ top: this.fundaciones.current.offsetTop - 50, behavior: "smooth" });
		} else if (scrollTo === "#tiendas") {
			window.scrollTo({ top: this.tiendas.current.offsetTop - 50, behavior: "smooth" });
		} else if (scrollTo === "#contacto") {
			window.scrollTo({ top: this.contacto.current.offsetTop - 50, behavior: "smooth" });
		} else {
			window.scrollTo({ top: this.start.current.offsetTop - 50, behavior: "smooth" });
		}
	}
	render() {
		return (
			<div className={styles.main} ref={this.start}>
				<BannerP />
				<h2 ref={this.fundaciones}>Fundaciones Aliadas</h2>
				<Fundaciones fundaciones={this.state.fundaciones} />
				<h2 ref={this.tiendas}>Tiendas Aliadas</h2>
				<Tiendas tiendas={this.state.tiendas} />
				<span ref={this.contacto} />
				<Contactanos titulo={"Contáctanos"} titulo2={"Quienes somos"} />
			</div>
		);
	}
}
