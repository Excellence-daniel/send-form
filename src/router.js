import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/landing';

export default function Routerr() {
	return (
		<Router>
			<Route path="/" component={LandingPage} />
		</Router>
	);
}
