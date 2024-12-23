import React from 'react'

const SideDrawer = () => {
  return (
  <section className='border w-[30%] h-full p-4'>
    <div>
        <ul>
            <li className='cursor-pointer bg-gray-200 p-2 rounded-md font-semibold'>Users</li>
            <li className='cursor-pointer bg-gray-200 p-2 rounded-md mt-4 font-semibold'>Products</li>   
        </ul>
    </div>
  </section>
  )
}

export default SideDrawer;