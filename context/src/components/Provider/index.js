import React from 'react';

export const context = React.createContext();

class StateProvider extends React.Component {
  state = {
    count: 0,
  };

  get actions() {
    return {
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter,
    };
  }

  incrementCounter = () => this.setState(({ count }) => ({
    count: count + 1,
  }));

  decrementCounter = () => this.setState(({ count }) => ({
    count: count - 1,
  }));

  render() {
    const { children } = this.props;

    return (
      <context.Provider value={{
        model: this.state,
        actions: this.actions,
      }}
      >
        {children}
      </context.Provider>
    );
  }
}

export default StateProvider;
