import React, { useState } from "react";
import AddCertificate from "./AddCertificate";
import { FaKaaba } from "react-icons/fa";

const AddProperties = () => {
  const [certificate,setCertificate]=useState(false)
   const [handleAdd,setHandleAdd]=useState(true)
  const handleAddCertificate=()=>{
    setCertificate(true)
    setHandleAdd(false)
  }

  return (
    <div>
     {
      handleAdd &&  <div className="px-3 ">
      <div className="flex py-6 justify-between ">
        <h1 className="text-xl font-bold">Home /Properties /Add Property</h1>
        <button
          type="button"
          className="bg-[#38bf67] px-2 py-1 text-white rounded-md"
          onClick={handleAddCertificate}
        >
          Add Certificates
        </button>
      </div>
      <div className="  flex-wrap sm:grid grid-cols-2 gap-y-6 gap-x-6 justify-between">
        <div className="flex flex-col shadow-md border w-full rounded-md gap-y-4 px-12 py-8">
          <h1 className="text-center text-xl font-bold text-[#737475]">
            Enter Properties Details
          </h1>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Post code *"
          ></input>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Select Address *"
          ></input>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Managed By *"
          ></input>
          <textarea
            id="notes"
            className="outline-none border rounded-md px-2 py-2"
            name="w3review"
            rows="4"
            cols="50"
            placeholder="Notes*"
          ></textarea>
        </div>
        <div className="flex flex-col w-full border rounded-md shadow-md gap-y-4 px-12 py-8">
          <h1 className="text-center text-xl font-bold text-[#737475]">
            Enter Landlord Info
          </h1>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Full Name *"
          ></input>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Email *"
          ></input>
          <input
            type="text"
            className=" outline-none border h-10 rounded-md px-2 py-[2px]"
            placeholder="Contact *"
          ></input>
          <div className="h-28"></div>
         
        </div>
        <div className=" w-full border py-4 rounded-md shadow-md ">
          <di className=" flex flex-col gap-y-4 px-12 py-8">
            <h1 className="text-center text-xl font-bold text-[#737475]">
              Enter Landlord Info
            </h1>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Full Name *"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Email *"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Contact *"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Move in Date *"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Move out Date *"
            ></input>
          </di>
         <div className="flex justify-end px-4">
         <button type="button" className="bg-[#407c1e]  text-white px-2 py-1 rounded-md">
            Add Another
          </button>
         </div>
        </div>
       
      </div>
      <div className="flex justify-between md:px-32 py-6">
            <div className="flex items-center gap-x-2 ">
                <input type="checkbox"/>
                <label className="text-sm mt-2  ">Send Sign Up Info.</label>
            </div>
            <button type="button" className="bg-[#407c1e] px-12 rounded-sm py-1 text-white">Save</button>
        </div>
    </div>
     }

    {
      certificate && <div>
      <AddCertificate/>

      </div>
    }
   
    </div>
  );
};

export default AddProperties;
