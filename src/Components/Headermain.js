import React from 'react'

 const Headermain = () => {
  return (
    <div className=' border-b border-gray-200 py-6'>
<div className=' container sm:flex justify-between items-center'>
    <div className=' font-bold text-4xl text-center pb-4 sm:pb-0 text-blackish'>
        Logo
    </div>
    <div className=' w-full sm:w-[300-px] md:w-[70%] relative'>
<input
 className=' border-gray-200 border p-2 px-4 rounded-lg w-full'
 type='text'
  placeholder='Enter any product name...'/>
    </div>

</div>
    </div>
  )
}
export default Headermain;
