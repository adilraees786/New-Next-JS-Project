// import React from 'react'

// const jewelry = () => {
//   return (
//     <div>Jewelry</div>
//   )
// }

// export default jewelry


import React from 'react';
import JewelryCard from './JewelryCard';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const JewelryData = [
  {
    img: "https://th.bing.com/th/id/OIP.Vu8-_ezFgNb0boxDbWqTWwHaHa?rs=1&pid=ImgDetMain",
    title: "Diamond Necklace",
    desc: "Elegant diamond necklace for special occasions.",
    rating: 5,
    price: "1200.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.pAjmO0hIA5hCJGzSYRMPlAHaHa?w=1280&h=1280&rs=1&pid=ImgDetMain",
    title: "Gold Bracelet",
    desc: "Classic gold bracelet for everyday wear.",
    rating: 4,
    price: "350.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.s3VSuUuBzMelK5URts7CAwHaFj?w=4096&h=3072&rs=1&pid=ImgDetMain",
    title: "Pearl Earrings",
    desc: "Timeless pearl earrings for a sophisticated look.",
    rating: 5,
    price: "250.00"
  },
  {
    img: "https://www.pngmart.com/files/4/Silver-Ring-PNG-HD.png",
    title: "Silver Ring",
    desc: "Minimalist silver ring for a modern touch.",
    rating: 4,
    price: "50.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.FslWnvRQj7cxmLznHivxDgHaHa?rs=1&pid=ImgDetMain",
    title: "Platinum Pendant",
    desc: "Luxurious platinum pendant for a statement look.",
    rating: 5,
    price: "800.00"
  },
  {
    img: "https://th.bing.com/th/id/OIP.gX8Wpl-4jsq-PZ5dwzbykgHaHV?w=1170&h=1159&rs=1&pid=ImgDetMain",
    title: "Rose Gold Watch",
    desc: "Stylish rose gold watch for a chic look.",
    rating: 4,
    price: "500.00"
  },
  {
    img: "https://th.bing.com/th/id/R.7fbeb23eafabb9539a775a4088f58c4d?rik=%2bFf6edpT%2bH7new&pid=ImgRaw&r=0",
    title: "Diamond Earrings",
    desc: "Sparkling diamond earrings for a glamorous look.",
    rating: 5,
    price: "600.00"
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

const Jewelry = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-medium text-2xl pb-4'>Latest Jewelry</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {JewelryData.map((item, index) => (
          <JewelryCard 
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
}

export default Jewelry;