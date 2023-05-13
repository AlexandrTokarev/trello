import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import { moveCard, moveColumn, selectColumns } from "@/store/board";

import AdditionalColumn from "../AdditionalColumn/AdditionalColumn";
import Column from "../Column/Column";

import classes from "./Board.module.scss";

const Board: FC = () => {
  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);

  const handleDragEnd = ({ source, destination, type }: DropResult) => {
    if (!destination) return;

    if (type === "COLUMN" && source.index !== destination.index) {
      dispatch(
        moveColumn({ indexFrom: source.index, indexTo: destination.index })
      );
    }

    if (type === 'CARD') {
      if (source.index !== destination.index || source.droppableId !== destination.droppableId) {
        dispatch(moveCard({
          sourceColumnId: source.droppableId,
          targetColumnId: destination.droppableId,
          oldCardIndex: source.index,
          newCardIndex: destination.index
        }))
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="COLUMN">
        {(provided, _snapshot) => (
          <div className={classes.root} ref={provided.innerRef}>
            {columns.map((column, idx) => (
              <Column
                key={column.id}
                index={idx}
                {...column}
              />
            ))}

            {provided.placeholder}

            <AdditionalColumn />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
