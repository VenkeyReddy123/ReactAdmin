import React from 'react';
import Model from './DasBoard/Model';
import ProductRivie from './DasBoard/ProductRivie';

const Dashboard = () => {
  return (
    <div className='d-flex flex-column' style={{ background: '#F5F7FA', height: '100vh' }}>
      <div className=' bg-light p-3'>
        <h4 className='ml-3'>Ecommerce Dashboard</h4>
        <span className='ml-3 text-dark'>Here's What's Going On At Your Business Right Now</span>
      </div>
      <div className='d-flex flex-column  p-3'>
        <div className='d-md-flex flex-md-row d-flex flex-column d-lg-flex flex-lg-row mt-5'>
          <div className='d-flex flex-row'>
            <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
            <div className='d-flex flex-column'>
              <h5>7 New Orders</h5>
              <span className='text-dark'>Awaiting Processing</span>
            </div>
          </div>
          <div className='d-flex flex-row'>
            <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
            <div className='d-flex flex-column'>
              <h5>5 Orders</h5>
              <span className='text-dark'>On Hold</span>
            </div>
          </div>
          <div className='d-flex flex-row'>
            <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
            <div className='d-flex flex-column '>
              <h5>15 Products</h5>
              <span className='text-dark'>Out Of Stock</span>
            </div>
          </div>
        </div>
        <div className='mt-5' style={{overflowX:'hidden'}}>
          <Model />
        </div>
        <div className='mt-5'>
          <ProductRivie />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
