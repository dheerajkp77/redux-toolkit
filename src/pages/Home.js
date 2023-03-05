import React from 'react'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
      <h2 className='heading'>Welcome to Redux toolkit store</h2>
      <section>
        <h2>Product</h2>
        <Products/>
      </section>
    </div>
  )
}

export default Home