import { ChangeEvent, FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";

import { selectUserIsAuth, login } from "@/store/user";
import { isNullOrEmpty } from "@/utils/isNullOrEmpty";

const RegisterModal: FC = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectUserIsAuth);

  const [name, setName] = useState("");

  const onChangeName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>): void => {
    setName(value);
  };

  const handleSignin = () => {
    dispatch(login(name));
  };

  return (
    <Modal show={!isAuth}>
      <Modal.Header>
        <Modal.Title>Имитация авторизации</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Введите ваше имя"
              name="name"
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          disabled={isNullOrEmpty(name)}
          onClick={handleSignin}
        >
          Войти
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RegisterModal;
