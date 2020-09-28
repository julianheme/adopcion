import React from "react";
import Tienda from "./tienda";
import styles from "./tienda.module.css";

export default function Tiendas(props) {
	return (
		<section className={styles.fundGrid}>
			{props.tiendas.map((tienda, index) => {
				return <Tienda nombre={tienda.nombre} imagen={tienda.imagen} key={index} id={index} />;
			})}
		</section>
	);
}
