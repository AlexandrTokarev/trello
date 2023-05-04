import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";
import { FaPlus } from "react-icons/fa";

import { removeColumn, selectColumnCards } from "@/store/board";
import { RootState } from "@/store/store";

import Card from "../Card/Card";

import Actions from "./components/Actions/Actions";
import { ColumnProps } from "./Column.types";

import classes from "./Column.module.scss";

const Column: FC<ColumnProps> = ({ id, title, index }) => {
  const dispatch = useDispatch();

  const cards = useSelector((state: RootState) => selectColumnCards(state, id));

  const [createdMode, setCreatedMode] = useState(false);

  const handleClickRemove = () => {
    dispatch(removeColumn(id));
  };

  const handleClickAdd = () => {
    setCreatedMode(true);
  };

  const toggleCreatedMode = (): void => {
    setCreatedMode((prev) => !prev);
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <BootstrapCard
          className={classes.root}
          bg="light"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <BootstrapCard.Header className={classes.header}>
            <span>{title}</span>
            <Actions onAdd={handleClickAdd} onRemove={handleClickRemove} />
          </BootstrapCard.Header>

          <Droppable droppableId={id} type="CARD">
            {(provided, _snapshot) => (
              <BootstrapCard.Body
                className={classes.body}
                ref={provided.innerRef}
              >
                {cards.map((card, idx) => (
                  <Card
                    key={card.id}
                    index={idx}
                    {...card}
                  />
                ))}
                {provided.placeholder}
                {createdMode && (
                  <div>Add</div>
                )}
              </BootstrapCard.Body>
            )}
          </Droppable>

          <BootstrapCard.Footer>
            <Button className={classes.addButton} onClick={handleClickAdd}>
              <FaPlus /> Добавить карточку
            </Button>
          </BootstrapCard.Footer>
        </BootstrapCard>
      )}
    </Draggable>
  );
};

export default Column;
