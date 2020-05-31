import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import RequestPage from './pages/request';

export default function Routerr() {
	return (
		<Router>
			<Route path="/" exact component={LandingPage} />
			<Route path="/request" component={RequestPage} exact />
		</Router>
	);
}
