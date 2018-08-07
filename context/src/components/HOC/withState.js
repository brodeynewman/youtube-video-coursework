import React from 'react';
import { context } from '../Provider';

const withState = ComposedComponent => props => (
  <context.Consumer>
    {({ model, actions }) => (
      <ComposedComponent
        model={model}
        actions={actions}
        {...props}
      />
    )}
  </context.Consumer>
);

export default withState;
