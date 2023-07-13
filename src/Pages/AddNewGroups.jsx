import React from "react";

const AddNewGroups = () => {
  return (
    <div>
      <div className="flex flex-col w-[30%] m-auto mt-3 rounded-md border shadow-md p-3">
        <div className="flex flex-col gap-y-8 px-3">
        <h1 className="text-[#737475] font-bold mt-2">Add New Group</h1>
        <input
          type="text"
          className=" rounded-md border  py-[3px] px-2"
          placeholder="Group Name"
        ></input>

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

export default AddNewGroups;
