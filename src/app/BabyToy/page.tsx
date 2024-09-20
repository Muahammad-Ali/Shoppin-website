import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/BabyToys/Toy1.jpeg",
      title: "Baby Toy",
      mainTitle: "Baby Toys Balloon Powered Car Children's Science Toy",
      desc: "Baby Toys Balloon Powered Car Children's Science Toy ",
      rating: 4,
      price: "100"
    },
    {
        img: "/BabyToys/Toy2.jpeg",
        title: "sony",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "sony ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BabyToys/Toy3.jpeg",
        title: "sony",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "sony ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BabyToys/Toy4.jpeg",
        title: "sony",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "sony ",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam6.jpeg",
        title: "canon e05",
        mainTitle: "The 6 Best Cameras For Low Light - Summer 2024  ",
        desc: "The 6 Best Cameras For Low Light - Summer 2024  ",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam7.jpeg",
        title: "4k ultra",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Digital Camera, 4K Video NBD Cameras for Photography for YouTube with WiFi, 3.0",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam8.jpeg",
        title: "fujifilm",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "3k ultra",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam9.jpeg",
        title: "canon",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "5k ultra ",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam11.jpeg",
        title: "security camera",
        mainTitle: "TAPO Cameras",
        desc: "TAPO Cameras",
        rating: 4,
        price: "100"
      },
      {
        img: "/cameras/cam13.jpeg",
        title: "security",
        mainTitle: "SAMSUNG: Surveillance Camera Color, Monochrome - 3.6x Optical -SCO2080R",
        desc: "SAMSUNG: Surveillance Camera Color, Monochrome - 3.6x Optical -SCO2080R ",
        rating: 4,
        price: "100"
      },
];

const BabyToy: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
      Baby And Toys
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

export default BabyToy;
