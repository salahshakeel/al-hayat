
import React,{ useEffect, useState }  from 'react'
import Card from '../../../components/Card'
import SubHeading from '../../../components/SubHeading'
import SearchInput from '../../../components/SearchInput'
import { CiCirclePlus } from "react-icons/ci";
import { Button, Checkbox, Label, Modal, TextInput} from 'flowbite-react';
import axios from 'axios';

const Production = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [productionData, setProductionData] = useState([]);


  function onCloseModal() {
    setOpenModal(false);
    setTitle('');
  }
  const addProduction = async () => {
    if(title === '' || title === null || title === undefined || title === ' ' ){
      alert('Please enter title');
      return;
    }
    const isValidTitle = /^B#\d+/.test(title);
    
    if (!isValidTitle) {
      alert('Title should have a number after "B#".');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9000/api/punching/production', {
        data: {
          title: title
        }
      });
      alert("Added Successfully");
    } catch (error) {
      alert(error);
    }
  };


  useEffect(() => {
    setTitle("B#");
    const getProduction = async () => {
      try {
        const response = await axios.get('http://localhost:9000/api/punching/production');
        setProductionData(response.data.data[0].production);
      
      } catch (error) {
        console.error(error);
      }
    };
    getProduction()
  }, []);
  return (
    <div>
     <SubHeading title={'Production'} />
    
   <div className="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
    <Button color="blue" className=' h-14 mb-2' onClick={() => setOpenModal(true)}><CiCirclePlus size={37}/></Button>
    <SearchInput/>
    </div>


    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={addProduction}>

          
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter Booking Number</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Enter title" />
              </div>
              <TextInput
                id="title"
                placeholder="Enter title"
                name='title'
                value={title}
                
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
           
           
            <div className="w-full">
              <Button type="submit">Add</Button>
            </div>

          </div>
          </form>
        </Modal.Body>
      </Modal>
    
    

    <div className="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      
    {productionData
  .filter(production => production.title === undefined) // Filter out objects with 'title' property
  .map((production, index) => {
    const key = Object.keys(production)[0]; // Get the key dynamically
    return (
      <Card key={index} url={`/Punching/Production/Article/${encodeURIComponent(key)}`} value={`${key}`} />
    );
  })}
    </div>

    </div>
  )
}

export default Production