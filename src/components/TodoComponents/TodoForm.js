// <TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from "react";

class TodoForm extends React.Component {

  constructor() {
    super();
    this.state = {
      newItem: ""
    };
  }

  // it has an event because it comes from onChange
  handleChanges = event => {
    this.setState({ ...this.state, newItem: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    // Where does it get addNewItem
    this.props.addNewItem(this.state.newItem);
    this.setState({
      newItem: ""
    });

  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTodo"> Add New To-do
            <input
              // this.handleSubmit --> this makes ref to class TodoForm
              onChange={this.handleChanges}
              type="text"
              name="newTodo"
              // WHAT DOES THIS DO AGAIN?
              value={this.state.newItem}
            />
          </label>
          <button>Add To-do</button>
        </form>
        <button onClick={this.props.clearTodo}>Clear Completed</button>
      </div>
    )
  }

}

export default TodoForm;