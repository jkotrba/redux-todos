import React from 'react'
import PropTypes from 'prop-types'
import './todo.css'

const Todo = ({ onClick, completed, text, comments }) => {
  let completedIndicator = <span>&nbsp;</span>
  if(completed) {
    completedIndicator = <span className="todo-check badge badge-pill badge-success"><i className="fa fa-check"></i></span>
  }
  return (
  <div
    className="todo"
    onClick={onClick}
    >
    <div className="card" style={{width: "20rem"}}>
      <div className="card-body">
        {completedIndicator}
        <h5 className="card-title">
          {text}
        </h5>
        <p>{comments}</p>
      </div>
    </div>
  </div>
)}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  comments: PropTypes.string
}

export default Todo
