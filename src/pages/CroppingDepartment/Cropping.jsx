import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import { Tabs,TextInput,Button,Table,Dropdown } from 'flowbite-react';

function Cropping() {
  return (
    <div>
    <SubHeading title={'Cropping Department'} />


    



    <div className="overflow-x-auto mt-5">


<div className='flex items-center pb-4 justify-end'>

<div className="flex items-center  gap-4 pr-4">
     <select className='bg-[#F9FAFB] border border-gray-300 text-gray-900 text-sm  rounded-lg w-40 h-10   '>
       <option selected>Select Vendor</option>
       <option value="10">Ali</option>
       <option value="20">Salman</option>
       <option value="30">Waqar</option>
     </select>
     
    </div>
    
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>BarCode Design</Table.HeadCell>
      <Table.HeadCell>Quantity</Table.HeadCell>
      <Table.HeadCell>Round</Table.HeadCell>
      <Table.HeadCell>Rate</Table.HeadCell>
      <Table.HeadCell>Status</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>2999</Table.Cell>
        <Table.Cell>24</Table.Cell>
        <Table.Cell>2999</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>







  </div>

  )
}

export default Cropping