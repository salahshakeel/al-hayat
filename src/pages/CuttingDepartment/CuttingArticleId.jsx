import React from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import LinkButton from '../../components/LinkButton'
import { CiCirclePlus } from "react-icons/ci";
import { FaCut } from "react-icons/fa";
import { CiShop } from "react-icons/ci";
import { IoIosColorFill } from "react-icons/io";
import { FaArrowDownShortWide } from "react-icons/fa6";
import { Table ,TextInput,Button} from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

function CuttingArticleId() {
  return (
    <div>
        <SubHeading title={'Cutting B#0001'} />

        <h2 class="text-4xl font-bold dark:text-white mb-4">D#0001</h2>


        
    <Tabs aria-label="Full width tabs" className='justify-center'  style="default">
      <Tabs.Item active title="Market" icon={CiShop}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-white mb-4">Market</h2>


<div className='flex items-center pb-4 justify-end'>
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Fabric</Table.HeadCell>
      <Table.HeadCell>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="Deying" icon={IoIosColorFill}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-white mb-4">Deying</h2>


<div className='flex items-center pb-4 justify-end'>
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Fabric</Table.HeadCell>
      <Table.HeadCell>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="Cutting" icon={FaCut}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-white mb-4">Cutting</h2>


<div className='flex items-center pb-4 justify-end'>
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Fabric</Table.HeadCell>
      <Table.HeadCell>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="ShortFall" icon={FaArrowDownShortWide}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-white mb-4">ShortFall</h2>


<div className='flex items-center pb-4 justify-end'>
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Fabric</Table.HeadCell>
      <Table.HeadCell>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="Extra" icon={CiCirclePlus}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-white mb-4">Extra</h2>


<div className='flex items-center pb-4 justify-end'>
    <TextInput className='pr-4' id="email2" type="text" placeholder="Search" required shadow />
    <Button type="submit">Search</Button>
</div>
  <Table>
 
    <Table.Head>
      <Table.HeadCell>Date</Table.HeadCell>
      <Table.HeadCell>Fabric</Table.HeadCell>
      <Table.HeadCell>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        
        <Table.Cell>Sliver</Table.Cell>
        <Table.Cell>Laptop</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
    </Tabs>

       
        {/* <div class="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

            
                    <LinkButton buttonName={'Market'} icon={<CiShop size={30} />}  />
    
                    <LinkButton buttonName={'Deying'} icon={<IoIosColorFill size={30} />} />

                    <LinkButton buttonName={'Cutting'} icon={<FaCut size={30} />}  />
    
                   <LinkButton buttonName={'ShortFall'} icon={<FaArrowDownShortWide size={30} />}   />

                   <LinkButton buttonName={'Extra'} icon={<CiCirclePlus size={30} />} />
         
            </div>


            <div class="flex  items-center justify-center flex-col md:flex-row gap-4 mt-5  ">
            
            </div> */}

            
    </div>
  )
}

export default CuttingArticleId