import React from 'react';
import { Store } from '../index.js';

const withUpdate = (ComposedComponent) =>
  class extends React.Component {
    render() {
      return (
        <Store.Consumer>
          {({ actions, model }) => (
            <ComposedComponent
              model={model}
              actions={actions}
              {...this.props}
            />
          )}
        </Store.Consumer>
      );
    }
  }

export default withUpdate;