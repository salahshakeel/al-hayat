
import React from 'react'
import Card from '../../../components/Card'
import SubHeading from '../../../components/SubHeading'
import SearchInput from '../../../components/SearchInput'

const Production = () => {
  return (
    <div>
     <SubHeading title={'Production'} />
    <SearchInput/>

    <div className="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card url={'/Punching/Production/Article'} key={index} value={"B#000"+index}/>
      ))}
    </div>

    </div>
  )
}

export default Production