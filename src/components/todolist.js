import React from 'react';
import TodoStore from '../stores/todostore';
import TodoActions from '../actions/todoactions';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = TodoStore.getState();
    this.changeCallback = this._onChange.bind(this);
  }
  render() {
    let {todos} = this.state;
    let todo_elements = [];
    for(let todo of todos) {
      todo_elements.push(<div>{todo}</div>);
    }
    if(todo_elements.length < 1) {
      todo_elements = <div>TODOS go here</div>;
    }
    return (
      <div>
        {todo_elements}
      </div>
    );
  }
  componentWillMount() {
    TodoStore.addChangeListener(this.changeCallback);
  }
  componentDidMount() {
    TodoActions.listTodos();
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.changeCallback);
  }
  _onChange() {
    this.setState(TodoStore.getState());
  }
}
