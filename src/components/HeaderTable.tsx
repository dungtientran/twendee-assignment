import React, { useState, useEffect } from 'react';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import classNames from 'classnames';
import { IUsers } from '../services/model';
import { useSearchParams } from 'react-router-dom';
import { useQueryString } from '../hooks/useQueryString';

export interface IHeaderTableProps {
    sortUser: any,
    users: IUsers[]
}

export function HeaderTable(props: IHeaderTableProps) {
    
    const { sortUser, users } = props;
    const [sortFullName, setSortFullName] = useState('');
    const [sortUserName, setSortUserName] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const queryString = useQueryString();

    
    useEffect(() => {
        if(queryString.sortFullName){
            setSortFullName(queryString.sortFullName.toUpperCase())
        }
        if(queryString.sortUserName){
            setSortUserName(queryString.sortUserName.toUpperCase())
        }
    },[queryString.sortFullName, queryString.sortUserName])
    

    useEffect(() => {
        if (sortFullName === 'ASC') {
            sortUser([...users].sort((a, b) => (
                a.name.first.toLowerCase() > b.name.first.toLowerCase() ? 1 : -1
            )))
            searchParams.set("sortFullName", 'asc');
            setSearchParams(searchParams);
        }
        if (sortFullName === 'DSC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.name.first.toLowerCase() < b.name.first.toLowerCase() ? 1 : -1
                ))
            )
            searchParams.set("sortFullName", 'dsc');
            setSearchParams(searchParams);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortFullName]);
    useEffect(() => {
        if (sortUserName === 'ASC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.login.username.toLowerCase() > b.login.username.toLowerCase() ? 1 : -1
                ))
            )
            searchParams.set("sortUserName", 'asc');
            setSearchParams(searchParams);
        }
        if (sortUserName === 'DSC') {
            sortUser(
                [...users].sort((a, b) => (
                    a.login.username.toLowerCase() < b.login.username.toLowerCase() ? 1 : -1
                ))
            )
            searchParams.set("sortUserName", 'dsc');
            setSearchParams(searchParams);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortUserName]);





    return (
        <thead className='text-white uppercase bg-[#6F5CC3]'>
            <tr className=''>
                <th scope='col' className='px-4 sm:py-5 text-[10px] sm:text-[8px] md:px-6 md:py-3 md:text-xs'>Photo</th>
                <th scope='col' className='px-4 sm:py-5 text-[10px]  md:px-6 md:py-3 md:text-xs' >
                    <div className='flex items-center justify-between'>
                        <span className='whitespace-nowrap'>Full Name</span>
                        <div className='text-lg flex'>
                            <p className='text-[6px] md:text-[8px] flex-col items-center justify-center leading-[8px] hidden sm:flex'><span>A</span><span>I</span> <span>Z</span></p>
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
                <th scope='col' className='px-4 py-5 text-[10px]  md:px-6 md:py-3  md:text-xs' >
                    <div className='flex items-center justify-between '>
                        <span className='whitespace-nowrap'>User Name</span>
                        <div className='text-lg flex'>
                            <p className='text-[6px] md:text-[8px] flex-col items-center justify-center leading-[8px] hidden sm:flex'><span>A</span><span>I</span> <span>Z</span></p>
                            <div className='md:leading-[8px]'>
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
                <th scope='col' className='px-4 py-5 md:px-6 md:py-3 text-[10px]  md:text-xs'>Age</th>
                <th scope='col' className='px-4 py-5 md:px-6 md:py-3 text-[10px]  md:text-xs whitespace-nowrap'>Gender</th>
                <th scope='col' className='px-4 py-5 md:px-6 md:py-3 text-[10px]  md:text-xs'>Country</th>
                <th scope='col' className='px-4 py-5 md:px-6 md:py-3 text-[10px]  md:text-xs'>City</th>
                <th scope='col' className='px-4 py-5 md:px-6 md:py-3 text-[10px]  md:text-xs'>Action</th>
            </tr>
        </thead>
    );
}
