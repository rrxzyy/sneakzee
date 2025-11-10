import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import about1 from './assets/about.webp'
import about2 from './assets/about2.webp'
// import about3 from './assets/about3.webp'

// import serviceImg1 from './assets/service-icon-1.svg';
// import serviceImg2 from './assets/service-icon-2.svg';
// import serviceImg3 from './assets/service-icon-3.svg';
// import serviceImg4 from './assets/service-icon-4.svg';

import brand1 from './assets/brand-1.png';
import brand2 from './assets/brand-2.png';
import brand3 from './assets/brand-3.png';
import brand4 from './assets/brand-4.png';
import brand5 from './assets/brand-5.png';
import brand6 from './assets/brand-6.png';

import team1 from './assets/team-1.webp';
import team2 from './assets/team-2.webp';
import team3 from './assets/team-3.webp';

function About() {
  return (
    <>
      <div className='banner-section about-banner-section flex justify-center items-center'>
        <div className='banner-section-content text-center z-10'>
          <h6 className='uppercase text-white'>Sneakzee</h6>
          <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'>
            <span className='text-white font-bricolage'>About Us</span>
          </h1>
        </div >
      </div>

      <div className="py-5 px-[8%] lg:px-[12%]">
        <div className='mb-5' >
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='w-full lg:w-1/2 group overflow-hidden'>
              <img src={about1} alt=""
                className='w-full transition-all duration-500 group-hover:scale-110' />
            </div>
            <div className='w-full lg:w-1/2 group overflow-hidden'>
              <h4 className='font-bold capitalize text-2x1 md:text-4xl font-bricolage mb-3' >
                the story of the shoes
              </h4>
              <span className='block mb-3 capiltalize text-md md:text-xl font-semibold'>
                We like to think of our wares as full of experience!
              </span>
              <p className='text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg'>
                It is a long established fact that a reader will be
                distracted by the readable content of a page when
                looking at its layout
              </p>
              <button className='py-2 px-4 btn text-md lg: text-xl outline-none rounded-md'>
                Discovery how
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col lg:flex-row-reverse items-center gap-10' >
            <div className='w-full 1g:w-1/2 mb-4 md:mb-0 group overflow-hidden'>
              <img src={about2} alt=""
                className='w-full transition-all duration-500 group-hover:scale-110' />
            </div>
            <div className='w-full 1g:w-1/2'>
              <h4 className='font-bold capitailze text-x1 md:text-4xl font-bricolage mb-3'>
                We use 100% high quality material
              </h4>
              <p className='text-gray-500 leading-relaxed mb-3 text-sm lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sit tenetur magni laboriosam quod consequuntur voluptas, unde nam suscipit ab.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Seen in */}
      <div className='text-center px-[8%] lg:px-[12%] seen-in'>
        <div>
          <h1 className='mb-5 font-semibold text-2xl'>As seen in</h1>
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            breakpoints={{
              1399: { slidesPerView: 6 },
              1199: { slidesPerView: 5 },
              991: { slidesPerView: 4 },
              575: { slidesPerView: 3 },
              0: { slidesPerView: 2 }
            }}>

            <SwiperSlide>
              <img src={brand1} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand2} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand3} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand4} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand5} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <img src={brand6} className='w-[200px] h-[80px] object-cover border rounded border-black' alt="" />
            </SwiperSlide>

          </Swiper>
        </div>
      </div >

      {/* Team */}
      <div className="py-10 px-5 lg:px-[12%] bg-white text-center">
        <h2 className='text-4x1 font-bold mb-10 font-bricolage'>Team Member</h2>
        <div className='flex flex-wrap justify-center gap-10'>
          {/* team 1 */}
          <div className='w-[300px] relative overflow-hidden group'>
            <div className='relative'>
              <img
                src={team1}
                alt="tema-image"
                className='w-full h-auto object-cover rounded cursor-pointer' />
              <div className='absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl  opacity-[0] translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition duration-300'>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-github-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-instagram-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-twitter-x-fill'></i>
                </a>
              </div>
            </div>
            <h3 className='mt-4 text-1g font-semibold'>Alan Smith</h3>
            <p className='text-sm text-gray-500' >- CEO & CTO</p>
          </div>
          {/* team 2 */}
          <div className='w-[300px] relative overflow-hidden group'>
            <div className='relative'>
              <img
                src={team2}
                alt="tema-image"
                className='w-full h-auto object-cover rounded cursor-pointer' />
              <div className='absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl  opacity-[0] translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition duration-300'>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-github-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-instagram-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-twitter-x-fill'></i>
                </a>
              </div>
            </div>
            <h3 className='mt-4 text-1g font-semibold'>Claire Fisher</h3>
            <p className='text-sm text-gray-500' >- Product Manager</p>
          </div>
          {/* team 3 */}
          <div className='w-[300px] relative overflow-hidden group'>
            <div className='relative'>
              <img
                src={team3}
                alt="tema-image"
                className='w-full h-auto object-cover rounded cursor-pointer' />
              <div className='absolute bottom-0 left-0 right-0 bg-white/90 flex justify-center gap-4 py-2 text-xl  opacity-[0] translate-y-full group-hover:opacity-[1] group-hover:translate-y-0 transition duration-300'>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-github-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-instagram-fill'></i>
                </a>
                <a href="#" className='text-gray-800 hover:text-[#ff823a] transition duration-300'>
                  <i className='ri-twitter-x-fill'></i>
                </a>
              </div>
            </div>
            <h3 className='mt-4 text-1g font-semibold'>Diana J. West</h3>
            <p className='text-sm text-gray-500' >- Business Analyst</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About