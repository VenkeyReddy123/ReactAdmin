import React from 'react'
import { Details } from './DasBoard/RiviewDetails'

const CustemorDetail = () => {
  const Data=Details
    const Paid='lightgreen'
    const Pending='orange'
    const  Failed='pink'
  return (
    <>    
         <div className='text-center'>
            <h6 className='d-inline-block p-2 text-primary bg-dark mt-5 shadow' >Custemor Details</h6>
         </div>
          <div className='div ml-4 mt-5'>
                <table className='table col-11 ml-3 mr-1 flex-wrap ' style={{textAlign:'center'}}>
                      <tr>
                          
                          <th><h5 className='p-2'>Custemers</h5></th> 
                          <th><h5 className='p-2'>Email</h5></th>
                          <td><h5 className='p-2'>NO.of Orders</h5></td> 
                          <td><h5 className='p-2'>Total Spend</h5></td>     
                          <th><h5 className='p-2'>City</h5></th> 
                          <th><h5 className='p-2'>Last Seen</h5></th>
                          <th><h5 className='p-2'>Last Oder</h5></th>
                          
                      </tr>
                      {Data.map((e)=>{
                         return(
                          <>
                              <tr> 
                                   <td><h6 className='p-2'>{e.Name}</h6 ></td>
                                   <td><h6 className='p-2'>{e.email}</h6></td>
                                   <td><h5 className='p-2'>{e.orders}</h5></td>
                                   <td><h6 className='p-2'>{e.t_s}</h6></td>
                                   <td><h6 className='p-2'>{e.city}</h6 ></td>
                                   <td><h6 className='p-2'>{e.l_s}</h6></td>
                                   <td><h6 className='p-2'>{e.l_o}</h6></td>
                              </tr>
                          </>
                         )
                      })}
                      
                </table>
        </div>

    </>
  )
}

export default CustemorDetail