import React from 'react'
import LinkButton from '../../components/LinkButton'
import TextComponent from '../../components/Text'
import SubHeading from '../../components/SubHeading'

const Menu = () => {
    return (
        <div>
               
    
        <SubHeading title={'Punching Department'} />

        <div class="flex items-center justify-center flex-col md:flex-row gap-4">

            
                    <LinkButton buttonName={'Sampling Department'} url={'/Punching/Sampling'}  />
    
                    <LinkButton buttonName={'Production Department'} url={'/Punching/Production'} />

                 
                  
            </div>
    
          
    
       
        </div>
      )
}

export default Menu