import React from 'react'
import './Rivew.css'
import { Details } from './RiviewDetails'
const ProductRivie = () => {
  const Data=Details
  console.log(Data)
  return (
    <>
        <div className='div ml-4' style={{}}>
                <table className='table col-11 ml-1 mr-2' style={{textAlign:'center'}}>
                      <tr>
                        
                          <th className='col-2'><h3>Custemers</h3></th> 
                          <th className='col-1'><h3>Rating</h3></th>   
                          <th className='col-6'><h3>Product</h3></th> 
                          <th className='col-1'><h3>Time</h3></th>
                          <th className='col-1'><h3>Status</h3></th> 
                          
                      </tr>
                      {Data.map((e)=>{
                         return(
                          <>
                              <tr>
                                   <td><img src={e.image}  width={'50px'} className='mr-3 rounded-circle' /><h5>{e.Name}</h5></td>
                                   <td><h6>{e.Rating} Out Of 5</h6></td>
                                   <td className='d-flex flex-row justify-content-between '><img src={e.pimg} alt="" srcset="" width={50} className='mr-3 rounded-circle' /><h5>{e.pname}</h5></td>
                                   <td><h6>{e.Time}</h6></td>
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

export default ProductRivie