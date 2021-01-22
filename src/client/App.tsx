import * as React from 'react';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewChirpBox from './components/NewChirpBox';
import ChirpPanel from './components/ChirpPanel';

const App = () => {
	const [newChirp, setNewChirp] = useState(false);

	useEffect(() => { //probably need to delete this, but verify first
		(async () => {
			try {
				const res = await fetch('/api/chirps');
				const chirps = await res.json();
				setChirps(chirps);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	const showNewChirp = () => {newChirp? setNewChirp(false) : setNewChirp(true);}

	return (
		<>
			<Navbar showNewChirp={showNewChirp} />
			<NewChirpBox />
			<ChirpPanel />
		</>
	);
};

interface AppProps {}

interface Chirp {
    name: string,
    text: string
}

export default App;
