import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import img from "../images/mbl.png";

const JobAss = () => {
  return (
    <div className="flex gap-x-3">
      <div className="w-1/2 border rounded-md shadow-sm py-3 px-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[#737475] font-bold">Filter by Status- App</h2>
          <button
            type="button"
            className="bg-[#38bf67] text-white font-semibold px-4 rounded-sm py-[4px] text-sm"
          >
            Reset
          </button>
        </div>
        <div className="flex gap-x-3 py-3">
          <button
            type="button"
            className="bg-[#38bf67] text-white font-semibold px-10 rounded-sm py-[4px] text-sm"
          >
            Online
          </button>
          <button
            type="button"
            className="bg-[] border px-10 text-[#737475] font-semibold rounded-sm py-[4px] text-sm"
          >
            Offline
          </button>
        </div>
        <div>
          <h2 className="text-[#737475] font-bold">Filter by Category</h2>
          <div className="py-2  flex flex-col gap-y-0">
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Electrician</label>
                </div>
              </div>
              <div className="flex items-center  w-28 gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Guard</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Plumber</label>
                </div>
              </div>
              <div className="flex items-center gap-x-3 w-28">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Keyholder</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Handyman</label>
                </div>
              </div>
              <div className="flex items-center gap-x-3 w-28">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Cleaner</label>
                </div>
              </div>
            </div>
            <div className="flex w-[70%] justify-between ">
              <div className="flex items-center gap-x-3">
                <div>
                  <input type="checkbox" className="" />
                </div>
                <div className="mt-[6px] font-semibold text-[#737475]">
                  <label className="text-sm">Locksmith</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Filter by Radius</h2>
            <span className="text-[#737475] text-xs">(Post code: 10010)</span>
          </div>
          <div className="py-3">
            <input
              type="text"
              className="rounded-sm w-full py-[2px] border px-2 "
              placeholder="Radius"
            ></input>
          </div>
          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Filter by Group</h2>
          </div>
          <div className="py-3">
            <div className="input-field h-8 w-full">
              <input type="search" placeholder="Khan Electric" />
              <BsChevronDown />
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <h2 className="text-[#737475] font-bold">Map View</h2>
          </div>
          <div className="py-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3795484579437!2d71.50874917499483!3d34.00846722004181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917036f0a14d9%3A0x16a1a4ec27525171!2sLiberty%20Mall!5e0!3m2!1sen!2s!4v1687586873981!5m2!1sen!2s"
              className="w-full h-32 rounded-sm"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="py-2">
            <button
              type="button"
              className="text-white bg-[#f44134] font-semibold w-full rounded-sm py-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 border rounded-md shadow-sm py-3 px-4">
        <h2 className="text-[#737475] font-bold">Select Engineer</h2>
        <div className="py-3">
          <div className="search-input flex items-center border rounded-sm py-[2px] px-1 ">
            <CiSearch className="search-icon text-xl text-[#737475]" />
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
            <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
              p1
            </p>
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
          </div>
        </div>
        <hr />
        <div className="flex items-center py-3   justify-between">
          <div className="flex items-center gap-x-5">
            <div>
              <input type="checkbox" className="" />
            </div>
            <p className="text-sm font-semibold text-[#737475]">Zahid</p>
          </div>
          <div className="flex items-center w-16   gap-x-5">
            <img src={img} className="w-4 h-6 object-fill" />
          </div>
        </div>
        <hr />

        <div className="px-3 py-3">
          <p className="text-[#737475] font-semibold">Note</p>
          <div className="flex justify-between items-center mt-2 px-3">
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as first Choice</p>
            </div>
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as second choice</p>
            </div>
            <div className="flex items-center gap-x-2">
             
              <p className=" flex items-center bg-[#38bf67] text-white rounded-xs h-5 w-5 rounded-sm p-[1px] text-xs border justify-center">
                p1
              </p>
              <p className="text-xs text-[#737475]">Use as third choice</p>
            </div>
          </div>
        </div>
        <div className="py-2 px-12">
            <button
              type="button"
              className="text-white bg-[#38bf67] font-semibold w-full rounded-sm py-2"
            >
            Assign
            </button>
          </div>
      </div>
    </div>
  );
};

export default JobAss;
