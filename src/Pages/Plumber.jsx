import React, { useState } from "react";
import { BsChevronDown, BsFillCaretDownFill, BsFillCaretUpFill, BsFillSunsetFill, BsSearch } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { IoIosArrowUp } from "react-icons/io";
import mbl from '../images/mbl.png'
import check from '../images/checkwhite.png'
import cross from '../images/cross.png'
import AddContractor from "./AddContractor";


const Plumber = () => {
    const [plumber, setplumber] = useState(true);
    const [addContractor, setaddContractor] = useState(false);
   


  
    const handlContractor = () => {
        setaddContractor(true)
        setplumber(false)

    };
  return (
    <>
        {
            plumber && 
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
      <div className=" flex flex-col sm:flex-row justify-between mt-3">
        <div className="flex flex-col sm:flex-row  justify-center sm:justify-normal items-center gap-x-6">
          <div className="flex w-[80%] sm:w-44   gap-x-3 justify-center items-center ">
            <p className="text-sm font-semibold">Show:</p>
            <select className="border border-gray-700 outline-none  rounded-sm h-7 bg-transparent  w-12 px-0 text-sm">
              <option className="text-sm">25</option>
              <option>35</option>

              <option>45</option>

              <option>55</option>
            </select>
          </div>

          <div className="flex w-[80%] sm:w-full   gap-x-3">
            <label className="text-xs   sm:text-sm mt-1 font-semibold">Entries Search:</label>

            <div className="input-container  relative">
              <input
                type="text"
                className="pl-10 outline-none border w-48  rounded-sm p-[2px]"
              />
              <BsSearch className="h-4 w-4 absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </div>
        </div>
        <div className=" flex   w-[80%] sm:w-auto  justify-center  mt-2 sm:mt-0  sm:justify-normal gap-x-4">
          <button
            type="button"
            onClick={handlContractor}
            className="bg-[#38bf67] !outline-none px-2 rounded-sm text-sm h-7 font-semibold text-white"
          >
            Add Contractor
          </button>
        </div>
      </div>
     <div className="flex justify-between items-center">
     <div className="flex mt-2 gap-x-2">

    <button
            type="button"
            // onClick={handleProperty}
            className="bg-[#] px-2 text-[#737475] font-semibold rounded-sm !outline-none text-sm h-8 border flex items-center justify-center gap-x-2"
          >
            Status/User
            <BsChevronDown className=""/>
          </button>
          <button
            type="button"
            // onClick={handleProperty}
            className="bg-[#] px-2 text-[#737475] font-semibold !outline-none rounded-sm text-sm h-8 border flex items-center justify-center gap-x-2"
          >
            Services
            <BsChevronDown/>
          </button>
          <button
            type="button"
            // onClick={handleProperty}
            className="bg-[#] text-[#737475] font-semibold px-2 rounded-sm !outline-none text-sm h-8 border flex items-center justify-center gap-x-2"
          >
          Hours
            <BsChevronDown/>
          </button>
          <button
            type="button"
            // onClick={handleProperty}
            className="bg-[#] text-[#737475] font-semibold px-2 rounded-sm !outline-none text-sm h-8 border flex items-center justify-center gap-x-2"
          >
            Priority
            <BsChevronDown/>
          </button>

          
      </div>
      <div className="flex items-center justify-end px-1 gap-x-1">
        <p className="text-end px-2 py-2 font-semibold text-[#737475]">Sort</p>
        <div className="  flex flex-col !outline-none text-[#737475] ">
          <button  className="border-none !outline-none">
            <BsFillCaretUpFill className="text-xl  !outline-none mt-1" />
          </button>
          <button  className=" border-none !outline-none">
            <BsFillCaretDownFill className="text-xl !outline-none -mt-2" />
          </button>
        </div>
      </div>
     </div>
     <div>
        <p className="text-sm font-semibold text-[#737475] mt-3">Showing 1 to 12 entries</p>
     </div>
   <div className="py-3">
   <div   onClick={handlContractor} className="  border flex flex-col cursor-pointer  items-center  rounded-lg">
        <div className="flex text-xs hover:bg-blue-50 sm:text-base w-full  ">
          <div className="w-[10%] sm:py-2  flex items-center justify-center">
            <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
              Status/user
            </p>
          </div>
          <div className=" w-[12%] ">
            <p className=" text-xs sm:text-base sm:py-2  text-center font-bold  flex items-center justify-center h-full">
            Business Name
                        </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
            Service
            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base sm:py-2  text-center  font-bold  flex items-center justify-center h-full ">
            Working Hours
                        </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
            Area of coverage
                        </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base sm:py-2 text-center font-bold  flex items-center justify-center h-full">
            Priority  
                      </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
            Open Jobs 
                       </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-base  sm:py-2 text-center font-bold  flex items-center justify-center h-full ">
            Actions                       </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex  gap-x-3 items-center justify-center">
          <img src={check} className="w-5 object-fill h-5"/>
          <img src={mbl} className="w-4 object-fill h-6"/>
          
          </div>
          <div className=" w-[12%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              WPM
            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          Plumber            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          24/7
            </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base border-r  sm:py-2 text-center   flex items-center justify-center h-full">
            +5 miles from Swindon Center            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base border-r text-center   flex items-center justify-center h-full">
              <span className="bg-[#38bf67] text-white text-sm rounded-sm w-5 h-5">
                p1
              </span>
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              7
            </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
              Select <BsChevronDown className="mt-[3px]" />
            </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r flex items-center gap-x-3 justify-center">
          <img src={cross} className="w-5 object-fill h-5"/>
          <img src={mbl} className="w-4 object-fill h-6"/>
          
          </div>
          <div className=" w-[12%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              WPM
            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          Plumber            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          24/7
            </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base border-r  sm:py-2 text-center   flex items-center justify-center h-full">
            +5 miles from Swindon Center            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base border-r text-center   flex items-center justify-center h-full">
              <span className="bg-[#38bf67] text-white text-sm rounded-sm w-5 h-5">
                p1
              </span>
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              7
            </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
              Select <BsChevronDown className="mt-[3px]" />
            </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 border-r gap-x-3 flex items-center justify-center">
          <img src={check} className="w-5 object-fill h-5"/>
          <img src={mbl} className="w-4 object-fill h-6"/>
          
          </div>
          <div className=" w-[12%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              WPM
            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          Plumber            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          24/7
            </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base border-r  sm:py-2 text-center   flex items-center justify-center h-full">
            +5 miles from Swindon Center            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base border-r text-center   flex items-center justify-center h-full">
              <span className="bg-[#38bf67] text-white text-sm rounded-sm w-5 h-5">
                p1
              </span>
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              8
            </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
              Select <BsChevronDown className="mt-[3px]" />
            </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 gap-x-3 border-r flex items-center justify-center">
          <img src={cross} className="w-5 object-fill h-5"/>
          <img src={mbl} className="w-4 object-fill h-6"/>          
          </div>
          <div className=" w-[12%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              WPM
            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          Plumber            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          24/7
            </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base border-r  sm:py-2 text-center   flex items-center justify-center h-full">
            +5 miles from Swindon Center            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base border-r text-center   flex items-center justify-center h-full">
              <span className="bg-[#38bf67] text-white text-sm rounded-sm w-5 h-5">
                p1
              </span>
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              9
            </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
              Select <BsChevronDown className="mt-[3px]" />
            </p>
          </div>
        </div>
        <div className="flex text-xs hover:bg-blue-50 sm:text-base border-t w-full  ">
          <div className="w-[10%] sm:py-2 gap-x-3 border-r flex items-center justify-center">
          <img src={check} className="w-5 object-fill h-5"/>
          <img src={mbl} className="w-4 object-fill h-6"/>          
          </div>
          <div className=" w-[12%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              WPM
            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          Plumber            </p>
          </div>
          <div className="w-[12%] ">
          <p className="text-xs sm:text-sm border-r sm:py-2 text-center  flex items-center justify-center h-full">
          24/7
            </p>
          </div>
          <div className="w-[22%] ">
            <p className="text-xs sm:text-base border-r  sm:py-2 text-center   flex items-center justify-center h-full">
            +5 miles from Swindon Center            </p>
          </div>
          <div className="w-[12%] ">
            <p className="text-xs sm:text-base border-r text-center   flex items-center justify-center h-full">
              <span className="bg-[#38bf67] text-white text-sm rounded-sm w-5 h-5">
                p1
              </span>
            </p>
          </div>
          <div className="w-[10%] ">
          <p className="text-xs sm:text-sm sm:py-2 text-center border-r  flex items-center justify-center h-full">
              9
            </p>
          </div>
          <div className="w-[10%] ">
            <p className="text-xs sm:text-sm sm:py-2 text-center  flex gap-x-2 items-center justify-center h-full">
              Select <BsChevronDown className="mt-[3px]" />
            </p>
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
    addContractor && <div>
    <AddContractor/>
    </div>
   }
    </>
   
  );
};

export default Plumber;
