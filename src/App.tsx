import React, { useState, useEffect } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Game from './components/Game';
import NameForm from './components/NameForm';
import { storedUsername } from './utils/storedUsername';

function App() {
	const [username, setUsername] = useState(storedUsername() || '');
	const [showGame, setShowGame] = useState(false);

	useEffect(() => {
		if (storedUsername()) {
			setShowGame(true);
		}
	}, []);

	const handleUsernameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
		setUsername(event.target.value);
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		localStorage.setItem('userName', username);
		setShowGame(true);
	};

	return (
		<div className='App'>
			<Container className='pt-4 pb-4'>
				<Header />
				{!showGame ? (
					<NameForm
						username={username}
						handleOnChange={handleUsernameChange}
						handleSubmit={handleSubmit}
					/>
				) : (
					<Game username={username} />
				)}
			</Container>
		</div>
	);
}

export default App;
