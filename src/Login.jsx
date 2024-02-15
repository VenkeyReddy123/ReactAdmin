import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const Email = useRef(null)
    const Pass = useRef(null)
    function HanleSubmit(e) {
        e.preventDefault()
        const email = Email.current.value
        const pass = Pass.current.value
    }
    return (
        <>
    <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#860569' }}>
  <h1 className='mt-5 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>Login Here</h1>
  <form  onSubmit={HanleSubmit} className='form-group shadow-lg mt-5' style={{ background: '#004646', borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

    <div className='mt-4 mx-3'>
      <label htmlFor="ml" className='form-label text-warning'>Enter Your Mail  <span style={{ color: 'red' }}>*</span></label>
      <input type="email" className='form-control' placeholder='Enter Your mail' name='ml' id='ml' ref={Email} required />
    </div>

    <div className='mt-4 mx-3'>
      <label className='form-label text-warning' htmlFor="pw">Enter Your Password <span style={{ color: 'red' }}>*</span></label>
      <input type="password" className='form-control' name="pw" id="pw" ref={Pass} required placeholder='Enter password' />
    </div>

    <div className='text-center mb-2'>
      <input type="submit" value="Login" className='btn btn-primary mt-4' />
    </div>

    <div className='mx-3'>
      <h6 className='text-success ml-2 mb-2'>Don't have an account? <span className='text-light'>Register here</span></h6>
    </div>
  </form>
</div>

        </>
    )
}

export default Login