import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
  const { to, name } = props;

  return <Link to={to}>{name}</Link>;
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// LinkComponent.defaultProps = {
//   requireAuth: false,
// };

export default LinkComponent;
