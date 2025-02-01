import React from 'react'
import Image from 'next/image'

const ProductCard = (img, title, desc, rating, price) => {
    return (
        <div className='px-4 border border-gray-200 rounded-xl max-w-[400px]'>
            <div className=''>
                <Image className=" w-full h-auto"
                src={img}
                width={200}
                heigt={300}
                alt={title}
                 />
            </div>
        </div>
    )
}

export default ProductCard