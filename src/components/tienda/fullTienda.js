import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class FullTienda extends React.Component {
	constructor() {
		super();
		this.state = { tienda: {} };
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		axios
			.get(`https://api.npoint.io/0f9ca95d1058038e320a/tiendas/${id}`, {})
			.then((res) => {
				const data = res.data;
				this.setState({ tienda: data });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<div>
				<img src={this.state.tienda.imagen} />
				<h2>{this.state.tienda.nombre}</h2>
				<p>{this.state.tienda.descripcion}</p>
			</div>
		);
	}
}

export default withRouter(FullTienda);
