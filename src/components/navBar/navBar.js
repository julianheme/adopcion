import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar(props) {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link to="/">Inicio</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/#fundaciones">Fundaciones</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/#tiendas">Tiendas</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/#contacto">Contacto</Link>
				</li>
			</ul>
		</nav>
	);
}
