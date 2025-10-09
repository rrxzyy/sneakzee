import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import axios from 'axios'

function Navbar() {
  const [cartCount, setcartCount] = useState(0);
  const [wishlistCount, setwishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const updatedCounts = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setcartCount(totalCartItems);
    setwishlistCount(wishlist.length);
  }

  useEffect(() => {
    updatedCounts();

    const handleCartUpdated = () => updatedCounts();
    const handleWishlistUpdated = () => updatedCounts();

    window.addEventListener('cartUpdated', handleCartUpdated);
    window.addEventListener('WishlistUpdated', handleWishlistUpdated);

    const onStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'wishlist') {
        updatedCounts();
      }
    };
    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated);
      window.removeEventListener('WishlistUpdated', handleWishlistUpdated);
      window.removeEventListener('storage', onStorageChange);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full fixed top-0 bg-white shadow-sm z-50">
      <nav className="flex flex-wrap items-center justify-between px-10 py-5 w-full">
        <button className="lg:hidden text-gray-800" onClick={toggleMobileMenu}>
          <i className="bi bi-list text-2xl text-gray-800"></i>
        </button>

        <Link to='/' className="lg:hidden flex mx-auto order-0">
          <h2 className="text-3xl text-orange-500 font-bold font-bricolage">Sneakzee</h2>
        </Link>

        <ul className='lg:hidden flex items-center gap-4'>
          {/* Wishlist */}
          <li className='relative'>
            <Link to='/wishlist'>
              <i className="bi bi-heart text-lg text-black"></i>
              <span className="absolute -top-2 -right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center">{wishlistCount}
              </span>
            </Link >
          </li>
          {/* Cart */}
          <li className='relative'>
            <Link to='/cart'>
              <i className="bi bi-bag text-lg text-black"></i>
              <span className="absolute -top-2 -right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center">{cartCount}
              </span>
            </Link >
          </li>
        </ul>

        <div className={`w-full lg:flex md:py-1 py-5 justify-between items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row items-center gap-5">
            <li>
              <Link to='/' className="font-semibold relative nav-link py-2">Home</Link>
            </li>
            <li>
              <Link to='/about' className="font-semibold relative nav-link py-2">About</Link>
            </li>
            <li>
              <Link to='/shop' className="font-semibold relative nav-link py-2">Shop</Link>
            </li>
            <li>
              <Link to='/blog' className="font-semibold relative nav-link py-2">Blog</Link>
            </li>
            <li>
              <Link to='/contact' className="font-semibold relative nav-link py-2">Contact</Link>
            </li>
          </ul>

          <Link to='' className="hidden lg:flex">
            <h2 className="text-4xl font-extrabold text-orange-500 font-bricolage">Sneakzee</h2>
          </Link>

          <ul className='hidden lg:flex items-center gap-4'>
            {/* Wishlist */}
            <li className='relative'>
              <Link to='/wishlist'>
                <i className="bi bi-heart text-2xl text-black"></i>
                <span className="absolute -top-1 -right-2.5 w-[20px] h-[20px] text-xs bg-black text-white rounded-full flex text-[10px] items-center justify-center">{wishlistCount}
                </span>
              </Link >
            </li>
            {/* Cart */}
            <li className='relative'>
              <Link to='/cart'>
                <i className="bi bi-bag text-2xl text-black"></i>
                <span className="absolute -top-1 -right-2.5 w-[20px] h-[20px] text-xs bg-black text-white rounded-full flex text-[10px] items-center justify-center">{cartCount}
                </span>
              </Link >
            </li>
          </ul>

        </div>
      </nav >
    </div >
  )
}

export default Navbar