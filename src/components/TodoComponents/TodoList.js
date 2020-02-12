// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

import React from 'react';
import Todo from './Todo';

// WHY NO CLASS CONSTRUCTOR?
const TodoList = props => {
  return (
    <section>
      {props.todos.map(item => {
        return (
          <Todo 
            todo={item} 
            key={item.id}
            toggleCompleted={props.toggleCompleted}
                      
          />
        )
      })}

    </section>
  )
};

export default TodoList;