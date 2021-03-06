import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  state = { items: [], text: '' }

  handleChange = (e) => (
    this.setState({ text: e.target.value })
  )

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }

    return this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }
}

export default TodoApp
