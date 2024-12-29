import Link from "next/link";
import React from "react";
import { FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const AddProductModal = ({ closeModal }) => {
    const users = [
        {
          username: 'Product A',
          email: 'john.doe@example.com',
        price:"10$",
        email:"admin@gmail.com",
        invitecode:"100",
        phone:"pending",
        withdrawpass:"0.40",
          profilePhoto: 'Task Id', 
        },
        {
          username: 'Product B',
          email: 'john.doe@example.com',
          price:"10$",
        email:"admin@gmail.com",
        invitecode:"100",
        phone:"pending",
        withdrawpass:"0.40",
          profilePhoto: 'Current Product', 
        },
        {
          username: 'Product C',
          email: 'john.doe@example.com',
          price:"10$",
        email:"admin@gmail.com",
        invitecode:"100",
        phone:"pending",
        withdrawpass:"0.40",
          profilePhoto: 'Add Product', 
        },
      
      
      ];
  return (
    <section className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg w-[80%] ">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Add Product</span>
          <button onClick={closeModal} className="text-2xl">
            &times;
          </button>
        </div>

        <div className='overflow-auto mt-4'>
    <table className='w-full border' cellPadding="10">
      <thead className='bg-blue-600 border text-white'>
        <tr className='text-[12px] md:text-[12px]'>
        <th className='text-start'>Product Name</th>
          <th className='text-start'>Product Price</th>
          <th className='text-start'>Select</th>
          
          
        </tr>
      </thead>
      <tbody className='border'>
        {users.map((user, index) => (
          <tr key={index}>
            <td className='border '>{user.username}</td>
            <td className='border '>
              {user.price}
            </td>
            
            <td className='border '><input type="checkbox" name="" id="" /></td>
           
            
          
          </tr>
        ))}
      </tbody>
    </table>
    </div>

       
      </div>
    </section>
  );
};

export default AddProductModal;
