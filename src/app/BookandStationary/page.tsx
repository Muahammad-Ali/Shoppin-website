import ProductCard from '@/components/ProductCard';
import React from 'react';

const productData = [
    {
      img: "/BookAndStationary/State1.jpeg",
      title: "Book and Stationary",
      mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
      desc: "A tidy desk filled with colorful stationery and a stack of well-read books, ready for the next study session. ",
      rating: 4,
      price: "100"
    },
    {
        img: "/BookAndStationary/State2.jpeg",
        title: "Colorful notebooks",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Books neatly piled, pens and pencils scattered—everything an eager mind needs to fuel creativity and learning ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state3.jpeg",
        title: "Organized desk",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "An open notebook beside a collection of highlighters and pens, the perfect setup for note-taking or sketching ideas. ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state4.jpeg",
        title: "Paper and paperclips",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "A scholarly corner with crisp pages and neatly organized stationery, inviting you to dive into knowledge",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state5.jpeg",
        title: "Study essentials",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Musical Instruments Clipart-violin musical instrument clipart ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state6.jpeg",
        title: "Academic supplies",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Musical Instruments Clipart-violin musical instrument clipart ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state7.jpeg",
        title: "Crisp pages",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Musical Instruments Clipart-violin musical instrument clipart ",
        rating: 4,
        price: "100"
      },
      {
        img: "/BookAndStationary/state8.jpeg",
        title: "Writing tools",
        mainTitle: "Apple iPhone 14 Series to Relaunch in Yellow ",
        desc: "Musical Instruments Clipart-violin musical instrument clipart ",
        rating: 4,
        price: "100"
      },
  
];

const BookandStationary: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto pt-16 pb-8'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
       Book And Stationary
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

export default BookandStationary;
