import React from 'react';
import { useSelector } from 'react-redux';

import { IPalindromeSliceState, IState } from 'types';

import ListItem from './ListItem';

const PalindromList: React.FC = () => {
  const palindromeList = useSelector((state: IState<IPalindromeSliceState>) => state.palindrome.list);

  return (
    <table className="table table-striped table-borderless">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Word / sentence</th>
          <th scope="col">Is palindrome</th>
        </tr>
      </thead>
      <tbody>
        {palindromeList.map((item, id) => (
          <ListItem key={id} id={id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default React.memo(PalindromList);
