"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import UpdateUserModal from './updateUser';
import SideDrawer from './sideDrawer';
import UpdateBalanceModal from './updateBalanceModal';

// Sample user data
const users = [
  {
    username: '10$',
    email: 'john.doe@example.com',
  password:"0.40",
  email:"admin@gmail.com",
  invitecode:"100",
  phone:"pending",
  withdrawpass:"0.40",
    profilePhoto: 'A', // URL to profile image
  },
  {
    username: '20$',
    email: 'jane.smith@example.com',
    
    password:"0.40",
    email:"admin@gmail.com",
    invitecode:"100",
    phone:"pending",
    withdrawpass:"0.40",
    profilePhoto: 'B', // URL to profile image
  },
  {
    username: '15$',
    email: 'sam.wilson@example.com',
    password:"0.40",
    email:"admin@gmail.com",
    invitecode:"100",
    phone:"pending",
    withdrawpass:"0.40",
    profilePhoto: 'C', // URL to profile image
  },
];
const UpdateTaskComponent = () => {
  const [userModal,setUserModal]=useState(false);
  const [updateBalance,setUpdateBalance]=useState(false);
const closeModal=()=>{
  setUserModal(false);
  setUpdateBalance(false);
}

  const handleUserModal=()=>{
    setUserModal(true);
  }

  const handleUpdateBalance=()=>{
    setUpdateBalance(true);
  }
  return (
    <div className='flex'>
    
  <SideDrawer page={"users"}/>


  <div className='w-[80%]  py-[20px] px-[10px]'>
    <h1 className='text-center font-bold text-[2rem]'>User List</h1>
    
    <div className='overflow-auto mt-4'>
    <table className='w-full border' cellPadding="10">
      <thead className='bg-blue-600 border text-white'>
        <tr className='text-[12px] md:text-[12px]'>
        <th className='text-start'>Product Name</th>
          <th className='text-start'>Task Value</th>
          <th className='text-start'>Commission Rate</th>
          <th className='text-start'>Commission Amount</th>
          <th className='text-start'>Account Balance</th>
          <th className='text-start'>Task Status</th>
          <th className='text-start'>Update Task</th>
          {/* <th className='text-start'>Actions</th> */}
          
        </tr>
      </thead>
      <tbody className='border'>
        {users.map((user, index) => (
          <tr key={index}>
            <td className='border '>
              {user.profilePhoto}
            </td>
            <td className='border '>{user.username}</td>
            <td className='border '>{user.password}%</td>
            <td className='border '>{user.withdrawpass}$</td>
            
            <td className='border '>{user.invitecode}$</td>
            <td className='border '>{user.phone}</td>
            <td className='border '><Link href='/add-task' className='border btn text-[12px] bg-gray-300 p-2 rounded-sm hover:bg-gray-200  '>Add & Update</Link></td>

            {/* <td className='text-[12px]  flex'><button className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button><button className='bg-green-600 ml-2 text-white px-2 py-1 rounded-md' onClick={handleUserModal}>Update</button></td> */}
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
 
  </div>
  );
};

export default UpdateTaskComponent;
