
import Link from 'next/link';
import React from 'react'



const Navbar = () => {
  return (
    <div className=' hidden lg:block '>
      <div className=' container'>
        <div className='flex  w-fit gap-10 mx-auto font-medium py-4 text-blackish'>
<Link className=" navbar__link relative" 
href="/">
  Home
  </Link>
<Link className=" navbar__link relative" 
href="/category">
  CATEGORIES
  </Link>
<Link className=" navbar__link relative" 
href="/mens">
  MEN'S
  </Link>
<Link className=" navbar__link relative" 
href="/jewelry">
  JEWELRY
  </Link>
<Link className=" navbar__link relative" 
href="/perfume">
  PERFUME
  </Link>
<Link className=" navbar__link relative" 
href="/blogs">
  BLOGS
  </Link>
<Link className=" navbar__link relative" 
href="/hotoffer">
  HOT OFFERS
  </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;