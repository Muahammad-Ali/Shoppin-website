import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/mobileandtablets/iphonepic1.jpg",
      title: "iphone 14",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Apple iPhone 14 Series to Relaunch in Yellow ",
      rating: 4,
      price: "100"
    },
    {
        img: "/mobileandtablets/iphone2.webp",
        title: "iPhone 11 (PTA Approved)",
        mainTitle: "iPhone 11, Powerful, efficient and attractive,",
        desc: "iPhone 11, Powerful, efficient and attractive,",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/ip3.jpeg",
        title: "Vivo V23",
        mainTitle: "iPhone 11, Powerful, efficient and attractive,",
        desc: "Vivo V23 Mobile 12GB RAM, 256GB Storage – Easy Installments ",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/viv2.webp",
        title: "Vivo Y73",
        mainTitle: "iPhone 11, Powerful, efficient and attractive,",
        desc: "Vivo Y73",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/iphone4.jpeg",
        title: "Apple iphone 8 Plus 64GB Warranty Mobile",
        mainTitle: "Apple iphone 8 Plus 64GB Warranty Mobile",
        desc: "iphone 8 best ",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/iphone11.jpg",
        title: "iPhone 11 | 128GB Storage | 4GB RAM | Apple A13 Bionic | 3110 mAh Battery",
        mainTitle: "iPhone 11 | 128GB Storage | 4GB RAM | Apple A13 Bionic | 3110 mAh BatteryApple iphone 8 Plus 64GB Warranty Mobile",
        desc: "iphone 11 best ",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/iphonex.jpeg",
        title: "Apple iPhone X",
        mainTitle: "Apple iPhone X",
        desc: "iphone x best ",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/tab1.jpeg",
        title: "Tablet",
        mainTitle: "Tablet",
        desc: "Tablet 10.1 inch Android 12 Tablet 2024",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/tab2.jpeg",
        title: "Sumsung Tablet",
        mainTitle: "Tablet",
        desc: "Tablet 10.1 inch Android 12 Tablet 2024",
        rating: 4,
        price: "50"
      },
      {
        img: "/mobileandtablets/tab3.png",
        title: "Android Tablets",
        mainTitle: "Tablet",
        desc: "Tablet 10.1 inch Android 12 Tablet 2024",
        rating: 4,
        price: "50"
      },
];

const Mobiles: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
         Mobiles And Tablets
        </h1>
    
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

export default Mobiles;
