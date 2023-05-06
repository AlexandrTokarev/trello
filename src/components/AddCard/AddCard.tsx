import { ChangeEvent, FC, useEffect, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';
import { uuid } from '@/utils/uuid';

import { AddCardProps } from './AddCard.types';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '@/store/user';
import { addCardToColumn } from '@/store/board';

const AddCard: FC<AddCardProps> = ({ onClose, columnId }) => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const [title, setTitle] = useState<string>('');

  const handleChangeTitle = ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>) => setTitle(value);

  const controlRef = useClickOutside<HTMLTextAreaElement>(() => {
    saveCard();
    onClose();
  });

  useEffect(() => {
    controlRef.current?.focus();
  }, [controlRef])

  const saveCard = () => {
    if (title) {
      dispatch(addCardToColumn({
        columnId,
        card: {
          id: uuid(),
          author: user,
          title,
          description: ''
        }
      }));
    }
  }

  return (
    <textarea
      className='form-control text-14'
      ref={controlRef}
      rows={3}
      value={title}
      onChange={handleChangeTitle}
      placeholder='Ввести заголовок для этой карточки'
    />
  );
};

export default AddCard;
