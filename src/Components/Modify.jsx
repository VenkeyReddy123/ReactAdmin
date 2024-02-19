import React from 'react'
import { Details } from './DasBoard/RiviewDetails'
import { useNavigate } from 'react-router-dom'


const Modify = () => {  
  const Data=Details
  const navigate =useNavigate()
  const Delete =(ind)=>{
   alert('ind')
  //  console.log(ind)

  }

  return (
    <>
      <div className=' '> 
                <div className='d-flex flex-row justify-content-center col-12'>
                  
                <div className='col-8 text-center'>
                      
                      <h6>Your Products List</h6>  
                      <table className='col-12  ' style={{border:'2px solid red',}} >
                            <tr>
                                <th style={{ border: '1px solid dark',overflowX:'auto'}} className='col-6'>Product Name</th>
                                <th style={{ border: '1px solid dark'}} className='col-6'>Price</th>
                                <th style={{ border: '1px solid dark'}} className='col-6'>EDit</th>
                                <th style={{ border: '1px solid dark'}} className='col-6'>Delete</th>
                          
                            </tr>
                            {Data.map((e)=>{
                              return(
                                <tr>
                                     <td style={{ border: '1px solid black'}}>{e.pname}</td>
                                     <td  style={{ border: '1px solid black'}}>{e.price}</td>
                                     <td  onClick={()=>{navigate('/Edit',{state:e})}} style={{ border: '1px solid black'}}><i class="fa-solid fa-pen-to-square"></i></td>
                                     <td  onClick={()=>{navigate('/Delete',{state:e})}} style={{ border: '1px solid black'}} ><i class="fa-solid fa-trash"></i></td>

                                     
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