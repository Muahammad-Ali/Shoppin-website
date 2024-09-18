import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/Tvandscreens/scr1.jpeg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Pyle 15.6 Inch 1080p LED RV Television - Slim Flat Screen Monitor FHD Small TV ",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/scr2.jpeg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "WiFi Smart Flat Screen Cheap Small Size 19 Inch LED TV Smart with USB Play Video ",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/scr3.jpeg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Small Size Color  21 Inches Flat Screen TV",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/scr4.jpeg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Wholesale Small Size Flat Screen Television 19inch 22 Inch 24 Inch Led Lcd Tv ",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/src5.jpg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Oem 24 Inch Led Lcd Tv Flat Screen Small Size Television Digital Tv 17 19 20 22 ",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/src6.webp",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "China Customized Hot Selling Cheapest Television Flat Screen Small Size 21.5",
      rating: 4,
      price: "100"
    },
    {
      img: "/Tvandscreens/src7.jpeg",
      title: "Screens",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Unpack your new flat screen TV ",
      rating: 4,
      price: "100"
    }
];

const TvandScreens: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
      Tv And Screens
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

export default TvandScreens;
