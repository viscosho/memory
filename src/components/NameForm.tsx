import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { LoginFormType } from '../interfaces/form.interface';

const NameForm = ({ username, handleSubmit, handleOnChange }: LoginFormType) => {
	return (
		<Container className='p-4 m-4 bg-body-secondary rounded-3'>
			<Row className='justify-content-md-center'>
				<Col>
					<Form className='m-4' onSubmit={handleSubmit}>
						<Row>
							<Col xs={12} sm={10}>
								<FloatingLabel controlId='floatingInput' label='Enter your name:'>
									<Form.Control
										type='text'
										placeholder='Enter your name'
										value={username}
										onChange={handleOnChange}
									/>
								</FloatingLabel>
							</Col>
							<Col xs={12} sm={2} className='d-grid gap-2 d-md-block'>
								<Button type='submit' size='lg' className='h-100 rounded-2'>
									Submit
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default NameForm;
