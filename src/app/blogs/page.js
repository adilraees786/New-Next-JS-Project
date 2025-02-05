// import React from 'react'

// const Blogs = () => {
//   return (
//     <div>Blogs</div>
//   )
// }

// export default Blogs
import React from 'react';

const blogsData = [
  {
    img: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d",
    title: "Exploring the Mountains",
    desc: "A thrilling adventure through the rocky terrains and breathtaking views.",
    author: "John Doe",
    date: "February 1, 2025"
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    title: "City Lights and Night Life",
    desc: "Discover the vibrant life and hidden gems in the heart of the city.",
    author: "Jane Smith",
    date: "January 28, 2025"
  },
  {
    img: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    title: "The Serenity of Nature",
    desc: "Find peace and tranquility amidst lush greenery and flowing rivers.",
    author: "Alice Johnson",
    date: "January 15, 2025"
  },
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
    title: "Culinary Journeys",
    desc: "Embark on a gastronomic adventure exploring diverse flavors and cuisines.",
    author: "Mark Wilson",
    date: "January 10, 2025"
  },
  {
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    title: "Tech Innovations",
    desc: "Stay updated with the latest trends and breakthroughs in technology.",
    author: "Emma Davis",
    date: "December 30, 2024"
  }
];

const BlogCard = ({ img, title, desc, author, date }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm 
  hover:scale-105 transition-transform">
    <img className="w-full h-48 object-cover" src={img} alt={title} />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{desc}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {blogsData.map((blog, index) => (
          <BlogCard 
            key={index} 
            img={blog.img} 
            title={blog.title} 
            desc={blog.desc} 
            author={blog.author} 
            date={blog.date} 
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
