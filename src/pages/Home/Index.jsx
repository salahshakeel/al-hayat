import React from 'react';
import LinkButton from '../../components/LinkButton';
import SubHeading from '../../components/SubHeading';
import { FaCut } from 'react-icons/fa';
import { GiSewingMachine } from 'react-icons/gi';
import { CiCrop } from 'react-icons/ci';
import { MdIncompleteCircle } from 'react-icons/md';
import { FaStore } from 'react-icons/fa';
import { IoIosExit } from 'react-icons/io';
import { BiSolidPurchaseTag } from 'react-icons/bi';
import { FaComputer } from 'react-icons/fa6';

const Index = () => {
  return (
    <div>
      <SubHeading title={'Dashboard'} />

      <div className="flex  flex-col md:flex-row gap-8 justify-center items-center ">
        <LinkButton
          url={'/Punching'}
          buttonName={'Punching Department'}
          icon={<FaComputer size={30} />}
        />

        <LinkButton
          buttonName={'Cutting Department'}
          url={'/Cutting'}
          icon={<img src="/Images/thread_cut_image.jpg" alt="cutting" width={30} height={30} />}
        />

        <LinkButton url={'/Production'} buttonName={'Production Department'} icon={<GiSewingMachine size={30} />} />

        <LinkButton buttonName={'Cropping Department'} url={'/Cropping'} icon={<CiCrop size={30} />} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-5">
        <LinkButton buttonName={'Finishing Department'} url={'/Finishing'} icon={<MdIncompleteCircle size={30} />} />

        <LinkButton buttonName={'Market Department'} icon={<FaStore size={30} />} />

        <LinkButton buttonName={'Percuiment Department'} icon={<BiSolidPurchaseTag size={30} />} />

        <LinkButton buttonName={'Gate Exit Department'} icon={<IoIosExit size={30} />} />
      </div>
    </div>
  );
};

export default Index;
