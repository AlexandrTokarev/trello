import { FC, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Dropdown } from 'react-bootstrap';
import { FaPen } from 'react-icons/fa';

import { CardProps } from './Card.types';

import classes from './Card.module.scss';
import { removeCard } from '@/store/board';

interface ToggleProps {
	onClick(): void;
}

const CustomToggle = forwardRef<HTMLButtonElement, ToggleProps>(({ onClick }, ref) => (
	<Button ref={ref} variant="light" className={classes.edit} onClick={onClick}>
		<FaPen />
	</Button>
));

const Card: FC<CardProps> = ({ id, index, title, columnId }) => {
	const dispatch = useDispatch();

	const handleClickDelete = () => {
		dispatch(removeCard({ cardId: id, columnId }))
	}

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className={classes.root}
				>
					<span className={classes.title}>{title}</span>
					<Dropdown drop="end">
						<Dropdown.Toggle as={CustomToggle} />
						<Dropdown.Menu >
							<Dropdown.Item>Открыть</Dropdown.Item>
							<Dropdown.Item>Изменить</Dropdown.Item>
							<Dropdown.Item onClick={handleClickDelete}>Удалить</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>)}
		</Draggable>
	)
};

export default Card;
