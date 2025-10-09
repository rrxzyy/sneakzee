import React from 'react'

function Contact() {
  return (
    <>
      <section className='contact-section mt-20'>
        <div className='px-[8%] lg:px-[12%] py-[50px]' >
          <h2 className='section-title text-3xl font-bold text-center'>Keep In Touch with Us</h2>
          <p className='section-subtitle text-center mt-2 text-gray-600'>
            Be the first to know about new skincare launches, exclusive
            offers, and <br />
            expert beauty tips for radiant skin.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
            {/* Address */}
            <div className='contact-box text-left p-6'>
              <i className='ri-map-pin-line icon text-3xl mb-2'></i>
              <h5 className='text-2xl font-semibold mb-1 font-bricolage'>Address</h5>
              <p className='text-gray-700'>Gunung Anyar Complex Apartment 2nd Floor</p>
              <p className='text-gray-700'>Surabaya City, 60294</p>
            </div>

            {/* Contact */}
            <div className='contact-box text-left p-6'>
              <i className='ri-phone-line icon text-3xl mb-2'></i>
              <h5 className='text-2xl font-semibold mb-1 font-bricolage'>Contact</h5>
              <p className='text-gray-700'><b>Mobile : </b> +6281-2345-6789</p>
              <p className='text-gray-700'><b>Phone : </b> 033-4321-5678</p>
              <p className='text-gray-700'><b>E-Mail : </b> support@sneakzee.com</p>
            </div>

            {/* Contact */}
            <div className='contact-box text-left p-6'>
              <i className='ri-time-line icon text-3xl mb-2'></i>
              <h5 className='text-2xl font-semibold mb-1 font-bricolage'>Opening Hours</h5>
              <p className='text-gray-700'><b>Mon - Fri </b> 08:00 - 20:00</p>
              <p className='text-gray-700'><b>Sat - Sun</b> 09:30 - 21:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Location */}
      <div className='map-page'>
        <section className='mpa-location px-[8%] lg:px-[12%]'>
          <iframe
            title='Our Location'
            className='map rounded w-full h-96'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.532026987652!2d112.78016657910166!3d-7.339933628923129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb01c99f7067%3A0x773e3d3fbb012d17!2sSunan%20Ngerang-Madi%20Pandan-Waruju!5e0!3m2!1sid!2sid!4v1759924521999!5m2!1sid!2sid"
            allowFullScreen
          ></iframe>
        </section>

        {/* Contact Form */}
        <section className='message-section text-center mt-16 px-4'>
          <h2 className='form-title text-3xl font-bold text-center mb-8 font-bricolage'>
            Send A Message</h2>
          <form className='contact-form max-w-4xl mx-auto'>
            <div className='row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4' >
              <input type="text" placeholder='Name' className='input border border-gray-300 px-4 py-2 rounded' />
              <input type="text" placeholder='Email' className='input border border-gray-300 px-4 py-2 rounded' />
            </div>
            <div className="row mb-4">
              <textarea placeholder='Messgae' className='textarea w-full border border-gray-300 px-4 py-2 rounded h-32'></textarea>
            </div>
            <button type='submit' className='btn px-5 py-2 bg-blue-600text-white rounded hover:bg-blue-700'>Submit</button>
          </form>
        </section>

      </div>
    </>
  )
}

export default Contact