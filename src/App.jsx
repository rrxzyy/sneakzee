import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Nabvar/Navbar'
import ProductDetail from './Pages/ProductDetail'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'
import Index from './Pages/Index'
import About from './Pages/About'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<Wishlist />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>

    </>
  )
}

export default App
