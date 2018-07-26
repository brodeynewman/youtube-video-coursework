import React from 'react';

const withSomething = ComposedComponent =>
  class extends React.Component {
    state = {}; // stuff in here

    componentDidMount() {
      // do some stuff..
      console.log('I am doing something');
    }

    render() {
      return <ComposedComponent {...this.props} {...this.state} />;
    }
  }

export default withSomething;