import { FC, forwardRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Dropdown } from 'react-bootstrap';

import { CardProps } from './Card.types';

import classes from './Card.module.scss';
import { FaPen } from 'react-icons/fa';

interface ToggleProps {
	onClick(): void;
}

const CustomToggle = forwardRef<HTMLButtonElement, ToggleProps>(({ onClick }, ref) => (
	<Button ref={ref} variant="light" className={classes.edit} onClick={onClick}>
		<FaPen />
	</Button>
));

const Card: FC<CardProps> = ({ id, index, title }) => {

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
							<Dropdown.Item>Удалить</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>)}
		</Draggable>
	)
};

export default Card;
