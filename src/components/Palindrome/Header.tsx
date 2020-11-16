import React from 'react';
import useAuthUser from 'hooks/useAuthUser';
import { auth } from 'services/firebase';

const doSignOut = async () => {
  try {
    await auth.doSignOut();
  } catch (err) {
    console.log('Something went wrong with logout');
  }
};

const FormChecker: React.FC = () => {
  const { currentUser } = useAuthUser();

  return (
    <div className="row">
      <h1 className="col-10">Hello {currentUser?.email}, now you can check palindrome</h1>
      <button onClick={doSignOut} className="btn btn-primary btn-md col-2 " type="submit">
        Logout
      </button>
    </div>
  );
};

export default FormChecker;
