import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import style from './fundacion.module.css'
import FullImage from "../banners/fullImage/fullImage";

class FullFundacion extends React.Component {
	constructor() {
		super();
		this.state = { fundacion: {} };
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		axios
			.get(`https://api.npoint.io/0f9ca95d1058038e320a/fundaciones/${id}`, {})
			.then((res) => {
				const data = res.data;
				this.setState({ fundacion: data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div className={style.full}>
				<FullImage image={this.state.fundacion.imagen}>
					<h2 className={style.title}>{this.state.fundacion.nombre}</h2>
				</FullImage>
				<div className={style.info}>

				<p>{this.state.fundacion.descripcion}</p>
				</div>
			</div>
		);
	}
}

export default withRouter(FullFundacion);
