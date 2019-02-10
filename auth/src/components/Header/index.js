import _ from 'lodash';
import React from 'react';

import Link from '../Link';

const Header = (props) => {
  const { links } = props;

  return (
    <div className="bg-white p-8 border-b border-solid border-grey flex justify-between">
      <div>
        Company
      </div>
      <div>
        {_.map(links, link => <Link {...link} />)}
      </div>
    </div>
  );
}

export default Header;
