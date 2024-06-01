import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";
import ToDoListWrapperLocalStorage from "./TodoListWrapperLocalStorage";

const TodoListWrapper = () => {
  const [toDoList, setToDoList] = ToDoListWrapperLocalStorage("todoList", []);

  const addToDo = (todo) => {
    setToDoList([
      ...toDoList,
      {
        id: uuidv4(),
        task: todo,
        isCompleted: false,
        isEditing: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const toggleEditing = (id) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((todo) => todo.id !== id));
  };

  const editToDo = (id, value) => {
    setToDoList(
      toDoList.map((todo) =>
        todo.id === id ? { ...todo, task: value, isEditing: false } : todo
      )
    );
  };

  return (
    <div className="to-do-list-container">
      <h1>Things to Do!</h1>
      <TodoForm addToDo={addToDo} />
      {toDoList.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            itemKey={todo.id}
            taskName={todo.task}
            editToDo={editToDo}
          />
        ) : (
          <TodoList
            key={todo.id}
            itemKey={todo.id}
            index={index}
            todo={todo.task}
            deleteToDo={deleteToDo}
            toggleComplete={toggleComplete}
            completed={todo.isCompleted}
            toggleEditing={toggleEditing}
          />
        )
      )}
    </div>
  );
};

export default TodoListWrapper;
