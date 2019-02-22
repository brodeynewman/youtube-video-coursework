import React from 'react';
import PropTypes from 'prop-types';

import withAuth from '../../components/withAuth';
import withUser from '../../components/withUser';

const Dashboard = (props) => {
  const { actions } = props;

  return (
    <div className="p-5 text-grey-lighter">
      This is the dashboard page
      <button
        onClick={actions.onLogout}
        className="rounded-sm p-2 text-white bg-green"
        type="button"
      >
        Click to log out
      </button>
    </div>
  );
};

Dashboard.propTypes = {
  actions: PropTypes.shape({}).isRequired,
};

const ComponentWithAuth = withAuth({
  redirectLocation: '/unauthenticated',
})(Dashboard);

export default withUser(ComponentWithAuth);
