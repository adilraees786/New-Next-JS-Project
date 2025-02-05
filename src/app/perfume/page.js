

import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumeData = [
  {
    img: "data:image/jpeg;base64,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",
    title: "Dior Sauvage",
    desc: "Fresh and spicy fragrance for men.",
    rating: 5,
    price: "120.00"
  },
  {
    img: "https://images.unsplash.com/photo-1610113909978-b7933cc94040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhbmVsJTIwbm8uNXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Chanel No. 5",
    desc: "Classic floral fragrance for women.",
    rating: 5,
    price: "150.00"
  },
  {
    img: "https://images.pexels.com/photos/30181058/pexels-photo-30181058/free-photo-of-sleek-bottle-of-tom-ford-ombre-leather-perfume.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Tom Ford Black Orchid",
    desc: "Luxurious and sensual fragrance.",
    rating: 4,
    price: "135.00"
  },
  {
    img: "https://www.jomalone.eu/media/export/cms/products/1000x1000/jo_sku_L3AF01_1000x1000_0.png",
    title: "Jo Malone Peony & Blush Suede",
    desc: "Delicate floral scent with a hint of suede.",
    rating: 4,
    price: "110.00"
  },
  {
    img: "https://www.shutterstock.com/shutterstock/photos/2492509127/display_1500/stock-photo-yalova-turkey-yves-saint-laurent-electrique-perfume-yves-saint-laurent-electrique-2492509127.jpg",
    title: "Yves Saint Laurent Libre",
    desc: "Bold and floral fragrance for women.",
    rating: 5,
    price: "140.00"
  },
  {
    img: "https://www.shutterstock.com/shutterstock/photos/1299643087/display_1500/stock-photo-winneconne-wi-january-a-bottle-of-creed-aventus-cologne-on-an-isolated-background-1299643087.jpg",
    title: "Creed Aventus",
    desc: "Rich and fruity scent for men.",
    rating: 5,
    price: "250.00"
  },
  {
    img: "https://media.gucci.com/content/BestOfEditsFeatured_Standard_432x364/1615383903/BestOfEditsFeatured_Bloom-Eau-de-Parfum-packaging_001_Default.jpg",
    title: "Gucci Bloom",
    desc: "Floral fragrance with a fresh twist.",
    rating: 4,
    price: "130.00"
  },
  {
    img: "https://www.shutterstock.com/shutterstock/photos/2137027385/display_1500/stock-photo-portland-oregon-usa-september-acqua-di-gio-armani-men-perfume-illustrative-editorial-2137027385.jpg",
    title: "Armani Acqua di Gio",
    desc: "Refreshing aquatic scent for men.",
    rating: 5,
    price: "100.00"
  }
];

const Perfumes = () => {
  return (
    <div className='container pt-16 '>
      <h2 className='font-medium text-2xl pb-4'>Latest Perfumes</h2>
      <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 '>
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
