import React from 'react';
import ProductCard from "./ProductCard";

const productData = [
    {
        img: "/flashitem1.jpg",
        title: "Sabon",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "5"
    },
    {
        img: "/flashitem3.jpeg",
        title: "Face cream",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "8"
    },
    {
        img: "/flashitem4.webp",
        title: "Mobile Phone",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "20"
    },
    {
        img: "/flashitem5.jpeg",
        title: "Baby toys",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "20"
    },
    {
        img: "/flashitem6.jpeg",
        title: "Chicken Masala",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "5"
    },
    {
        img: "/flashitem8.jpeg",
        title: "Mobile charger",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "8"
    },
    {
        img: "/item9.jpeg",
        title: "I mac",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "100"
    },
    {
        img: "/item10.jpeg",
        title: "head phone",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "20"
    },
    {
        img: "/flashitem11.jpeg",
        title: "tissue paper",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "3"
    },
    {
        img: "/flashitem12.jpeg",
        title: "tissue paper painting",
        mainTitle: "Women YARN FLEECE",
        desc: "For Sale ",
        rating: 4,
        price: "5"
    },
];

const Categories: React.FC = () => {
    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl pb-4'>Flash Sale</h2>
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
    );
};

export default Categories;
