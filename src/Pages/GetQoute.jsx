import React from "react";
import { BsChevronDown } from "react-icons/bs";

const GetQoute = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="w-1/2 border rounded-lg shadow-md">
          <div className="flex justify-end p-2">
          <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs  w-16 py-1 rounded-sm">
            Reset
          </button>
          </div>
          <div className=" px-8">
          <h3 className="text-[#737475] font-bold ">Select Hours</h3>
          <div className="flex gap-x-3 mt-3 ">
            <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              8-6 hours
            </button>
            <button className="border !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Out Of Hours
            </button>
          </div>
          <h3 className="text-[#737475] font-bold mt-3">Filter by Status- App</h3>
          <div className="flex gap-x-3 mt-3">
            <button className="text-white  bg-[#38bf67] !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Online
            </button>
            <button className="border !outline-none font-semibold text-xs py-1 w-24 rounded-sm">
              Offline
            </button>
          </div>
          <div>
            <h3 className="text-[#737475] font-bold mt-3 ">Filter by Category</h3>
            <div className="mt-3">
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
              <input type="checkbox" className="ml-16" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Guard</label>
            </div>
            </div>
            <div className="">
              <input type="checkbox" />
              <label className="text-[#737475] text-sm font-semibold -translate-y-[1px] ml-2">Electrician</label>
             
            </div>
          </div>
          <h3 className="text-[#737475] font-bold ">
            Filter by Category{" "}
            <span className="text-xs text-[#737475] font-normal ">
              (Post code: 10010)
            </span>
          </h3>
          <div className="input-field h-8 w-full mt-3">
            <input type="search" placeholder="Radius" />
            <BsChevronDown />
          </div>
          <h3 className="text-[#737475] font-bold mt-3 ">Filter by Group </h3>
          <div className="input-field h-8 w-full mt-3">
            <input type="search" placeholder="Khan Electric" />
            <BsChevronDown />
          </div>
          </div>
        
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};

export default GetQoute;
