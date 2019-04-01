import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './home_page/Home';

class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        {
          routes.map(route => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))
        }
      </Switch>
    );
  }
}

const routes = [
  {
    exact: true,
    path: '/',
    component: Home
  },
  {
    exact: false,
    path: '/',
    component: () => <Redirect to="/" />
  }
];

export default Routes;
