import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import cross from "../images/crossx.png";
import { BiSearch } from "react-icons/bi";
import JobAss from "./JobAss";

const SelectGroup = () => {
  const  [show, setShow] = useState(true)

  const  [jobAssignment, setjobAssignment] = useState(false)
  const handleNext=()=>{
    setShow(false)
    setjobAssignment(true)
  }
  return (
    <div>
      {
        show && <div>
        <p className="text-[#737475] text-sm font-[]">
          Setting /Job Engine /Job Assignment / No Electricity
        </p>
        <p className="text-[#737475] font-bold font-[] mt-4">Select Group</p>
        <div>
          <div className="w-[40%] p-12 m-auto">
            <div className="flex border rounded-md shadow-sm py-1 border-b bg-[#e0e1e2] items-center px-3">
              <input
                type="text"
                placeholder="Goup B"
                className="bg-[#e0e1e2]"
              />
              <img src={cross} className="w-3 h-3" />
            </div>
            <div className="flex border-[1px] rounded-md py-1 border-t-[#afaeae] shadow-sm   bg-[#e0e1e2] items-center px-3">
              <input
                type="text"
                placeholder="Goup A"
                className="bg-[#e0e1e2]"
              />
              <img src={cross} className="w-3 h-3" />
            </div>
            <div className="flex border-[1px] border-[#afaeae]  rounded-md py-[6px] mt-[] shadow-sm   bg-[#] items-center px-3">
              <input
                type="text"
                placeholder="Select Group"
                className="bg-[#]"
              />
              <BiSearch className="text-xl" />
            </div>
          </div>
        </div>
        <p className="text-[#737475] font-bold font-[]">Select Group</p>
        <div>
          <div className="w-[40%] p-12 m-auto">
            <div className="flex border rounded-md shadow-sm py-1 border-b bg-[#e0e1e2] items-center px-3">
              <input
                type="text"
                placeholder="Select Hours"
                className="bg-[#e0e1e2]"
              />
              {/* <img src={cross} className="w-3 h-3" /> */}
              <BsChevronDown className="text-xl" />
            </div>
            <div className="flex flex-col px-2 mt-4 gap-y-2">
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Mon</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Tue</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Wed</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Thu</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Fri</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sat</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>

             <div className="flex gap-x-3 items-center">
             <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sun</p>
              </div>
              <div className="border flex py-1 items-center justify-center rounded-md px-4">
                <p className="text-sm text-[#737475]">8:00-20:00</p>
              </div>
             </div>
            </div>
          </div>
          <div className='flex justify-end px-12   items-center mt-4'>
        <button onClick={handleNext} type='button'  className='rounded-sm !outline-none bg-[#38bf67] py-1 px-24 mr-[4px] text-white'>Next</button>
            
        </div>
        </div>
      </div>
      }
      {
        jobAssignment && <JobAss/>
      }
    </div>
  );
};

export default SelectGroup;
