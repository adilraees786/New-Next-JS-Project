

import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const generateRating = (rating) => {
    return (
        <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            {Array(5).fill(0).map((_, index) => (
                index < rating ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />
            ))}
        </div>
    );
};


const PerfumeCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="flex items-center mt-2">
            <div>{generateRating(rating)}</div>
        </div>
        <div className='font-bold flex gap-4 text-lg text-green-600'>
                    ${price} 
                    <del className='text-gray-500 font-normal'>
                        ${parseInt(price) + 50}.00
                    </del>
                </div>
      </div>
    </div>
  );
};

export default PerfumeCard;