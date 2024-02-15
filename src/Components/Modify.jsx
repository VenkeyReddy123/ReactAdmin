import React from 'react'
import { Details } from './DasBoard/RiviewDetails'


const Modify = () => {
  const Data=Details
  return (
    <>
      <div className='container-fluid '> 
                <div className='d-flex flex-row justify-content-center col-12'>
                  
                <div className='col-8 text-center'>
                      
                      <h6>Your Products</h6>  
                      <table className='col-12 mt-5 ' style={{border:'2px solid red'}} >
                            <tr>
                                <th style={{ border: '1px solid dark'}} className='col-6'>Product Name</th>
                                <th style={{ border: '1px solid dark'}} className='col-6'>Price</th>
                            </tr>
                            {Data.map((e)=>{
                              return(
                                <tr>
                                     <td style={{ border: '1px solid black'}}>{e.pname}</td>
                                     <td style={{ border: '1px solid black'}}>{e.price}</td>
                                </tr>
                              )
                            })}
                      </table>   
               </div>
               <div className='col-2 d-sm-none d-md-block'>

               </div>
                </div>
       </div>
      
    </>
  )
}

export default Modify