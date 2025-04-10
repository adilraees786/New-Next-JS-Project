

import React from 'react';

const JewelryCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform'>
      <img className='w-full h-48 object-cover' src={img} alt={title} />
      <div className='p-4'>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <p className='text-gray-600 text-sm'>{desc}</p>
        <div className='flex items-center mt-2'>
          {Array(rating).fill().map((_, i) => (
            <svg key={i} className='w-4 h-4 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
            </svg>
          ))}
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

export default JewelryCard;