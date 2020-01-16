import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      todoList: todoData
    };
  }

  addNewItem = newTodoItem => {
    const newState = {
      ...this.state,
      todoList: [
        ...this.state.todoList,
        { task: newTodoItem, completed: false, id: Date.now() }
      ]
    };
    // just declared above
    this.setState(newState);
  };

  toggleCompleted = id => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(item => {
        // if item meets condition, change completed status
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        // return others unchanged
        return item;
      })
    };
    this.setState(newState);
  };


  clearTodo = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(item => {
        return !item.completed;
      })
    };
    this.setState(newState);
  };
  
  render() {
    return (
      <section>
        <TodoList 
          todos={this.state.todoList}
          toggleCompleted={this.toggleCompleted}   
        />
        <TodoForm 
          addNewItem={this.addNewItem} 
          clearTodo={this.clearTodo}
        />
      </section>
    );
  }
}

export default App;
