import React from 'react'
import { Details } from './DasBoard/RiviewDetails'

const Orders = () => {
    const Data=Details
    const Paid='lightgreen'
    const Pending='orange'
    const  Failed='pink'
  return (
    <>
          <h6 className='ml-4 text-primary'>Total Yours Orders  </h6>
          <div className='div ml-4' style={{background:'#F5F7FA'}}>
                <table className='table col-12 ml-1 mr-2 flex-wrap' style={{textAlign:'center'}}>
                      <tr>
                          <th><h5>Order ID</h5></th>
                          <th><h5>Custemers</h5></th> 
                          <td><h5>Payment Satus</h5></td> 
                          <td><h5>FulFilment Status</h5></td>  
                          <th><h5>Product</h5></th> 
                          <th><h5>Delivery Type</h5></th>
                          <th><h5>Date</h5></th>
                          <th><h5>Time</h5></th>
                          
                      </tr>
                      {Data.map((e)=>{
                         return(
                          <>
                              <tr> 
                                   
                                   <td><h6 className='p-2 text-primary'>{e.order_id}</h6 ></td>
                                   <td><h6>{e.Name}</h6 ></td>
                                   <td ><h6  style={{backgroundColor:`${e.p_s=='Pending' | 'Paid'?Paid:Failed}`,borderRadius:'50px'}} className='p-0'>{e.p_s}</h6 ></td>
                                   <td><h6 style={{backgroundColor:`${e.f_s=='Success' | 'Ready_Pickup'?'lightgreen':'red'}`,borderRadius:'50px'}}>{e.f_s}</h6 ></td>
                                   <td><h5>{e.pname}</h5></td>
                                   <td><h6>{e.d_t}</h6></td>
                                   <td><h6>{e.Time}</h6 ></td>
                                   <td><h6>{e.Status}</h6></td>
                              </tr>
                          </>
                         )
                      })}
                      
                </table>
        </div>

    </>
  )
}

export default Orders