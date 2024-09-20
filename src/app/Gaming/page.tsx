import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/Gaming/g1.jpeg",
      title: "Gaming",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "",
      rating: 4,
      price: "100"
    },
    {
      img: "/Gaming/g2.jpeg",
      title: "Game zone",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "",
      rating: 4,
      price: "100"
    },
    {
      img: "/Gaming/g3.jpeg",
      title: "Lets play games",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "",
      rating: 4,
      price: "100"
    },
    {
      img: "/Gaming/g4.jpeg",
      title: "Game controller",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "",
      rating: 4,
      price: "100"
    },
    {
      img: "/Gaming/g5.jpeg",
      title: "Game equipments",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "",
      rating: 4,
      price: "100"
    },
      
];

const Gaming: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
       Gaming 
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

export default Gaming;
