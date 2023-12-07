import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ buttonName, url, icon }) => {
  return (
    <Link to={url ? url : '/'}>
      <div className="flex  w-80 flex-col items-center md:mb-0 justify-center hover:bg-gray-100 dark:hover:bg-gray-700 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
       <div className='mb-2'>
        {icon}
        </div>

        <Link to={url ? url : '/'}>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {buttonName ? buttonName : 'Button'}
          </h5>
        </Link>
      </div>
    </Link>
  );
};

export default LinkButton;
