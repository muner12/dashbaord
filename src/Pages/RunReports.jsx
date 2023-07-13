import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const RunReports = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-4'>
         <form className="  flex flex-col items-center justify-center w-[40%] border rounded-md shadow-md gap-y-4 p-5">
      
         <div className="flex items-center justify-center border rounded-sm w-full px-2 py-[6px]">
            <input type="search" placeholder="Select Group *" />
            <BsChevronDown />
          </div>
          <input
            type="text"
            className=" flex items-center justify-center border rounded-sm w-full px-2 py-[6px]"
            placeholder="Start Date"
          ></input>
          <input
            type="text"
            className=" flex items-center justify-center border rounded-sm w-full px-2 py-[6px]"
            placeholder="End Date"
          ></input>
          <button className='border w-full rounded-sm text-white bg-[#407c1e] py-[6px] font-semibold !outline-none'>Run</button>
          {/* <div className="h-28"></div> */}
         
        </form>
    </div>
  )
}

export default RunReports