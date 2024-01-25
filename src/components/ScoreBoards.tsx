import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

type ScoreBoardsType = {
	successes: number;
	errors: number;
};

const ScoreBoards = ({ successes, errors }: ScoreBoardsType) => {
	return (
		<Row className='justify-content-md-center mt-2 mb-4 text-center'>
			<Col lg='2'>
				<Badge bg='success'>
					Successes: <span>{successes}</span>
				</Badge>
			</Col>
			<Col lg='2'>
				<Badge bg='danger'>
					Errors: <span>{errors}</span>
				</Badge>
			</Col>
		</Row>
	);
};

export default ScoreBoards;
