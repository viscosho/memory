export type CardImage = {
	url: string;
	tags: string[];
	uuid: string;
	title: string;
	alt_text: string;
	description: string;
	content_type: string;
};

export type Card = {
	image: CardImage;
	isFlipped: boolean;
	isMatched: boolean;
};

export type CardType = {
	card: Card;
	handleClick: any;
};

export type Cards = Array<Card>;

export type MatchedCards = Array<CardImage>;
