// <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from 'react';
import "./Todo.css";

const Todo = props => {
  return (
    <div
      // don't forget to add the (), no need for event since it's not being used
      onClick={() => props.toggleCompleted(props.todo.id)}
      className={`item${props.todo.completed ? " purchased" : ""}`}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;