

import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumeData = [
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dior.com%2Fen_gr%2Fbeauty%2Fproducts%2Fsauvage-parfum-Y0998004.html&psig=AOvVaw3pksSnb-PkIEp_J1VjDGHA&ust=1738667328171000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjLptiup4sDFQAAAAAdAAAAABAZ",
    title: "Dior Sauvage",
    desc: "Fresh and spicy fragrance for men.",
    rating: 5,
    price: "120.00"
  },
  {
    img: "https://example.com/perfume2.jpg",
    title: "Chanel No. 5",
    desc: "Classic floral fragrance for women.",
    rating: 5,
    price: "150.00"
  },
  {
    img: "https://example.com/perfume3.jpg",
    title: "Tom Ford Black Orchid",
    desc: "Luxurious and sensual fragrance.",
    rating: 4,
    price: "135.00"
  },
  {
    img: "https://example.com/perfume4.jpg",
    title: "Jo Malone Peony & Blush Suede",
    desc: "Delicate floral scent with a hint of suede.",
    rating: 4,
    price: "110.00"
  },
  {
    img: "https://example.com/perfume5.jpg",
    title: "Yves Saint Laurent Libre",
    desc: "Bold and floral fragrance for women.",
    rating: 5,
    price: "140.00"
  },
  {
    img: "https://example.com/perfume6.jpg",
    title: "Creed Aventus",
    desc: "Rich and fruity scent for men.",
    rating: 5,
    price: "250.00"
  },
  {
    img: "https://example.com/perfume7.jpg",
    title: "Gucci Bloom",
    desc: "Floral fragrance with a fresh twist.",
    rating: 4,
    price: "130.00"
  },
  {
    img: "https://example.com/perfume8.jpg",
    title: "Armani Acqua di Gio",
    desc: "Refreshing aquatic scent for men.",
    rating: 5,
    price: "100.00"
  }
];

const Perfumes = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-medium text-2xl pb-4'>Latest Perfumes</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {PerfumeData.map((item, index) => (
          <PerfumeCard 
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

export default Perfumes;
