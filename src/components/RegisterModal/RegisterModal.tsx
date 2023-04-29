
import { ChangeEvent, FC, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

import { isNullOrEmpty } from '@/utils/isNullOrEmpty';

const RegisterModal: FC = () => {
    const [name, setName] = useState('');

	const onChangeName = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
		setName(value)
	}

	const onClickSave = () => {
		// dispatch({
		// 	type: LOGIN,
		// 	payload: name
		// });
	}

	return (
		<Modal show={true}>
			<Modal.Header>
				<Modal.Title>Имитация авторизации</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Control type='text' placeholder='Введите ваше имя' name='userName' value={name} onChange={onChangeName} />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button variant='primary' disabled={isNullOrEmpty(name)} onClick={onClickSave}>
					Сохранить
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default RegisterModal;
