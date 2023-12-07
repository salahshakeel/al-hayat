import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import { Accordion,Table } from 'flowbite-react';

function Index() {
  return (
    <div>
    <SubHeading title={'Production'} />
    <div className="flex flex-wrap justify-center gap-4 p-4">
      
    
     <Card    url={'/Cutting/Article/Id'} value={"Department A"}/>
     <Card    url={'/Cutting/Article/Id'} value={"Department B"}/>
   
    </div>

    <h2 class="text-4xl font-bold dark:text-white mb-4">Department A</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  {[1, 2, 3, 4, 5].map((index) => (
    <Accordion key={index} className="w-full">
      <Accordion.Panel>
        <Accordion.Title>{"M#" + index}</Accordion.Title>
        <Accordion.Content>
        <h2 class="text-md font-bold dark:text-white mb-4">24 Head</h2>
        <Table>
             
             <Table.Head>
               <Table.HeadCell>Stich</Table.HeadCell>
               <Table.HeadCell>Round</Table.HeadCell>
              
     
             
             </Table.Head>
             <Table.Body className="divide-y">
               <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                 
                 <Table.Cell>5000</Table.Cell>
                 <Table.Cell>2</Table.Cell>
                 
                 
               </Table.Row>
             
             </Table.Body>
           </Table>

        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  ))}
</div>


  </div>

  )
}

export default Index