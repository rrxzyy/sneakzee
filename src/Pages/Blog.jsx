import React from 'react'
import { Link } from 'react-router-dom'

// Data
import blogs from '/src/Data/Blogs.json'

function Blog() {
  return (
    <>
      <div className='banner-section about-banner-section flex justify-center items-center'>
        <div className='banner-section-content text-center z-10'>
          <h6 className='uppercase text-white'>Sneakzee</h6>
          <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'>
            <span className='text-white font-bricolage'>Our Blog</span>
          </h1>
        </div >
      </div>

      <div className='blog-container px-[8%] lg:px-[12%] py-[50px]'>
        <div className='mt-5'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 items-center justify-center'>
            {blogs.map(blog => (
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full min-h-64 object-cover" src={blog.image} alt="Blog Image" />
                <div className='px-6 py-4'>
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-700 text-base">{blog.title}</p>
                    <div className="py-4">
                      <p className='font-bold text-xl line-clamp-2'>
                        {blog.pere}
                      </p>
                    </div>
                    <div className="pb-4">
                      <p className="text-gray-700 text-base">New Post on {blog.date}</p>
                    </div>
                    <button className="btn px-4 py-2 rounded text-gray-700 text-base">Read More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog