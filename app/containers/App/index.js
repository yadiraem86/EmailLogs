/* eslint-disable import/no-unresolved */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from '../../global-styles';
import AppLayout from '../../components/AppLayout';
import routes from '../../config/routes';

export default function App() {
  return (
    <AppLayout>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.key}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
      <GlobalStyle />
    </AppLayout>
  );
}
