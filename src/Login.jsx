  import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const Email = useRef(null)
  const Pass = useRef(null)
  const [UPop, SetUPop] = useState(false)
  const [PPop, setPPop] = useState(false)
  const Value = null
  const HanleSubmit = async () => {
    const Uname = Email.current.value
    const pass = Pass.current.value
    const Data = {
      "username": Uname,
      "password": pass
    }
    await axios.post("http://127.0.0.1:8000/CheckUserName/", Data).then(async (d) => {
      await axios.post("http://127.0.0.1:8000/UserCheck/", Data).then((d) => {
          if (d.data.Message) { 
             localStorage.setItem('username', Uname)
             localStorage.setItem('Password', pass)
             localStorage.setItem('id',Number(d.data.Message))
             navigate('/Das')

        }
        else {
          setPPop(true)
        }
      }).catch((e) => {

      })
    }).catch((e) => {
      SetUPop(true)
    })


  }
  return (
    <>
      <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        {/* <h1 className='mt-5 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>Login Here</h1> */}
        {/* <form onSubmit={(e) => {
          e.preventDefault()
          HanleSubmit()
        }} className='form-group shadow-lg mt-2' style={{  borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

          <div className='mt-4 mx-3'>
            <label htmlFor="ml" className='form-label text-warning'>Enter Your Username  <span style={{ color: 'red' }}>*</span></label>
            <input type="text" className='form-control' placeholder='Enter Your UserName' name='ml' id='ml' ref={Email} required />
          </div>

          <div className='mt-4 mx-3'>
            <label className='form-label text-warning' htmlFor="pw">Enter Your Password <span style={{ color: 'red' }}>*</span></label>
            <input type="password" className='form-control' name="pw" ref={Pass} required placeholder='Enter password' />
          </div>

          <div className='text-center mb-2'>
            <input type="submit" value="Login" className='btn btn-primary mt-4' />
          </div>

          <div className='mx-3'>
            <h6 className='text-success ml-2 mb-2'>Don't have an account? <span style={{ cursor: 'pointer' }} className='text-light' onClick={() => { navigate('/Reg') }}>Register here</span></h6>
            <h6 className='text-success ml-2 mb-2'>Reset Password?<span className='text-primary' style={{ cursor: 'pointer' }} onClick={() => { navigate('/For') }}>ForgetPassword</span></h6>
          </div>
        </form> */}
        
        <form action="" className='card p-3 ' style={{borderRadius:'10px',boxShadow:'0px 5px 10px 15px lightgray'}} onSubmit={(event)=>{
                 event.preventDefault();
                 HanleSubmit();
              }}>
            <h6 className='ml-auto mr-auto ltext'>Login</h6>
           <div className=' mt-3'>
            <label htmlFor="" className='form-label text-dark latext'>username</label>
            <input type="text" required name="" id=""  ref={Email}  className='form-control ' style={{background:'rgb(0,0,0,0)',color:'black',fontSize:'16px'}}  placeholder='Enter valid username' />
          </div>
          <div className='mt-3 mb-2 '>
            <label htmlFor="" className='form-label text-dark latext'>Password</label>
            <input type="password" required name="" id="" ref={Pass}  style={{background:'rgb(0,0,0,0)',color:'black',fontSize:'16px'}} className='form-control' placeholder='Enter valid password' />
          </div>
          <div className='text-center mb-2'>
              <input type="submit" value="Login"  className='btn btn-primary mt-4' />
          </div>
          <div className='mx-3'>
            <h6 className='text-success  mb-2'>Don't have an account? <span style={{ cursor: 'pointer' }} className='text-dark' onClick={() => { navigate('/Reg') }}>Register here</span></h6>
            <h6 className='text-success  mb-2'>Reset Password?<span className='text-danger' style={{ cursor: 'pointer' }} onClick={() => { navigate('/For') }}>ForgetPassword</span></h6>
          </div>
           </form>
      </div>
      {UPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '10px' }}>
          <div className=' shadow-lg p-3' style={{ borderRadius: '15px',backgroundColor:'lightgray' }}>
            <div className='col-12 d-flex flex-row justify-content-end '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                SetUPop(false)

              }} style={{ fontSize: '20px', borderRadius: '10px' }}></i>

            </div>
            <span className='text-dark upop p-5'>Please enter valid UserName</span>
          </div>
        </div>
      </>}
      {PPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '10px', borderRadius: '30px' }}>
          <div className='shadow-lg p-3' style={{ borderRadius: '15px' }}>
            <div className='col-12 d-flex flex-row justify-content-end '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                setPPop(false)

              }} style={{ fontSize: '20px', borderRadius: '20px' }}></i>

            </div>
            <span className='text-dark ppop p-5'>please enter valid password</span>
          </div>
        </div>
      </>}

    </>
  )
}

export default Login