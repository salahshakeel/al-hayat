

import React from 'react'
import { Link } from 'react-router-dom';

const LinkButton = ({buttonName,url,icon}) => {
  return (

<Link to={url ? url : '/'}>
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
{icon}


    <Link to={url ? url : '/'}>
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{buttonName ? buttonName : 'Button'}</h5>
    </Link>
   
</div>
</Link>

  )
}

export default LinkButton