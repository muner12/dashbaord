import React, { useState } from 'react'
import SelectCategorydata from '../Config/SelectCategoryData'
import SelectGroup from './SelectGroup'

const SelectCategory = () => {
    const [selectCategory,setselectCategory]=useState(true)
    const [selectGroup,setselectGroup]=useState(false)


    const handleNext=()=>{
        setselectCategory(false)
        setselectGroup(true)

    }
  return (
   <>

   {
    selectCategory &&   <div>
        <div className='grid grid-cols-8 gap-y-4  '>
            {
                SelectCategorydata.map((items)=>(
                    <div className='border w-32 h-32 rounded-md shadow-md  flex flex-col gap-y-3 items-center justify-center '>
                        <img src={items.img}/>
                        <p className='text-sm text-[#737475]'>{items.text}</p>
                    </div>
                ))
            }
            
        </div>
        <div className='flex justify-end px-1   items-center mt-4'>
        <button type='button' onClick={handleNext} className='rounded-sm bg-[#38bf67] py-1 px-24 mr-[4px] text-white'>Next</button>
            
        </div>
        
    </div>
   }

   {
    selectGroup && <SelectGroup/>
   }
   </>
  )
}

export default SelectCategory