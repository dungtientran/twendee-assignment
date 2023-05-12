import React from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { useSearchParams } from 'react-router-dom';

export interface IFilterProps {
}

export function Filter(props: IFilterProps) {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSelectGender =(e: React.ChangeEvent<HTMLSelectElement>) => {
        searchParams.set("gender", e.target.value);
            setSearchParams(searchParams);
    }
    return (
        <div className='py-3'>
            <div className='pl-6 flex items-center justify-between' >
                <p className='text-[#9BA2B2] font-semibold'>Total users: 100</p>
             
                <div>
                    <select
                     className='px-3 py-[1px] rounded-sm text-sm bg-[#6F5CC3] text-white outline-none'
                     onChange={handleSelectGender}
                     >
                        <option value="" className='bg-white text-black'>All</option>
                        <option value="male" className='bg-white text-black'>Male</option>
                        <option value="female" className='bg-white text-black'>Female</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
