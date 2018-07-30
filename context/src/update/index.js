import React from 'react';
import incrementCount from '../messages/incrementCount';
import decrementCount from '../messages/decrementCount';

class Updater extends React.Component {
  state = this.props.model;
  
  incrementCount = () => this.setState(incrementCount);

  decrementCount = () => this.setState(decrementCount);

  get actions() {
    return {
      incrementCount: this.incrementCount,
      decrementCount: this.decrementCount,
    };
  }

  render() {
    const { children, Store } = this.props;

    return (
      <Store.Provider value={{
        actions: this.actions,
        model: this.state,
      }}>
        {children}
      </Store.Provider>
    );
  }
}

export default Updater;
