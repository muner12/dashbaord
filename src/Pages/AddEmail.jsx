import React, { useRef, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import "../Style/AddCertificate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsChevronDown } from "react-icons/bs";
import '../Style/AddNewJobs.css'

const AddEmail = () => {

  

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log(files); // Do something with the selected files
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger click on file input when button is clicked
  };

  return (
    <div className="py-4">
      <div className="w-[90%] sm:w-[80%] lg:w-[43%] shadow-md border py-4 rounded-md m-auto">
      
        <div className="flex flex-col gap-y-3   px-14">
        <h1 className="  text-[#737475] font-bold text-xl">
        Add Email
                </h1>
        <p className="  text-[#737475] font- text-sm">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.
        </p>
         <div className="px-6 flex flex-col gap-y-4">
         <div className="input-field">
            <input type="text" className="" placeholder="Email" />
            {/* <FaRegCalendarAlt /> */}
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="Password" />
          </div>         
          <div className="input-field">
            <input type="text" className="" placeholder="Port" />
          </div>
          <div className="input-field">
            <input type="text" className="" placeholder="smpt" />
          </div>    
          <button
            type="button"
            className="bg-[#38bf67] text-white flex !outline-none justify-center items-center rounded-md  py-2 font-semibold"
          >
            Save
          </button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmail;
