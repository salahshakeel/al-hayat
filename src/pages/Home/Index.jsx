
import React from 'react'
import LinkButton from '../../components/LinkButton'
import SubHeading from '../../components/SubHeading'
import { FaCut } from "react-icons/fa";
import { GiSewingMachine } from "react-icons/gi";
import { CiCrop } from "react-icons/ci";
import { MdIncompleteCircle } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { IoIosExit } from "react-icons/io";
import { BiSolidPurchaseTag } from "react-icons/bi";
const Index = () => {
  return (
    <div>
         <SubHeading title={'Main Menu'} />
        <div class="flex items-center justify-center flex-col md:flex-row gap-4">
                <LinkButton url={'/Menu'} buttonName={'Punching Department'}   icon={<GiSewingMachine size={30} />}  />

                <LinkButton buttonName={'Cutting Department'} url={'/Cutting'} icon={<FaCut size={30} />} />

                <LinkButton buttonName={'Production Department'} icon={<GiSewingMachine size={30} />} />

                <LinkButton buttonName={'Cropping Department'} icon={<CiCrop size={30} />} />

              
        </div>

        <div class="flex items-center justify-center flex-col md:flex-row gap-4 mt-5">

                <LinkButton buttonName={'Finishing Department'} icon={<MdIncompleteCircle size={30} />} />

                <LinkButton buttonName={'Market Department'} icon={<FaStore size={30} />}/>

                <LinkButton buttonName={'Percuiment Department'} icon={<BiSolidPurchaseTag size={30} />}/>

                <LinkButton buttonName={'Gate Exit Department'} icon={<IoIosExit size={30} />} />
   
        </div>


    </div>
  )
}

export default Index