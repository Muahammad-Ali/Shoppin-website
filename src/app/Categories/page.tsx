import React from 'react';
import Link from 'next/link';

const Categories: React.FC = () => {
    return (
        <div className="pl-12 pt-6">
            <div className="grid grid-cols-2 gap-2 gap-x-1 sm:grid-cols-4 md:grid-cols-4">
                <Link href='Computers&laptops'>
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Computers and laptops
                    </button>
                </Link>
                <Link href="MobilesandTablets">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Mobiles & Tablets
                    </button>
                </Link>
                <Link href="Cameras">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Cameras & Accessories
                    </button>
                </Link>
                <Link href="TvandScreens">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        TV & Video
                    </button>
                </Link>
                <Link href="musicalInstruments">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Musical Instruments
                    </button>
                </Link>
                <Link href="BookandStationary">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Books & Stationery
                    </button>
                </Link>
                <Link href="Gaming">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Gaming
                    </button>
                </Link>
                <Link href="BabyToy">
                    <button className="px-4 py-3 text-white bg-[#ff8f9c] rounded shadow-md transform hover:bg-[#ff6f72] hover:shadow-lg hover:-translate-y-1 hover:scale-105 transition-transform duration-300 ease-in-out" type="button">
                        Baby & Toys
                    </button>
                </Link>
            </div>
        </div>

    );
};

export default Categories;
