
"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import UpdateUserModal from './updateUser';
import SideDrawer from './sideDrawer';
import UpdateBalanceModal from './updateBalanceModal';
import AddProductModal from './addProduct';

// Sample user data
const users = [
  {
    username: 'task updated',
    email: 'john.doe@example.com',
  password:"0.40",
  email:"admin@gmail.com",
  invitecode:"100",
  phone:"pending",
  withdrawpass:"0.40",
    profilePhoto: 'Task Id', // URL to profile image
  },
  {
    username: 'current product',
    email: 'john.doe@example.com',
  password:"0.40",
  email:"admin@gmail.com",
  invitecode:"100",
  phone:"pending",
  withdrawpass:"0.40",
    profilePhoto: 'Current Product', 
  },
  {
    username: '10$',
    email: 'john.doe@example.com',
  password:"0.40",
  email:"admin@gmail.com",
  invitecode:"100",
  phone:"pending",
  withdrawpass:"0.40",
    profilePhoto: 'Add Product', 
  },
  {
    username: '10$',
    email: 'john.doe@example.com',
  password:"0.40",
  email:"admin@gmail.com",
  invitecode:"100",
  phone:"pending",
  withdrawpass:"0.40",
    profilePhoto: 'Commission Rate', 
  },
  {
    username: '20$',
    email: 'jane.smith@example.com',
    
    password:"0.40",
    email:"admin@gmail.com",
    invitecode:"100",
    phone:"pending",
    withdrawpass:"0.40",
profilePhoto: 'Remove Product', 
  },

];
const AddTaskComponent = () => {
  const [productModal,setProductModal]=useState(false);
  
const closeModal=()=>{
  setProductModal(false);
 
}


  const handleAddProduct=()=>{
    setProductModal(true);
  }
  return (
    <div className='flex'>
    
  <SideDrawer page={"users"}/>


  <div className='w-[80%]  py-[20px] px-[10px]'>
    <h1 className='text-center font-bold text-[2rem]'>Add Task</h1>
    
    <div className='overflow-auto mt-4'>
    <table className='w-full border' cellPadding="10">
      <thead className='bg-blue-600 border text-white'>
        <tr className='text-[12px] md:text-[12px]'>
        <th className='text-start'>Field</th>
         
          <th className='text-start'>Input/Action</th>
          
          
          
        </tr>
      </thead>
      <tbody className='border'>
        
          <tr>
            <th className='border text-start '>Task Id</th>
          
            <td className='border '>Read Only Field</td>
           </tr>
          <tr >
            <th className='border text-start '>Current Products</th>
            <td className='border '>Displays Field</td>
          
           </tr>
          <tr>
            <th className='border text-start '>Comission Rate</th>
          
            <td className='border '><button className='text-[12px] bg-gray-300 p-2 w-[60%]' onClick={handleAddProduct}>Add Product</button></td>
            
           </tr>
          <tr>
            <th className='border text-start '>Remove Product</th>
            
            <td className='border flex flex-col'><span>with 0.4%</span><button className='text-[12px] bg-gray-300 p-2 w-[60%]'>Save</button></td>
            
           </tr>
          <tr>
            <th className='border text-start '>Task Id</th>
          
            <td className='border'><button className='text-[12px] bg-gray-300 p-2 w-[60%]'>Remove Product</button></td> 
           </tr>
     
      </tbody>
    </table>
    </div>
  </div>
    { productModal && 
    
    <AddProductModal closeModal={closeModal}/>

    }
  </div>
  );
};

export default AddTaskComponent;
