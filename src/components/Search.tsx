import React, {useState} from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSearchParams } from 'react-router-dom';

export function Search() {
    const [searchUserName, setSearchUserNam] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        searchParams.set("userName", searchUserName);
        setSearchParams(searchParams);
        setSearchUserNam('')
    }

    return (
        <div className='w-[30%]'>
            <form onSubmit={handleSubmitSearch}>
                <div className=' hidden sm:block text-xs relative rounded-sm overflow-hidden'>
                    <input
                        type="text"
                        id='search'
                        name='search'
                        className='w-full h-full outline-none text-black px-3 py-1  placeholder:font-thin'
                        placeholder='Search User Name'
                        value={searchUserName}
                        onChange={(e) => setSearchUserNam(e.target.value)}
                    />
                    <label htmlFor='search' className='absolute flex items-center justify-center cursor-pointer top-0 bottom-0 right-0 px-2 bg-purple-500 text-sm overflow-hidden group'>
                        <button><CiSearch className=' group-hover:scale-110' /></button>
                    </label>
                </div>
            </form>
        </div>
    );
}
