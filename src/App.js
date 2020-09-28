import React from "react";
import styles from "./app.module.css";
import FullFundacion from "./components/fundacion/fullFundacion";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";

function App(props) {
	return (
		<Router>
			<div className={styles.main}>
				<Switch>
					<Route path="/fundaciones/:id" component={FullFundacion} />
					<Route path="/" component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
