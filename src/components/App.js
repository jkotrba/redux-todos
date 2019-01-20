import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodoUncontrolled';

const someTodos = [
  { id: 1, text: 'do work', comments: 'Quit slackin!', completed: false },
  {
    id: 2,
    text: 'go shopping',
    comments: 'Buy all the things',
    completed: false
  },
  { id: 3, text: 'workout', completed: false },
  { id: 4, text: 'call mom', completed: false }
];

const getNextId = todos => {
  let next = 1;
  if (todos && todos.length > 0) {
    const max = todos.reduce(
      (acc, todo) => (todo.id > acc ? todo.id : acc),
      next
    );
    next = max + 1;
  }
  return next;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: someTodos
    };

    this.handleSubmitTodo = this.handleSubmitTodo.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }

  handleTodoClick(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, ...{ completed: !todo.completed } };
        }
        return todo;
      })
    })
  }

  handleSubmitTodo(todo) {
    // Only handle submitting if we get something back
    if (todo) {
      const id = getNextId(this.state.todos);
      let newTodo = { ...todo, id };
      this.setState({
        todos: [...this.state.todos, newTodo]
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <TodoList
            todos={this.state.todos}
            onTodoClick={this.handleTodoClick}
          />
        </div>
        <div className="row">
          <AddTodo OnSubmitTodo={this.handleSubmitTodo} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
