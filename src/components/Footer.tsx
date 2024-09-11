import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-gray-400    text-center py-4  pb-16 md:pb-4'>Copyright @ Logo <br />All Right Reserved 2024
      <div className="hidden lg:flex gap-1 ml-4 mb-7 ">
        <div className="header_top_icon_wrapper">
          <BsFacebook />
        </div>
        <div className="header_top_icon_wrapper">
          <BsTwitter />
        </div>
        <div className="header_top_icon_wrapper">
          <BsInstagram />
        </div>
        <div className="header_top_icon_wrapper">
          <BsLinkedin />
        </div>
      </div>
      </div>

      )
}

      export default Footer