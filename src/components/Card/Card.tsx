import { FC, forwardRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Dropdown } from "react-bootstrap";
import { CardProps } from './Card.types';

const CustomToggle = forwardRef(({ onClick }: { onClick(): void }, ref: any) => (
	<div ref={ref} className='column__card-edit' onClick={onClick}>
		<i className='fas fa-pen'/>
	</div>
));

const Card: FC<CardProps> = ({ id, index, title }) => {

	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					className='column__card text-14'
				>
					<span className='column__card-details'>{title}</span>
					<Dropdown drop="end">
						<Dropdown.Toggle as={CustomToggle}/>
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
