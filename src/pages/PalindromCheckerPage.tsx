import React from 'react';
import { List, FormChecker, Header } from 'components/Palindrome';

const PalindromCheckerPage: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mb-4 text-center">
          <Header />
        </div>
        <div className="col-12 col-md-6">
          <FormChecker />
        </div>
        <div className="col-12 col-md-6">
          <List />
        </div>
      </div>
    </div>
  );
};

export default PalindromCheckerPage;
