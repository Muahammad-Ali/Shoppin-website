import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-pink-500  text-center py-4 pb-16 md:pb-4'>
      Copyright @ Logo <br /> All Rights Reserved 2024
      <div className="hidden lg:flex gap-4 justify-center mb-7">
        <div className="header_top_icon_wrapper hover:scale-110 transition-transform duration-300">
          <BsFacebook />
        </div>
        <div className="header_top_icon_wrapper hover:scale-110 transition-transform duration-300">
          <BsTwitter />
        </div>
        <div className="header_top_icon_wrapper hover:scale-110 transition-transform duration-300">
          <BsInstagram />
        </div>
        <div className="header_top_icon_wrapper hover:scale-110 transition-transform duration-300">
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
