import React, { PureComponent } from "react";
import Fade from "react-reveal/Fade";
class Titulo extends PureComponent {
	render() {
		const l = {
			main: {
				fontSize: "2em",
				textAlign: "center",
				margin: "auto",
				padding: "10px",
			},
			txt: {
				margin: "auto",
				padding: "10px",
			},
		};
		return (
			<div>
				<Fade delay={1000} duration={800} bottom>
					<h1 style={l.main}>{this.props.titulo}</h1>
					<p style={l.txt}>
						Desde que fue declarada la cuarentena en Colombia, se ha evidenciado un incremento notable tanto en la
						adopcion de mascotas como en el mismo abandono de ellas, lo cual se ha vuelto una gran problemática no solo
						para las fundaciones y personas que velan por el bienestar de las mascotas sino también para la vida de las
						mismas mascotas, puesto que existe un gran porcentaje de abandono y precariedad de condiciones de vida una
						vez el gato o perro es abandonado, además es necesario tener en cuenta a aquellos que nacen en las mismas
						calles puesto que su madre o padre no ha sido esterilizados.
					</p>
					<p style={l.txt}>
						Viendo la existencia de esta problemática a nivel nacional y la alta necesidad de apoyo por parte de las
						fundaciones, se plantea desarrollar una herramienta que centralice la información de contacto de toda
						orgnaizacion que desee unirse a este proyecto en pro de la vida de las mascotas, además de brindar la
						posibilidad a las fundaciones de mostrar quellas mascotas que se encuentren en adopción.
					</p>
				</Fade>
			</div>
		);
	}
}

export default Titulo;
