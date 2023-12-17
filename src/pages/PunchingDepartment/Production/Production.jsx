
import React,{ useState }  from 'react'
import Card from '../../../components/Card'
import SubHeading from '../../../components/SubHeading'
import SearchInput from '../../../components/SearchInput'
import { CiCirclePlus } from "react-icons/ci";
import { Button, Checkbox, Label, Modal, TextInput} from 'flowbite-react';

const Production = () => {
  
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setTitle('');
  }

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
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Enter Booking Number</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Enter title" />
              </div>
              <TextInput
                id="title"
                placeholder="Enter title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
              />
            </div>
           
           
            <div className="w-full">
              <Button>Add</Button>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    
    

    <div className="flex gap-2 justify-center gird grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
      
      {[1, 2, 3, 4].map((index) => (
       <Card url={'/Punching/Production/Article'} key={index} value={"B#000"+index}/>
      ))}
    </div>

    </div>
  )
}

export default Production