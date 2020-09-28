import React from "react";
import BannerP from "../../components/banners/bannerP";
import axios from "axios";
import Fundaciones from "../../components/fundacion/fundaciones";
import Contacto from "../contacto/contacto";

export default class Home extends React.Component {
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
			<div>
				<BannerP />
				<h2>Fundaciones Aliadas</h2>
				<Fundaciones fundaciones={this.state.fundaciones} />
				<Contacto />
			</div>
		);
	}
}
