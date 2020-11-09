import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import dog from "../../imagenes/ZeriDog.png";
import { connect } from "react-redux";

function NavBar(props) {
	let loggedVar;

	if (props.isUserLoggedIn) {
		loggedVar = <Link to={`/users/${props.uid}`}>Perfil</Link>;
	} else {
		loggedVar = <Link to="/login">Login</Link>;
	}

	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				<li className={styles.navLogo}>
					<img src={dog} className={styles.logoImg} />
				</li>
				<li className={styles.navItem}>
					<Link to="/">Inicio</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/fundaciones">Fundaciones</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/tiendas">Tiendas</Link>
				</li>
				<li className={styles.navItem}>
					<Link to="/contacto">Contacto</Link>
				</li>
				<li className={styles.navItem}>{loggedVar}</li>
			</ul>
		</nav>
	);
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
	};
};

export default connect(mapStateToProps)(NavBar);
