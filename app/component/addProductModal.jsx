import React from 'react';
import { FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from 'react-icons/io';

const ProductAddModal = ({ closeModal }) => {
  return (
    <section className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg w-[80%] md:w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Add Product</span>
          <button onClick={closeModal} className="text-2xl">&times;</button>
        </div>
       <div>
       
      
       
        <div className='flex justify-between mt-2  h-[3rem] border'><input type="text" placeholder='Enter Name' className='w-full h-full px-2' /></div>
        <div className='flex justify-between mt-2  h-[3rem] border'><input type="text" placeholder='Enter Price' className='w-full h-full px-2' /></div>
        <div className='flex justify-between mt-2  h-[3rem] border'><input type="file" placeholder='Enter Name' className='w-full h-full px-2' /></div>
        <div className='flex justify-between mt-2  h-[5rem] border'><textarea name="" id="" className='w-full px-2 'placeholder='Description'></textarea></div>
        
        
       </div>

        <div className="flex justify-center mt-4">
          <button onClick={closeModal} className="bg-red-600 text-white p-2 rounded-lg w-full">Submit</button>
        </div>
      </div>
    </section>
  );
};

export default ProductAddModal;
