import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/main-page-header';

export default function Routerr() {
	return (
		<Router>
			<Header />
		</Router>
	);
}
