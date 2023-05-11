import React from 'react';
import { Header } from './Header';
import { ListUser } from './ListUser';
import { Pagination } from './Pagination';
import { Filter } from './Filter';


export function Layout() {
    return (
        <div className='h-screen max-w-[1100px] m-auto '>
            <Header />
            <div className=''>
                <Filter />
                <ListUser />
            </div>
        </div>
    );
}
