import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

type SuccessMessageType = {
	username: string;
	onReplay: any;
};

const WinMessage = ({ username, onReplay }: SuccessMessageType) => {
	return (
		<Row>
			<Col>
				<Alert key='success' variant='success' className='congratulations'>
					Congratulations, {username}! You have win! <br />
					<Button onClick={onReplay} className='mt-2'>
						Start again!
					</Button>
				</Alert>
			</Col>
		</Row>
	);
};

export default WinMessage;
