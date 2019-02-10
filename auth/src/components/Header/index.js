import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';

const Header = (props) => {
  const { links } = props;

  return (
    <div className="bg-white p-8 border-b border-solid border-grey flex justify-between">
      <div className="text-indigo-darkest font-medium">
        Company
      </div>
      <div>
        {_.map(links, link => <Link {...link} />)}
      </div>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    requireAuth: PropTypes.bool,
    name: PropTypes.string,
  })).isRequired,
};

export default Header;
