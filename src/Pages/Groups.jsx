import React, { useState } from "react";
import { BiCaretRight } from "react-icons/bi";
import plus from "../images/plus.png";
import edit from "../images/edit.png";

import message from "../images/message.png";
import dlt from "../images/delete.png";
import rightArrow from "../images/rightArrow.png";
import AddNewGroups from "./AddNewGroups";

const Groups = () => {
    const [groups, setGroups] = useState(true)
    const [newGroups, setnewGroups] = useState(false)

    

    const handleAddRoot=()=>{
        setGroups(false)
        setnewGroups(true)
    }

  return (
    <div className="row">
     { groups &&
        <div className="w-100">
      <div className=" w-100 flex justify-end">
        <button
          type="button"
          onClick={handleAddRoot}
          className="bg-[#38bf67] !outline-none text-sm mb-4 px-2 py-1 rounded-sm font-semibold text-white"
        >
          Add Root Groups
        </button>
      </div>
      <div className="rounded-md border shadow-md ">
        <div className="flex justify-between border-b p-3">
          <h1 className="font-semibold">Organization Groups</h1>
          <h1 className="font-semibold px-5">Action</h1>
        </div>
        <div>
          <div className="flex border-b justify-between py-2 px-2">
            <div className="flex items-center">
              {/* <img src={rightArrow}/> */}
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                WPM Services Group
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                Green Wood
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                WPM Services Group
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                Green Wood
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                WPM Services Group
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                Green Wood
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex hover:bg-blue-50 cursor-pointer border-b justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                WPM Services Group
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex hover:bg-blue-50 cursor-pointer border-b justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex hover:bg-blue-50 cursor-pointer border-b justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                Green Wood
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex hover:bg-blue-50 cursor-pointer border-b justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                WPM Services Group
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b hover:bg-blue-50 cursor-pointer justify-between py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
          <div className="flex border-b justify-between hover:bg-blue-50 cursor-pointer py-2 px-2">
            <div className="flex items-center">
              <img src={rightArrow} />
              <p className="px-2 text-sm text-[#737475] font-semibold">
                APT Company
              </p>
            </div>
            <div className="flex items-center px-4 gap-x-2">
              <img src={plus} className="w-4 object-fill h-4" />
              <img src={edit} className="w-4 object-fill h-4" />
              <img src={dlt} className="w-4 object-fill h-4" />
              <img src={message} className="w-4 object-fill h-4" />
            </div>
          </div>
        </div>
      </div>
      </div>
     }
     {
        newGroups && <AddNewGroups/>
     }
    </div>
  );
};

export default Groups;
