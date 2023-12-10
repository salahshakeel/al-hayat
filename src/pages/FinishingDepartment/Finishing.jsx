import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import { Tabs,TextInput,Button,Table } from 'flowbite-react';

function Finishing() {
  return (
    <div>
    <SubHeading title={'Finishing Department'} />




    <div className='flex items-center pb-4 justify-end'>
<TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
<Button type="submit">Search</Button>
</div>

    <Table>
 
 <Table.Head>
   <Table.HeadCell>B#4223</Table.HeadCell>
   <Table.HeadCell>D#3243</Table.HeadCell>
   <Table.HeadCell>Qalamkar</Table.HeadCell>
   <Table.HeadCell>Lot:505</Table.HeadCell>
   <Table.HeadCell>Golden</Table.HeadCell>
 </Table.Head>
</Table>


<div className="overflow-x-auto mt-5">




<Table>
 
 <Table.Head>
   <Table.HeadCell>Fabric</Table.HeadCell>
   <Table.HeadCell>S.no</Table.HeadCell>
   <Table.HeadCell>Articles</Table.HeadCell>
   <Table.HeadCell>PR Suit</Table.HeadCell>
   <Table.HeadCell>Stiches</Table.HeadCell>
   <Table.HeadCell>head</Table.HeadCell>
   <Table.HeadCell>ROund Final</Table.HeadCell>
   <Table.HeadCell>Quantity</Table.HeadCell>
   <Table.HeadCell>T.Stitch</Table.HeadCell>
   <Table.HeadCell>Days</Table.HeadCell>

 
 </Table.Head>
 <Table.Body className="divide-y">
   <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
     
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Cotton</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">G</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Yes</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Yes</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Yes</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white bg-gray-300">Yes</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">1</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Yes</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">10</Table.Cell>
     
   </Table.Row>
 
 </Table.Body>
</Table>



<div className="pt-4 flex justify-end">
  <h3 className='pr-4  font-bold'>Total: 1000</h3>

  
</div>
<div className="pb-2 flex justify-end">
    <h3 className='pr-4  font-bold'>Days: 10</h3>
  
</div>



</div>




  </div>

  )
}

export default Finishing