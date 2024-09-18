import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/computerandleptop/lep1.jpeg",
      title: "hp leptop",
      mainTitle: "CORE i5 8 Generaction",
      desc: "CORE i5 8 Generaction",
      rating: 4,
      price: "23"
    },
    {
        img: "/computerandleptop/lep2.jpeg",
        title: "dell leptop",
        mainTitle: "CORE i7 8 Generaction",
        desc: "CORE i7 8 Generaction",
        rating: 4,
        price: "27"
      },
      {
        img: "/computerandleptop/lep3.jpeg",
        title: "mac leptop",
        mainTitle: "i9",
        desc: "i9",
        rating: 4,
        price: "35"
      },
      {
        img: "/computerandleptop/pic4.jpeg",
        title: "dell leptop",
        mainTitle: "CORE i7 8 Generaction",
        desc: "CORE i7 8 Generaction",
        rating: 4,
        price: "20"
      },
      {
        img: "/computerandleptop/pic5.jpeg",
        title: "dell leptop",
        mainTitle: "CORE i7 9 Generaction",
        desc: "CORE i7 9 Generaction",
        rating: 4,
        price: "25"
      },
      {
        img: "/computerandleptop/pic6.jpeg",
        title: "hp leptop",
        mainTitle: "CORE i5 8 Generaction",
        desc: "CORE i5 8 Generaction",
        rating: 4,
        price: "23"
      },
      {
        img: "/computerandleptop/pic7.jpeg",
        title: "hp leptop",
        mainTitle: "CORE i5 8 Generaction",
        desc: "CORE i5 8 Generaction",
        rating: 4,
        price: "23"
      },
      {
        img: "/computerandleptop/comp1.jpeg",
        title: "Mac Computer",
        mainTitle: "CORE i5 8 Generaction",
        desc: "CORE i5 8 Generaction",
        rating: 4,
        price: "23"
      },
      {
        img: "/computerandleptop/comp2.jpeg",
        title: "mac computer",
        mainTitle: "CORE i5 8 Generaction",
        desc: "CORE i5 8 Generaction",
        rating: 4,
        price: "23"
      },
      {
        img: "/computerandleptop/comp4.jpeg",
        title: "dell leptop",
        mainTitle: "CORE i5 8 Generaction",
        desc: "CORE i5 8 Generaction",
        rating: 4,
        price: "23"
      },
];

const Computers: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
          Computers and Laptops
        </h1>
        <h2 className='font-semibold text-xl sm:text-2xl pb-4 text-gray-700'>
          New Products
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Computers;
