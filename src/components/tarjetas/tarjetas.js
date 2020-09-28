import React from "react";
import Tarjeta from "./tarjeta";
import styles from "./tarjeta.module.css";

export default function Tarjetas(props) {
	let tarjetas = [];
	if (props.marca === "fundaciones") {
		tarjetas = props.arreglo;
	} else if (props.marca === "tiendas") {
		tarjetas = props.arreglo;
	}
	return (
		<section className={styles.fundGrid}>
			{tarjetas.map((tarjeta, index) => {
				return (
					<Tarjeta nombre={tarjeta.nombre} imagen={tarjeta.imagen} key={index} id={tarjeta.id} marca={props.marca} />
				);
			})}
		</section>
	);
}
