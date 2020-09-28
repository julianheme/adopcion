import React from "react";
import axios from "axios";
import styles from "./fundaciones.module.css";
import Tarjetas from "../../components/tarjetas/tarjetas";

export default class FundacionesP extends React.Component {
	constructor() {
		super();
		this.state = { fundaciones: [] };
	}
	componentDidMount() {
		axios
			.get("https://api.npoint.io/0f9ca95d1058038e320a", {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundaciones: data.fundaciones });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className={styles.main}>
				<h1>Fundaciones Aliadas</h1>
				<Tarjetas arreglo={this.state.fundaciones} marca="fundaciones" />
			</div>
		);
	}
}
