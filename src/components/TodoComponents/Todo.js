// <Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from 'react';

const Todo = props => {
  return (
    <div
      // don't forget to add event since it's onClick
      onClick={() => props.toggleCompleted(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;