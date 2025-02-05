"use client";

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';




const Hero = () => {
     var setting ={
        dots: true,
        Infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
     };

     const slideData =[
        {
            id:1,
            img:"/banner-1.jpg",
            title: "Trading Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price:"$20"

        },
        {
            id:2,
            img:"/banner-2.jpg",
            title: "Trading Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price:"$15"

        },
        {
            id:3,
            img:"/banner-3.jpg",
            title: "SALE OFFER",
            mainTitle: "NEW FASHION SUMMER SALE",
            price:"$30"

        },
     ]

  return (
    <div>
        <div className=' container pt-6 lg:pt-0 '>
            <Slider {...setting}>
                {slideData.map((item) => (
                <Slide 
                key={item.id}
                img={item.img}
                title={item.title}
                mainTitle={item.mainTitle}
                price={item.price}
                />
                 ))}

            </Slider>

        </div>

    </div>
  )
}

export default Hero;