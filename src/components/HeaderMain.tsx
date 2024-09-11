import React from 'react'
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

const HeaderMain = () => {
  return (
    <div className=' border-b border-gray-200 py-6'>
      <div className='container sm:flex justify-between items-center'>
        <div className='text-center pb-4 sm:pb-0'>
          <img
            src="/logo.png"
            alt="Logo"
            className='w-20 h-auto mx-auto'
          />
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative" >
          <input
            className=" border p-2 px-4 rounded-lg w-full focus:border-pink-600 focus:outline-none focus:ring-0 hover:border-pink-600"
            type="text"
            placeholder="Enter any product name..."
          />



          <BsSearch
            className="absolute right-0 top-0 mr-3 mt-3   "
            size={20}
          />


        </div>
        <div className='hidden lg:flex gap-4  text-gray-500  text-[30px]'>
          <BiUser />

          <div className='relative'>
            <FiHeart />
            <div className=' bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
              text-white grid place-items-center translate-x-1 translate-y-1
            '>
              0
            </div>

          </div>
          <div className='relative'>
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
              text-white grid place-items-center translate-x-1 translate-y-1">
              0
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default HeaderMain