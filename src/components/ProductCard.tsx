import React from 'react'
import Image from 'next/image';
import { AiFillAlert, AiFillStar, AiOutlineStar } from 'react-icons/ai';

interface propsType {
    img: string;
    title: string;
    desc: string;
    rating: number;
    price: string;
}

const ProductCard: React.FC<propsType> = ({ img, title, desc, rating, price }) => {

    const generateRating = (rating: number) => {
        switch (rating) {
            case 1:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529] '>
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />


                    </div>
                );
            case 2:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />
                        <AiOutlineStar />


                    </div>
                );
            case 3:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <AiOutlineStar />


                    </div>
                );
            case 4:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />


                    </div>
                );
            case 5:
                return (
                    <div className='flex gap-1 text-[20px] text-[#FF9529]'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />


                    </div>
                );

            default:
                return null;
        }
    }
    return (
        <div className='border border-gray-200 rounded-xl  shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer '>
          <div className='relative w-full h-48 overflow-hidden rounded-lg'>
            <Image
              className='object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110'
              src={img}
              width={400}
              height={300}
              alt={title}
            />
          </div>
    
          <div className='space-y-1 py-2 px-2'>
            <h2 className='text-lg font-medium text-gray-800 uppercase transition-colors duration-300 group-hover:text-[#ff6f72]'>{title}</h2>
            <p className='text-gray-500 transition-colors duration-300 group-hover:text-gray-700'>{desc}</p>
            <div>{generateRating(rating)}</div>
            <div className='font-bold text-xl flex items-center gap-2'>
              <span>${price}</span>
              <del className='text-gray-400'>
                ${parseInt(price) + 12}.00
              </del>
            </div>
          </div>
        </div>
      );
}

export default ProductCard