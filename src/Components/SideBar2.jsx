import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar2 = ({ Condition1, ShowSide2 }) => {
    const navigate = useNavigate()
    const [isFixed, setIsFixed] = useState(false);

    const HandleLogout = () => {
        localStorage.removeItem('username')
        navigate('/')
    }
    const Click = () => {

        ShowSide2()
    }

    return (
        <>
            {/* / <div className=' col-10 col-sm-7 col-md-6 col-lg-5 col-xl-3 text-dark d-flex flex-column justify-content-evenly' style={{ height: '100vh', background: '#EACCD4' }}>
               
                <div className='d-flex flex-column justify-content-between ' >
                    <a className="nav-link text-white mt-5 text-dark" onClick={() => navigate("/Das")} href="#"  style={{ fontSize: '15px' }} >Home</a>
                    <a className="nav-link text-white mt-5 text-dark" onClick={() => navigate("/Add")} href="#" style={{ fontSize: '15px' }}>Add Product</a>
                    <a className="nav-link text-white mt-5 text-dark" onClick={() => navigate("/Mod")} href="#" style={{ fontSize: '15px' }}>Update</a>

                <a style={{ position: 'relative', fontSize: '15px' }} className=" mt-5 text-dark nav-link dropdown-toggle text-white" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                    Settings
                </a>
                <div className="dropdown-menu " style={{ position: 'absolute' }}>
                    <a className="dropdown-item text-dark" onClick={() => { Condition1('Pass') }} href="#" style={{ fontSize: '15px' }}>Change Password</a>
                    <a className="dropdown-item text-dark" onClick={() => { Condition1('User') }} href="#" style={{ fontSize: '15px' }}>Change Username</a>
                    <a className="dropdown-item text-dark" href="#" style={{ fontSize: '15px' }} onClick={HandleLogout} >Logout</a>
                    <div className="dropdown-divider"></div>
                </div>
                <a className="nav-link text-dark mt-5" onClick={() => navigate("/Ord")} href="#" style={{ fontSize: '15px' }}>Your Orders</a>
                <a className="nav-link text-dark mt-5" onClick={() => navigate("/Cust")} href="#" style={{ fontSize: '15px' }}>Customer Details</a>
                <a className="nav-link text-dark mt-5" onClick={() => navigate("/Cupon")} href="#" style={{ fontSize: '15px' }}>Add Coupon Code</a>
                </div>
            </div> */}
            <div className=' col-6 col-md-4 col-lg-3 col-xl-3' style={{ height: '100vh', position: 'fixed', background: 'white' }} >
                <div style={{ position: 'absolute', top: '10px', right: '30px' }}>
                    <i class="fa-solid fa-xmark text-danger bg-primary text-dark p-1 btn " onClick={Click} style={{ borderRadius: '50px' }}></i>
                </div>
                <div className='d-flex-column' style={{ overflow: 'hidden' }}>
                    <div className='d-flex flex-row  mt-5 ml-2' style={{ cursor: 'pointer' }} onClick={() => navigate("/Das")}>
                        <i class="fa-solid fa-gauge mt-2" style={{ fontSize: '20px' }}></i>
                        <span className={` ml-3 mt-2 `} >DashBoard</span>
                    </div>
                    <div className='d-flex flex-row   mt-4  ml-2' style={{ cursor: 'pointer' }} onClick={() => navigate("/Add")}>
                        <i class="fa-solid fa-plus mt-4 " style={{ fontSize: '20px' }}></i>
                        <span className={` ml-3 mt-4 `} >Add Products</span>
                    </div>
                    <div className='d-flex flex-row   mt-3 ml-2' style={{ cursor: 'pointer' }} onClick={() => navigate("/Mod")}>
                        <i class="fa-regular fa-pen-to-square mt-4" style={{ fontSize: '20px' }}></i>
                        <span className={` ml-3 mt-4 `} >Update</span>
                    </div>
                    <div className='d-flex flex-row   mt-3 ml-2' style={{ cursor: 'pointer' }} >
                        <i class="fa-solid fa-layer-group mt-4" style={{ fontSize: '20px' }}></i>
                        <span style={{ position: 'relative', fontSize: '15px' }} className={` Hov mt-4 nav-link dropdown-toggle text-dark`} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Orders
                        </span>
                        <div className="dropdown-menu" style={{ position: 'absolute' }}>
                            <a className='ml-auto mr-auto mt-1 dropdown-item Hov' onClick={() => navigate("/Ord")} style={{ fontSize: '15px' }}>Your Orders</a>
                            <a className="dropdown-item Hov" onClick={() => navigate("/Can")} style={{ fontSize: '15px' }}>Canceled Orders</a>
                        </div>
                    </div>
                    <div className='d-flex flex-row   mt-3 ml-2' style={{ cursor: 'pointer' }} onClick={() => navigate("/Cust")}>
                        <i class="fa-solid fa-users mt-4" style={{ fontSize: '20px' }}></i>
                        <span className={` ml-3 mt-4 `} >Customer Details</span>
                    </div>
                    <div className='d-flex flex-row   mt-3 ml-2' style={{ cursor: 'pointer' }} onClick={() => navigate("/Cupon")}>
                        <i class="fa-solid fa-money-bill mt-4 " style={{ fontSize: '20px' }}></i>
                        <span className={` ml-3 mt-4 `} >Cupon Code</span>
                    </div>
                    <div className='d-flex flex-row   mt-3 ml-2'>
                        <i class="fa-solid fa-gear mt-4" style={{ fontSize: '20px' }}></i>
                        {/* <span className={` ml-3 `} >Settings</span> */}
                        <span style={{ position: 'relative', fontSize: '15px' }} className={` mt-3 nav-link dropdown-toggle text-dark `} href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Settings
                        </span>
                        <div className="dropdown-menu" style={{ position: 'absolute' }}>
                            {/* <a className="dropdown-item" onClick={() => { Condition1('Pass') }} href="#" style={{ fontSize: '15px' }}>Change Password</a>
                            <a className="dropdown-item" onClick={() => { Condition1('User') }} href="#" style={{ fontSize: '15px' }}>Change Username</a> */}
                            <a className="dropdown-item" onClick={() => {
                                localStorage.removeItem('username')
                                navigate('/Login')
                            }} href="#" style={{ fontSize: '15px' }}>Logout</a>
                            <div className="dropdown-divider"></div>
                        </div>
                    </div>

                </div>

            </div>
            {/* onClick={() => navigate("/Cupon")} */}
            {/* <i class="fa-solid fa-money-bill"></i> */}





        </>

    );
};

export default Sidebar2;


