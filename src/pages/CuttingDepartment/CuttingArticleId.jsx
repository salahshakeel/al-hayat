import React,{useState} from 'react'
import SubHeading from '../../components/SubHeading'
import Card from '../../components/Card'
import LinkButton from '../../components/LinkButton'
import { CiCirclePlus } from "react-icons/ci";
import { FaCut } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

import { FaArrowDownShortWide } from "react-icons/fa6";
import { Table ,TextInput,Button} from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { IoIosAdd, IoIosColorFill, IoIosRemove } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import SearchInput from '../../components/SearchInput'
import Spreadsheet from 'react-spreadsheet';



const customTheme = {
  
    "base": "flex flex-col gap-2",
    "tablist": {
      "base": "flex text-center",
      "styles": {
        "default": "flex-wrap border-b border-gray-200 dark:border-gray-700",
        "underline": "flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700",
        "pills": "flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2",
        "fullWidth": "w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none"
      },
      "tabitem": {
        "base": "flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500  focus:outline-none",
        "styles": {
          "default": {
            "base": "rounded-t-lg",
            "active": {
              "on": "bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500",
              "off": "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300"
            }
          },
          "underline": {
            "base": "rounded-t-lg",
            "active": {
              "on": "text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500",
              "off": "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            }
          },
          "pills": {
            "base": "",
            "active": {
              "on": "rounded-lg bg-cyan-600 text-white",
              "off": "rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
            }
          },
          "fullWidth": {
            "base": "ml-0 first:ml-0 w-full rounded-none flex",
            "active": {
              "on": "p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none",
              "off": "bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none"
            }
          }
        },
        "icon": "mr-2 h-5 w-5"
      }
    },
    "tabitemcontainer": {
      "base": "",
      "styles": {
        "default": "",
        "underline": "",
        "pills": "",
        "fullWidth": ""
      }
    },
    "tabpanel": "py-3"
  
};



function CuttingArticleId() {


  const [data, setData] = useState([
    [{ value: 'A1' }, { value: 'B1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }],
    [{ value: 'A2' }, { value: 'B2' }, { value: 'C2' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }, { value: 'C1' }],
    // Add more rows as needed
  ]);
  
  const removeRow = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.pop(); // Remove the last row
      setData(newData);
    }
  };
  
  const addRow = () => {
    const numColumns = data[0].length; // Get the number of columns from the first row
    const newEmptyRow = Array.from({ length: numColumns }, () => ({ value: '' }));
    const newData = [...data, newEmptyRow];
    setData(newData);
  };
  
  const handleChange = (changes) => {
    setData(changes);
    console.log(changes);
  };

  return (
    <div>
        <SubHeading title={'Cutting B#0001'} />

        <h2 class="text-4xl font-bold dark:text-black mb-4">D#0001</h2>


        
    <Tabs theme={customTheme} className='justify-center'  aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Market" icon={CiShop} className='dark:text-black dark:bg-white'>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Market</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Spreadsheet
  data={data}
  onChange={handleChange}
  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


</div>
      </Tabs.Item>
      <Tabs.Item title="Deying" icon={IoIosColorFill}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Deying</h2>


<div className='flex justify-end'>
<SearchInput/>
</div>
  <Table className=' dark:text-black'>
 
    <Table.Head>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Date</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300">
        
        <Table.Cell>Sliver 2</Table.Cell>
        <Table.Cell>Laptop 2</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="Cutting" icon={FaCut}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Cutting</h2>


<div className='flex justify-end'>
<SearchInput/>
</div>
  <Table className=' dark:text-black'>
 
    <Table.Head>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Date</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300">
        
        <Table.Cell>Sliver 3</Table.Cell>
        <Table.Cell>Laptop 3</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="ShortFall" icon={FaArrowDownShortWide}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">ShortFall</h2>


<div className='flex justify-end'>
<SearchInput/>
</div>
  <Table className=' dark:text-black'>
 
    <Table.Head>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Date</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300">
        
        <Table.Cell>Sliver 4</Table.Cell>
        <Table.Cell>Laptop 4</Table.Cell>
        <Table.Cell>$2999</Table.Cell>
        
      </Table.Row>
    
    </Table.Body>
  </Table>
</div>
      </Tabs.Item>
      <Tabs.Item title="Extra" icon={CiCirclePlus}>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Extra</h2>


<div className='flex justify-end'>
<SearchInput/>
</div>
  <Table className=' dark:text-black'>
 
    <Table.Head>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Date</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
      <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Meter</Table.HeadCell>

    
    </Table.Head>
    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300">
        
        <Table.Cell>Sliver 5</Table.Cell>
        <Table.Cell>Laptop 5</Table.Cell>
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