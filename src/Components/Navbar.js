


"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/category", label: "CATEGORIES" },
    { href: "/mens", label: "MEN'S" },
    { href: "/jewelry", label: "JEWELRY" },
    { href: "/perfume", label: "PERFUME" },
    { href: "/blogs", label: "BLOGS" },
    { href: "/hotoffer", label: "HOT OFFERS" },
  ]

  return (
    <nav className="relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Mobile menu button */}
          <button className="lg:hidden text-blackish focus:outline-none" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex w-fit gap-10 mx-auto font-medium text-blackish">
            {navLinks.map((link) => (
              <Link key={link.href} className="navbar__link relative" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-10">
            <div className="flex flex-col items-center py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="navbar__link relative py-2"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

