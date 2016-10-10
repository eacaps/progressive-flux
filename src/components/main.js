import React from 'react';
import Header from './header';
import TodoList from './todolist';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <Header/>
        <TodoList/>
      </div>
    );
  }
}
