import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/Musical/mac8.jpeg",
      title: "rabab",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "Musical Instruments Clipart-violin musical instrument clipart ",
      rating: 4,
      price: "100"
    },
    {
        img: "/Musical/mic1.jpeg",
        title: "doll",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "sony ",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac2.jpeg",
        title: "rabab",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Musical Instruments Clipart-violin musical instrument clipart ",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac3.jpeg",
        title: "getar",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Is best for culture Functions ",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac1.jpeg",
        title: "harmonym",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "sony ",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac5.jpeg",
        title: "Accordion",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Accordions are a family of box-shaped musical instruments",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac6.jpeg",
        title: "sitar",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "The sitar is a plucked stringed instrument, ",
        rating: 4,
        price: "100"
      },
      {
        img: "/Musical/mac7.jpeg",
        title: "organ",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "In music, the organ is a keyboard instrument of one or more pipe ",
        rating: 4,
        price: "100"
      },
  
];

const Musical: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
       Musical Instruments
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

export default Musical;
