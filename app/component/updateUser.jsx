import React from 'react';
import { FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from 'react-icons/io';

const UpdateUserModal = ({ closeModal }) => {
   
  return (
    <section className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg w-[80%] md:w-[50%]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Update Product</span>
          <button onClick={closeModal} className="text-2xl">&times;</button>
        </div>
       <div>
       <div className="h-[80%] ">
       
        <form action="" className="flex flex-col justify-between gap-6 mt-8">
         
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Username</span>
                <input
                  type="text"
                  placeholder="Username"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>

            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Phone</span>
                <input
                  type="password"
                  placeholder="Phone"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Withdrawal Password</span>
                <input
                  type="text"
                  placeholder="Withdrawal Password"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>

            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Password"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>
          </div>

          {/* Third row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>

            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span>Gender</span>
                <div className="flex gap-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="male"
                      className="mr-2 rounded-full border-2"
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      value="female"
                      className="mr-2 rounded-full border-2"
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Invite code row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span className="text-[#FF1616]">Invite Code</span>
                <input
                  type="text"
                  placeholder="Invite Code"
                  className="ml-2 outline-none text-right w-full"
                />
              </div>
            </div>
            <div className="bg-white px-2 rounded-md w-full h-[4rem] flex flex-col justify-center">
              <div className="flex justify-between items-center text-[14px] h-full w-full">
                <span className="text-[#FF1616]">I Agree With Terms and conditions</span>
                <input
                  type="checkbox"
                  placeholder="Invite Code"
                  className=" p-2 outline-none text-right w-full"
                />
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-8 w-full">
            <button className="bg-[#FF1616] w-full font-bold tracking-wide text-white text-[14px] p-4 rounded-md">
              Update
            </button>
          </div>
        </form>

       
      </div>
      
       
     
       </div>

       
      </div>
    </section>
  );
};

export default UpdateUserModal;
