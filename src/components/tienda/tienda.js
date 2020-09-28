import React from "react";
import styles from "./tienda.module.css";
import { Link } from "react-router-dom";

export default function Tienda(props) {
	return (
		<div className={`${styles.tarjeta} ${styles.hvrGrow}`}>
			<Link to={`/tiendas/${props.id}`} className={styles.link}>
				<img className={styles.img} src={props.imagen} />
				<div className={styles.txt}>
					<p>{props.nombre}</p>
				</div>
			</Link>
		</div>
	);
}
