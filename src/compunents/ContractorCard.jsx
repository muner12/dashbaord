import React from 'react'
import data from '../Config/ContractorCardData'

const ContractorCard = () => {
  return (
    <div className='flex gap-x-5 py-0 mt-2'>
        {
            data.map((items)=>(
                <div className=' w-44 cursor-pointer border-2 px-2 py-3 rounded-lg border-[#38bf67]'>
                <div className=''>
                    <img src={items.img} className='h-12 w-12'/>
                    <h1 className='text-3xl font-bold mt-2 text-[#737475] '>{items.text}</h1>
                    <button type='button' className='bg-[#38bf67] mt-2 px-2 font-semibold text-white text-sm rounded-xl'>{items.btn}</button>
                </div>

                </div>
            ))
        }
    </div>
  )
}

export default ContractorCard