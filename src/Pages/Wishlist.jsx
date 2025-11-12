import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.error('Item removed from cart')
  }

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));

    toast.success(`${product.Productname} added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ol className='section-banner py-3 relative' >
        <li className='relative'><Link to='/'>Home</Link></li>
        <li className='relative active'><a href="#" className='ps-5'>Wishlist</a></li>
      </ol>
      <div className='py-[8%] lg:px-[4%] px-[4%] my-5' >
        <h2 className='text-center text-4xl mb-8 font-bold font-bricolage'>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <div className='text-center'>
            <p className='lead mb-8'>Your Wishlist is empty</p>
            <Link to='/' className='btn bg-black text-white py-3 px-4 rounded' >
              <i className='ri-shopping-bag-line me-2'></i>Browse Products</Link>
          </div>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
            {wishlist.map(product => (
              <div className="col" key={product.id}>
                <div className="cart h-full shadow-md bg-white rounded">
                  <div className='relative overflow-hidden' style={{ height: "250px", backgroundColor: "#f8f9fa" }}>
                    <img src={product.image || '/images/placeholder.jpg'} alt={product.Productname}
                      className='card-img-top w-full h-full object-cover' />
                  </div>

                  {product.tag && (
                    <span className={`badge absolute top-0 right-0 m-2 text-white px-2 py-2 text-sm rounded ${product.tag === 'New' ? 'bg-red-600' : 'bg-green-600'}`}>
                      {product.tag}
                    </span>
                  )}
                  <div className="card-body flex flex-col p-4">
                    <h5 className="card-title text-lg font-semibold">
                      {product.Productname}</h5>
                    <p className="card-text text-xl font-semibold text-orange-500">
                      {product.price}
                    </p>
                    <div className='mt-3 flex justify-between gap-2'>
                      <button className='btn bg-black text-white p-2 cursor-pointer rounded w-full'
                        onClick={() => addToCart(product)}>
                        <i className='ri-shopping-cart-line me-1'></i> Add to Cart
                      </button>
                      <button className='btn bg-black text-white p-2 cursor-pointer rounded w-full'
                        onClick={() => removeFromWishlist(product.id)}>
                        <i className='ri-delete-bin-line me-1'></i> Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  )
}
export default Wishlist