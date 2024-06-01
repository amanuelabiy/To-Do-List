import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({
  itemKey,
  index,
  todo,
  deleteToDo,
  toggleComplete,
  completed,
  toggleEditing,
}) => {
  return (
    <div className="items-div-container">
      <ul
        className={`to-do-list ${completed ? "to-do-list-item-completed" : ""}`}
      >
        <li
          key={itemKey}
          className="to-do-list-item"
          id={index}
          onClick={() => toggleComplete(itemKey)}
        >
          {todo}
        </li>
        <FontAwesomeIcon
          className="icon penToSquareIcon"
          icon={faPenToSquare}
          onClick={() => toggleEditing(itemKey)}
        />
        <FontAwesomeIcon
          className="icon deleteIcon"
          icon={faTrash}
          onClick={() => deleteToDo(itemKey)}
        />
      </ul>
    </div>
  );
};

export default TodoList;
