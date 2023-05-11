import React from 'react';

export interface IFilterProps {
}

export function Filter(props: IFilterProps) {
    return (
        <div className='py-3'>
            <div className='pl-6 flex items-center justify-between w-1/5' >
                <p className='text-[#9BA2B2] font-semibold'>Total users: 100</p>
                <div>
                    <button className='px-6 py-1 bg-[#6F5CC3] text-white font-semibold text-sm rounded-md'>Filter</button>
                </div>
            </div>
        </div>
    );
}
