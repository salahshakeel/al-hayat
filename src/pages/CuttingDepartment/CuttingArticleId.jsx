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

function CuttingArticleId() {
  return (
    <div>
        <SubHeading title={'Cutting B#0001'} />

        <h2 class="text-4xl font-bold dark:text-white mb-4">D#0001</h2>

       
        <div class="flex  items-center justify-center flex-col md:flex-row gap-4  ">

            
                    <LinkButton buttonName={'Market'} icon={<CiShop size={30} />}  />
    
                    <LinkButton buttonName={'Deying'} icon={<IoIosColorFill size={30} />} />

                    <LinkButton buttonName={'Cutting'} icon={<FaCut size={30} />}  />
    
                   <LinkButton buttonName={'ShortFall'} icon={<FaArrowDownShortWide size={30} />}   />
         
            </div>


            <div class="flex  items-center justify-center flex-col md:flex-row gap-4 mt-5  ">
            <LinkButton buttonName={'Extra'} icon={<CiCirclePlus size={30} />} />
            </div>

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
    </div>
  )
}

export default CuttingArticleId