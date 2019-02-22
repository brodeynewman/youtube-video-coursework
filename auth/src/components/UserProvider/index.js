import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext({});

class UserProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isLoggedIn: false,
  };

  get actions() {
    return {
      onLogin: this.handleLogin,
      onLogout: this.handleLogout,
    };
  }

  handleLogin = () => this.setState({
    isLoggedIn: true,
  });

  handleLogout= () => this.setState({
    isLoggedIn: false,
  });

  render() {
    const { isLoggedIn } = this.state;
    const { children } = this.props;

    return (
      <UserContext.Provider value={{
        isLoggedIn,
        actions: this.actions,
      }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
