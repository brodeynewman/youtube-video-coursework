import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import withUser from '../withUser';

const withAuth = ({ redirectLocation = '/' }) => (ComposedComponent) => {
  const Auth = (props) => {
    const { isLoggedIn } = props;

    if (!isLoggedIn) return <Redirect to={redirectLocation} />;

    return <ComposedComponent {...props} />;
  };

  Auth.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
  };

  return withUser(Auth);
};

export default withAuth;
