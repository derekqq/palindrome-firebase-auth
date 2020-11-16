import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import useAuthUser from 'hooks/useAuthUser';

interface IPrivateRouteProps extends RouteProps {
  component: any;
}

const ProtectedRoute = ({ component: Component, ...rest }: IPrivateRouteProps) => {
  const { isAuth } = useAuthUser();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? <Component /> : <Redirect to={{ pathname: '/login', state: { from: location } }} />
      }
    />
  );
};

export default ProtectedRoute;
