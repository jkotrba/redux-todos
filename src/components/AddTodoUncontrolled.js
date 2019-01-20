import React, { Component } from 'react'

const defaultState = {
  text: '',
  comments: ''
}

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someField: 'initial state'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.text.value = ''
    this.comments.value = ''
  }

  handleSubmit(e) {
    e.preventDefault()
    const newTodo = {
      text: this.text.value,
      comments: this.comments.value
    }
    this.setState({someField: 'handling submit'})
    this.props.OnSubmitTodo(newTodo)
    this.reset()
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              id="text"
              name="text"
              type="text"
              ref={el => this.text = el}
              className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              type="text"
              className="form-control"
              ref={el => this.comments  = el} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
