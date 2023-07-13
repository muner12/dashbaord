import React from "react";
import { BsChevronDown } from "react-icons/bs";

const TimeZone = () => {
  return (
    <div>
      <div className="flex flex-col w-[30%] m-auto mt-3 rounded-md border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
        <h1 className="text-[#737475] text-lg font-bold mt-2">Time Zone</h1>
       <div className="flex flex-col gap-y-4">
       <div className="flex justify-between border rounded-md items-center  py-[4px] px-2">
            <input type="search" placeholder="Tenant Name *" />
            <BsChevronDown />
          </div>
        <input
          type="text"
          className=" rounded-md border  w-full py-[4px] px-2"
          placeholder="Groups"
        ></input>
       </div>

        <button
          type="button"
          className="bg-[#38bf67] !outline-none text-sm px-2 py-2 rounded-sm font-semibold text-white"
        >
        Save
        </button>
        </div>
      </div>
    </div>
  );
};

export default TimeZone;
