import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
  const { to, name } = props;

  return <Link className="ml-5 text-indigo-darkest pb-2 no-underline border-b border-grey-dark" to={to}>{name}</Link>;
};

LinkComponent.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// LinkComponent.defaultProps = {
//   requireAuth: false,
// };

export default LinkComponent;
