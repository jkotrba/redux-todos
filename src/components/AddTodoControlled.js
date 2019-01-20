import React, { Component } from 'react'

const defaultState = {
  text: '',
  comments: ''
}

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = defaultState

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChanged = this.handleInputChanged.bind(this)
    this.reset = this.reset.bind(this)
  }

  reset() {
    this.setState(defaultState)
  }

  handleSubmit(e) {
    e.preventDefault()
    const newTodo = Object.assign({}, this.state )
    this.props.OnSubmitTodo(newTodo)
    this.reset()
  }

  handleInputChanged(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({[name]: value})
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
              value={this.state.text}
              className="form-control"
              onChange={this.handleInputChanged} />
          </div>
          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.handleInputChanged} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default AddTodo
