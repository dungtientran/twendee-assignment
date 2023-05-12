import React, { useEffect, useState } from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { useQuery } from 'react-query';
import { getUsers } from '../services/users';
import { Pagination } from './Pagination';
import { IUsers } from '../services/model';
import { HeaderTable } from './HeaderTable';
import { ItemBodyTable } from './ItemBodyTable';


const totalUsers = 100;
const limit = 10

export function ListUser() {
    const [users, setUser] = useState<IUsers[]>([]);

    const queryString: { page?: string } = useQueryString();
    const page = Number(queryString.page) || 1
    const totalPage = Math.ceil(totalUsers / limit);
    const { isLoading, data } = useQuery({
        queryKey: ['users', page],
        queryFn: () => getUsers(page, 10),
        // keepPreviousData: true
    })

    useEffect(() => {
        if (data?.data?.results) {
            setUser(data?.data?.results)
        }
    }, [data])

    useEffect(() => {
        document.title = 'Twendee Assignment'
    }, [])


    const sortUser = (item: IUsers[]) => setUser(item);

    return (
        <div className='w-full '>
            <table className='w-full text-sm text-left text-gray-500 bg-white shadow-sm rounded-md overflow-hidden relative h-screen'>
                <HeaderTable
                    sortUser={sortUser}
                    users={users}
                />
                {isLoading ? (
                    <tbody className='relative'>
                        <tr>
                            <td>
                                <div role='status' className='mt-6 animate-pulse absolute top-0 left-0 right-0 bottom-0'>
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6 rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                    <div className='mb-2.5 py-8 px-6  rounded bg-gray-200 dark:bg-gray-700' />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {users?.map((item, index) => (
                            <ItemBodyTable
                                key={index}
                                user={item}
                            />
                        ))}
                    </tbody>

                )
                }
            </table>
            <Pagination
                page={page}
                totalPage={totalPage}
            />
        </div >
    );
}