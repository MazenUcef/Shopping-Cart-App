import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Add your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  )
}

export default App