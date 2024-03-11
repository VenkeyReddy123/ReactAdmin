import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forget = () => {
    const navigate = useNavigate()
    const [User, setUser] = useState(true)
    const [Otp, setOtp] = useState(false)
    const [Pass, setPass] = useState(false)
    const [un, setun] = useState('')
    const [otp, setotp] = useState(0)
    const [npw, setnpw] = useState('')
    const [napw, setnapw] = useState('')
    const HandleSendOtp = () => {
      const  Data = { 'username': un }
        axios.post(" http://127.0.0.1:8000/OtpDetails/", Data).then((d) => {
            alert('Otp Sended')
            localStorage.setItem('otp',d.data.Message)
            localStorage.setItem('username',un)
            setUser(!User)
            setOtp(!Otp)
        }).catch((e) => {
            alert("Invalid User")
        })

    }
    const HandleRecivedOtp = () => {
        if(otp==Number(localStorage.getItem('otp'))){
            setOtp(!Otp)
            setPass(!Pass)
        }
        else{
            alert('InValid Otp')
        }
        
    }
    const HandleChangePassword = () => {
        if(npw===napw){
            const Data={
                "username":String(localStorage.getItem('username')),
                "password":npw
            }
            axios.patch("http://127.0.0.1:8000/ForgetDetails/",Data).then((d)=>{
                alert('CHnaged Success Fully')
                navigate("/")
            }).catch((e)=>{
                alert('Please Try Again')
            })
        }
        else{
            alert('Passwords Are Not MAtched')
        }
       
    }
    return (
        <>
            <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundImage: `url('https://t4.ftcdn.net/jpg/05/72/54/67/360_F_572546714_2mn39TUv2f5Lmg7JRT9yvSkuTJERGyg8.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                {User &&

                    <form onSubmit={(e) => {
                        e.preventDefault()
                        HandleSendOtp()


                    }} className='form-group text-center shadow-lg' style={{ background: 'light', borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

                        <div className='mt-4 mx-3'>
                            <label htmlFor="ml" className='form-label text-warning'>Enter Your Username  <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" className='form-control' onChange={(e) => { setun(e.target.value) }} placeholder='Enter Your Username' name='ml' id='ml' required />
                        </div>
                        <span className='text-danger'>You Can Recive Otp Registed Email </span>


                        <div className='text-center mb-2'>
                            <input type="submit" value="Send Otp" className='btn btn-primary mt-2' />
                        </div>
                    </form>
                }


                {/* Otp Sending */}

                {Otp && <form onSubmit={(e) => {
                    e.preventDefault()
                    HandleRecivedOtp()


                }} className='form-group text-center shadow-lg' style={{ background: '#004646', borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

                    <div className='mt-4 mx-3'>
                        <label htmlFor="ml" className='form-label text-warning'>Enter OTP<span style={{ color: 'red' }}>*</span></label>
                        <input type="number" className='form-control' onChange={(e) => { setotp(e.target.value) }} placeholder='Enter Your Otp' name='ml' id='ml' required />
                    </div>
                    <span className='text-danger'>You Can Recive Otp Registed Email </span>


                    <div className='text-center mb-2'>
                        <input type="submit" value="Submit Otp" className='btn btn-primary mt-2' />
                    </div>
                </form>}






                {/* Password */}
                {Pass && <form onSubmit={(e) => {
                    e.preventDefault()
                    HandleChangePassword()


                }} className='form-group shadow-lg mt-2' style={{ background: '#004646', borderRadius: '50px', maxWidth: '400px', width: '90%' }}>

                    <div className='mt-4 mx-3'>
                        <label htmlFor="ml" className='form-label text-warning'>Enter New Password  <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" onChange={(e) => { setnpw(e.target.value) }} className='form-control' placeholder='Enter New Password' name='ml' id='ml' required />
                    </div>

                    <div className='mt-4 mx-3'>
                        <label className='form-label text-warning' htmlFor="pw">Enter Again Password <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" className='form-control' onChange={(e) => { setnapw(e.target.value) }} name="pw" required placeholder='Enter AGain Password' />
                    </div>

                    <div className='text-center mb-2'>
                        <input type="submit" value="ChangePassword" className='btn btn-primary mt-4' />
                    </div>
                </form>}


            </div>
        </>
    )
}

export default Forget