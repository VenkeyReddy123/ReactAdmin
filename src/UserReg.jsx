import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Components/User.css'

const UserReg = () => {
  const navigate = useNavigate()
  const Uname = useRef(null)
  const Fname = useRef(null)
  const Lname = useRef(null)
  const Email = useRef(null)
  const [MNo, SetMNo] = useState(null)
  const Pass = useRef(null)
  const RPass = useRef(null)
  const IRef = useRef(null)
  const [UPop, SetUPop] = useState(false)
  const [PPop, setPPop] = useState(false)
  const [MPop, SetMPop] = useState(false)

  async function HanleSubmit() {
    console.log('bye')
    const uname = Uname.current.value;
    const fname = Fname.current.value;
    const lname = Lname.current.value;
    const email = Email.current.value;
    const pass = Pass.current.value;
    const rpass = RPass.current.value;
    const image = IRef.current.files[0];
    if (String(MNo).length != 10) {
      SetMPop(true)
      return
    }

    if (pass === rpass) {
      const Data = {
        'username': uname,
        'firstname': fname,
        'lastname': lname,
        'email': email,
        'password': pass
      };


      await axios.post("http://127.0.0.1:8000/CheckUserName/", Data).then(async (d) => {
        SetUPop(true)
      }).catch(async (e) => {
        await axios.post("http://127.0.0.1:8000/UserDetails/", Data)
          .then(async response => {
            const Data2 = {
              'username': response.data.id,
              'Profile_Pic': image
            };
            await axios.post("http://127.0.0.1:8000/ProfileDetails/", Data2, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(d => {

              const ImgData = {
                "pk": d.data.id,
                "Profile_Pic": d.data.Profile_Pic
              }

              axios.patch("http://127.0.0.1:8000/ProfileDetails/", ImgData).then((d) => {
                navigate("/")
              }).catch((e) => {

              })


            })
              .catch(error => {




              })

          })
          .catch(error => {

            alert('Please try Agin Later u')
          });


      })


    } else {
      setPPop(true)
    }
  }


  return (
    <>
      <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>

        <div className='d-flex flex-row justify-content-center col-12 p-3 '>
          <div className='card mt-auto mb-auto col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7  shadow' style={{ height: '100%' }}>
            <span className='ml-auto mr-auto  ty2'>Register</span>
            <form action="" onSubmit={(e) => {
              e.preventDefault()
              HanleSubmit()

            }}>
              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="fn" className='col-sm-5 col-md-4 ty'>UserName<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className='form-control' placeholder='Enter Your username' id='fn' name='fn' ref={Uname} required />
              </div>
              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="fn" className='form-label col-sm-5 col-md-4 ty'>First Name <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className='form-control' placeholder='Enter Your First Name' id='fn' name='fn' ref={Fname} required />
              </div>

              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Last Name <span style={{ color: 'red' }}>*</span></label>
                <input type="text" className='form-control' placeholder='Enter Your Last Name' id='ln' name='ln' ref={Lname} required />
              </div>

              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Enter  Mail<span style={{ color: 'red' }}>*</span></label>
                <input type="email" className='form-control' placeholder='Enter Your mail' name='ml' id='ml' ref={Email} required />
              </div>

              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Enter  Mobile No<span style={{ color: 'red' }}>*</span></label>
                <input type="number" className='form-control' placeholder='Enter Your mobile Number' name="mn" id="mn" onChange={(e) => {
                  SetMNo(e.target.value)
                }} required />
              </div>

              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Enter  Password<span style={{ color: 'red' }}>*</span></label>
                <input type="password" className='form-control' placeholder='Enter password' name="pw" id="pw" ref={Pass} required />
              </div>
              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Enter Again Password<span style={{ color: 'red' }}>*</span></label>
                <input type="password" className='form-control' placeholder='Enter Regain Password' name="rpw" id="rpw" ref={RPass} required />
              </div>
              <div className='col-12 d-flex flex-column d-sm-flex flex-sm-row mt-4'>
                <label htmlFor="mn" className='form-label col-sm-5 col-md-4 ty'>Select Image<span style={{ color: 'red' }}>*</span></label>
                <input type="file" className='form-control-file' ref={IRef} required />
              </div>
              <div className='text-center mt-4 p-2'>
                <input type="submit" value="Create New Account" className='btn text-light mb-2 mt-2 p-2 bg-danger' />
              </div>
            </form>
          </div>
        </div>

      </div>
      {UPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '50vh' }}>
          <div className='  shadow-lg p-2 bg-primary' style={{ borderRadius: '10px', background: '' }}>
            <div className='col-12 d-flex flex-row justify-content-end p-2 '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                SetUPop(false)

              }} style={{ fontSize: '20px', borderRadius: '10px' }}></i>

            </div>
            <span className='text-light p-4'>This UserName Already Registerd Please Enter Another</span>
          </div>
        </div>
      </>}
      {PPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '50vh', borderRadius: '30px' }}>
          <div className='   p-2' style={{ borderRadius: '15px', backgroundColor: 'gray' }}>
            <div className='col-12 d-flex flex-row justify-content-end p-2 '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                setPPop(false)

              }} style={{ fontSize: '20px', borderRadius: '20px' }}></i>

            </div>
            <span className='text-light p-4'>please enter  password and RePassword Same</span>
          </div>
        </div>
      </>}
      {MPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '50vh' }}>
          <div className=' bg-success p-2' style={{ background: '', borderRadius: '15px' }}>
            <div className='col-12 d-flex flex-row justify-content-end p-2 ' >
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                SetMPop(false)

              }} style={{ fontSize: '25px', borderRadius: '20px' }}></i>

            </div>
            <span className='text-white p-4'>Please Enter 10 digits of your number</span>
          </div>
        </div>
      </>}

    </>
  )
}

export default UserReg