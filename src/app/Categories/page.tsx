import React from 'react';

const Categories: React.FC = () => {
    return (
        <div className="pl-12 pt-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4">
          <button className="px-2 py-2 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Computers and laptops
          </button>
          <button className="px-2 py-2 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Computers and laptops
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Mobiles & Tablets
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Cameras & Accessories
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            TV & Video
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Musical Instruments
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Books & Stationery
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Gaming
          </button>
      
          <button className="px-4 py-4 text-white bg-[#ff8f9c] rounded shadow-md hover:bg-[#ff6f72] hover:shadow-lg transition duration-300" type="button">
            Baby & Toys
          </button>
        </div>
      </div>
      
    );
};

export default Categories;
