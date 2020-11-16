import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addItem } from 'slices/palindromeSlice';

import { checkIsPalindrome } from 'helpers';

const FormChecker: React.FC = () => {
  const [sentence, setSentence] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = () => {
    const isPalindrome = checkIsPalindrome(sentence);
    dispatch(addItem({ sentence, isPalindrome }));
    setSentence('');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="exampleInputEmail1">Your sentence</label>
      <input
        value={sentence}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSentence(e.target.value)}
        type="text"
        className="form-control"
        id="sentence"
        name="sentence"
        ref={register({ required: true, minLength: 1 })}
      />
      {errors.sentence && <p className="text-danger mt-1">This field is required</p>}

      <button className="btn btn-primary mt-2" type="submit">
        Check
      </button>
    </form>
  );
};

export default FormChecker;
