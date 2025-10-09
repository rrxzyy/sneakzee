import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function Checkout() {

  const [deliveryOption, setdeliveryOption] = useState('ship');
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    const savedcart = JSON.parse(localStorage.getItem('cart')) || [];
    setcartItems(savedcart);
  }, [])


  const handlePlaceOrder = () => {
    toast.success('Order Placed Successfull');
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  const estimateTax = (totalPrice * 0.1).toFixed(2);


  return (
    <>
      <h2 className='text-4xl font-bold font-bricolage text-center mt-[15%]'>Checkout</h2>
      <div className='px-[8%] lg:px-[12%] py-[50px]' >
        <div className='grid gap-4 lg:grid-cols-12'>
          <div className='lg:col-span-7'>
            <h5 className='mb-2'>Contact</h5>
            <div className='mb-3' >
              <input type="email" className='border w-full p-2' placeholder='email or phone number' />
            </div>

            <div className='form-check mb-4'>
              <input type="checkbox" id='newsCheck' className='me-2' />
              <label className='form-check-label' htmlFor='newsCheck'>
                Email me with news and offers
              </label>
            </div>

            <h5 className='mb-2'>Delivery</h5>
            <div>
              <div className='mb-3'>
                <div className='btn-group btn-form w-full' role='group'>
                  <input type="radio"
                    id='ship'
                    className='btn-check'
                    name='deliveryOption'
                    checked={deliveryOption === 'ship'}
                    onChange={() => setdeliveryOption('ship')}
                  />
                  <label className='px-2 me-3' htmlFor="ship">Ship</label>

                  <input type="radio"
                    id='pickup'
                    className='btn-check'
                    name='deliveryOption'
                    checked={deliveryOption === 'pickup'}
                    onChange={() => setdeliveryOption('pickup')}
                  />
                  <label className='px-2 me-3' htmlFor="pickup">Pickup in store</label>
                </div>
              </div>

              {deliveryOption === 'ship' && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
                  <div className='mb-3 md:col-span-2'>
                    <select className='form-select border p-1'>
                      <option>Indonesia</option>
                      <option>Singapore</option>
                      <option>Vietnam</option>
                      <option>Malaysia</option>
                      <option>Thailand</option>
                    </select>
                  </div>

                  <div>
                    <input type="text" className='border w-full p-2'
                      placeholder='Last Name' />
                  </div>
                  <div>
                    <input type="text" className='border w-full p-2'
                      placeholder='Last Name' />
                  </div>
                </div>
              )}

              {deliveryOption === 'pickup' && (
                <div className='my-4'>
                  <div className='flex justify-between items-center mb-2'>
                    <h6 className='font-semibold mb-0'>Store Location</h6>
                    <a href="#" className='text-decoration-none text-sm' >
                      Change location
                    </a>
                  </div>
                  <div className="alert alert-danger p-2 flex flex-col rounded-3"
                    role='alert'
                    style={{
                      color: "#7b1c1c",
                      backgroundColor: "#fef6f6",
                      border: '1px solid rgba(145, 137, 137, .59)',
                    }}>
                    <div className='flex items-center mb-1'>
                      <i className='bi bi-exclamation-circle-fill me-2'
                        style={{ fontSize: "1rem" }}></i>
                      <strong>No stores available with your item</strong>
                    </div>
                    <a href="#"
                      className='underline'
                      style={{ color: "#7b1c1c" }}>
                      Ship to Address
                    </a>{""} instead
                  </div>
                </div>
              )}
            </div>

            <div className='mb-3' >
              <input type="text" className='border w-full p-2' placeholder='Address' />
            </div>

            <div className='mb-3' >
              <input type="text" className='border w-full p-2' placeholder='Appartment, suite, etc.' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mb-3'>
              <div>
                <input type="text" className='border w-full p-2' placeholder='City' />
              </div>
              <div>
                <input type="text" className='border w-full p-2' placeholder='Postal Code' />
              </div>
            </div>

            <div className='form-check mb-4'>
              <input type="checkbox" id='saveInfo' />
              <label htmlFor="saveInfo" className='ms-1' >
                Save this information for next time
              </label>
            </div>

            <h6 className='mb-2'>Shipping Method</h6>
            <div className="rounded p-3 flex justify-between items-center"
              style={{ border: "1px solid darkblue", backgroundColor: '#f0f5ff' }}>
              <span>Standard</span>
              <span className='text-green-600 font-bold'>FREE</span>
            </div>

            <div className='my-5'>
              <h4 className='font-semibold'>Payment</h4>
              <p className='text-gray-500 mb-3'>All transactions are secure and encrypted. </p>

              <div className='rounded border' >
                <div className='flex justify-between items-center p-3'
                  style={{ backgroundColor: '#f0f5ff' }}>
                  <span className='font-semibold'>Credit Card</span>
                  <div className="bg-orange-500 text-white rounded px-2 py-1 font-bold text-sm">
                    R
                  </div>
                </div>

                <div className="p-3" style={{ backgroundColor: '#f0f5ff' }}>
                  <div className='mb-3' >
                    <input type="text" className='border w-full p-2' placeholder='Card number' />
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div>
                      <input type="text" className='border w-full p-2'
                        placeholder='Expiration Date (MM/YY)' />
                    </div>
                    <div>
                      <input type="text" className='border w-full p-2'
                        placeholder='Security Code' />
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                    <input type="text" className='border w-full p-2' placeholder='Name on card' />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox"
                      className='form-check-input' id='billingCheck'
                      checked />
                    <label htmlFor="billingCheck"
                      className='form-check-label'>Use billing address as billing address</label>
                  </div>
                </div>
              </div>

              <button className='btn w-full mt-4 py-2 transition-all font-semibold'>Pay Now</button>
              <div className='mt-5 border-t pt-3'>
                <a href="#" className='text-decoration-none text-sm underline'>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className='card border-0 shadow-sm rounded-4 p-4'>
              <h5 className='font-bold text-xl mb-3 font-bricolage'>
                <i className='ri-shopping-cart-2-line me-2 text-[#ff823a]'></i>Order Summary
              </h5>
              {cartItems.length === 0 ? (
                <div><hr />
                  <p className='text-gray-500 py-3'>Your cart is empty</p></div>
              ) : (
                cartItems.map(item => (
                  <div key={item.id} className='flex items-center mb-3 border-b pb-2'>
                    <img src={item.image} alt={item.name}
                      className='rounded' width='60' height='60'
                      style={{ objectFit: 'cover', marginRight: '10px' }} />
                    <div className='flex-grow'>
                      <h6 className='mb-1 font-bricolage'>{item.Productname}</h6>
                      <small className='text-gray-600'>Qty: {item.quantity}</small>
                    </div>
                    <div className='font-semibold'>
                      ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              )}
              <div className='flex justify-between text-sm pt-2'>
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className='flex justify-between text-sm pt-2'>
                <span>Shipping</span>
                <span>Enter Address</span>
              </div>
              <div className='flex justify-between text-sm pt-2'>
                <span>Estimated Tax</span>
                <span>${estimateTax}</span>
              </div>
              <div className='flex justify-between text-sm pt-2'>
                <span>Total</span>
                <span className='font-semibold font-bricolage'>
                  ${(totalPrice + parseFloat(estimateTax)).toFixed(2)}
                </span>
              </div>
              <button className='btn w-full mt-3 mb-5 rounded transition-all p-2' onClick={handlePlaceOrder}>
                <i className='ri-secure-payment-line me-2'></i>
                Place Order
              </button>

              <Link to='/Cart' className='btn-outline-primary w-full p-2 rounded px-3 transition-all text-decoration-none'>
                <i className='ri-arrow-left-line me-1'></i>
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div >
      <ToastContainer />
    </>
  )
}

export default Checkout