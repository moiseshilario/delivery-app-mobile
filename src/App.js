import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import createNavigator from '~/routes';
import { setNavigator } from './services/navigation';

class App extends Component {
  static propTypes = {
    auth: PropTypes.shape({
      authChecked: PropTypes.bool,
      loggedUser: PropTypes.oneOfType([null, PropTypes.object]),
    }).isRequired,
  };

  registerService = (ref) => {
    setNavigator(ref);
  };

  render() {
    const { auth } = this.props;

    if (!auth.authChecked) return null;

    const Routes = createNavigator(!!auth.loggedUser);

    return <Routes ref={this.registerService} />;
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
