import React from 'react'
import ProductCard from './ProductCard';


 const Productdata=[
    {
        img: "/jacket-1.jpg",
        title: "JACKET",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 4,
        price: "58.00",
      

    },
    {
      img:"/skirt-1.jpg",
        title: "SKIRT",
        desc:"Black Floral Wrap Midi Skirt",
        rating: 5,
        price: "80.00",
       

    },
    {
        img: "/party-Wear-1.jpg",
        title: "Party Wear",
        desc:"Women's Party Wear Shoes",
        rating: 3,
        price: "28.00",
       

    },
    {
        img:"/shirt-1.jpg",
        title: "SHIRT",
        desc:"Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "55.00",
      

    },
    {
        img: "/sports-1.jpg",
        title: "SPORTS",
        desc:"Trekking & Running Shoes - Black",
        rating: 4,
        price: "68.00",
      

    },
    {
        img: "/watch-1.jpg",
        title: "Watches",
        desc:"Sports Watches Vital Plus",
        rating: 4,
        price: "100.00",
       

    },
    {
        img: "/watch-2.jpg",
        title: "Watches",
        desc:"Pocket Watch Leather Pouch",
        rating: 4,
        price: "145.00",
       

    }
   
 ];


const Products = () => {
  return (
    <div>
       <div className=' container pt-16'>
        <h2 className=' font-medium text-2xl pb-4'>New Products</h2>
        <div className=' grid grid-cols-1 place-items-center sm:place-items-start
        sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10
        xl:gap-x-20 xl:gap-y-10 '>
            {Productdata.map((item, index) => (
                <ProductCard key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
               
            
                />
        ))}

        </div>
        </div> 
    </div>
  )
}

export default Products