  import Link from 'next/link';
import React from 'react'
import { FaUsers } from "react-icons/fa";
import { IoIosNotifications } from 'react-icons/io';
import { AiFillProduct } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
const SideDrawer = ({page}) => {

  return (
  <section className=' w-[20%]  h-[100vh] shadow-lg shadow-blue-100 p-4'>
    <div className='w-full'>
    <ul className='flex flex-col justify-center   items-center md:items-start w-full'>
            <Link href='/dashboard-users' className={`cursor-pointer ${page === "users" ? "bg-blue-100 text-blue-600" : "" } h-[3rem] w-[3rem] md:w-full rounded-full ease-in-out transition-all duration-300  flex justify-center md:justify-normal items-center   p-2 md:rounded-md `}><FaUsers  className='md:mr-2 text-[1.5rem]'/> <span className='hidden md:block'>Users</span></Link>
            <Link href='/dashboard-notifications' className={`cursor-pointer ${page === "notification" ? "bg-blue-100 text-blue-600" : "" } md:w-full h-[3rem] w-[3rem] rounded-full ease-in-out transition-all duration-300  flex justify-center md:justify-normal items-center p-2 md:rounded-md mt-4 `}><IoIosNotifications  className='md:mr-2 text-[1.5rem]'/><span className='hidden md:block'>Notifications</span></Link>
            <Link href='/dashboard-products' className={`cursor-pointer ${page === "products" ? "bg-blue-100 text-blue-600" : "" } md:w-full h-[3rem] w-[3rem] rounded-full  ease-in-out transition-all duration-300 flex justify-center md:justify-normal items-center p-2 md:rounded-md mt-4 `}><AiFillProduct  className='md:mr-2 text-[1.5rem]'/><span className='hidden md:block'>Products</span></Link>   
            <Link href='/admin-profile' className={`cursor-pointer ${page === "editAdmin" ? "bg-blue-100 text-blue-600" : "" } md:w-full   h-[3rem] w-[3rem] rounded-full  ease-in-out transition-all duration-300 flex justify-center md:justify-normal items-center  p-2 md:rounded-md mt-4 s`}><FaUserCircle  className='md:mr-2 text-[1.5rem]'/><span className='hidden md:block'>Edit Profile</span></Link>   
        </ul>
    </div>
  </section>  
  )
}

export default SideDrawer;