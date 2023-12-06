

import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput'

const Cutting = () => {
  return (
    <div>
        <SubHeading title={'Cutting'} />

        <SearchInput/>

        <div className="flex flex-wrap justify-center gap-4 p-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card url={'/Cutting/Article'} key={index} value={"B#000"+index}/>
      ))}
    </div>
    </div>
  )
}

export default Cutting