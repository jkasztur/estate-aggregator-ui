import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppSwitch from "./components/AppSwitch";
import Menu from './components/Menu'

function App() {
	return (
		<Router>
			<div style={{ display: "flex", flexDirection: 'row', flex: 1 }}>
				<Menu />
				<AppSwitch />
			</div>
		</Router >
	);
}

export default App;
