import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import PagePrincipale from "./components/PagePrincipale.js";

class App extends React.Component {
constructor(){
	super()
}

render() {
		return(
			 <Router>
				<Switch>
					<Route exact path="/"> <PagePrincipale /> </Route>
				</Switch>
			</Router>
		)
	}
}

export default App;