import React from "react";
import styles from "./tarjeta.module.css";
import "../../index.css";
import { Link } from "react-router-dom";

export default function Fundacion(props) {
	return (
		<div className={`${styles.tarjeta} hvr-grow`}>
			{props.marca === "tiendas" ? (
				<a target="_blank" href={props.link}>
					<img className={styles.img} src={props.imagen} />
					<div className={styles.txt}>
						<p>{props.nombre}</p>
					</div>
				</a>
			) : (
				<Link
					to={`/${props.marca}/${props.id}`}
					target={props.marca === "tiendas" ? "_blank" : ""}
					className={styles.link}
				>
					<img className={styles.img} src={props.imagen} />
					<div className={styles.txt}>
						<p>{props.nombre}</p>
					</div>
				</Link>
			)}
		</div>
	);
}
