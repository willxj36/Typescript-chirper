import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import NewChirpBox from './components/NewChirpBox';
import ChirpPanel from './components/ChirpPanel';
import $ from 'jquery';

const App = () => {
	const [chirps, setChirps] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				let chirps = await $.get('/api/chirps');
				setChirps(chirps);
				console.log(chirps);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route component={NewChirpBox} />
				<Route component={ChirpPanel} chirps={chirps} />
				{/* <Route component={AdminOptions} /> */}
			</Switch>
		</BrowserRouter>
	);
};

export default App;
