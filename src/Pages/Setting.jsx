import React from "react";
import SettingCard from "../compunents/SettingCard";
import Sidebar from "../Sidebar";
import { BsChevronDown } from "react-icons/bs";
import notification from "../images/notifi.png";
import threedot from "../images/threedot.png";
import setting from "../images/settingNav.png";


const Setting = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-100 border">
      <div className="bg-green-100 px-10 flex  items-center justify-between py-8  ">
      <div className="flex gap-x-4 items-center">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="w-7 h-7">
              <img src={setting} />
            </div>

            <h1 className="text-3xl font-bold">Settings</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-x-8">
        
        <button
          type="button"
          className="bg-[#407c1e] text-white !outline-none rounded-sm text-sm font-semibold px-3 py-1 flex items-center gap-x-3"
        >
          Global <BsChevronDown className="text-md font-bold" />
        </button>
        <button type="button"  className="!outline-none w-6 h-6">
          <img src={notification} className="w-full h-full object-fill" />
        </button>
       
      </div>
    </div>
    <div className="py-8">
        <SettingCard />
      </div>
      </div>
     
    </div>
  );
};

export default Setting;
