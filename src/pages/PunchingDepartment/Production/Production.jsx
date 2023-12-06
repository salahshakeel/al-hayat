
import React from 'react'
import Card from '../../../components/Card'
import SubHeading from '../../../components/SubHeading'
import SearchInput from '../../../components/SearchInput'

const Production = () => {
  return (
    <div>
     <SubHeading title={'Production'} />
    <SearchInput/>

    <div className="flex flex-wrap justify-center gap-4 p-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card url={'/Menu/Production/Article'} key={index} value={"B#000"+index}/>
      ))}
    </div>

    </div>
  )
}

export default Production