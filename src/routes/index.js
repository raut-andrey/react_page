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
              exaxt={route.exaxt}
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
    exaxt: true,
    path: '/',
    component: Home
  },
  {
    exaxt: false,
    path: '/',
    component: () => <Redirect to="/" />
  }
];

export default Routes;
