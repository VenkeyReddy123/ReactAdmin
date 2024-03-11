import React, { useEffect, useState } from 'react'
import './Rivew.css'
import { Details } from './RiviewDetails'
import axios from 'axios'

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit',
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
  
  };
  return date.toLocaleString('en-US', options);
}



const ProductRivie = () => {
  const Data2=Details
  const [Data,setData]=useState([])
  useEffect(()=>{
        axios.get("http://127.0.0.1:8000/LCODetails/").then((d)=>{
           const filterData=d.data.filter((e)=>{
            return e.username==Number(localStorage.getItem('id'))
           })
           console.log(filterData)
             setData(filterData)
             
        }).catch((e)=>{
            alert("pLease Try AGian")
        })
  },[])

  

  return (
    
    <>

        <div className='div ml-1' style={{}}>
                <table className='table col-11 ml-1 mr-2 text-center' style={{textAlign:'center'}}>
                      <tr className='text-center'>
                        
                          <th className='col-2'><h3>Custemers</h3></th> 
                          <th className='col-5 '><h3>Product</h3></th> 
                          <th className='col2'><h3>Time</h3></th>
                          <th className='col-1'><h3>D_Type</h3></th>
                          <th className='col-2'><h3>Status</h3></th> 
                          
                      </tr>
                      {Data.map((e)=>{
                         return(
                          <>
                              <tr>
                                   <td><img src={e.ImageUrl}  width={'50px'} className='mr-3 rounded-circle' /><h6>{e.Custamer_Name.Custamer_Name}</h6></td>
                                   
                                   <td className='d-flex flex-row justify-content-center '><h6>{e.Product_Name.Product_Name}</h6></td>
                                   <td><h6>{formatDate(e.Date)}</h6 ></td>
                                   <td><span style={{}}>{e.Delivary_Type}</span ></td>
                                   <td><span >{e.Payment_Status==='Compleate'?(<i className="fa-solid fa-check text-success mr-1"></i>):(<i className="fa-solid fa-clock text-danger mr-1"></i>)}{e.Payment_Status}</span></td>
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
// //{e.Payment_Status === 'Complete' ? (
//   <i className="fa-solid fa-check text-warning"></i>
//   ) : (
//     <i className="fa-solid fa-clock"></i>
//   )}
// </span>{e.Payment_Status}</span > 