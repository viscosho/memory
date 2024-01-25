import Image from 'react-bootstrap/Image';
import frontImg from '../assets/card.png';
import { SingleCardType } from '../interfaces/card.interface';

const SingleCard = ({ card, handleClick }: SingleCardType) => {
	return (
		<div
			id={card.image.uuid}
			className={`single-card ${card.isFlipped ? 'flipped' : ''} ${
				card.isMatched ? 'matched' : ''
			}`}
			onClick={handleClick}
		>
			<div className='card-wrapper'>
				<div className='front'>
					<Image className='p-0 m-o' src={frontImg} alt='front' thumbnail fluid />
				</div>
				<div className='back'>
					<Image
						className='p-0 m-o'
						src={card.image.url}
						alt={`${card.image.title}`}
						thumbnail
						fluid
					/>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
