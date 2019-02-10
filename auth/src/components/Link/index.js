import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = (props) => {
  const { to, name } = props;

  return <Link to={to}>{name}</Link>;
};

export default LinkComponent;
