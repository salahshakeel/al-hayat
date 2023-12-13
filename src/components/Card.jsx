

import React from 'react'
import { FaBook } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Card = ({key,value,url}) => {
  return (
    <Link key={key || 1} to={url || '/'} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-white dark:border-gray-200 dark:hover:bg-gray-300 w-full md:w-80">
    
    <h5 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-black flex items-center justify-center "><FaBook size={20} />&nbsp;{value || 'B#'}</h5>
  </Link>
  )
}

export default Card