/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { useQuery } from 'react-query';
import { getUsers } from '../services/users';
import { Pagination } from './Pagination';
import { IUsers } from '../services/model';
import { HeaderTable } from './HeaderTable';
import { ItemBodyTable } from './ItemBodyTable';
import SkeletonTable from './SkeletonTable';

const totalUsers = 100;
const limit = 10

export function ListUser() {

    const [users, setUser] = useState<IUsers[]>([]);
    const [totalPage, setTotalPage] = useState<number>(1);
    const queryString: { page?: string, gender?: string, userName?: string } = useQueryString();
    const page = Number(queryString.page) || 1;
    const gender = queryString.gender;
    const search = queryString.userName


    const { isLoading, data, isError } = useQuery({
        queryKey: ['users', page, gender],
        queryFn: () => getUsers(page, limit, gender),
        // keepPreviousData: true
    })

    useEffect(() => {
        if (data?.results) {
            setUser(data?.results)
        }
        setTotalPage(Math.ceil(totalUsers / limit))
    }, [data]);

    const sortUser = (item: IUsers[]) => setUser(item);

    useEffect(() => {
        if (search) {
            const searchList: IUsers[] = users?.filter((item) => {
                if (search?.toLowerCase().includes(item?.login?.username?.toLowerCase())) {
                    return item
                }
            })
            setUser(searchList);
            setTotalPage(searchList?.length)
        }
    }, [search]);

    if (isError) return <div className='h-screen flex text-gray-500 text-2xl'>Something went wrong, please try again !</div>

    return (
        <div className='w-full overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 bg-white shadow-sm rounded-md overflow-hidden relative '>
                <HeaderTable
                    sortUser={sortUser}
                    users={users}
                />
                {isLoading ? (
                    <tbody className='relative h-screen'>
                        <tr >
                            <td className='absolute top-0 left-0 right-0 bottom-0'>
                                <SkeletonTable />
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody className={`${users?.length !== 1 && 'h-screen'}`}>
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