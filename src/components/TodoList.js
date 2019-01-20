import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'
import './todolist.css'

const TodoList = ({ todos, onTodoClick }) => (
  <div className="todolist">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      comments: PropTypes.string
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}


export default TodoList
