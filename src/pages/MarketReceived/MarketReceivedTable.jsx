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
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import moment from 'moment';

import { Datepicker } from 'flowbite-react';

const API_URL = process.env.REACT_APP_API_URL;

function MarketReceivedTable() {
  
  const [selectedValue, setSelectedValue] = useState();
  const [items, setItems] = useState([]);


  const [items2, setItems2] = useState([]);
  const [selecteddesignNumber, setselectedDesignNumbers] = useState();
  const [selectedFabric, setselectedFabric] = useState();
  const [inputYard, setinputYard] = useState();
  const [inputQuantity, setinputQuantity] = useState();


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

  const fetchBookNo = (inputValue) => {
    return axios.get(`${API_URL}/api/punching/production`).then((result) => {
      const allProducts = result.data.data[0].production;
    

      // Prioritize items that match the search query in the title
      const matchingProducts = allProducts.filter((product) =>
      Object.keys(product)[0].toLowerCase().includes(inputValue.toLowerCase())
      );
      
      // Sort the results to prioritize matching products
      const sortedProducts = matchingProducts.concat(
        allProducts.filter((product) => !matchingProducts.includes(product))
      );
   
      setItems(sortedProducts); // Set the items for the table
      return sortedProducts.map((item) => ({ value: Object.keys(item)[0], label: Object.keys(item)[0] }));
    });
  };


 
  

  const handleInputChange = (newValue) => {
    // No need to set the input value in the state
  };
  const handleChange = (newValue) => {
  
    setSelectedValue(newValue);
    fetchDesignNo(newValue.value);
  };


  const getOptionValue = (option) => option.value;
  const getOptionLabel = (option) => option.label;



  const fetchDesignNo = (bookNo) => {
    
  
    const designNumbersForBook = items.filter((item) => Object.keys(item)[0] === bookNo);
    const designNumbersArray = designNumbersForBook.length > 0 ? Object.values(designNumbersForBook[0])[0] : [];
  
    const data = [];
    
    Object.keys(designNumbersArray).forEach((key, index) => {
     
      data.push({ [Object.keys(designNumbersArray)[index]]: { value: designNumbersArray[key], label: key } });
    });
   
 
  
    setItems2(data); // Set the items for the table
  
  };

  const selectDesignNoValue = (designNo) => {
    setselectedDesignNumbers(designNo);
  
  };

  const selectFabricValue = (fabric) => {
    setselectedFabric(fabric);
  };

  const [data, setData] = useState([]);


  const getCutting = async (key,title) => {
    try {
  
      const response = await axios.get(`${API_URL}/api/cutting/`+encodeURIComponent(key)+"/"+encodeURIComponent(title));
    

    setGetCutting(response.data.data[title]);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getMarket = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/market/` + moment().format("DD-MMM-YYYY"));
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMarket();
  
  }, []);




  const submitData = async () => {
    
    try {
      const data = {
        "B#": selectedValue.value,
        "D#": selecteddesignNumber,
        "Fabric": selectedFabric,
        "Yard": inputYard,
        "Quantity": inputQuantity
      }
       const response = await axios.post(`${API_URL}/api/market`, {
        value: data,
        date :  moment().format("DD-MMM-YYYY")

      });
      alert("Added Successfully");
    } catch (error) {
      console.error(error);
    }
  };


  const handleCuttingData = ()=>{
    getCutting(selectedValue.value,selecteddesignNumber);
  }


  const calculateTotal = (property, getCuttingData) => {
    // Sum the numeric values from other categories
    const total = ["Required", "Market", "Reject"].reduce((acc, category) => {
      const value = getCuttingData[category] ? parseFloat(getCuttingData[category][property]) || 0 : 0;
      return acc + value;
    }, 0);
  
    return total;
  };

  return (
    <div>
    <SubHeading title={'Daily Market Received' } />

    <div className='text-gray-500 pb-4'>
    <small>{moment().format("DD-MMM-YYYY, h:mm:ss a")}</small>
    </div>

<form onSubmit={submitData}>


 
    <Table>
 
 <Table.Head>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>B#</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>D#</Table.HeadCell> 
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Yard</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Quantity</Table.HeadCell>
 </Table.Head>
 <Table.Body className="divide-y">
   <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300 dark:text-black">
     
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
     <AsyncSelect
     required
        cacheOptions
        placeholder="Select B#"
        defaultOptions
        value={selectedValue}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        loadOptions={(inputValue) => fetchBookNo(inputValue)}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
     </Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
  <select required onChange={(e) => selectDesignNoValue(e.target.value)} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-blue-500 block w-full p-2.5 '>
    <option key="default" value="" className='text-black'>
      Select D#
    </option>
    {items2.map((element, index) => (
    
      <option className='text-black' key={`option_${index}`} value={Object.keys(element)[0]}>
        {Object.keys(element)[0]}
      </option>
    ))}
  </select>
</Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
     <select required onChange={(e) => selectFabricValue(e.target.value)} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-blue-500 block w-full p-2.5 '>
    <option key="default" value="" className='text-black'>
      Select Fabric
    </option>

{items2.map((element, index) => {
  if (Object.keys(element)[0] === selecteddesignNumber) {

    const options = Array.from( element[Object.keys(element)[0]]["value"].value);
    const uniqueValues = new Set();
    return options
      .filter((valueElement) => {
        const value = valueElement[3]["value"];
        if (!uniqueValues.has(value)) {
          uniqueValues.add(value);
          return true;
        }
        return false;
      })
      .map((valueElement, valueIndex) => (
        console.log(valueElement),
        <option className='text-black' key={`option_${valueIndex}`} value={valueElement[3]["value"]}>
          {valueElement[3]["value"]}
        </option>
      ));
  } else {
    return null; // or any default value if you want
  }
})}
  </select>
     </Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black"><input type="text" onChange={(e) => setinputYard(e.target.value)} required className='h-10 w-30 border border-gray-300 '/></Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black"><input type="text" onChange={(e) => setinputQuantity(e.target.value)} required className='h-10 w-30 border border-gray-300 '/></Table.Cell>
    
     
   </Table.Row>
 
 </Table.Body>
</Table>

<Button type='submit' className='flex justify-left mt-2 mb-2 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 text-white rounded w-20 h-10'>save</Button>

</form>

    
<div className="overflow-x-auto mt-5">


<div className='flex  justify-end'>

  <SearchInput/>
    </div>
    


<Table>
<Table.Head>
 <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>B#</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>D#</Table.HeadCell> 
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Fabric</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Yard</Table.HeadCell>
   <Table.HeadCell className='dark:bg-gray-400 dark:text-black'>Quantity</Table.HeadCell>
 </Table.Head>

 <Table.Body className="divide-y">

 {data.map((element, index) => (
        <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300 dark:text-black" key={index}>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{element["B#"]}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{element["D#"]}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{element["Fabric"]}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{element["Yard"]}</Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">{element["Quantity"]}</Table.Cell>
        </Table.Row>
      ))}

 
 </Table.Body>
</Table>


</div>


<div className='mt-10'>
  <Table>
<Table.Body className="divide-y">
   <Table.Row className="bg-white dark:border-gray-200 dark:bg-gray-300 dark:text-black">
     
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
     <AsyncSelect
     required
        cacheOptions
        placeholder="Select B#"
        defaultOptions
        value={selectedValue}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        loadOptions={(inputValue) => fetchBookNo(inputValue)}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
     </Table.Cell>
     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black">
  <select required onChange={(e) => selectDesignNoValue(e.target.value)} className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:border-blue-500 block w-full p-2.5 '>
    <option key="default" value="" className='text-black'>
      Select D#
    </option>
    {items2.map((element, index) => (
    
      <option className='text-black' key={`option_${index}`} value={Object.keys(element)[0]}>
        {Object.keys(element)[0]}
      </option>
    ))}
  </select>
</Table.Cell>

     <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-black"> <Button onClick={handleCuttingData} className='flex justify-left mt-2 mb-2 bg-blue-600 dark:bg-blue-600 hover:bg-blue-700 text-white rounded w-20 h-10'>Filter</Button>
</Table.Cell>

    
     
   </Table.Row>
 
 </Table.Body>
 </Table>

 
</div>

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
                value={category === "Total" ? calculateTotal(property,getCuttingData) : getCuttingData[category][property]}
                disabled
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

export default MarketReceivedTable