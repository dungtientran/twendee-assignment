import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export interface IPaginationProps {
    page: number,
    totalPage: number

}

export function Pagination(props: IPaginationProps) {
const {page, totalPage} = props
    return (
        <div className='py-6 flex justify-center'>
        <nav aria-label='Page navigation example'>
            <ul className='inline-flex -space-x-px'>
                <li>
                    {page === 1 ? (
                        <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                            Prev
                        </span>
                    ) : (
                        <Link
                            className='rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
                            to={`/?page=${page - 1}`}
                        >
                            Prev
                        </Link>
                    )}
                </li>
                {Array(totalPage).fill(0).map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = page === pageNumber;
                    return (
                        <li key={pageNumber}>
                            <Link
                                className={classNames(
                                    'border border-gray-300 py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 ',
                                    {
                                        'bg-[#6F5CC3] text-white': isActive,
                                        'bg-white text-gray-500': !isActive
                                    }
                                )}
                                to={`?page=${pageNumber}`}
                            >
                                {pageNumber}
                            </Link>
                        </li>
                    )
                })}
                <li>
                    {page === totalPage ? (
                        <span className='cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                            Next
                        </span>
                    ) : (
                        <Link
                            className='rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
                            to={`/?page=${page + 1}`}
                        >
                            Next
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    </div>
    );
}
