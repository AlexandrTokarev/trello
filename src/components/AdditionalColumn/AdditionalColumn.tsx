import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";

import { addColumn } from "@/store/board";
import { uuid } from '@/utils/uuid';
import { useClickOutside } from '@/hooks/useClickOutside';

const AdditionalColumn: FC = () => {
  const dispatch = useDispatch();

  const [addMode, setAddMode] = useState(false);
  const [title, setTitle] = useState<string>('');

  const formRef = useClickOutside(() => setAddMode(false));

  const handleChangeTitle = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setTitle(value);


  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(addColumn({
      id: uuid(), title,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      cards: [],
    }));

    setAddMode(false);
    setTitle('');
  };

  const handleClickAdd = (event: MouseEvent) => {
    event.stopPropagation();
    setAddMode(true);
  };

  return (
    <>
      {addMode ? (
        <Form className='add' onSubmit={handleSubmit} ref={formRef}>
          <Form.Control
            as="textarea"
            autoFocus
            className='add__textarea'
            placeholder='Введите заголовок...'
            value={title}
            onChange={handleChangeTitle}
            style={{ width: '100%' }}
          />

          <div className='add__buttons'>
            <Button variant='success' disabled={title === ''} type="submit"><FaPlus /> Добавить</Button>&nbsp;
            <Button variant='secondary' onClick={() => setAddMode(false)} type="button"><FaTimes /></Button>
          </div>
        </Form>
      ) : (
        <Button onClick={handleClickAdd} className="board__add-btn">
          <FaPlus /> Добавить
        </Button>
      )}
    </>
  );
};

export default AdditionalColumn;
