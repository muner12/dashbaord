import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { AiFillCaretDown, AiOutlineCaretUp, AiOutlineExclamationCircle } from "react-icons/ai";
import {
  BsChevronDown,
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsSearch,
} from "react-icons/bs";
import notification from "../images/notifi.png";
import home from "../images/home.png";

import threedot from "../images/threedot.png";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import AddProperties from "./AddProperties";
import PropertyDetail from "./PropertyDetail";
import Sidebar from "../Sidebar";

const Properties = () => {
  const [show, setShow] = useState(false);
  const [properties, setProperties] = useState(true);
  const [propertyDetail, setPropertyDetail] = useState(false);

  const handleProperty = () => {
    setShow(true);
    setProperties(false);
  };

  const handlePropertyDetail = () => {
    setPropertyDetail(true);
    setProperties(false);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className=" w-full">
        {/* Navbar */}
        <div className="bg-green-100 px-10 flex items-center justify-between py-8">
          <div className="flex gap-x-4 items-center">
            <div>
              <div className="flex items-center gap-x-4">
                <div className="w-6 h-6">
                  <img src={home} />
                </div>

                <h1 className="text-3xl font-bold">Properties</h1>
              </div>
              {/* <span className="text-center text-xl font-semibold ml-[20%] text-[#737475]  w-full">
                Over view
              </span> */}
            </div>
          </div>
          <div className="flex gap-x-8">
           <AiOutlineExclamationCircle style={{ strokeWidth: '1px', transform: 'scale(1.1)' }} className="text-3xl text-[#737475]"/>
            <button
              type="button"
              className="bg-[#407c1e] text-white rounded-sm text-sm font-semibold px-3 py-1 flex items-center gap-x-3"
            >
              Global <BsChevronDown className="text-md font-bold" />
            </button>
            <div className="w-6 h-6">
              <img src={notification} className="w-full h-full object-fill" />
            </div>
            <div className="w-2 h-5">
              <img src={threedot} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Nanbar */}

        {properties && (
          <div className=" w-full px-3 ">
            <div className="py-8">
              <div className=" flex items-center justify-between gap-x-4 ">
                <h1 className="text-xl font-bold">Home/Properties</h1>
                <div className="flex items-center gap-x-4">
                  <p className="text-xl">
                    <IoIosArrowUp className="text-4xl text-[#407c1e]" />
                  </p>
                  <p>
                    <ImCross />
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-normal gap-y-2 gap-x-4 mt-3">
              <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
                <button>Active Properties </button>
                <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
                  05
                </span>
              </div>
              <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
                <button>Archive </button>
                <span className="h-6 w-6 text-white p-1 text-xs bg-red-500 rounded-full flex justify-center items-center">
                  05
                </span>
              </div>
              <div className="border w-[80%] sm:w-44  flex justify-between rounded-md py-1 px-2 text-sm">
                <button>Views All</button>
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row justify-between mt-3">
              <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
                <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
                  <p className="text-sm">Show:</p>
                  <select className="border border-gray-700 outline-none  rounded-sm h-8 bg-transparent  w-12 px-0 text-sm">
                    <option className="text-sm">25</option>
                    <option>35</option>

                    <option>45</option>

                    <option>55</option>
                  </select>
                </div>

                <div className="flex w-[80%] sm:w-full   gap-x-3">
                  <label className="text-xs   sm:text-sm mt-1">
                    Entries Search:
                  </label>

                  <div className="input-container relative">
                    <input
                      type="text"
                      className="pl-10 outline-none border rounded-md p-[2px]"
                    />
                    <BsSearch className="h-5 w-5 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              </div>
              <div className=" flex  w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
                <button
                  type="button"
                  onClick={handleProperty}
                  className="bg-[#38bf67] px-2 rounded-sm text-sm h-8 text-white"
                >
                  Add Properties
                </button>

                <button
                  type="button"
                  className="bg-[#38bf67] px-3 rounded-sm text-sm h-8 text-white"
                >
                  <AiFillCaretDown className="" />
                </button>
              </div>
            </div>
            <div className="w-[80%] sm:w-auto  flex justify-center sm:justify-normal items-center  mt-2">
              <p className="text-sm font-semibold text-[#737475] ">Show 1 to 12 entries</p>
            </div>
            <div className="py-">
              <div className="flex items-center justify-end px-1 gap-x-1">
                <p className="text-end px-2 py-2">Sort</p>
                <div className="  flex flex-col outline-none ">
                  <button className="border-none outline-none">
                    <BsFillCaretUpFill className="text-xl  outline-none mt-1" />
                  </button>
                  <button className=" border-none outline-none">
                    <BsFillCaretDownFill className="text-xl outline-none -mt-2" />
                  </button>
                </div>
              </div>
              <div
                onClick={handlePropertyDetail}
                className="border cursor-pointer flex flex-col   items-center  rounded-lg"
              >
                <div className="flex text-xs sm:text-base w-full hover:bg-blue-50  ">
                  <div className="w-[3%] sm:py-2 border-r flex items-center justify-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" w-[24%] ">
                    <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
                      First line of address
                    </p>
                  </div>
                  <div className="w-[15%] ">
                    <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                      Town
                    </p>
                  </div>
                  <div className="w-[15%] ">
                    <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
                      Postcode
                    </p>
                  </div>
                  <div className="w-[16%] ">
                    <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                      Tenants
                    </p>
                  </div>
                  <div className="w-[16%] ">
                    <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
                      Status
                    </p>
                  </div>
                  <div className="w-[11%] ">
                    <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
                      Select
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50  ">
                  <div className="w-[3%] border-r sm:py-2 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[24%]">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      124 Broad Street, Swindon, SN1 2AB
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      Mardan
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      0000
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      4
                    </p>
                  </div>
                  {/* <div className=""> */}
                  <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                    <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                      Active
                    </span>
                  </p>
                  {/* </div> */}
                  <div className="w-[10%] ">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
                      Select <BsChevronDown className="mt-[3px]" />
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50  ">
                  <div className="w-[3%] border-r sm:py-2 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[24%]">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      124 Broad Street, Swindon, SN1 2AB
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      Mardan
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      0000
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      4
                    </p>
                  </div>
                  <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                    <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                      Active
                    </span>
                  </p>
                  <div className="w-[10%] ">
                    <p className="text-xs sm:text-sm sm:py-2 text-center gap-x-2  flex items-center justify-center h-full">
                      Select <BsChevronDown className="mt-[3px]" />
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50 ">
                  <div className="w-[3%] border-r sm:py-2 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[24%]">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      124 Broad Street, Swindon, SN1 2AB
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      Mardan
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      0000
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      4
                    </p>
                  </div>
                  <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                    <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                      Active
                    </span>
                  </p>
                  <div className="w-[10%] ">
                    <p className="text-xs sm:text-sm sm:py-2 text-center gap-x-2  flex items-center justify-center h-full">
                      Select <BsChevronDown className="mt-[3px]" />
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50  ">
                  <div className="w-[3%] border-r sm:py-2 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[24%]">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      124 Broad Street, Swindon, SN1 2AB
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      Mardan
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      0000
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      4
                    </p>
                  </div>
                  <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                    <span className="bg-[#b1b1b1] text-white rounded-full px-2 py-[1px]">
                      Non-Active
                    </span>
                  </p>
                  <div className="w-[10%] ">
                    <p className="text-xs sm:text-sm sm:py-2 text-center gap-x-2 flex items-center justify-center h-full">
                      Select <BsChevronDown className="mt-[3px]" />
                    </p>
                  </div>
                </div>
                <div className="flex w-full border-t hover:bg-blue-50  ">
                  <div className="w-[3%] border-r  sm:py-2 flex justify-center items-center">
                    <input type="checkbox" />
                  </div>
                  <div className=" border-r w-[24%]">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      124 Broad Street, Swindon, SN1 2AB
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      Mardan
                    </p>
                  </div>
                  <div className="w-[15%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      0000
                    </p>
                  </div>
                  <div className="w-[16%] border-r">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center justify-center h-full">
                      4
                    </p>
                  </div>
                  <p className="text-xs w-[16%] border-r h-full sm:text-sm sm:py-2 text-center  flex items-center justify-center ">
                    <span className="bg-[#38bf67] text-white rounded-full px-2 py-[1px]">
                      Active
                    </span>
                  </p>
                  <div className="w-[10%] ">
                    <p className="text-xs sm:text-sm sm:py-2 text-center  flex items-center gap-x-2 justify-center h-full">
                      Select <BsChevronDown className="mt-[3px]" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border rounded-sm w-44 mt-4 ">
                <button className="border-r text-sm w-11 p-1">Excel</button>
                <button className="border-r text-sm w-11 p-1">CSV</button>

                <button className="border-r text-sm w-11 p-1">PDF</button>

                <button className="border-r text-sm w-11 p-1">Print</button>
              </div>
              <div className="flex items-center gap-x-3 mt-4 ">
                <button className="text-sm font-semibold">Previous</button>
                <p className="border text-sm  flex rounded items-center justify-center w-7 h-7">
                  1
                </p>
                <button className="text-sm font-semibold">Next</button>
              </div>
            </div>
          </div>
        )}
        {show && (
          <div>
            <AddProperties />
          </div>
        )}
        {propertyDetail && (
          <>
            <PropertyDetail />
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
