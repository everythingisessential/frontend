"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 z-50 text-black bg-white">
      <div className="max-w-7xl lg:max-w-[70%] mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center h-12 text-xl ">
            <div className="flex items-center space-x-16 ">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    <img src="/logo.jpg" alt="Logo" className="h-12 md:h-16 w-auto" />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-12">
                    <Link href="/" className="hover:text-teal-400 transition">Home</Link>
                    <Link href="/about" className="hover:text-teal-400 transition">About Us</Link>
                    <Link href="/products" className="hover:text-teal-400 transition">Products</Link>
                </div>
            </div>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-8 md:items-center">
            <a
              href="https://wa.me/918384844735"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 text-xl"
            >
              {/* <FaWhatsapp /> */} 
              <Image src="/whatsapp-logo.webp" alt="Whatsapp" width={55} height={55} />
            </a>
            <a
              href="https://instagram.com/everythingisessential_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 text-xl"
            >
              {/* <FaInstagram /> */}
              <Image src="/insta-icon.png" alt="Instagram" width={40} height={40} />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <div className="space-y-1">
                <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 w-6 bg-black ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block hover:text-teal-400">Home</Link>
            <Link href="/about" className="block hover:text-teal-400">About Us</Link>
            <Link href="/products" className="block hover:text-teal-400">Products</Link>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 text-xl"
              >
                {/* <FaWhatsapp /> */} Whatsapp
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 text-xl"
              >
                {/* <FaInstagram /> */} Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
