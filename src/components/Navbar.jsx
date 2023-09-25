import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200'>
      <Link to='/'>
        <h1 className='text-xl font-bold'>Campuslands Incidents</h1>
      </Link>
      <div className='flex items-center gap-2'>
        <Link to='/SignIn'>
          <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Login</button>
        </Link>
        <Link to='/signUp'>
          <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md'>Sign Up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;