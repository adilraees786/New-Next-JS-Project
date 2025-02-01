import React from 'react'

 const Productdata=[
    {
        img: "/jacket.jpg",
        title: "JACKET",
        desc:"MEN Yarn Fleece Full-Zip Jacket",
        rating: 5,
        price: "58.00"

    },
    {
        img: "/skirt-1.jpg",
        title: "SKIRT",
        desc:"Black Floral Wrap Midi Skirt",
        rating: 4,
        price: "80.00"

    },
    {
        img: "/party-wear-1.jpg",
        title: "Party Wear",
        desc:"Women's Party Wear Shoes",
        rating: 3,
        price: "28.00"

    },
    {
        img: "/shirt-1.jpg",
        title: "SHIRT",
        desc:"Pure Garment Dyed Cotton Shirt",
        rating: 4,
        price: "55.00"

    },
    {
        img: "/sports-1.jpg",
        title: "SPORTS",
        desc:"Trekking & Running Shoes - Black",
        rating: 4,
        price: "68.00"

    },
    {
        img: "/watch-1.jpg",
        title: "Watches",
        desc:"Sports Watches Vital Plus",
        rating: 4,
        price: "100.00"

    },
    {
        img: "/watch-2.jpg",
        title: "Watches",
        desc:"Pocket Watch Leather Pouch",
        rating: 4,
        price: "145.00"

    }
   
 ];


const Products = () => {
  return (
    <div>
       <div className=' container pt-16'>
        <h2 className=' font-medium text-2xl pb-4'>New Products</h2>
        </div> 
    </div>
  )
}

export default Products