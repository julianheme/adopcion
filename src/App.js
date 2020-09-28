import React from "react";
import FullFundacion from "./components/fundacion/fullFundacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import FullTienda from "./components/tienda/fullTienda";
import NavBar from "./components/navBar/navBar";

function App(props) {
	return (
		<Router>
			<div>
				<NavBar />
				<div style={{marginTop: '49px'}} />
				<Switch>
					<Route path="/fundaciones/:id" component={FullFundacion} />
					<Route path="/tiendas/:id" component={FullTienda} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
