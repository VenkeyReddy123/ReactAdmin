import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className=' bg-light p-2 d-flex flex-row justify-content-between' style={{overflow:'hidden'}}>
        <div>
          <h6 className='ml-3'>Ecommerce Dashboard</h6>
          <span className='ml-3 text-dark d-none d-md-block'>Here's What's Going On At Your Business Right Now</span>
        </div>
        <div>
          {localStorage.getItem('username')}
        </div>
      </div>
    </>
  )
}

export default Navbar