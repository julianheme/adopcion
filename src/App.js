import React from "react";
import FullFundacion from "./components/fundacion/fullFundacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/navBar/navBar";
import FundacionesP from "./pages/fundaciones/fundaciones";
import TiendasP from "./pages/tiendas/tiendas";
import ContactoP from "./pages/contacto/contacto";
import FullPet from "./components/pet/fullPet";
import styles from "./app.module.css";
import Login from "./pages/Login/login";
import SignUp from "./pages/SignUp/signUp";
import AdminLogin from "./pages/AdminLogin/adminLogin";

function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<div className={styles.spacer} />
				<Switch>
					<Route path="/fundaciones/:id" component={FullFundacion} />
					<Route path="/pets/:id" component={FullPet} />
					<Route path="/fundaciones" component={FundacionesP} />
					<Route path="/tiendas" component={TiendasP} />
					<Route path="/contacto" component={ContactoP} />
					<Route path="/login" component={Login} />
					<Route path="/signUp" component={SignUp} />
					<Route path="/adminLogin" component={AdminLogin} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
