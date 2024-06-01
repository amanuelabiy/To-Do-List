import React, { useState } from "react";

const TodoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value !== "") {
      addToDo(value);
      setValue("");
    }
  };

  return (
    <form className="to-do-list-form" onSubmit={handleSubmit}>
      <input
        className="to-do-list-input"
        type="text"
        value={value}
        placeholder="Task to Do"
        onChange={(event) => handleChange(event)}
        autoFocus
      ></input>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
