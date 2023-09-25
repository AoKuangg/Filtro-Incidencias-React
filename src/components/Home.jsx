import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {

  return (
    <div>
      <div className='flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200'>
        <h1 className='text-xl font-bold'>Campuslands Incidents</h1>
        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <img className='w-8 h-8 rounded-full'/>
            <span className='text-gray-700'></span>
          </div>
          <Link to='/'>
            <button className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md'>Logout</button>
          </Link>
        </div>
      </div>
      <div className='p-4'>
        <h1>Welcome to Campuslands Incidents</h1>
        <p>This is the home page for logged-in users.</p>
      </div>
    </div>
  );
}
