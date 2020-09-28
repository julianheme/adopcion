import React from "react";
import styles from "./fundacion.module.css";
import { Link } from "react-router-dom";

export default function Fundacion(props) {
	return (
		<div className={`${styles.tarjeta} ${styles.hvrGrow}`}>
			<Link to={`/fundaciones/${props.id}`} className={styles.link}>
				<img className={styles.img} src={props.imagen} />
				<div className={styles.txt}>
					<p>{props.nombre}</p>
				</div>
			</Link>
		</div>
	);
}
