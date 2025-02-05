
import { Star } from "lucide-react"

const MensProductData = [
  {
    img: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    title: "Classic Denim Jacket",
    desc: "Timeless style for any casual outfit.",
    rating: 5,
    price: "89.99",
  },
  {
    img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    title: "Slim Fit Chinos",
    desc: "Comfortable and stylish for work or play.",
    rating: 4,
    price: "59.99",
  },
  {
    img: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    title: "Leather Oxford Shoes",
    desc: "Classic footwear for the modern gentleman.",
    rating: 5,
    price: "129.99",
  },
  {
    img: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    title: "Casual Linen Shirt",
    desc: "Perfect for a relaxed summer look.",
    rating: 4,
    price: "49.99",
  },
  {
    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    title: "Tailored Suit",
    desc: "Sharp and sophisticated for formal occasions.",
    rating: 5,
    price: "299.99",
  },
  {
    img: "https://images.unsplash.com/photo-1550246140-29f40b909e5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    title: "Leather Watch",
    desc: "Timeless accessory for every outfit.",
    rating: 4,
    price: "179.99",
  },
  {
    img: "https://images.unsplash.com/photo-1515664069236-68a74c369d97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    title: "Wool Overcoat",
    desc: "Stay warm and stylish in colder weather.",
    rating: 5,
    price: "199.99",
  },
  {
    img: "https://images.unsplash.com/photo-1434510423563-c7e99bbc5bbd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fHww",
    title: "Aviator Sunglasses",
    desc: "Classic style for sunny days.",
    rating: 4,
    price: "89.99",
  },
]

const MensProductCard = ({ img, title, desc, rating, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform">
      <div className="relative w-full h-48">
      <img src={img} alt={title} className='w-full h-48 object-cover rounded-lg'/>
      </div>
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-gray-500 text-sm mt-2">{desc}</p>
      <div className="flex items-center mt-2">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="text-yellow-400 w-4 h-4" />
          ))}
      </div>
      <div className="font-bold flex gap-4 text-lg text-green-600">
        ${price}
        <del className="text-gray-500 font-normal">${(Number.parseFloat(price) + 30).toFixed(2)}</del>
      </div>
    </div>
  )
}

const MensSection = () => {
  return (
    <div className="container mx-auto pt-16">
      <h2 className="font-medium text-2xl pb-4">Men's Fashion</h2>
      <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
        {MensProductData.map((item, index) => (
          <MensProductCard
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
  )
}

export default MensSection

