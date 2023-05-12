import React, { useState, useEffect } from 'react';
import { IUsers } from '../services/model';
import { Model } from './Model';
import { User } from './User';

export interface IItemBodyTableProps {
  user: IUsers
}

export function ItemBodyTable(props: IItemBodyTableProps) {
  const { user } = props;
  const [isOpenUser, setIsOpenUser] = useState(false);

  const closeModel = () => setIsOpenUser(false);

  useEffect(() => {
    isOpenUser ?
      document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'

  }, [isOpenUser])

  return (

    <>
      <tr
        className='bg-white border-b cursor-pointer hover:bg-gray-50 duration-150'
        title={`${user?.name?.first} ${user?.name?.last}`}
      >
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>
          <div className='w-10 h-10 rounded-md overflow-hidden '>
            <img src={user?.picture?.thumbnail} alt={`${user?.name?.first} ${user?.name?.last}`} className='w-full h-full' />
          </div>
        </th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>
          <span className='text-[10px] font-semibold'>{user?.name?.title}. </span>
          <span>{user?.name?.first} </span>
          <span>{user?.name?.last}</span>
        </th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>{user?.login?.username}</th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>{user?.dob?.age}</th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>{user?.gender}</th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>{user?.phone}</th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>{user?.nat}</th>
        <th className='px-4 py-5 md:px-6 md:py-3 text-[10px] sm:text-xs'>
          <button
            className='px-3 py-1 bg-purple-700 text-white rounded-sm hover:bg-purple-900'
            title='View'
            onClick={() => setIsOpenUser(true)}
          >
            View
          </button>
        </th>
      </tr>
      {isOpenUser && (
        <Model closeModel={closeModel}>
          <User 
            email={user?.email}
            name={user?.name}
            location={user?.location}
            login={user?.login}
            phone={user?.phone}
            nat={user?.nat}
            cell={user?.cell}
            dob={user?.dob}
            id={user?.id}
            gender={user?.gender}
            picture={user?.picture}
            registered={user?.registered}            
          />
        </Model>
      )}
    </>
  );
}
