import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import { Tabs,TextInput,Button,Table } from 'flowbite-react';

function Cropping() {
  return (
    <div>
    <SubHeading title={'Cropping Department'} />


    <h2 class="text-4xl font-bold dark:text-white mb-4">Vendor Name</h2>

<Tabs aria-label="Full width tabs" className='justify-center'  style="default">

      <Tabs.Item active title="Anwar" >
 

      <div className="overflow-x-auto mt-5">


<div className='flex items-center pb-4 justify-end'>
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


      </Tabs.Item>

      <Tabs.Item active title="Owais" >
 

 <div className="overflow-x-auto mt-5">




<div className='flex items-center pb-4 justify-end'>
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


 </Tabs.Item>

 <Tabs.Item active title="Ahmed" >
 

 <div className="overflow-x-auto mt-5">



<div className='flex items-center pb-4 justify-end'>
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


 </Tabs.Item>

  
    
      
    </Tabs>






  </div>

  )
}

export default Cropping