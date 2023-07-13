import React, { useState } from "react";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsFillSunsetFill,
  BsSearch,
} from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import mbl from "../images/mbl.png";
import edit from "../images/edit.png";
import dlt from "../images/delete.png";
import AddContractor from "./AddContractor";
import SetOpeningHour from "./SetOpeningHour";

const OpeningHours = () => {
  const [openingHours, setOpeningHours] = useState(true);
  const [showOPening, setshowOPening] = useState(false);

  const handleSetOpeningHours = () => {
    setOpeningHours(false);
    // setplumber(false);
    setshowOPening(true)
  };
  return (
    <>
     {
      openingHours &&  <div className="w-full px-3">

<div className=" flex flex-col sm:flex-row justify-between mt-3">
  <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6"></div>
  <div className=" flex   w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
    <button
      type="button"
      onClick={handleSetOpeningHours}
      className="bg-[#38bf67] !outline-none px-2 rounded-sm text-sm h-7 font-semibold text-white"
    >
      Set Opening Hours
    </button>
  </div>
</div>

<div className="py-3">
  <div className="  border flex flex-col cursor-pointer  items-center  rounded-lg">
    <div className="flex text-xs hover:bg-blue-50 sm:text-base w-full  ">
      <div className="w-[25%] sm:py-2  flex items-center justify-center">
        <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
          Status/user
        </p>
      </div>
      <div className=" w-[25%] ">
        <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
          Business Name
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
          Service
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
          Working Hours
        </p>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Sunday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full"></p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full"></p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Monday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Tuesday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Tuesday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Tuesday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Tuesday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
    <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
      <div className="w-[25%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
        <p className="text-[#737475] font-semibold">Tuesday</p>
      </div>
      <div className=" w-[25%] ">
        <p className="text-xs sm:text-sm sm:py-2 text-center border-r text-[#737475] font-semibold  flex items-center justify-center h-full">
          10:00
        </p>
      </div>
      <div className="w-[25%] ">
        <p className="text-xs sm:text-sm border-r sm:py-2 text-[#737475] font-semibold text-center  flex items-center justify-center h-full">
          06:00
        </p>
      </div>
      <div className="w-[25%] ">
        <div className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center gap-x-2 h-full">
          <img src={edit} className="w-5 h-5 object-fill" />
          <img src={dlt} className="w-5 h-5 object-fill" />
        </div>
      </div>
    </div>
  </div>
  <div className="flex items-center gap-x-3 mt-16 ">
    <button className="text-sm font-semibold">Previous</button>
    <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
      1
    </p>
    <button className="text-sm font-semibold">Next</button>
  </div>
</div>
</div>
     }

     {

      showOPening && <SetOpeningHour/>

     }

    </>
  );
};

export default OpeningHours;
