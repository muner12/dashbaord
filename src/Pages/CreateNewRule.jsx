import React from "react";
import { ImgHTMLAttributes } from "react";
import createNewRule from "../Config/CreateNewRule";

const CreateNewRule = () => {
  return (
    <div>
      <div className="border rounded-md m-auto">
        {createNewRule.map((items, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "flex justify-between border-b px-3 py-3"
                : "flex justify-between px-3 py-2"
            }
          >
            <div>
              <div className="w-70%  flex flex-col gap-y-4 ">
                <h3
                  key={index}
                  className={
                    index === 0 ? " font-bold" : "text-[#737475] font-semibold"
                  }
                >
                  {items.feature}
                </h3>
                <div className="flex flex-col px-4 gap-y-3">
                  <h4 className="text-sm text-[#737475]">{items.add}</h4>
                  <h4 className="text-sm text-[#737475]">{items.edit}</h4>
                </div>
              </div>
              {/* <div className="w-[100%] border flex flex-col px-4 ">
            <h3
            className="text-sm text-[#737475]"
              >
                {
                    items.add
                }
              </h3>  
              <h3
            className="text-sm text-[#737475]"
              >
                {
                    items.edit
                }
              </h3>       

            </div> */}
            </div>
            <div
              className={
                index === 0
                  ? "w-[30%]  font-bold px-4  items-center"
                  : "w-[30%] font-bold   px-10 flex flex-col gap-y-4 justify-between items-center"
              }
            >
              <div className="  flex w-full justify-between items-center">
                <h3>{items.read}</h3>
                <h3>{items.rw}</h3>
              </div>
              <div className="flex flex-col w-full gap-y-3">
                <div className="  flex w-full justify-between items-center">
                  <h3>{items.check1}</h3>
                  <h3>{items.check2}</h3>
                </div>
                <div className="  flex w-full justify-between items-center">
                  <h3>{items.check3}</h3>
                  <h3>{items.check4}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className='flex justify-between -b px-3 py-2'>
          <div className='w-70% flex items-center'>
                <h3 className='font-semibold text-[#737475] '> <img src={dropdown}/>Properties </h3>
            </div>
            <div className='w-[30%]  font-bold px-10 flex justify-between items-center'>
<div>
<input type='checkbox'/>


</div>
<div className='mr-3'>
<input type='checkbox'/>


</div>

            </div>
          </div> */}
      </div>
    </div>
  );
};

export default CreateNewRule;
