import React from 'react'
import SideDrawer from './sideDrawer';
import Link from 'next/link';

const EditAdminProfile = () => {
  return (
    <section className='flex justify-between'>
        <SideDrawer page={"editAdmin"}/>
        <div className='w-[80%] '>
            <h1 className='text-center text-[2rem] font-semibold'>Edit Admin</h1>
            <div className='h-[100vh] px-4 '>
     
     <div className='flex h-[60%] border  flex-col  justify-center items-center'>
     <div className=" flex flex-col sm:w-[95%] md:w-[420px]">
        
        <form action="" className='flex flex-col justify-between mt-8'>  
          <div className='bg-white px-2 rounded-md mt-4 w-full h-[4rem] border border-black flex flex-col justify-center'>
            <div className='flex justify-between items-center text-[20px] h-full w-full'>
              <span>Username/phone</span>
              <input
                type="text"
                placeholder='Username/phone'
                className='ml-2 outline-none text-right w-full'
              />
            </div>
          </div>
          
          <div className='bg-white px-2 rounded-md mt-8 w-full h-[4rem] border border-black  flex flex-col justify-center'>
            <div className='flex justify-between items-center text-[20px]  h-full w-full'>
              <span>Password</span>
              <input
                type="password"
                placeholder='Password'
                className='ml-2 outline-none text-right w-full'
              />
            </div>
          </div>
          
          <div className='mt-8 w-full'>
            <button className='bg-blue-600 w-full font-bold tracking-wide text-white text-[20px] p-4 rounded-md'>
             Update Admin
            </button>
          </div>
        </form>

        <div className='mt-8 w-full flex items-center text-[20px] text-white underline'>
          <Link href="/forget-password" className=''>Forget Password</Link>
        </div>
        <div className='mt-8 w-full flex justify-center items-center text-[20px] text-white underline'>
          <Link href="/register" className='text-center'>Register Now</Link>
        </div>
      </div>
     </div>

    
    </div>
        </div>
       
    </section>
  )
}

export default EditAdminProfile;