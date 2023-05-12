import React from 'react';
import { Header } from './Header';
import { ListUser } from './ListUser';
import { Filter } from './Filter';

export function Layout() {
    return (
        <div className='h-screen px-3 lg:px-0 lg:w-[1100px]  m-auto '>
            <Header />
            <main>
                <Filter />
                <ListUser />
            </main>
           
        </div>
    );
}
