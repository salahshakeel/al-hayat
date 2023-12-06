

import React from 'react'
import SubHeading from '../../../components/SubHeading'
import Card from '../../../components/Card'

const ProductionArticle = () => {
  return (
    <div>
    <SubHeading title={'Production B#0001'} />
    <div className="flex flex-wrap justify-center gap-4 p-4">
    
    {[1, 2].map((index) => (
     <Card key={index} value={"B#000"+index}/>
    ))}
  </div>
  </div>
  )
}

export default ProductionArticle