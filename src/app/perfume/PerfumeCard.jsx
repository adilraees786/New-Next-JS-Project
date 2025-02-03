

import React from 'react';

const PerfumeCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-400">{"★".repeat(rating)}</span>
          <span className="text-gray-400">{"★".repeat(5 - rating)}</span>
        </div>
        <p className="text-lg font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default PerfumeCard;