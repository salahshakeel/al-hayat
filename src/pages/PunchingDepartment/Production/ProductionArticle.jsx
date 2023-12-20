

import React,{useEffect, useState} from 'react'
import SubHeading from '../../../components/SubHeading'
import Card from '../../../components/Card'
import { CiCirclePlus } from "react-icons/ci";
import { Button, Checkbox, Label, Modal, TextInput} from 'flowbite-react';
import axios from 'axios';
import {Route, Link, Routes, useParams} from 'react-router-dom';
const API_URL = process.env.REACT_APP_API_URL;

const ProductionArticle = () => {

  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');
  const [productionData, setProductionData] = useState([]);

  const params = useParams();


  function onCloseModal() {
    setOpenModal(false);
    setTitle('');
  }

  function onCloseModal() {
    setOpenModal(false);
    setTitle('');
  }

  const addProduction = async () => {
    if(title === '' || title === null || title === undefined || title === ' ' ){
      alert('Please enter title');
      return;
    }
    const isValidTitle = /^D#\d+/.test(title);
    
    if (!isValidTitle) {
      alert('Title should have a number after "D#".');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/api/punching/production/article`, {
        data: {
          title: title,
          key: decodeURIComponent(params.key)
        }
      });
      
      alert("Added Successfully");
    } catch (error) {
      alert(error);
    }
  };



  useEffect(() => {
    setTitle("D#");
    const getProduction = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/punching/production/article/`+encodeURIComponent(params.key));
         setProductionData(response.data.data[0][decodeURIComponent(params.key)]);
      } catch (error) {
        console.error(error);
      }
    };
    getProduction();
  }, []);


  return (
    <div>
    <SubHeading title={'Production '+decodeURIComponent(params.key)} />


    <div className="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
    <Button color="blue" className=' h-14 mb-2' onClick={() => setOpenModal(true)}><CiCirclePlus size={37}/></Button>

    </div>


    <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={
            addProduction
          }>

          
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
    

 {Object.keys(productionData).map((key, index) => (
  
        <Card key={index} value={key} url={`/Punching/Production/Article/Table/${ encodeURIComponent(params.key)}/${encodeURIComponent(key)}`}  />
      ))}
  </div>
  </div>
  )
}

export default ProductionArticle