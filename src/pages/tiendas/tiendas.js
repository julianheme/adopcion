import React from "react";
import Tiendas from "../../components/tienda/tiendas";
import axios from "axios";
import styles from "./tiendas.module.css";
import Footer from "../../components/banners/footer/footer";

export default class TiendasP extends React.Component {
	constructor() {
		super();
		this.state = { tiendas: [] };
	}
	componentDidMount() {
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.setState({ tiendas: data.tiendas });
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
				<Tiendas tiendas={this.state.tiendas} />
				</div>
				<Footer/>
			</div>
		);
	}
}
