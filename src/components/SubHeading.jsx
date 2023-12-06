

import React from 'react'

const SubHeading = ({title}) => {
  return (
    <h2 class="text-4xl font-bold dark:text-white mb-10 mt-5">{title || 'Title'}</h2>

  )
}

export default SubHeading