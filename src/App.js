import React from "react";
import FullFundacion from "./components/fundacion/fullFundacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import FullTienda from "./components/tienda/fullTienda";
import NavBar from "./components/navBar/navBar";
import FundacionesP from "./pages/fundaciones/fundaciones";
import TiendasP from "./pages/tiendas/tiendas";
import ContactoP from "./pages/contacto/contacto";

function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<div style={{ marginTop: "96px" }} />
				<Switch>
					<Route path="/fundaciones/:id" component={FullFundacion} />
					<Route path="/tiendas/:id" component={FullTienda} />
					<Route path="/fundaciones" component={FundacionesP} />
					<Route path="/tiendas" component={TiendasP} />
					<Route path="/contacto" component={ContactoP} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
