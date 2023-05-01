import { FC, MouseEvent, useState } from "react";
import { Button } from "react-bootstrap";

const AdditionalColumn: FC = () => {
  const [addMode, setAddMode] = useState(false);

  const handleClickAdd = (event: MouseEvent) => {
    event.stopPropagation();
    setAddMode(true);
  };

  return (
    <>
      {addMode ? (
        <div>Add new</div>
      ) : (
        <Button onClick={handleClickAdd} className="board__add-btn">
          <i className="fa fa-plus" /> Добавить
        </Button>
      )}
    </>
  );
};

export default AdditionalColumn;
