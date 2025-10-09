import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function Cart() {

  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    const savedcart = JSON.parse(localStorage.getItem('cart')) || [];
    const fixedCart = savedcart.map(item => ({
      ...item,
      price: item.price ?? "0",
      quantity: item.quantity ?? 1
    }))
    setcartItems(fixedCart);
  }, [])

  const updateQuantity = (id, type) => {
    const updated = cartItems.map(item => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 }
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item;
    })
    setcartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  }

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setcartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.error('Items removed from cart');
  }

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  console.log(totalPrice);
  return (
    <>
      <ol className='section-banner py-3 relative' >
        <li className='relative'><Link to='/'>Home</Link></li>
        <li className='relative active'><a href="#" className='ps-5'>Cart</a></li>
      </ol>

      <div className='py-[8%] lg:px-[4%] px-[4%] my-5' >
        <h2 className='text-center text-4xl mb-4 font-bold font-bricolage'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <div className='text-center'>
            <p className='lead mb-4'>Your Cart is empty</p>
            <Link to='/' className='btn py-2 px-3 rounded' >Back to Shop</Link>
          </div>
        ) : (
          <div className='grid gap-4 lg:grid-cols-12'>
            <div className="lg:col-span-8">
              {cartItems.map(item => (
                <div key={item.id} className="card shadow-md rounded-4 mb-3 p-3">
                  <div className='grid grid-cols-12 items-center gap-4'>
                    <div className='col-span-4'>
                      <img src={item.image} alt={item.
                        Productname} className='w-full rounded-3' />
                    </div>
                    <div className='col-span-7 flex flex-col md:flex-row'>
                      <div className=''>
                        <div className="text-start w-full">
                          <h5 className='md:text-3xl text-orange-500 text-2xl mb-5 font-extrabold font-bricolage'>{item.Productname}</h5>
                          <p className='text-black mb-1 text-xl font-semibold font-bricolage'>
                            <span className='text-gray-800 font-normal'>Price :</span>
                            {item.price}
                          </p>
                          <p className='text-black mb-1 text-xl font-semibold font-bricolage'>
                            <span className='text-gray-800 font-normal'>Total :</span>
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <div className="flex items-center gap-3  md:mt-5 mt-2">
                          <button className='btn-outline-primary border-1 px-2 py-1 md:px-3 md:py-2 rounded-sm cursor-pointer' onClick={() =>
                            updateQuantity(item.id, 'decrease')}>-</button>
                          <span className='text-orange-500 mx-0 md:mx-1 font-semibold text-lg md:text-xl'>{item.quantity}</span>
                          <button className='btn-outline-primary border-1 px-2 py-1 md:px-3 md:py-2 rounded-sm cursor-pointer' onClick={() =>
                            updateQuantity(item.id, 'increase')}>+</button>
                          <button className='btn text-md text-white bg-black px-4 md:px-6 lg:px-8 py-1 md:py-2 rounded-sm cursor-pointer lg:ml-4 ml-0' onClick={() => removeItem
                            (item.id)}>Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="border-0 flex flex-col justify-between shadow-sm rounded-4 p-5 ">
                <div className='mb-5'>
                  <h4 className='font-bold text-3xl font-bricolage mb-4'>
                    Cart Summary
                  </h4>
                  <hr />
                  <div className='flex text-lg justify-between mt-2'>
                    <span>Total Items</span>
                    <span>{cartItems.length}</span>
                  </div>
                  <div className='flex text-lg justify-between mt-2'>
                    <span>Total Price</span>
                    <span className='font-bold font-bricolage'>$ {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <Link to='/checkout' className='btn text-white text-center bg-black px-4 py-3 rounded'>Procced to checkout</Link>
              </div>
            </div>
          </div>
        )}
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          closeOnClick pauseOnFocusLoss
          draggable pauseOnHover
          theme='colored'
        />
      </div>
    </>
  )
}

export default Cart