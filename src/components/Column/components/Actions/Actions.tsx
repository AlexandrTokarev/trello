import { FC, forwardRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { FaEllipsisH } from "react-icons/fa";

import { ActionsProps } from "./Actions.types";

import classes from "./Actions.module.scss";

interface ToggleProps {
  onClick(): void;
}

const CustomToggle = forwardRef<HTMLButtonElement, ToggleProps>(({ onClick }, ref) => (
  <Button ref={ref} variant="light" className={classes.toggle} onClick={onClick}>
    <FaEllipsisH />
  </Button>
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
