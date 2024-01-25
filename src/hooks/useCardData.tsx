import { useEffect, useState } from 'react';
import { fetchImages } from '../services/api';
import { shuffleCards } from '../utils/shuffleCards';
import { Card, Cards, MatchedCards, CardImage } from '../interfaces/card.interface';

const useCardData = () => {
	const [flippedArray, setFlippedArray] = useState([] as any);
	const [matchedCards, setMatchedCards] = useState([] as MatchedCards);
	const [successes, setSuccesses] = useState(0);
	const [errors, setErrors] = useState(0);
	const [showWinMessage, setShowWinMessage] = useState(false);
	const [cards, setCards] = useState([] as Cards);

	const setCardData = async () => {
		try {
			const data = await fetchImages();
			const cardImages = data.map((entry: { fields: { image: CardImage } }) => entry.fields.image);
			const shuffledImages = shuffleCards(cardImages.concat(cardImages));
			const initialCards = shuffledImages.map((image: CardImage, index: number) => ({
				image: image,
				isFlipped: false,
				isMatched: false,
				index,
			}));
			setCards(initialCards);
		} catch (error) {
			throw error;
		}
	};

	useEffect(() => {
		setCardData();
	}, []);

	useEffect(() => {
		if (cards.length !== 0 && matchedCards.length === cards.length / 2) {
			setShowWinMessage(true);
		}
	}, [matchedCards, cards]);

	useEffect(() => {
		if (flippedArray.length === 2) {
			const [index1, index2] = flippedArray;
			if (cards[index1].image === cards[index2].image) {
				setMatchedCards([...matchedCards, cards[index1].image]);
				setCards((prevCards: Cards) =>
					prevCards.map((card: Card, i: number) =>
						i === index1 || i === index2 ? { ...card, isMatched: true } : card
					)
				);
				setSuccesses(successes + 1);
			} else {
				setTimeout(() => {
					setCards((prevCards: Cards) =>
						prevCards.map((card: Card, i: number) =>
							i === index1 || i === index2 ? { ...card, isFlipped: false } : card
						)
					);
					setErrors(errors + 1);
				}, 1000);
			}
			setFlippedArray([]);
		}
	}, [flippedArray, cards, matchedCards, successes, errors]);

	const handleCardClick = (index: number) => {
		if (flippedArray.length < 2 && !cards[index].isFlipped && !cards[index].isMatched) {
			setFlippedArray([...flippedArray, index]);
			setCards((prevCards: Cards) =>
				prevCards.map((card: Card, i: number) =>
					i === index ? { ...card, isFlipped: true } : card
				)
			);
		}
	};

	useEffect(() => {
		if (flippedArray.length === 2) {
			const [index1, index2] = flippedArray;
			if (cards[index1].image === cards[index2].image) {
				setMatchedCards([...matchedCards, cards[index1].image]);
				setCards((prevCards: Cards) =>
					prevCards.map((card: Card, i: number) =>
						i === index1 || i === index2 ? { ...card, isMatched: true } : card
					)
				);
			} else {
				setTimeout(() => {
					setCards((prevCards: Cards) =>
						prevCards.map((card: Card, i: number) =>
							i === index1 || i === index2 ? { ...card, isFlipped: false } : card
						)
					);
				}, 1000);
			}
			setFlippedArray([]);
		}
	}, [flippedArray, cards, matchedCards]);

	const onReplay = () => {
		setCardData();
		setErrors(0);
		setSuccesses(0);
		setMatchedCards([]);
		setShowWinMessage(false);
	};

	return { cards, handleCardClick, successes, errors, showWinMessage, onReplay };
};

export default useCardData;
