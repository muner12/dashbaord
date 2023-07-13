import React from 'react'

const LandLordApproval = () => {
  return (
    <div className='py-6'>
          <di className=" flex flex-col gap-y-4 sm:w-[80%] lg:w-[37%] border shadow-md rounded-md m-auto   px-16 py-8">
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Email"
            ></input>
            <input
              type="text"
              className=" outline-none border h-10 rounded-md px-2 py-[2px]"
              placeholder="Subject"
            ></input>
             <textarea
                className="border outline-none rounded-md px-2 py-1"
                rows="4"
                cols="60"
                placeholder="Description"
              ></textarea>
              <div>
                <h3 className='font-bold text-[#737475]'>Attachment:</h3>
                <div className='flex gap-x-4 mt-3'>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>
                    <div className='w-12 h-10 rounded-xl border'></div>



                </div>
              </div>
              <button className='w-full bg-[#407c1e] rounded-sm py-1 text-white font-semibold mt-5'>Save</button>
          </di>
    </div>
  )
}

export default LandLordApproval