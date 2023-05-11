import React from 'react';
import {Link} from 'react-router-dom'
export interface IHeaderProps {
}

export function Header(props: IHeaderProps) {
    return (
        <header >
            <div className='bg-[#51438F] px-6 py-4 flex items-center justify-between text-white font-semibold'>
                <Link to='/' className='uppercase'>
                    Twendee 
                    <p>Assignment</p>
                </Link>
                <div className='text-xs'>
                    <p>Trần Tiến Dũng</p>
                    <p>dungtran02071995@gmail.com</p>
                </div>
            </div>
        </header>
    );
}
