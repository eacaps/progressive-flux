import React from 'react';
import Header from './header';

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
        <div>
          TODOs go here
        </div>
      </div>
    );
  }
}
