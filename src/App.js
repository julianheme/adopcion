import React from "react";
import FullFundacion from "./components/fundacion/fullFundacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import FullTienda from "./components/tienda/fullTienda";

function App(props) {
	return (
		<Router>
			<Switch>
				<Route path="/fundaciones/:id" component={FullFundacion} />
				<Route path="/tiendas/:id" component={FullTienda} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;
