import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
  const navigate=useNavigate()
    const Email = useRef(null)
    const Pass = useRef(null)
    const Value=null
    const   HanleSubmit=async()=> {
        const Uname = Email.current.value
        const pass = Pass.current.value
        const Data={
          "username":Uname,
          "password":pass
        }
       
       await axios.post("http://127.0.0.1:8000/UserCheck/",Data).then((d)=>{
          if(d.data.Message){
            localStorage.setItem('username',Uname)
            localStorage.setItem('Password',pass)
             navigate('/Das')
            
          }
          else{
            alert('password/email are not matched')
          }
        }).catch((e)=>{
          // console.log('error')  
        })
    }
    return (
        <>
    <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height:'100vh' }}>
  <h1 className='mt-5 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>Login Here</h1>
  <form  onSubmit={(e)=>{e.preventDefault()
  HanleSubmit()
  }} className='form-group shadow-lg mt-2' style={{ background: '#004646', borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

    <div className='mt-4 mx-3'>
      <label htmlFor="ml" className='form-label text-warning'>Enter Your Username  <span style={{ color: 'red' }}>*</span></label>
      <input type="text" className='form-control' placeholder='Enter Your mail' name='ml' id='ml' ref={Email} required />
    </div>

    <div className='mt-4 mx-3'>
      <label className='form-label text-warning' htmlFor="pw">Enter Your Password <span style={{ color: 'red' }}>*</span></label>
      <input type="password" className='form-control' name="pw" ref={Pass} required placeholder='Enter password' />
    </div>

    <div className='text-center mb-2'>
      <input type="submit" value="Login" className='btn btn-primary mt-4' />
    </div>

    <div className='mx-3'>
      <h6 className='text-success ml-2 mb-2'>Don't have an account? <span style={{cursor:'pointer'}} className='text-light' onClick={()=>{navigate('/Reg')}}>Register here</span></h6>
      <h6 className='text-success ml-2 mb-2'>Reset Password?<span  className='text-primary' style={{cursor:'pointer'}} onClick={()=>{navigate('/For')}}>ForgetPassword</span></h6>
    </div>
  </form>
</div>

        </>
    )
}

export default Login