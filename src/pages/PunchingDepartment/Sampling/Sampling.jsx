

import React from 'react'
import Card from '../../../components/Card'
import SubHeading from '../../../components/SubHeading'
import SearchInput from '../../../components/SearchInput'


const Sampling = () => {
  return (
    <div>
     <SubHeading title={'Sampling'} />


    <SearchInput/>
    

    <div className="flex flex-wrap justify-center gap-4 p-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card key={index} value={"B#000"+index} url={'/Menu/Sampling/Article'}/>
      ))}
    </div>

    </div>
  )
}

export default Sampling