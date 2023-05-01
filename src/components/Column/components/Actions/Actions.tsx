import { FC, forwardRef } from "react";
import { Dropdown } from "react-bootstrap";

import { ActionsProps } from "./Actions.types";

const CustomToggle = forwardRef(
  ({ onClick }: { onClick(): void }, ref: any) => (
    <div ref={ref} className="column__icon" onClick={onClick}>
      <i className="fas fa-ellipsis-h" />
    </div>
  )
);

const Actions: FC<ActionsProps> = ({ onAdd, onRemove }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} />
      <Dropdown.Menu>
        <Dropdown.Header>Действия co списком</Dropdown.Header>
        <Dropdown.Item onClick={onAdd}>Добавить карточку</Dropdown.Item>
        <Dropdown.Item onClick={onRemove}>Удалить</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Сортировка</Dropdown.Header>
        <Dropdown.Item>Сначала новые</Dropdown.Item>
        <Dropdown.Item>Сначала старые</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Actions;
