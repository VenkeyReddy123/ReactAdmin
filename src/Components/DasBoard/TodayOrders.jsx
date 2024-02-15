import React from 'react'
import { Details } from './RiviewDetails'

const TodayOrders = () => {
    const Data=Details
    const Time=['10Min Ago','35Min Ago','55Min Ago','1Hour Ago','4Hours Ago','5Hours Ago']
  return (
    <>
      <div className='container-fluid' style={{ overflowX: 'hidden' }}>
  <div>
    <h1>Today Orders#6</h1>
    <h6>Total Amount:2340000</h6>
  </div>
  <div className='row overflow-auto'>
    <div className='col-12'>
      <table className=' table col-12 text-center flex-wrap p-3' style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <th><h5>Order ID</h5></th>
            <th><h5>Product</h5></th>
            <th><h5>Quantities</h5></th>
            <th><h5>Payment Status</h5></th>
            <th><h5>Delivery Type</h5></th>
            <th><h5>Time</h5></th>
          </tr>
        </thead>
        <tbody>
          {Data.map((e, ind) => (
            <tr key={ind}>
              <td><h6 className='p-2 text-primary'>{e.order_id}</h6 ></td>
              <td><h5 className='d-flex flex-row justify-content-between'><img src={e.pimg} width={'70px'} alt="" srcset="" />{e.pname}</h5></td>
              <td><h6>{e.q_y}</h6></td>
              <td><h6 style={{ backgroundColor: e.p_s === 'Pending' || e.p_s === 'Paid' ? 'lightgreen' : 'red', borderRadius: '50px' }} className='p-0'>{e.p_s}</h6 ></td>
              <td><h6>{e.d_t}</h6></td>
              <td><h6>{Time[ind]}</h6 ></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

    </>
  )
}

export default TodayOrders