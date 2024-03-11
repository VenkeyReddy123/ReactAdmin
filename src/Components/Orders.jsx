import React, { useEffect, useState } from 'react'
import { Details } from './DasBoard/RiviewDetails'
import Sidebar from './Sidebar'
import Navbar from '../Navbar'
import axios from 'axios'
import './Orders.css'

const Orders = () => {
    const Data=Details
    const Paid='lightgreen'
    const  Failed='pink'
    const [orders,setData2]=useState([])
    const [pw,setpw]=useState('')
    const[rpw,setrpw]=useState('')
    const [un,setun]=useState('')
    const[run,setrun]=useState('')
    const[Con2,setCon2]=useState(false)
    const[Con1,setCon]=useState(false)
    useEffect(()=>{
  
      axios.get("http://127.0.0.1:8000/CDDetails/").then((d)=>{
        const FilterData=  d.data.filter((e)=>{
          
            return e.Order_Id.username===Number(localStorage.getItem('id'))
          })
          
          setData2(FilterData)
      })
      
},[])



    const Condition1=(val)=>{
    
      if(val==='User'){
        setCon2(!Con2)
      }
      else{
        setCon(!Con1)
      }
    }
    const Condition3=()=>{
      setCon(!Con1)
    }
    const Condition2=()=>{
      setCon2(!Con2)
    }
    
    const HandleUsername=(e)=>{
      e.preventDefault()
      if(un.length>1){
        if(un===run){
          const Data={
            'pk':Number(localStorage.getItem('id')),
            'password':localStorage.getItem('Password'),
            'username':un
          }
          console.log(Data)
         
  
          axios.patch("http://127.0.0.1:8000/UserDetails/",Data).then((d)=>{
              alert("Username Changed Sucessfully")
          }).catch((e)=>{
            alert('Please Try Again LAter ')
          })
      }
      else{
        alert('Password are not matched')
      }
      }
      Condition2()
      
       
    }
    
    const HandlePassword=(e)=>{
      e.preventDefault()
      if(pw.length>1){
        if(pw===rpw){
          const Data={
            'pk':Number(localStorage.getItem('id')),
            'password':pw
          }
          axios.patch("http://127.0.0.1:8000/UserDetails/",Data).then((d)=>{
              alert("Password CHanged Sucessfully")
          }).catch((e)=>{
            alert('Please Try Again LAter ')
          })
      }
      else{
        alert('Password are not matched')
      }
      }
      Condition1()
      
       
    }
  return (

    <>
        <div>
         <Navbar/>
      </div>
        <div>
        <div>
      <Sidebar Condition1={Condition1}/>
      </div>
    </div>
          <h6 className='ml-4 text-primary'>Total Yours Orders  </h6>
          <div className='div ml-4' style={{background:'#F5F7FA'}}>
         

<div className="admin-orders">
      <div className="admin-orders-container">
        {orders.map(order => (
          <div key={order.order_id} className="admin-order-row">
            <div className="admin-order-row-scroll">
              <table className="admin-order-table">
                <thead>
                  <tr>
                    <th className=''>Order ID</th>
                    <th className=''>Customer Name</th>
                    <th>Payment Status</th>
                    <th>Product Name</th>
                    <th>Delivery Type</th>
                    <th>Date</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody style={{background:'',color:''}} >
                <tr key={order.Order_Id.Order_Id} style={{overflowx:'auto'}}>
              <td>{order.Order_Id.Order_Id}</td>
              <td>{order.Order_Id.Custamer_Name.Custamer_Name}</td>
              <td>{order.Order_Id.Payment_Status}</td>
              <td style={{fontSize:'15px',width:'300px'}}>{order.Order_Id.Product_Name.Product_Name}</td>
              <td>{order.Order_Id.Delivary_Type}</td> 
              <td>{new Date(order.Order_Id.Date).toLocaleDateString()}</td>
               <td>{new Date(order.Order_Id.Date).toLocaleTimeString()}</td>
            </tr> 
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
                {Con1&&<>
      <div className='col-sm-5   card bg-primary' style={{position:'absolute',top:'105px',right:'10px',overflow:'hidden'}}>
          <h6 className='text-center mt-2'>Password Change</h6>
          <form onSubmit={HandlePassword}>
             <input type="password" onChange={(e)=>{setpw(e.target.value)}} placeholder='Enter New Password' className='form-control ml-2 mr-2 p-2 mb-2 mt-3' />
             <input type="password" onChange={(e)=>{setrpw(e.target.value)}} placeholder='Enter  AgainNew Password' className='form-control ml-2 mr-2 mb-2' />
            <div className='text-center mb-2'>
               <input type="submit" value={'Change Password'} className='btn btn-warning ' />
            </div>
          </form>
      </div>
     </>}
     {Con2&&<>
      <div className='col-sm-5   card bg-primary' style={{position:'absolute',top:'105px',right:'10px',overflow:'hidden'}}>
          <h6 className='text-center mt-2'>Username Change</h6>
          <form onSubmit={HandleUsername}>
             <input type="password" onChange={(e)=>{setun(e.target.value)}} placeholder='Enter New Username' className='form-control ml-2 mr-2 p-2 mb-2 mt-3' />
             <input type="password" onChange={(e)=>{setrun(e.target.value)}} placeholder='Enter  AgainNew Username' className='form-control ml-2 mr-2 mb-2' />
            <div className='text-center mb-2'>
               <input type="submit" value={'Change Username'} className='btn btn-warning ' />
            </div>
          </form>
      </div>
     </>}
        </div>

    </>
  )
}

export default Orders