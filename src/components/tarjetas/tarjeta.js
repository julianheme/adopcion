import React from "react";
import styles from "./tarjeta.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

export default function Fundacion(props) {
	return (
		<div className={`${styles.tarjeta} hvr-grow`}>
			<Link to={`/${props.marca}/${props.id}`} className={styles.link}>
				<img className={styles.img} src={props.imagen} />
				<div className={styles.txt}>
					<p>{props.nombre}</p>
				</div>
			</Link>
		</div>
	);
}
