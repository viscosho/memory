import React from 'react';
import useCardData from '../hooks/useCardData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WinMessage from './WinMessage';
import ScoreBoards from './ScoreBoards';

import SingleCard from './SingleCard';

type GameUsernameType = {
	username: string;
};

const Game = ({ username }: GameUsernameType) => {
	const { cards, handleCardClick, successes, errors, showWinMessage, onReplay } = useCardData();

	return (
		<>
			<Row className='justify-content-md-center mt-2 mb-4 text-center'>
				<Col className='score-card fs-3 text'>
					{username && <p>Welcome, {username}!</p>}
					<ScoreBoards successes={successes} errors={errors} />
				</Col>
			</Row>
			{showWinMessage && username ? (
				<WinMessage username={username} onReplay={() => onReplay()} />
			) : null}
			<Row>
				<Col>
					<div className='card-container'>
						{cards.length &&
							cards.map((card: any, index: any) => {
								return (
									<SingleCard card={card} key={index} handleClick={() => handleCardClick(index)} />
								);
							})}
					</div>
				</Col>
			</Row>
		</>
	);
};

export default Game;
