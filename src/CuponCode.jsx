import React, { useRef, useState } from 'react';
import axios from 'axios';
import Sidebar from './Components/Sidebar';
import Navbar from './Navbar';

const CouponCode = () => {
  const codeNameRef = useRef(null);
  const codeOffRef = useRef(null);
  const expireDateRef = useRef(null);
  const limitRef = useRef(null);
  const [Dtype, setDype] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      username: Number(localStorage.getItem('id')),
      Code_Name: codeNameRef.current.value,
      Discount_Type: Dtype,
      Code_Off: codeOffRef.current.value,
      ExpireDate: expireDateRef.current.value,
      Limit: limitRef.current.value,
    };
    alert(Dtype)

    try {
      await axios.post('http://127.0.0.1:8000/CuponCodeDetails/', formData);
      alert('Coupon created successfully!');
      e.target.reset();
    } catch (error) {
      alert('Error creating coupon');
      console.error(error);
    }
  };
  const [pw,setpw]=useState('')
  const[rpw,setrpw]=useState('')
  const [un,setun]=useState('')
  const[run,setrun]=useState('')
  const[Con2,setCon2]=useState(false)
  const[Con1,setCon]=useState(false)


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
    Condition3()
    
     
  }

  return (
    <>
      <div>
         <Navbar/>
      </div>
      <div className='bg-dark'>
          
           <Sidebar Condition1={Condition1}/>
        
   
      <div className='vh-100' style={{ marginTop: '-0px', backgroundImage: `url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMDktYWV3LTAxM18xXzEuanBn.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div style={{ maxWidth: '500px', margin: 'auto', }}>
          <h2 className='text-white'>Create Coupon</h2>
          <form className='ml-2 mt-5 ' onSubmit={handleSubmit} style={{ background: 'red' }}>
            <div style={{ marginBottom: '10px' }}>
              <label className='ml-2 '>Code Name:</label>
              <input className='ml-2 ' type="text" ref={codeNameRef} required style={{ width: '90%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label className='ml-2 '>Discount Type:</label>
              <select onChange={(event) => {
                const selectedValue = event.target.value;
                setDype(selectedValue);
              }}>
                <option value="Discount">Discount</option>
                <option value="Fixed Amount">Fixed Amount</option>
              </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label className='ml-2 '>Discount Amount:</label>
              <input className='ml-2 ' type="number" ref={codeOffRef} required style={{ width: '90%' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label className='ml-2 '>Expiry Date:</label>
              <input className='ml-2 ' type="date" ref={expireDateRef} required style={{ width: '90%' }} />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label className='ml-2 '>Limit:</label>
              <input className='ml-2 ' type="number" ref={limitRef} required style={{ width: '90%' }} />
            </div>
            <button className='ml-2 mb-2 ' type="submit" style={{ width: '90%', padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Create Coupon</button>
          </form>
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
      </div>
    </>
  );
};

export default CouponCode;
