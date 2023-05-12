import React, {useState, useEffect} from 'react';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import classNames from 'classnames';
import { IUsers } from '../services/model';

export interface IHeaderTableProps {
    sortUser: any,
    users: IUsers[]
}

export function HeaderTable (props: IHeaderTableProps) {
    const {sortUser, users} = props;
    const [sortFullName, setSortFullName] = useState('');
    const [sortUserName, setSortUserName] = useState('');

    useEffect(() => {
        if (sortFullName === 'ASC') {

            sortUser([...users].sort((a, b) => (
                    a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
                ))
                )
        }
        if (sortFullName === 'DSC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.name.first.toLowerCase() < b.name.first.toLowerCase() ? 1 : -1
                ))
            )
        }
    }, [sortFullName]);
    useEffect(() => {
        if (sortUserName === 'ASC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.login.username.toLowerCase() > b.login.username.toLowerCase() ? 1 : -1
                ))
            )
        }
        if (sortUserName === 'DSC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.login.username.toLowerCase() < b.login.username.toLowerCase() ? 1 : -1
                ))
            )
        }
    }, [sortUserName]);

  return (
    <thead className='text-xs text-white uppercase bg-[#6F5CC3]'>
    <tr className=''>
        <th scope='col' className='px-6 py-3'>Photo</th>
        <th scope='col' className='px-6 py-3 ' >
            <div className='flex items-center justify-between'>
                <span>Full Name</span>
                <div className='text-lg flex'>
                    <p className='text-[8px] flex flex-col items-center justify-center leading-[8px]'><span>A</span><span>I</span> <span>Z</span></p>
                    <div className='leading-[8px]'>
                        <span
                            className={classNames(
                                'cursor-pointer hover:text-red-600',
                                {
                                    'text-red-600 ': sortFullName === 'ASC'
                                }
                            )}
                            onClick={() => setSortFullName('ASC')}>
                            <MdOutlineArrowDropUp />
                        </span>
                        <span
                            className={classNames(
                                'cursor-pointer hover:text-red-600',
                                {
                                    'text-red-600 ': sortFullName === 'DSC'
                                }
                            )}
                            onClick={() => setSortFullName('DSC')}>
                            <MdOutlineArrowDropDown />
                        </span>
                    </div>
                </div>
            </div>
        </th>
        <th scope='col' className='px-6 py-3 ' >
            <div className='flex items-center justify-between'>
                <span>User Name</span>
                <div className='text-lg flex'>
                    <p className='text-[8px] flex flex-col items-center justify-center leading-[8px]'><span>A</span><span>I</span> <span>Z</span></p>
                    <div className='leading-[8px]'>
                        <span
                            className={classNames(
                                'cursor-pointer hover:text-red-600',
                                {
                                    'text-red-600 ': sortUserName === 'ASC'
                                }
                            )}
                            onClick={() => setSortUserName('ASC')}>
                            <MdOutlineArrowDropUp />
                        </span>
                        <span
                            className={classNames(
                                'cursor-pointer hover:text-red-600',
                                {
                                    'text-red-600 ': sortUserName === 'DSC'
                                }
                            )}
                            onClick={() => setSortUserName('DSC')}>
                            <MdOutlineArrowDropDown />
                        </span>
                    </div>
                </div>
            </div>
        </th>
        <th scope='col' className='px-6 py-3'>Age</th>
        <th scope='col' className='px-6 py-3 whitespace-nowrap'>Gender</th>
        <th scope='col' className='px-6 py-3'>Country</th>
        <th scope='col' className='px-6 py-3'>City</th>
    </tr>
</thead>
  );
}
