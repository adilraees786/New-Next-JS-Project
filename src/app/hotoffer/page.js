import React from 'react';

import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const HotOfferData = [
  {
    img: "https://th.bing.com/th/id/OIP.oyKDwg0WbgcbnO9rc1ZpVgHaEK?rs=1&pid=ImgDetMain",
    title: "Apple iPhone 14 Pro",
    desc: "Experience the future with the new iPhone 14 Pro.",
    rating: 5,
    price: "999.00"
  },
  {
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60",
    title: "Samsung Galaxy S22",
    desc: "Next-level performance with Galaxy S22.",
    rating: 4,
    price: "899.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.XcnOa0Gdd3tEHd5noJz7JgAAAA?rs=1&pid=ImgDetMain",
    title: "Sony WH-1000XM4",
    desc: "Industry-leading noise canceling headphones.",
    rating: 5,
    price: "350.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.XKGHt1wg3NvyQsVg_CVV9AHaHa?rs=1&pid=ImgDetMain",
    title: "MacBook Pro 16\"",
    desc: "Powerful performance for professionals.",
    rating: 5,
    price: "2499.00"
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=500&auto=format&fit=crop&q=60",
    title: "GoPro HERO9",
    desc: "Capture stunning 5K videos with HERO9.",
    rating: 4,
    price: "399.00"
  },
  {
    img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60",
    title: "Canon EOS R5",
    desc: "Revolutionary mirrorless camera for photographers.",
    rating: 5,
    price: "3899.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.Lbs5n7SzjYBe90w57bTUZAHaEK?rs=1&pid=ImgDetMain",
    title: "Nintendo Switch OLED",
    desc: "Vivid gaming experience with OLED display.",
    rating: 4,
    price: "349.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.ZUgSuIKMqWEa81AhV43X2AHaFj?rs=1&pid=ImgDetMain",
    title: "Fitbit Versa 3",
    desc: "Smart fitness watch with built-in GPS.",
    rating: 4,
    price: "229.00"
  }
];

const generateRating = (rating) => {
    return (
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            {Array(5).fill(0).map((_, index) => (
                index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
            ))}
        </div>
    );
};

const HotOfferCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform'>
      <img src={img} alt={title} className='w-full h-48 object-cover rounded-lg'/>
      <h3 className='text-lg font-semibold mt-4'>{title}</h3>
      <p className='text-gray-500 text-sm mt-2'>{desc}</p>
      <div className='flex items-center mt-2'>
      <div>{generateRating(rating)}</div>
      </div>
      <div className='font-bold flex gap-4 text-lg text-green-600'>
                    ${price} 
                    <del className='text-gray-500 font-normal'>
                        ${parseInt(price) + 150}.00
                    </del>
                </div>
    </div>
  );
};

const HotOffers = () => {
  return (
    <div className='container mx-auto pt-16'>
      <h2 className='font-medium text-2xl pb-4'>Hot Offers</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
       lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {HotOfferData.map((item, index) => (
          <HotOfferCard 
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
  );
};
export default HotOffers;
