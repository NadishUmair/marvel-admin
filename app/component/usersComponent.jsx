"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import UpdateUserModal from './updateUser';
import SideDrawer from './sideDrawer';
import UpdateBalanceModal from './updateBalanceModal';

// Sample user data
const users = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
  password:"123456",
  email:"admin@gmail.com",
  invitecode:"1221",
  phone:"+92034344893",
  withdrawpass:"23232",
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s', // URL to profile image
  },
  {
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    
    password:"123456",
    email:"admin@gmail.com",
    invitecode:"1221",
    phone:"+92034344893",
    withdrawpass:"23232",
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s', // URL to profile image
  },
  {
    username: 'sam_wilson',
    email: 'sam.wilson@example.com',
    password:"123456",
    email:"admin@gmail.com",
    invitecode:"1221",
    phone:"+92034344893",
    withdrawpass:"23232",
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s', // URL to profile image
  },
];

const UsersComponent = () => {
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
    <div className='w-full border h-[3rem]'><input type="text" className='w-full h-full px-2 outline-none' placeholder='Search by name' /></div>
    <div className='overflow-auto mt-4'>
    <table className='w-full border' cellPadding="10">
      <thead className='bg-blue-600 border text-white'>
        <tr className='text-[12px] md:text-[12px]'>
          <th className='text-start'>Profile Photo</th>
          <th className='text-start'>Username</th>
          <th className='text-start'>Password</th>
          <th className='text-start'>Withdraw Password</th>
          <th className='text-start'>Account Balnce</th>
          <th className='text-start'>Phone</th>
          <th className='text-start'>Email</th>
          {/* <th className='text-start'>Actions</th> */}
          <th className='text-start'>Current Tasks</th>
        </tr>
      </thead>
      <tbody className='border'>
        {users.map((user, index) => (
          <tr key={index}>
            <td className='border '>
              <img
                src={user.profilePhoto}
                alt={`${user.username}'s profile`}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
            </td>
            <td className='border '>{user.username}</td>
            <td className='border '>{user.password}</td>
            <td className='border '>{user.withdrawpass}</td>
            
            <td className='border '>{user.invitecode} <button className='border btn text-[10px] bg-gray-300 p-1 rounded-sm hover:bg-gray-200' onClick={handleUpdateBalance} >Update</button></td>
            <td className='border '>{user.phone}</td>
            <td className='border '>{user.email}</td>
            <td className='border '><Link href={'/update-task'} className='border btn text-[12px] bg-gray-300 p-2 rounded-sm hover:bg-gray-200  '>view & Update</Link></td>
            {/* <td className='text-[12px]  flex'><button className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button><button className='bg-green-600 ml-2 text-white px-2 py-1 rounded-md' onClick={handleUserModal}>Update</button></td> */}
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>
  {
    userModal && 
    <UpdateUserModal closeModal={closeModal}/>

  }

  { updateBalance &&

    <UpdateBalanceModal closeModal={closeModal}/>

  }
  </div>
  );
};

export default UsersComponent;
