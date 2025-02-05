



const CategoriesData = [
  {
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Electronics",
    items: "25 items"
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Fashion",
    items: "48 items"
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Accessories",
    items: "32 items"
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Home Appliances",
    items: "15 items"
  },
  {
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Beauty Products",
    items: "28 items"
  },
  {
    img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Sports Gear",
    items: "19 items"
  },
  {
    img: "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Furniture",
    items: "12 items"
  },
  {
    img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Books",
    items: "56 items"
  }
];

const CategoryCard = ({ img, title, items }) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform relative group'>
      <div className='relative h-48 w-full overflow-hidden rounded-lg'>
      <img src={img} alt={title} className='w-full h-48 object-cover rounded-lg'/>
      </div>
      <div className='mt-4 text-center'>
        <h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
        <p className='text-gray-500 mt-2'>{items}</p>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <h2 className='text-3xl font-bold text-gray-900 mb-12 text-center'>Shop by Categories</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {CategoriesData.map((category, index) => (
          <CategoryCard 
            key={index}
            img={category.img}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
