

import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({key,value,url}) => {
  return (
    <Link key={key || 1} to={url || '/'} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 w-full md:w-80">
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value || 'B#'}</h5>
  </Link>
  )
}

export default Card