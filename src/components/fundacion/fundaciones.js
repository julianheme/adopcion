import React from "react";
import Fundacion from "./fundacion";
import styles from "./fundacion.module.css";

export default function Fundaciones(props) {
	return (
		<section className={styles.fundGrid}>
			{props.fundaciones.map((fundacion, index) => {
				return <Fundacion nombre={fundacion.nombre} imagen={fundacion.imagen} key={index} id={index} />;
			})}
		</section>
	);
}
