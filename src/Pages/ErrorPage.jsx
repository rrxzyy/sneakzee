import React from 'react'

function ErrorPage() {
  return (
    <>
      <section className='flex justify-center items-center h-screen mx-auto'>
        <div className=''>
          <h1 className='section-title text-8xl font-bold text-center mb-3'>404</h1>
          <h4 className='section-title text-xl font-semibold text-center mb-3'>Page Not Found</h4>
          <p className='section-subtitle text-center mt-2 text-gray-700'>
            The page you are looking for does not exist.
          </p>
        </div>
      </section>

    </>
  )
}

export default ErrorPage