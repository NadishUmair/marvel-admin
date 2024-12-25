"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import ProductAddModal from './addProductModal';
import UpdateProductModal from './updateProduct';
import SideDrawer from './sideDrawer';

const users = [
  {
    username: 'john_doe',
    email: 'john.doe@example.com',
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsPX1fUUhis0SEGTcm3nfbcSuifKUMu-qNw&s', // URL to profile image
  },
  {
    username: 'jane_smith',
    email: 'jane.smith@example.com',
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsPX1fUUhis0SEGTcm3nfbcSuifKUMu-qNw&s', // URL to profile image
  },
  {
    username: 'sam_wilson',
    email: 'sam.wilson@example.com',
    profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsPX1fUUhis0SEGTcm3nfbcSuifKUMu-qNw&s', // URL to profile image
  },
];

const ProductsComponent = () => {
  const [showModal,setShowModal]=useState(false);
  
  const [showUpdateProduct,setShowUpdateProduct]=useState(false);

  const closeModal=()=>{
    setShowModal(false);
    setShowUpdateProduct(false);
  }
  const handleModal=()=>{
     setShowModal(true);
  }
  const handleUpdateModal=()=>{
    setShowUpdateProduct(true);
  }

  return (
    <div className='flex justify-between  w-full '>
      
      <SideDrawer page={"products"} />
 

    <div className='w-[80%] md:w-[70%]py-[20px] '>
      <h1 className='text-center text-[2rem] font-bold'>Products</h1>
      <div className='flex justify-end md:px-[20px]  '>
        <button onClick={handleModal} className='bg-green-700 p-2 text-white rounded-md'>Add Product</button>
      </div>
     <div className='overflow-auto'>
     <table border="1" className='w-full' cellPadding="10">
        <thead>
          <tr className='text-[12px] md:text-[16px]'>
            <th className='text-start'>Product Photo</th>
            <th className='text-start'>Product Name</th>
            <th className='text-start'>Price</th>
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
              <td>{user.email}</td>
              <td className='text-[12px] md:text-[16px] flex'><button className='bg-red-600 text-white px-2 py-1 rounded-md'>Delete</button><button className='bg-green-600 ml-2 text-white px-2 py-1 rounded-md' onClick={handleUpdateModal}>Update</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
    { showModal &&
      <ProductAddModal closeModal={closeModal} />
    }
    { showUpdateProduct &&
      <UpdateProductModal closeModal={closeModal} />
    }
    </div>
  );
};

export default ProductsComponent;
