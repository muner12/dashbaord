import React from 'react'

const EditPropertyDetail = () => {
  return (
    <div className='py-8'>
    <div className="flex flex-col shadow-md w-[37%] border m-auto  rounded-md gap-y-4 px-12 py-8">
          <h1 className=" text-xl font-bold text-[#737475]">
            Enter Property Details
          </h1>
          <input
            type="text"
            className=" outline-none border mt-4 rounded-md px-2 py-1"
            placeholder="Post code *"
          ></input>
          <span className='text-xs text-[#737475] -mt-3 font-semibold'>124 Broad Street, Swindon, SN1 2AB</span>
          <input
            type="text"
            className=" outline-none border rounded-md px-2 py-1"
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
          <button type='button' className='bg-[#407c1e] mt-4 w-full text-white py-1 rounded-sm font-semibold'>Save</button>
          <button type='button' className='border-[2px] border-[#407c1e] w-full text-[#407c1e] py-1 rounded-sm font-semibold'>Cancel</button>

        </div>
    </div>
  )
}

export default EditPropertyDetail;