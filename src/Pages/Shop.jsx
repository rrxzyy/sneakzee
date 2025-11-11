import React from 'react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

// Data
import products from '/public/Data/Products.json'

function Shop() {
  const [filterSortOption, setfilterSortOption] = useState('all');
  // const navigate = useNavigate();

  const handleFilterSort = () => {
    let filtered = [...products];

    if (filterSortOption === 'New' || filterSortOption === 'Sale') {
      filtered = filtered.filter(product => product.tag === filterSortOption);
    }

    if (filterSortOption === 'New') {
      filtered = filtered.filter(product => product.tag === filterSortOption);
    }

    if (filterSortOption === 'Low') {
      filtered.sort((a, b) =>
        parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''))
      );
    }

    if (filterSortOption === 'High') {
      filtered.sort((a, b) =>
        parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''))
      );
    }
    return filtered;
  }

  const displayedProducts = handleFilterSort();

  const addToWishlist = (products) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!existing.some(p => p.id === products.id)) {
      const updated = [...existing, products];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      window.dispatchEvent(new Event('wishlistUpdated'));
      toast.success(`${products.Productname} added to your wishlist`)
    } else {
      toast.info(`${products.Productname} is already in your wishlist`)
    }
  }

  const addToCart = (products) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];

    if (!existing.some(p => p.id === products.id)) {
      const updated = [...existing, products];
      localStorage.setItem('cart', JSON.stringify(updated));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success(`${products.Productname} added to your cart`)
    } else {
      toast.info(`${products.Productname} is already in your cart`)
    }
  }

  return (

    <>
      <div className='banner-section about-banner-section flex justify-center items-center'>
        <div className='banner-section-content text-center z-10'>
          <h6 className='uppercase text-white'>Sneakzee</h6>
          <h1 className='text-6xl font-semibold font-bricolage text-[#ff823a]'>
            <span className='text-white font-bricolage'>Shop</span>
          </h1>
        </div >
      </div>


      <div className='px-[8%] lg:px-[12%] py-[20px]' >
        <div>
          <div className='my-4 mx-auto' >
            <div className='flex justify-between items-center flex-wrap gap-3'>
              <div className='text-gray-500 text-[1.1rem]'>
                Showing <strong>{displayedProducts.length} </strong>
                Product {displayedProducts.length !== 1 && 's'} for "
                {filterSortOption === 'all' ? 'All' : filterSortOption.charAt(0).toUpperCase() + filterSortOption.slice(1)}"
              </div>
              <div>
                <select
                  value={filterSortOption}
                  onChange={(e) => setfilterSortOption(e.target.value)}
                  className='py-2 px-3 rounded text-base
            appearance-none min-w-[260px] bg-gray-100 border-0'
                >
                  <option value="all">All Products</option>
                  <option value="New">New Product</option>
                  <option value="Sale">Sale Product</option>
                  <option value="Low">Price: Low to High</option>
                  <option value="High">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedProducts.map(product => (
            <div key={product.id} className="product-item text-center relative">
              <div className="product-image w-full relative overflow-hidden">
                <img src={product.image} alt="product" className='w-full h-64 object-cover rounded' />
                <img src={product.secondImage} alt="product" className='w-full h-64 object-cover rounded' />
                <div className="product-icons gap-3 flex justify-center items-center absolute transition duration-300">
                  <div className="product-icon cursor-pointer" title='Add to Wishlist' onClick={() => addToWishlist(product)}>
                    <i className='bi bi-heart text-lg'></i>
                  </div>
                  <div className="product-icon cursor-pointer" title='Add to Cart' onClick={() => addToCart(product)}>
                    <i className='bi bi-cart text-lg'></i>
                  </div>
                </div>
                {product.tag && (
                  <span className={`badge text-white
                                absolute top-2 left-2 text-xs px-2 py-1
                                rounded ${product.tag === 'New' ?
                      'bg-red-600' : 'bg-green-600'}`}>
                    {product.tag}
                  </span>
                )}
              </div>
              <Link to={`/product/${product.id}`}
                className='no-underline text-black' >
                <div className="product-content pt-3">
                  {product.oldprice ? (
                    <span className='price'>
                      <span className='line-through text-gray-400 mr-2'>
                        {product.oldprice}
                      </span>
                      <span className='font-bold text-red-600 mr-2'>
                        {product.price}
                      </span>
                    </span>
                  ) : (
                    <span className='price'>
                      <span className='font-bold text-red-600 mr-2'>
                        {product.price}
                      </span>
                    </span>
                  )}
                  <h3 className='title p-1'>{product.Productname}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        closeOnClick pauseOnFocusLoss
        draggable pauseOnHover
      />
    </>
  )
}

export default Shop