import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from 'components/LoginForm/LoginForm';
import useAuthUser from 'hooks/useAuthUser';

const LoginPage: React.FC = () => {
  const { isAuth } = useAuthUser();

  if (isAuth) {
    return <Redirect to="/checker" />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
