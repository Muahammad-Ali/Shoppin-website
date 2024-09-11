import React from 'react'
import ProductCard from "./ProductCard"
  const productData = [
    {
      
      img:"/clothes.jpg",
      title:"Clothes",
      mainTitle:"Women YARN FLEECE",
      desc:"For Sale ",
      rating:4,
      price:"20"
    },
    // {
      
    //     img:"chapel1.jpg",
    //     title:"chapel",
    //     mainTitle:"women chapel FLEECE",
    //     desc:"Carzy" ,
    //     rating:4,
    //     price:"$4"
    //   },
      {
      
        img:"/chapel2.jpg",
        title:"shoes",
        mainTitle:"women YARN FLEECE",
        desc:"Beatiful ",
        rating:4,
        price:"15"
      },
      {
      
        img:"/images.jpg",
        title:"Watch",
        mainTitle:"MAN watch FLEECE",
        desc:"Pretty ",
        rating:4,
        price:"15"
      },
      {
      
        img:"/shoes1.jpg",
        title:"Men Shoes",
        mainTitle:"MAN Shoes FLEECE",
        desc:"Good ",
        rating:4,
        price:"10"
      },
      {
      
        img:"/watch2.avif",
        title:"Party Wear",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"20"
      },
      {
      
        img:"/img1.jpg",
        title:"Party Wear",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"20"
      },
      {
      
        img:"/bag1.webp",
        title:"School bag",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"10"
      },
      {
      
        img:"/bag2.jpeg",
        title:"School Bag for Girls",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"8"
      },
      {
      
        img:"/bag3.webp",
        title:"School bag for men",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"12"
      },
      {
      
        img:"/bag5.jpeg",
        title:"school bag for child",
        mainTitle:"MAN YARN FLEECE",
        desc:"Abc ",
        rating:4,
        price:"5"
      },
  ];


const NewProducts = () => {
  return (
    <div>
    <div className='container pt-16 pb-8'>
        <h2 className='font-medium text-2xl pb-4'>New Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
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
  )
}

export default NewProducts