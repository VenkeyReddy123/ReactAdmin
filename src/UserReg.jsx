import axios from 'axios'
import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const UserReg = () => {
  const navigate=useNavigate()
    const Uname=useRef(null)
    const Fname = useRef(null)
    const Lname = useRef(null)
    const Email = useRef(null)
    const MNo = useRef(null)
    const Pass = useRef(null)
    const RPass = useRef(null)
    const IRef=useRef(null)

    function HanleSubmit() {
      console.log('bye')
        const uname = Uname.current.value;
        const fname = Fname.current.value;
        const lname = Lname.current.value;
        const email = Email.current.value;
        const pass = Pass.current.value;
        const rpass = RPass.current.value;
    
        // Get the selected file from the file input reference
        const image = IRef.current.files[0];
       console.log(image.name)
        if(pass === rpass){
            const Data = {
                'username': uname,
                'first_name': fname,
                'last_name': lname,
                'email': email,
                'password': pass
            };
    
            axios.post("http://127.0.0.1:8000/UserDetails/", Data)
                .then(response => {
                    console.log('Response:', response);
                    // Handle successful response
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error
                });
    
            const Data2 = {
                'username': uname,
                'Profile_Pic': image
            };
    
            axios.post("http://127.0.0.1:8000/ProfileDetails/", Data2,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log('Response:', response);
                    // Handle successful response
                })
                .catch(error => {
                    console.error('Error:', error);
                    // Handle error
                });
        } else {
            alert('Passwords do not match');
        }
    }
    

  return (
    <>
   <div className='container-fluid' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
  <h1 className='mt-3 text-warning'> <i className="fa-solid fa-user text-danger mr-2 rounded-circle"></i>User Registration</h1>
  <form method="POST" onSubmit={(e)=>{e.preventDefault()
   HanleSubmit()
   console.log('hii')
   navigate('/')
  }} className='form-group shadow mt-5' style={{ background: '#EDE7C7', borderRadius: '50px', maxWidth: '400px', width: '90%' }} enctype="multipart/form-data">

    <div className='mt-3 mx-3'>
      <label htmlFor="fn" className='form-label'>UserName <span style={{ color: 'red' }}>*</span></label>
      <input type="text" className='form-control' placeholder='Enter Your UserName' id='fn' name='fn' ref={Uname} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="fn" className='form-label'>First Name <span style={{ color: 'red' }}>*</span></label>
      <input type="text" className='form-control' placeholder='Enter Your First Name' id='fn' name='fn' ref={Fname} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="ln" className='form-label'>Last Name <span style={{ color: 'red' }}>*</span></label>
      <input type="text" className='form-control' placeholder='Enter Your Last Name' id='ln' name='ln' ref={Lname} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="ml" className='form-label'>Enter Your Mail <span style={{ color: 'red' }}>*</span></label>
      <input type="email" className='form-control' placeholder='Enter Your mail' name='ml' id='ml' ref={Email} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="mn" className='form-label'>Enter Your Mobile No. <span style={{ color: 'red' }}>*</span></label>
      <input type="number" className='form-control' placeholder='Enter Your mobile Number' name="mn" id="mn" ref={MNo} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="pw" className='form-label'>Enter Your Password <span style={{ color: 'red' }}>*</span></label>
      <input type="password" className='form-control' placeholder='Enter password' name="pw" id="pw" ref={Pass} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="rpw" className='form-label'>Enter Again Password <span style={{ color: 'red' }}>*</span></label>
      <input type="password" className='form-control' placeholder='Enter Regain Password' name="rpw" id="rpw" ref={RPass} required />
    </div>

    <div className='mt-3 mx-3'>
      <label htmlFor="image" className='form-label'>Select Image <span style={{ color: 'red' }}>*</span></label>
      <input type="file" className='form-control-file' ref={IRef} required />
    </div>

    <div className='text-center mt-4'>
      <input type="submit" value="Register" className='btn btn-primary' />
    </div>
  </form>
</div>

</>
  )
}

export default UserReg