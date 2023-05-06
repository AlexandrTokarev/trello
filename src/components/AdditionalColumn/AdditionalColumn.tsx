import { ChangeEvent, FC, FormEvent, MouseEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaPlus, FaTimes } from "react-icons/fa";

import { addColumn } from "@/store/board";
import { uuid } from '@/utils/uuid';
import { useClickOutside } from '@/hooks/useClickOutside';

import classes from './AdditionalColumn.module.scss';

const AdditionalColumn: FC = () => {
  const dispatch = useDispatch();

  const [addMode, setAddMode] = useState(false);
  const [title, setTitle] = useState<string>('');

  const formRef = useClickOutside(() => {
    setAddMode(false);
    setTitle('');
  });

  const handleChangeTitle = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setTitle(value);


  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(addColumn({
      id: uuid(),
      title,
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
    <div className={classes.root}>
      {addMode ? (
        <Form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
          <Form.Control
            as="textarea"
            autoFocus
            className={classes.textarea}
            placeholder='Введите заголовок...'
            value={title}
            onChange={handleChangeTitle}
            style={{ width: '100%' }}
          />

          <div className={classes.actions}>
            <Button variant='success' disabled={title === ''} type="submit"><FaPlus /> Добавить</Button>&nbsp;
            <Button variant='secondary' onClick={() => setAddMode(false)} type="button"><FaTimes /></Button>
          </div>
        </Form>
      ) : (
        <Button onClick={handleClickAdd} variant='secondary' className={classes.addButton}>
          <FaPlus /> Добавить
        </Button>
      )}
    </div>
  );
};

export default AdditionalColumn;
