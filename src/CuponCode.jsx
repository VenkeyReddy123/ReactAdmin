import React, { useRef, useState } from 'react';
import axios from 'axios';
import Sidebar from './Components/Sidebar';
import Navbar from './Navbar';
import Sidebar2 from './Components/SideBar2';
import Dsidebar from './Components/Dsidebar';
import Profile from './Components/Profile';

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
    try {
      await axios.post('http://127.0.0.1:8000/CuponCodeDetails/', formData);
      window.location.reload()
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
  const[Bottom,setBottom]=useState(false)
 

  const BottomClicked=(click)=>{
    if(click){
      setBottom(false)
      return 
    }
    setBottom(!Bottom)

  } 
  const [Show,setShow]=useState(false)
  const ShowSide2=()=>{
    setShow(!Show)
}
const[Pro,setPro]=useState(false)
  const ProF=()=>{
    setPro(false)
}

  return (
    <>
      <div>
         <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked}/>
      </div>
      <div className='bg-dark'>
          
          
        
   
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
                <option >--------------</option>
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
      </div>
      </div>
      <Dsidebar />
      {Show&&<>
        
        <div style={{position:'absolute',top:'0px',width:'100%'}}>
        <Sidebar2 ShowSide2={ShowSide2} />
        </div>
        </>}
        {Bottom && <>
        <div className='col-7 col-sm-5 col-md-4 col-lg-3 bg-white' style={{ position: 'absolute', top: '50px', right: '30px' }} >
          <div className='d-flex flex-row justify-content-end' onClick={() => { setBottom(!Bottom) }}>
            <i class="fa-regular fa-circle-xmark p-2 text-danger h5 " ></i>

          </div>
          <div className='d-flex flex-row justify-content-center p-1' onClick={()=>{
            setBottom(false)
            setPro(true)}}>
            <i class="fa-solid fa-user mr-3 mt-auto mb-auto"></i><span span style={{ fontSize: '20px',cursor:'pointer' }}>Profile</span>
          </div>
          <div className='d-flex flex-row justify-content-center p-1 mb-2 '>
            <i class="fa-solid fa-power-off mr-3 mt-auto mb-auto"></i><span style={{ fontSize: '20px',cursor:'pointer' }}>Logout</span>
          </div>
        </div>
      </>}
      {Pro&&<>
        <div className='col-11 col-sm-7 col-md-5 col-lg-4 col-xl-3' style={{position:'absolute',right:'10px',top:'0px'}}>
          <Profile ProF={ProF}/>
      </div>
      </>}
    </>
  );
};

export default CouponCode;
