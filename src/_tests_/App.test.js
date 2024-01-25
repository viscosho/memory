import { shuffleCards } from '../utils/shuffleCards';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from '../components/Card';

describe('Card Component', () => {
	const mockCard = {
		image: {
			uuid: 'a4452fe5-ca10-4b35-ad7a-62fc44c60d27',
			url: 'https://cdn.modyo.cloud/uploads/f0753a4f-87b2-484d-aeb1-a22c3278cb50/original/bear.jpg',
			title: 'bear',
		},
		isFlipped: false,
		isMatched: false,
	};

	it('renders the Card component correctly', () => {
		render(<Card card={mockCard} handleClick={() => {}} />);

		// Assert that the front and back images are rendered with the correct alt text
		expect(screen.getByAltText('front')).toBeInTheDocument();
		expect(screen.getByAltText(mockCard.image.title)).toBeInTheDocument();
	});

	it('handles click events correctly', () => {
		const handleClickMock = jest.fn();
		render(<Card card={mockCard} handleClick={handleClickMock} />);

		// Simulate a click event on the card
		fireEvent.click(screen.getByTestId(mockCard.image.uuid));

		// Assert that the handleClick function is called
		expect(handleClickMock).toHaveBeenCalled();
	});
});

describe('shuffleCards function', () => {
	it('shuffles an array', () => {
		const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const shuffledArray = shuffleCards(originalArray.slice());

		// Check if the shuffled array has the same elements
		expect(shuffledArray).toHaveLength(originalArray.length);
		originalArray.forEach((element) => {
			expect(shuffledArray).toContain(element);
		});

		// Check if the shuffled array is shuffled
		expect(shuffledArray).not.toEqual(originalArray);
	});
});
