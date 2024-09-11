import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  return (
    <div className='hidden lg:block'>
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="/Mainpage">Home</Link>
          <Link className="navbar_link relative" href="/Categories">CATEGORIES</Link>
          {/* <Link className="navbar_link relative" href="#">WOMEN'S</Link> */}
          <Link className="navbar_link relative" href="/Jewelry">JEWELRY</Link>
          <Link className="navbar_link relative" href="/Perfume">PERFUME</Link>
          {/* <Link className="navbar_link relative" href="#">BLOG</Link> */}
          <Link className="navbar_link relative" href="/HotOffers">HOT OFFERS</Link>
        </div>
      </div>
    </div>

  )
}

export default NavBar