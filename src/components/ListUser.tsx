import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useSearchParams } from 'react-router-dom';
import { getAllUserAction } from '../store/reducers/usersSlice';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';
import { Pagination } from './Pagination';

export interface IListUserProps {
}

export function ListUser(props: IListUserProps) {
    const { users, isLoading } = useAppSelector(state => state.users);
    const dispatch = useAppDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState('1');

    useEffect(() => {
        if (searchParams.get('page')) {
            setPage(searchParams.get('page') as string);
        }
    }, [searchParams])

    useEffect(() => {
        dispatch(getAllUserAction(page))
    }, [dispatch, page])

    useEffect(() => {
        document.title = 'Twendee Assignment'
    }, []);


    // if (isLoading) return <><div className='fixed top-0 left-0 right-0 bottom-0 bg-black-rgba'>Loading....</div></>

    // if(users?.length === 0) return <div>Có lỗi. F5 </div>
    //    console.log(users);
    return (
        <div className='w-full relative'>
           
            <table className='w-full text-sm text-left text-gray-500 bg-white shadow-sm rounded-md overflow-hidden relative h-screen'>
                <thead className='text-xs text-white uppercase bg-[#6F5CC3]'>
                    <tr className=''>
                        <th scope='col' className='px-6 py-3'>Photo</th>
                        <th scope='col' className='px-6 py-3 flex items-center justify-between' >
                            Name
                            <div className='text-lg flex'>
                                <p className='text-[8px] flex flex-col items-center justify-center leading-[8px]'><span>A</span><span>I</span> <span>Z</span></p>
                                <div className='leading-[8px]'>
                                    <span className='cursor-pointer hover:text-red-600'><MdOutlineArrowDropUp /></span>
                                    <span className='cursor-pointer hover:text-red-600'><MdOutlineArrowDropDown /></span>
                                </div>
                            </div>
                        </th>
                        <th scope='col' className='px-6 py-3'>Email</th>
                        <th scope='col' className='px-6 py-3'>Age</th>
                        <th scope='col' className='px-6 py-3 whitespace-nowrap'>Sex</th>
                        <th scope='col' className='px-6 py-3'>Country</th>
                        <th scope='col' className='px-6 py-3'>City</th>
                    </tr>
                </thead>
                {isLoading ? (
                <div className='absolute left-0 top-0 right-0 bottom-0 bg-black-rgba'>
                    Loading
                </div>
            ): (
                <tbody>
                    {users?.map((item, index) => (
                        <tr key={index}
                            className='bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-xs cursor-pointer hover:bg-gray-50 duration-150'
                            title={`${item?.name?.first} ${item?.name?.last}`}
                        >
                            <th className='px-6 py-4'>
                                <div className='w-10 h-10 rounded-md overflow-hidden '>
                                    <img src={item?.picture?.thumbnail} alt={`${item?.name?.first} ${item?.name?.last}`} className='w-full h-full' />
                                </div>
                            </th>
                            <th className='px-6 py-4'>
                                <span className='text-xs font-semibold'>{item?.name?.title}. </span>
                                <span>
                                    <span>{item?.name?.first} </span>
                                    <span>{item?.name?.last}</span>
                                </span>
                            </th>
                            <th className='px-6 py-4'>{item?.email}</th>
                            <th className='px-6 py-4'>{item?.dob?.age}</th>
                            <th className='px-6 py-4'>{item?.gender}</th>
                            <th className='px-6 py-4'>{item?.location?.country}</th>
                            <th className='px-6 py-4'>{item?.location?.city}</th>
                        </tr>
                    ))}
                </tbody>

            )
        }
            </table>
            <Pagination />

        </div>
    );
}
