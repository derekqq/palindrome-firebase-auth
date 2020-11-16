import React from 'react';

import { IPalindromeItem } from 'types';

interface IProps {
  id: number;
  readonly item: IPalindromeItem;
}

const ListItem: React.FC<IProps> = ({ id, item }) => {
  return (
    <tr className={item.isPalindrome ? 'bg-success' : 'bg-danger'}>
      <th className="text-white" scope="row">
        {id + 1}
      </th>
      <td className="text-white">{item.sentence}</td>
      <td className="text-white">{item.isPalindrome ? 'true' : 'false'}</td>
    </tr>
  );
};

export default ListItem;
