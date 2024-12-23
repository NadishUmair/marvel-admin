"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FiMessageCircle } from "react-icons/fi";

const LoginComponent = () => {

  return (
  
    <section className='h-[100vh] px-4 '>
      <div className='flex h-[20%] flex-col justify-center items-center py-[50px] w-full   px-8'>
    
      </div>
     <div className='flex h-[60%]  flex-col  justify-center items-center'>
     <div className=" flex flex-col sm:w-[95%] md:w-[420px]">
        <h1 className='text-center  text-[24px] font-bold tracking-wide'>Admin Login </h1>
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
          
          <Link href='/dashboard-users' className='mt-8 w-full'>
            <button className='bg-[#FF1616] w-full font-bold tracking-wide text-white text-[20px] p-4 rounded-md'>
              Login
            </button>
          </Link>
        </form>

        <div className='mt-8 w-full flex items-center text-[20px] text-white underline'>
          <Link href="/forget-password" className=''>Forget Password</Link>
        </div>
        <div className='mt-8 w-full flex justify-center items-center text-[20px] text-white underline'>
          <Link href="/register" className='text-center'>Register Now</Link>
        </div>
      </div>
     </div>

    
    </section>
  );
};

export default LoginComponent;

