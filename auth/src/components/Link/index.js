import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withUser from '../withUser';

const LinkComponent = (props) => {
  const {
    to,
    name,
    isLoggedIn,
    requireAuth,
  } = props;

  if (requireAuth && !isLoggedIn) {
    return null;
  }

  return (
    <Link
      className="ml-5 text-indigo-darkest pb-2 no-underline border-b border-grey-dark"
      to={to}
    >
      {name}
    </Link>
  );
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool,
  requireAuth: PropTypes.bool,
};

LinkComponent.defaultProps = {
  isLoggedIn: false,
  requireAuth: false,
};

export default withUser(LinkComponent);
