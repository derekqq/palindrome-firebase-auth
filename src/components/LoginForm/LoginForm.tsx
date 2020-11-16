import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { auth } from 'services/firebase';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async () => {
    const { login, password } = watch();
    try {
      console.log(login, password);

      await auth.doSignInWithEmailAndPassword(login, password);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <h1 className="col-12 h2">Check palindromes - please log in to use the application.</h1>
          <div className="col-12 text-left mb-2 mt-5 ">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Please type: admin@test.com"
              id="login"
              name="login"
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            {errors.login && <small className="text-danger">This field is required</small>}
          </div>
          <div className="col-12 text-left mb-2">
            <label htmlFor="exampleInputEmail1">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Please type: admin1234"
              id="password"
              name="password"
              ref={register({ required: true })}
            />
            {errors.password && <small className="text-danger">This field is required</small>}
          </div>
          <div className="col-12 mt-2 d-flex flex-column">
            <button className="btn btn-primary btn-md px-4" type="submit">
              Login
            </button>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
