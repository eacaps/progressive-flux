import React from 'react';
import TodoActions from '../actions/todoactions';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  render() {
    return (
      <form ref='todo-form' onSubmit={(event) => this._onSubmit(event)}>
        <input type='text' ref='todo-form-text' value={this.state.text} onChange={this._handleChange.bind(this)}/>
        <input type='submit' value='add'/>
      </form>
    );
  }
  _handleChange(event) {
    this.setState({text: event.target.value});
  }
  _onSubmit(event) {
    event.preventDefault();
    let value = this.state.text;
    return TodoActions.addTodo(value).then((data) => {
      if(data.success) {
        this.setState({added: value});
        TodoActions.listTodos();
      }
    });
  }
}
