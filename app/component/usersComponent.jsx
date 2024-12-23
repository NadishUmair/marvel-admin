"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import UpdateUserModal from './updateUser';

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

const closeModal=()=>{
  setUserModal(false);
}

  const handleUserModal=()=>{
    setUserModal(true);
  }

  return (
    <div className='flex'>
    <section className=' w-[30%] h-full p-4'>
  <div>
  <ul className='flex flex-col'>
            <Link href='/dashboard-users' className='cursor-pointer  bg-gray-200 p-2 rounded-md font-semibold'>Users</Link>
            <Link href='/dashboard-products' className='cursor-pointer  p-2 rounded-md mt-4 font-semibold'>Products</Link>   
        </ul>
  </div>
</section>

  <div className='w-[70%] py-[20px]'>
    <h1 className='text-center font-bold text-[2rem]'>User List</h1>
    <div className='overflow-auto'>
    <table border="1" className='w-full' cellPadding="10">
      <thead>
        <tr className='text-[12px] md:text-[16px]'>
          <th className='text-start'>Profile Photo</th>
          <th className='text-start'>Username</th>
          <th className='text-start'>Password</th>
          <th className='text-start'>Withdraw Password</th>
          <th className='text-start'>Invite code</th>
          <th className='text-start'>Phone</th>
          <th className='text-start'>Email</th>
          <th className='text-start'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>
              <img
                src={user.profilePhoto}
                alt={`${user.username}'s profile`}
                style={{ width: '50px', height: '50px', borderRadius: '50%' }}
              />
            </td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.withdrawpass}</td>
            
            <td>{user.invitecode}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td className='text-[12px] md:text-[16px] flex'><button className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button><button className='bg-green-600 ml-2 text-white px-2 py-1 rounded-md' onClick={handleUserModal}>Update</button></td>
            
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
  </div>
  );
};

export default UsersComponent;
