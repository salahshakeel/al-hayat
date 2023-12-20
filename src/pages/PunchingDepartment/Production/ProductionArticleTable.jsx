import React,{useEffect, useState} from 'react'
import SubHeading from '../../../components/SubHeading'
import Card from '../../../components/Card'
import LinkButton from '../../../components/LinkButton'
import { CiCirclePlus } from "react-icons/ci";
import { FaCut } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

import { FaArrowDownShortWide } from "react-icons/fa6";
import { Table ,TextInput,Button} from 'flowbite-react';
import { Tabs } from 'flowbite-react';

import { IoIosAdd, IoIosColorFill, IoIosRemove } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import SearchInput from '../../../components/SearchInput'
import Spreadsheet from 'react-spreadsheet';

import {Route, Link, Routes, useParams} from 'react-router-dom';
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

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



function ProductionArticleTable() {

    const [Total , setTotal] = useState(0);
    const [Days , setDays] = useState(0);

    const params = useParams();

     const data1 =  [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }];
      
    const [data, setData] = useState([ ]);
  

    const addRecord = async (value) => {
        try {
          const response = await axios.post(`${API_URL}/api/punching/production/article/table`, {
            data: {
              title: decodeURIComponent(params.title),
              key: decodeURIComponent(params.key),
              value : value
            }
          });
          alert("Saved Successfully");
         
        } catch (error) {
          alert(error);
        }
      };
      
    useEffect(() => {
        const getProduction = async () => {
          try {
            const response = await axios.get(`${API_URL}/api/punching/production/article/`+encodeURIComponent(params.key)+"/"+encodeURIComponent(params.title));
          //  console.log(Array.isArray(response.data.data[0].value));

            setData(Array.isArray(response.data.data[0].value)==false ? [data1] :  response.data.data[0].value);

            const totalSumDays = sumLastElement(Array.isArray(response.data.data[0].value)==false ? [data1] :  response.data.data[0].value);
            const totalSum = sum2LastElement(Array.isArray(response.data.data[0].value)==false ? [data1] :  response.data.data[0].value);
            setTotal(totalSum)
            setDays(totalSumDays)

          } catch (error) {
            console.error(error);
          }
        };
        getProduction();
      }, []);
    


  const removeRow = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.pop(); // Remove the last row
      setData(newData);

      const totalSumDays = sumLastElement(newData);
      const totalSum = sum2LastElement(newData);
      setTotal(totalSum)
      setDays(totalSumDays)
    }
  };
  
  const addRow = () => {
    if (!data || !data[0] || typeof data[0].length === 'undefined') {
      // Handle the case where data is undefined or data[0] is undefined or data[0].length is undefined
      setData( [data1]);
      return;
    }
  
    const numColumns = data[0].length;
    const newEmptyRow = Array.from({ length: numColumns }, () => ({ value: '' }));
    const newData = [...data, newEmptyRow];
    setData(newData);
  };
  
  const submit = ()=>{
    console.log(data);
    addRecord(data);
  }

  const sumLastElement = (array) => {
    return array.map((row) => {
      const lastElement = row[row.length - 1];
      const value = parseInt(lastElement.value, 10) || 0; // Parse value as an integer (assuming values are numbers)
      return value;
    }).reduce((acc, curr) => acc + curr, 0);
  };

  const sum2LastElement = (array) => {
    return array.map((row) => {
      const lastElement = row[row.length - 2];
      const value = parseInt(lastElement.value, 10) || 0; // Parse value as an integer (assuming values are numbers)
      return value;
    }).reduce((acc, curr) => acc + curr, 0);
  };

  const handleChange = (changes) => {
    setData(changes);
    const totalSumDays = sumLastElement(changes);
    const totalSum = sum2LastElement(changes);
    setTotal(totalSum)
    setDays(totalSumDays)
  };

  return (
    <div>
        <SubHeading title={'Cutting '+params.key} />

        <h2 class="text-4xl font-bold dark:text-black mb-4">{params.title}</h2>








        
    {/* <Tabs theme={customTheme} className='justify-center'  aria-label="Tabs with icons" style="underline">
      <Tabs.Item active title="Market" icon={CiShop} className='dark:text-black dark:bg-white'>
      <div className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Market</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

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

    </Tabs> */}

       
        <div class="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">

            
        <Button.Group>
        <a href='#market'>
      <Button color="gray">
        
        <CiShop className="mr-3 h-4 w-4" />
        Market
        
      </Button>
      </a>
      <a href='#deying'>
      <Button color="gray">
      
        <IoIosColorFill className="mr-3 h-4 w-4" />
        Deying
       
      </Button>
      </a>
      <a href='#deying'>
      <Button color="gray">
        <FaCut className="mr-3 h-4 w-4" />
        Cutting
      </Button>
      </a>
      <a href='#shortfall'>
      <Button color="gray">
        <FaArrowDownShortWide className="mr-3 h-4 w-4" />
        ShortFall
      </Button>
      </a>
      <a href='#extra'>
      <Button color="gray">
        <CiCirclePlus className="mr-3 h-4 w-4" />
        Extra
      </Button>
      </a>
    </Button.Group>
         
            </div>



            <div id='market' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Market</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

<Spreadsheet
  data={data}
  onChange={handleChange}
  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start mt-2 '>
<h3 className='font-bold'>Total : <span>{Total}</span> </h3>
</div>
<div className='flex justify-start mt-2 '>
<h3 className='font-bold'>Days : <span>{Days}</span> </h3>
</div>
<div className='flex justify-start  mt-2'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


          </div>

          <div id='deying' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Deying</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

<Spreadsheet
  data={data}
 
  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


          </div>
          <div id='cutting' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Cutting</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

<Spreadsheet
  data={data}
 
  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


          </div>
          <div id='shortfall' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Shortfall</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

<Spreadsheet
  data={data}
 
  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


          </div>
          <div id='extra' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Extra</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>

<Button onClick={submit} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

<Spreadsheet
  data={data}

  columnLabels={['P 1', 'P 2', 'P 3', 'Fabric', 'Article', 'PR Suit', 'Stiches', 'Head', 'Round', 'C/Rate', 'Y/M', 'Round Final', 'Quantity', 'T.Stitch', 'Days']}
/>
<div className='flex justify-start'>
<button onClick={addRow} className='mt-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-1 ml-1 w-5 h-5'> <IoIosAdd size={20} /> </button>
<button onClick={removeRow} className='mt-2 bg-red-500 hover:bg-blue-700 text-white rounded w-5 h-5'> <IoIosRemove size={20} /></button>
</div>


          </div>
          


      

            
    </div>
  )
}

export default ProductionArticleTable