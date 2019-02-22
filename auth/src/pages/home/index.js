import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withUser from '../../components/withUser';

const Home = (props) => {
  const { actions } = props;

  return (
    <div className="p-5 text-grey-lighter">
      This is the home page

      <div className="mt-20">
        <Link className="text-white" to="/dashboard">Go to dashboard</Link>
      </div>
      <div className="mt-5">
        <button
          onClick={actions.onLogin}
          className="rounded-sm p-2 text-white bg-green"
          type="button"
        >
          Click to log in
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  actions: PropTypes.shape({}).isRequired,
};

export default withUser(Home);
