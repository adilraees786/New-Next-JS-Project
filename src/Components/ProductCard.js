import React from 'react'
import Image from 'next/image'
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

const ProductCard = ({ img, title, desc, rating, price }) => {
    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px] shadow-lg'>
            <div>
                <Image 
                    className="w-full h-auto rounded-lg"
                    src={img}
                    width={200}
                    height={300}  
                    alt={title} 
                />
            </div>
            <div className='space-y-2 py-2'>
                <h2 className='text-accent font-medium uppercase'>{title}</h2>
                <p className='text-gray-500 max-w-[150px]'>{desc}</p>
                <div>{generateRating(rating)}</div>
                <div className='font-bold flex gap-4 text-lg text-green-600'>
                    ${price} 
                    <del className='text-gray-400'>
                        ${parseInt(price) + 50}.00
                    </del>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
