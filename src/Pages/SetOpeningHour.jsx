import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
const SetOpeningHour = () => {
  const [isChecked, setIsChecked] = useState(false);
  // Our States
  const [state, setState] = React.useState({ status: true });

  // Change State Function
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <div>
      <div className="flex flex-col w-[30%] m-auto mt-3 rounded-md border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
          <h1 className="text-[#737475] text-lg font-bold mt-2">
            Set Your Opening Hours
          </h1>
          <div className="flex flex-col gap-y-4">
            <div className="flex justify-between border rounded-md items-center  py-[4px] px-2">
              <input type="search" placeholder="Same Every Day" />
             
              {/* <Switch
            checked={state.status}
            onChange={handleChange}
            className=""
            color="primary"
            name="status"
          /> */}
            </div>
            <div className="flex items-center gap-x-2 justify-center">
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Mon</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Tue</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Wed</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Thur</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Fri</p>
              </div>
              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sat</p>
              </div>

              <div className="w-7 h-7 bg-[#38bf67] rounded-full text-[10px] flex justify-center items-center text-white">
                <p>Sun</p>
              </div>
            </div>
            <input
              type="text"
              className=" rounded-md border  w-full py-[4px] px-2"
              placeholder="8:00 to 2:00"
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

export default SetOpeningHour;
