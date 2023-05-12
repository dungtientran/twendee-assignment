import React from 'react';
import { useQueryString } from '../hooks/useQueryString';
import { useNavigate, useSearchParams } from 'react-router-dom';

export interface IFilterProps {
}

export function Filter(props: IFilterProps) {
  
    return (
        <div className='py-3'>
            <div className='pl-6 flex items-center justify-between' >
                <p className='text-[#9BA2B2] font-semibold'>Total users: 100</p>
                {/* <div>
                    <button className='px-6 py-1 bg-[#6F5CC3] text-white font-semibold text-sm rounded-md'>Filter</button>
                </div> */}
                <div>
                    <select
                     className='px-3 py-[1px] rounded-sm text-sm bg-[#6F5CC3] text-white outline-none'
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
