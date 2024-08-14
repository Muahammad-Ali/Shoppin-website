import React from 'react'
import Image from 'next/image'
const Testimonial = () => {
  return (
    <div>
        <div className='container pt-16 pb-16  grid-cols-2' >
            <h2 className='font-medium tect-2xl pb-4'>Testimonials</h2>
            <div className='grid lg:grid-cols-[300px,1fr]  gap-4' >
                <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                    <Image
                     className='rounded-full inline-block'
                     src="/profile1.jpg"
                     width={80}
                     height={80}
                     alt='dp'
                    />
                    <h2 className='text-gray-500 font-black text-[20px]'>Elsa Doe</h2>
                    <p>CEO & FOUNDER INVISION</p>
                    <Image
                        className=' inline-block py-2'
                        src="/queto.webp"
                        width={30}
                        height={30}
                        alt='quotes'
                    />
                    <p className='max-w-[200px] text-gray-500'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia optio error laborum nulla fugit reprehenderit totam laboriosam repudiandae ab, veritatis asperiores enim nemo quisquam saepe assumenda. Quas omnis tempora dolores.

                    </p>
                    </div>

                </div>
                <div className='bg-red-600 bg-[url(/clothesqu.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                <div className='bg-[#ff91f0ab] min-w-[270px] sm:min-w-[500px]'>
                    <button className='bg-blackish text-white p-2 rounded-md'>
                       25% DISCOUNT
                    </button>
                      <h2 className='font-extrabold text-2xl text-[#272727]'>
                        Summer Collection
                      </h2>
                      <p className='text-gray-500 text-[20px]'>
                       Starting @ $20 <b>Shop Now</b>
                      </p>
                </div>

                </div>
            </div>
        </div>
        </div>
  )
}

export default Testimonial