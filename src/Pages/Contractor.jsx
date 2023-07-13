import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import ContractorCard from "../compunents/ContractorCard";
import ContractorSecondCard from "../compunents/ContractorSecondCard";
import Plumber from "./Plumber";
import Sidebar from "../Sidebar";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import cont from '../images/contractor.png'
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Contractor = () => {
  const [contractor, setcontractor] = useState(true);
  const [plumber, setplumber] = useState(false);

  const handlePlumber = () => {
    setcontractor(false);
    setplumber(true);
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="">
        <div className="bg-green-100 px-10 flex items-center justify-between py-8">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-8">
              <button type="button" className="!outline-none"><BsChevronLeft style={{ strokeWidth: '1px', transform: 'scale(1)' }} className="text-xl !font-bold"/></button>
                <div className="w-6 h-6">
                  <img src={cont} />
                </div>

                <h1 className="text-3xl font-bold" >Contractors</h1>
              </div>
             
            </div>
          </div>
          <div className="flex gap-x-8">
          <AiOutlineExclamationCircle style={{ strokeWidth: '1px', transform: 'scale(1.1)' }} className="text-3xl text-[#737475]"/>

           
            <button
              type="button"
              className="bg-[#407c1e] text-white rounded-sm text-sm font-semibold px-3 py-1 flex items-center gap-x-3"
            >
              Global <BsChevronDown  className="text-md font-bold" />
            </button>
            <div className="w-6 h-6">
              <img src={notification} className="w-full h-full object-fill" />
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
        {contractor && (
          <div className="w-full px-3">
            <div className="py-8">
              <div className=" flex items-center justify-between gap-x-4 ">
                <h1 className="text-xl font-bold text-[#737475]">
                  Home/Contractor/Plumber
                </h1>
                <div className="flex items-center gap-x-4">
                  <p className="text-xl">
                    <IoIosArrowUp className="text-4xl text-[#737475]" />
                  </p>
                  <p>
                    <ImCross className="text-[#737475]" />
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>
            <div className="" onClick={handlePlumber}>
              <ContractorCard />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="bg-[#38bf67] text-sm px-2 py-1 rounded-sm font-semibold text-white"
              >
                Switch to list view
              </button>
            </div>
            <div className="cursor-pointer" onClick={handlePlumber}>
              <ContractorSecondCard />
            </div>
          </div>
        )}
        {plumber && <Plumber />}
      </div>
    </div>
  );
};

export default Contractor;
