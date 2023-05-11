import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';

export interface IPaginationProps {
}

export function Pagination(props: IPaginationProps) {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div className='mt-3 w-full'>
            <ul className='flex items-center justify-center space-x-2 w-[60%] m-auto'>
                <li className='px-2 py-1 rounded-sm bg-red-500 cursor-pointer' onClick={(e) => setSearchParams({ page: '1' })}>1</li>
                <li className='px-2 py-1 rounded-sm bg-red-500 cursor-pointer' onClick={(e) => setSearchParams({ page: '2' })}>2</li>
                <li className='px-2 py-1 rounded-sm bg-red-500 cursor-pointer' onClick={(e) => setSearchParams({ page: '3' })}>3</li>
                <li className='px-2 py-1 rounded-sm bg-red-500 cursor-pointer' onClick={(e) => setSearchParams({ page: '4' })}>4</li>
            </ul>
        </div>
    );
}
