import React from "react";
import { FaSquareWhatsapp, FaTelegram } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const UpdateBalanceModal = ({ closeModal }) => {
  return (
    <section className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg w-[80%] md:w-[30%]">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-semibold">Add Product</span>
          <button onClick={closeModal} className="text-2xl">
            &times;
          </button>
        </div>
        <div>
          <div className="flex justify-between mt-2  h-[2rem] ">
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-[50%] h-full px-2"
            />
            <button className="bg-gray-200 hover:bg-slate-300 tracking-wide w-[30%] ">Deposite</button>
          </div>
          <div className="flex justify-between mt-2  h-[2rem] ">
            <input
              type="text"
              placeholder="Enter Amount"
              className="w-[50%] h-full px-2"
            />
              <button className="bg-gray-200 hover:bg-slate-300 tracking-wide w-[30%] ">Withdrawal</button>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={closeModal}
            className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-lg w-full"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpdateBalanceModal;
