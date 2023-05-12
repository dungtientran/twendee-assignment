import React from 'react';
import {Link} from 'react-router-dom'
import { Search } from './Search';

export function Header() {
    return (
        <header >
            <div className='bg-[#51438F] px-6 py-4 flex items-center justify-between text-white font-semibold'>
                <Link to='/' className='uppercase text-xs sm:text-base'>
                    Twendee Assignment
                </Link>
                <Search />
                <div className='text-[8px] sm:text-xs'>
                    <p>Trần Tiến Dũng</p>
                    <p>dungtran02071995@gmail.com</p>
                </div>
            </div>
        </header>
    );
}
