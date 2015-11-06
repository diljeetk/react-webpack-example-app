import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash';

//////////////////////////////////////////////////////
// State

const currentUser = {name: 'AdminGuy', roles: ['admin']}
// const currentUser = {name: 'StandardUser', roles: ['user']}


//////////////////////////////////////////////////////
// Decorator

let protectRoute = (role, routeComponent) => {
  let isAllowed = _.includes(currentUser.roles, role);

  return decoratedComponent => {
    return !isAllowed ? routeComponent : decoratedComponent;
  };
}

//////////////////////////////////////////////////////
// Views

class ProtectedRoute extends Component {
  render() {
    return (
      <div>This route is protected. You are not authorized.</div>
    )
  }
}

class _App extends Component {
  render() {
    return (
      <div>You are authorized. Proceed at your leisure.</div>
    )
  }
}

const App = protectRoute('admin', ProtectedRoute)(_App);

render(<App />, document.getElementById('content'));
