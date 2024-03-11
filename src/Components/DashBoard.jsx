import React, { useEffect, useState } from 'react';
import Model from './DasBoard/Model';
import ProductRivie from './DasBoard/ProductRivie';
import Sidebar from './Sidebar';
import axios from 'axios';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [pw,setpw]=useState('')
  const[rpw,setrpw]=useState('')
  const [un,setun]=useState('')
  const[run,setrun]=useState('')
  const[Con1,setCon]=useState(false)
  const[Con2,setCon2]=useState(false)

  const navigate=useNavigate()
  useEffect(()=>{
                    axios.get("http://127.0.0.1:8000/UserDetails/").then((d)=>{
                      const Data=  d.data.filter((e)=>{
                          return e.username==localStorage.getItem('username')
                        })
                        localStorage.setItem('id',Data[0].id)

                    })
  },[])
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
            localStorage.setItem('password')
        }).catch((e)=>{
          alert('Please Try Again LAter ')
        })
    }
    else{
      alert('Password are not matched')
    }
    } 
    Condition3()
    
     
  }
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
  



  return (
    <div className='d-flex flex-column' style={{ background: '#F5F7FA', height: '100vh',position:'relative' }}>
      <div>
         <Navbar/>
      </div>
      <Sidebar Condition1={Condition1}/>
      {/*  */}
     
      {/*  */}
     
      <div className='d-flex flex-column p-1' >
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
  );
};

export default Dashboard;
