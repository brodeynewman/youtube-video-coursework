import React from 'react';
import withUpdate from './withUpdate';
import TestComponent from './TestComponent';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        hello there
        <TestComponent />
      </div>
    );
  }
}

export default withUpdate(App);
