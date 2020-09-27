import React from "react";
import Titulo from "./components/titulo";
import BannerP from "./components/banners/bannerP";
import Contacto from "./pages/contacto/contacto";
import styles from "./app.module.css";

function App() {
	return (
		<div className={styles.main}>
			<BannerP />
			<Titulo titulo="Adopción" />
			<Contacto />
		</div>
	);
}

export default App;
