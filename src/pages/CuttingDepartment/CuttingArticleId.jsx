import React,{useEffect, useState} from 'react'
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
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;


function CuttingArticleId() {

  const params = useParams();



 

   const data1 =  [{ value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }];
    
  const [data, setData] = useState([ ]);
  const [getCuttingData, setGetCutting] = useState({
    "Required": {
      "KAPRA": "",
      "NET": "",
      "MALAI": "",
      "ORGANZA": ""
    },
    "Market": {
      "KAPRA": "",
      "NET": "",
      "MALAI": "",
      "ORGANZA": ""
    },
    "Reject": {
      "KAPRA": "",
      "NET": "",
      "MALAI": "",
      "ORGANZA": ""
    },
    "Total": {
      "KAPRA": "",
      "NET": "",
      "MALAI": "",
      "ORGANZA": ""
    }
  });


  useEffect(() => {
    const getProduction = async () => {
      try {
        const excludedIndices = [0, 1, 2, 5, 6, 9, 12, 13, 14];

        const response = await axios.get(`${API_URL}/api/punching/production/article/`+encodeURIComponent(params.key)+"/"+encodeURIComponent(params.title));

      const filterdata = response.data.data[0].value;

      const spliceData = filterdata.map(element =>
        element.filter((_, index) => !excludedIndices.includes(index))
      );
      
        setData(Array.isArray(response.data.data[0].value)==false ? [data1] :  spliceData);

     

      } catch (error) {
        console.error(error);
      }
    };

    const getCutting = async () => {
      try {
    
        const response = await axios.get(`${API_URL}/api/cutting/`+encodeURIComponent(params.key)+"/"+encodeURIComponent(params.title));
      console.log(response.data.data[params.title]); 

      setGetCutting(response.data.data[params.title]);
        
      } catch (error) {
        console.error(error);
      }
    };



    getProduction();
    getCutting();
  }, []);


  
  const handleInputChange = (category, property, value) => {
    setGetCutting(prevData => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [property]: value,
      },
    }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/cutting/${encodeURIComponent(params.key)}/${encodeURIComponent(params.title)}`, getCuttingData);
      
      // Check the response and handle accordingly
      if (response.data && response.data.message) {
        alert(response.data.message); // Success message from the server
      } else {
        console.log('Unexpected response:', response);
      }
    } catch (error) {
      console.error('Error saving data:', error);
      // Handle error appropriately, e.g., show an error message to the user
    }
  };

  return (
  

    console.log(getCuttingData),
  
    <div>
        <SubHeading title={params.key+' - '+params.title} />

     

{/*         
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
    </Tabs> */}

<div id='market' className="overflow-x-auto mt-5">

<h2 class="text-4xl font-bold dark:text-black mb-4">Production</h2>


<div className='flex justify-center'>
<SearchInput/>

</div>


<Spreadsheet
  data={data}

  columnLabels={['Fabric', 'Article', 'Head', 'Round', 'Y/M', 'Round Final']}
/>




          </div> 


<Button onClick={handleSaveClick} className='flex justify-left mt-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>



{getCuttingData ? (
  <div className='mt-10'>
    <Table>
           <Table.Head>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'></Table.HeadCell>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>KAPRA</Table.HeadCell>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>NET</Table.HeadCell>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>MALAI</Table.HeadCell>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>ORGANZA</Table.HeadCell>
 </Table.Head>
    <Table.Body className="divide-y">
      {["Required", "Market", "Reject", "Total"].map((category, index) => (
        <Table.Row key={index} className="bg-white dark:border-gray-200 dark:bg-gray-300 dark:text-black">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{category}</Table.Cell>

          {getCuttingData[category] && Object.keys(getCuttingData[category]).map((property, propIndex) => (
            <Table.Cell key={propIndex} className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
              <input
                className='h-10 w-30 border border-gray-300'
                type="number"
                value={getCuttingData[category][property]}
                onChange={(e) => handleInputChange(category, property, e.target.value)}
              />
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
    </Table>
  </div>
) : <></>}



            
    </div>
  )
}

export default CuttingArticleId