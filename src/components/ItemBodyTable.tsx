import React from 'react';
import { IUsers } from '../services/model';

export interface IItemBodyTableProps {
  user: IUsers
}

export function ItemBodyTable(props: IItemBodyTableProps) {
  const {user} = props;
  return (
    <tr
      className='bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-xs cursor-pointer hover:bg-gray-50 duration-150'
      title={`${user?.name?.first} ${user?.name?.last}`}
    >
      <th className='px-6 py-4'>
        <div className='w-10 h-10 rounded-md overflow-hidden '>
          <img src={user?.picture?.thumbnail} alt={`${user?.name?.first} ${user?.name?.last}`} className='w-full h-full' />
        </div>
      </th>
      <th className='px-6 py-4'>
        <span className='text-xs font-semibold'>{user?.name?.title}. </span>
        <span>
          <span>{user?.name?.first} </span>
          <span>{user?.name?.last}</span>
        </span>
      </th>
      <th className='px-6 py-4'>{user?.login?.username}</th>
      <th className='px-6 py-4'>{user?.dob?.age}</th>
      <th className='px-6 py-4'>{user?.gender}</th>
      <th className='px-6 py-4'>{user?.location?.country}</th>
      <th className='px-6 py-4'>{user?.location?.city}</th>
    </tr>
  );
}
