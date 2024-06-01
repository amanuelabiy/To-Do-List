import React, { useState } from "react";

const EditTodoForm = ({ itemKey, taskName, editToDo }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (value !== "") {
      editToDo(itemKey, value);
    } else {
      editToDo(itemKey, taskName);
    }
  };

  return (
    <form className="to-do-list-form" onSubmit={handleEdit}>
      <input
        className="to-do-list-input"
        type="text"
        value={value}
        placeholder={taskName}
        onChange={(event) => handleChange(event)}
        autoFocus
      ></input>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default EditTodoForm;
