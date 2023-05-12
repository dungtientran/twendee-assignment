import React from 'react';
import { IUsers } from '../services/model';



export function User(props: IUsers) {
  const { email, gender, location, login, name, nat, phone, picture, dob } = props;

  return (
    <div className='w-full h-full sm:flex items-center overflow-auto'>
      <div className='sm:w-[50%] px-2 h-full overflow-hidden rounded-md'>
        <img src={picture?.large} alt={login?.username} className='w-full h-full object-contain' />
      </div>
      <div className='sm:w-[50%] h-full p-3 flex items-center justify-center'>
        <div>
          <h1 className='text-xl font-bold mb-6'> <span className='text-sm'>{name?.title}.</span> {name?.first} {name?.last}</h1>
          <hr />
          <div className='space-y-4 mt-6'>
            <div>
              User name: <span className='font-semibold '>{login?.username}</span>
            </div>
            <div>
              Email: <span className='font-semibold '>{email}</span>
            </div>
            <div>
              Gender: <span className='font-semibold '>{gender}</span>
            </div>
            <div>
              Age: <span className='font-semibold '>{dob?.age}</span>
            </div>
            <div>
              Phone: <span className='font-semibold '>{phone}</span>
            </div>
            <div>
              City: <span className='font-semibold'>{location?.city}</span>
            </div>
            <div>
              Country: <span className='font-semibold'>{location?.country}</span>
            </div>
            <div>
              Nationality: <span className='font-semibold'>{nat}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
