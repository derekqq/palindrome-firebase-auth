import React, { lazy, Suspense } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import useAuthUser from 'hooks/useAuthUser';
import ProtectedRoute from 'routing/ProtectedRoute';

const LoginPage = lazy(() => import('pages/LoginPage'));
const PalindromCheckerPage = lazy(() => import('pages/PalindromCheckerPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

const history = createBrowserHistory();

function Routes() {
  const { isAuth } = useAuthUser();

  return (
    <Suspense fallback={<h1>Component loading ... </h1>}>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            {isAuth ? <Redirect to="/checker" /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact component={LoginPage} />
          <ProtectedRoute path="/checker" exact component={PalindromCheckerPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default Routes;
