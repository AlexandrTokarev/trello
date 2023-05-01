import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Button from "react-bootstrap/Button";
import BootstrapCard from "react-bootstrap/Card";

import { selectColumnCards } from "@/store/board";
import { RootState } from "@/store/store";

import Actions from "./components/Actions/Actions";
import { ColumnProps } from "./Column.types";

import classes from "./Column.module.scss";

const Column: FC<ColumnProps> = ({ id, title, index }) => {
  const cards = useSelector((state: RootState) => selectColumnCards(state, id));

  const [createdMode, setCreatedMode] = useState(false);

  const handleClickRemove = () => {};

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
          <BootstrapCard.Header>
            <span className="column__title">{title}</span>
            <Actions onAdd={handleClickAdd} onRemove={handleClickRemove} />
          </BootstrapCard.Header>

          <Droppable droppableId={id} type="CARD">
            {(provided, _snapshot) => (
              <BootstrapCard.Body
                style={{ overflowY: "auto" }}
                ref={provided.innerRef}
              >
                {cards.map((card, idx) => (
                  <Card
                    key={card.id}
                    cardId={card.id}
                    index={idx}
                    columnId={id}
                    text={card.title}
                  />
                ))}
                {provided.placeholder}
                {createdMode && (
                  <AddCard
                    toggleAddingCard={toggleCreatedMode}
                    columnId={id}
                  />
                )}
              </BootstrapCard.Body>
            )}
          </Droppable>

          <BootstrapCard.Footer className="text-center">
            <Button className="column__add-card-btn" onClick={handleClickAdd}>
              <i className="fa fa-plus" /> Добавить ещё одну карточку
            </Button>
          </BootstrapCard.Footer>
        </BootstrapCard>
      )}
    </Draggable>
  );
};

export default Column;
