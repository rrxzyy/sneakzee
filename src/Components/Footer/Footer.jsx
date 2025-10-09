import React from 'react'
import { Link } from 'react-router-dom'

import payment1 from '../../assets/payment-1.svg';
import payment2 from '../../assets/payment-2.svg';
import payment3 from '../../assets/payment-3.svg';
import payment4 from '../../assets/payment-4.svg';
import payment5 from '../../assets/payment-5.svg';
import payment6 from '../../assets/payment-6.svg';

function Footer() {
  return (
    <>
      <footer className='bg-[#f8f8f8] mt-10 py-10 text-[#333]' >
        <div className="px-[12%]">
          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='1g:w-2/3 w-full'>
              <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/3' >
                  <Link to='/' className='block mb-3' >
                    <h2 className='text-3xl font-bold font-bricolage'>Sneakzee</h2>
                  </Link>
                  <p>Discover the latest trends and enjoy seamless shopping with our exclusive collections.</p>
                </div>
                {/* Link */}
                <div className="md:w-1/3">
                  <h3 className='text-xl font-semibold mb-3'>Useful Links</h3>
                  <ul>
                    <li className='mb-2' >
                      <Link to='/' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Home</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/about' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>About</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/shop' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Shop</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/blog' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Blog</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/contact' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Contact</Link>
                    </li>
                  </ul>
                </div>
                {/* Categories */}
                <div className="md:w-1/3">
                  <h3 className='text-xl font-semibold mb-3'>Categories</h3>
                  <ul>
                    <li className='mb-2' >
                      <Link to='/' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Baby Essentials</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Classic Furnishing</Link>
                    </li>
                    <li className='mb-2' >
                      <Link to='/' className='text-[#333] hover:text-[#ff823a] text-sm transition-all duration-300 hover:ml-2 block font-[Poppins]'>Crystal Clarity Optics</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <h3 className='text-xl font-semibold mb-3'>Newsletter</h3>
              <p className='mb-5 text-sm' >
                Enter your email below to be the first to know about
                new collections and product launches.
              </p>
              <div className='flex flex-col md:flex-row'>
                <input type="email" className='flex-grow px-4 py-3 border border-[#eeeee0] bg-white text-[#333] text-base focus:outline-none' placeholder='Enter Your email Address' />
                <button className='ml-0 md:ml-2 mt-3 md:mt-0 px-5 py-3 md:py-0 bg-black cursor-pointer text-white hover:bg-gray-800 transition-all'>Subscribe</button>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-5 border-t border-gray-200">
            <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
              <div className='flex flex-col lg:flex-row items-center gap-3'>
                <p className='text-center lg:text-right'>
                  2025 | All Rights Reserved by <a href="faqihbahreisy.vercel.app" className="underline font-bold text-[#ff823a]">rrxzyy</a>
                </p>
                <div className='flex gap-3 text-xl text-[#333]'>
                  <i className='hover:text-[#ff823a] transition ri-github-fill cursor-pointer'></i>
                  <i className='hover:text-[#ff823a] transition ri-instagram-fill cursor-pointer'></i>
                  <i className='hover:text-[#ff823a] transition ri-twitter-x-fill cursor-pointer'></i>
                  <i className='hover:text-[#ff823a] transition ri-discord-fill cursor-pointer'></i>
                </div>
              </div>
              <div className='flex gap-2 justify-center'>
                {[payment1, payment2, payment3, payment4, payment5,
                  payment6].map((src, i) => (
                    <img key={i} src={src} alt="" className='h-6 w-auto object-contain' />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer