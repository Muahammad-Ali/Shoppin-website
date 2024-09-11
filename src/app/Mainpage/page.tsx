import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";
import Footer from "@/components/Footer";
import FlashSale from "@/components/FlashSale";


export default function Home() {
  var settings = {
    dots:true,
    infinite:true,
    slidesToScroll:1,
    autoplay:true,
    pauseOnHover:false,
  };
  const slideData = [
    {
      id:0,
      img:"",
      title:"Trending Items",
      mainTitle:"WOMEN'S LATEST FASHION SALE",
      price:"$20"
    },
    {
      id:1,
      img:"",
      title:"Trending Items",
      mainTitle:"WOMEN'S LATEST FASHION SALE",
      price:"$25"
    },
    {
      id:2,
      img:"",
      title:"Trending Items",
      mainTitle:"WOMEN'S LATEST FASHION SALE",
      price:"$30"
    },
  ]
  return (
        <main>
          <Hero/>
          <FlashSale/>
          <NewProducts/>
          {/* <Testimonial/> */}
          <Footer/>
          
        </main>
  )
}
