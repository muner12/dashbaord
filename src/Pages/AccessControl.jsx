import React, { useState } from "react";
import accessData from "../Config/AccessCardData";
import {GrAddCircle} from 'react-icons/gr'
import CreateNewRule from "./CreateNewRule";
import UserDetail from "./UserDetail";

const AccessControl = () => {
  const [access, setaccess] = useState(true);
  const [createNewRule, setCreateNewRule] = useState(false)
  const [userDetail, setUserDetail] = useState(false)


  const handleAccess=()=>{
    setaccess(false)
    setCreateNewRule(true)

  }
  const handleUserDetail=()=>{
    setaccess(false)
    setCreateNewRule(false)
    setUserDetail(true)

  }

  return (
    <div>
      {
        access && <>
        <div>
        <div className=" flex px-8 justify-end gap-x-3 mt-4">
          <button
          onClick={handleAccess}
            class="text-[#38bf67] font-semibold   !outline-none border-[2px] text-sm border-[#38bf67] px-2 w-32  justify-center   py-1 flex text-center items-center rounded-sm"
            fdprocessedid="xwgfij"
          >
            Create New Rule__
          </button>

          <button
          onClick={handleUserDetail}
            class="bg-[#38bf67] font-semibold  !outline-none text-white        text-sm justify-center px-2 w-32  py-1 flex text-center items-center rounded-sm"
            fdprocessedid="xwgfij"
          >
            User Details
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-y-4 px-24 mt-4">
      {
        accessData.map((items)=>(
        <>
            <div className="w-52 h-52 cursor-pointer text-center border p-4 rounded-md shadow-md">
            <img src={items.img} className="w-28 h-28 object-fill m-auto"/>
            <p className="text-[#737475] mt-3 font-semibold">{items.text}</p>
            <p className="text-[#38bf67] tem font-semibold">{items.number}</p>

          </div>
         
        </>
        ))
      }
      <div className="w-20 flex justify-center text-[#38bf67] items-center h-52 cursor-pointer text-center border-[1px] border-[#38bf67] p-4 rounded-md shadow-">
          <GrAddCircle className="text-3xl "/>

          </div>
      </div>
        </>
      }

      {
        createNewRule && <CreateNewRule/>
      }
      {
        userDetail  && <UserDetail/>
      }
     
    </div>
  );
};

export default AccessControl;
