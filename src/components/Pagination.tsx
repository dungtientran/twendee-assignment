import React from 'react';
import { useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

export interface IPaginationProps {
    page: number,
    totalPage: number
}

export function Pagination(props: IPaginationProps) {
    const { page, totalPage } = props;
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectPageNumber =(pageNumber: number) => {
        searchParams.set("page", pageNumber.toString());
            setSearchParams(searchParams);
    }
    return (
        <div className='py-6 flex justify-center w-full text-[8px] sm:text-sm'>
            <nav aria-label='Page navigation example'>
                <ul className='inline-flex -space-x-px'>
                    <li>
                        {page === 1 ? (
                            <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                                Prev
                            </span>
                        ) : (
                            <span
                                className='rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer'
                                onClick={() => handleSelectPageNumber(page - 1)}
                            >
                                Prev
                            </span>
                        )}
                    </li>
                    {Array(totalPage).fill(0).map((_, index) => {
                        const pageNumber = index + 1;
                        const isActive = page === pageNumber;
                        return (
                            <li key={pageNumber} 
                                onClick={() => handleSelectPageNumber(pageNumber )}
                            >
                                <span
                                    className={classNames(
                                        'border border-gray-300 py-2 px-3 leading-tight hover:bg-[#6F5CC3] hover:text-white cursor-pointer',
                                        {
                                            'bg-[#6F5CC3] text-white': isActive,
                                            'bg-white text-gray-500': !isActive
                                        }
                                    )}
                                >
                                    {pageNumber}
                                </span>
                            </li>
                        )
                    })}
                    <li>
                        {page === totalPage ? (
                            <span className='cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                                Next
                            </span>
                        ) : (
                            <span
                            className='rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 cursor-pointer'
                            onClick={() => handleSelectPageNumber(page + 1)}
                        >
                            Next
                        </span>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
