import React from "react";
import styles from "./fundacion.module.css";
import { Link } from "react-router-dom";

export default function fundacion(props) {
	return (
		<Link to={`/fundaciones/${props.id}`}>
			<div className={`${styles.tarjeta} ${styles.hvrGrow}`}>
				<img className={styles.img} src={props.imagen} />
				<div className={styles.txt}>
					<p>{props.nombre}</p>
				</div>
			</div>
		</Link>
	);
}
