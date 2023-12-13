

import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput'

const Cutting = () => {
  return (
    <div>
        <SubHeading title={'Cutting'} />

        <div className='flex justify-center'>
        <SearchInput/>
        </div>
        

        <div className="flex gap-2 gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card url={'/Cutting/Article'} key={index} value={"B#000"+index}/>
      ))}
    </div>
    </div>
  )
}

export default Cutting