import React, { useEffect, useState } from 'react';
import Model from './DasBoard/Model';
import Model2 from './DasBoard/Model2';
import ProductRivie from './DasBoard/ProductRivie';
import Sidebar from './Sidebar';
import axios from 'axios';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import Sidebar2 from './SideBar2';
import '../Sidebar.css'
import Dsidebar from './Dsidebar';
import { Bar } from 'react-chartjs-2'
// import PaymentBar from './DasBoard/PaymentBar';
import PaymentBar from './DasBoard/PaymentBar'
import './Dash.css'
import Count from './Count.jsx'
import Profile from './Profile.jsx';



const Dashboard = () => {
  const [Pro, setPro] = useState(false)
  const [pw, setpw] = useState('')
  const [rpw, setrpw] = useState('')
  const [un, setun] = useState('')
  const [run, setrun] = useState('')
  const [Con1, setCon] = useState(false)
  const [Con2, setCon2] = useState(false)
  const [Show, setShow] = useState(false)
  const [Bottom, setBottom] = useState(false)
  const [OutofStack, SetOutOfStack] = useState(null)
  const [NotDelivary, setNotDelivary] = useState(null)
  const [NewOrders, setNewOrders] = useState(null)
  const [TotalOders, setTotalOrders] = useState(null)
  const [TodayMoney, SetTodayMoney] = useState(0)
  const [TotalMoney, SetTotalMoney] = useState(0)
  const navigate = useNavigate()


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/UserDetails/").then((d) => {
      const Data = d.data.filter((e) => {
        return e.username == localStorage.getItem('username')
      })
      try {
        const Obj = Data[0]
        localStorage.setItem('id', Obj.id)
      } catch {

      }

    })
    axios.get("http://127.0.0.1:8000/ProductDispalyView/")
      .then((response) => {
        const Filter = response.data.filter((e) => {
          return e.Product_Name.Stack <= 0
        })

        SetOutOfStack(Filter.length)

      })
      .catch((error) => {

      });
    axios.get("http://127.0.0.1:8000/OrderDetails/")
      .then((response) => {
        setTotalOrders(response.data.length)
        const Arr = []
        let TodayMoney = 0
        let TotalMoney = 0
        
        const TDate = new Date().toLocaleDateString()
        const Filter = response.data.filter((e) => {
          const ODate = new Date(e.Date).toLocaleDateString()

          if (String(ODate) === String(TDate)) {
            TodayMoney += Number(e.Selling_Price)
            Arr.unshift(e)
            
          }
          TotalMoney += Number(e.Selling_Price)
          return e.Delivary === 'No'

        })

        SetTodayMoney(TodayMoney)
        SetTotalMoney(TotalMoney)
        setNewOrders(Arr.length)
        
        setNotDelivary(Filter.length)

      })
      .catch((error) => {

      });

  }, [])

  const ShowSide2 = () => {
    setShow(!Show)
  }
  const BottomClicked = (click) => {
    if (click) {
      setBottom(false)
      return
    }
    setBottom(!Bottom)

  }
  const ProF = () => {
    setPro(false)
  }

  return (
    <>

      <div className='mod'>
        <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked} />
      </div>
      <div style={{ overflow: 'hidden' }} className=' mod  ' >
        <Count />
      </div>

      <div className='d-flex flex-column' style={{ overflow: 'hidden' }}>

        <div className='d-flex flex-row mod p-2  '>
          <div style={{ background: '#F5F7FA', overflow: 'hidden' }} className=' col-lg-6 p-4' >
            <Model />
          </div>
          <div className='col-lg-6 p-4 card'>

          </div>
        </div>
        <div className='d-flex flex-row '>
          <div style={{ background: '#F5F7FA', overflow: 'hidden' }} className='  mt-5  col-lg-6 '>
            <Model2 />
          </div>
        </div>

        <div className='row'>
          <div className='mod col-12 col-sm-7 col-md-6 col-lg-5 col-xl-5 ' style={{ overflow: 'hidden', textAlign: 'center' }} >
            <PaymentBar />
          </div>
          <div className='d-none d-sm-block col-sm-4 col-lg-2 col-xl-2 card bg-primary mt-auto mb-auto' style={{ height: '100%' }}>
            <div className='d-flex flex-row'>
              <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
              <div className='d-flex flex-column'>
                <small>{NewOrders && NewOrders} New Orders</small>
                <small className='text-warning' style={{ fontWeight: 'bold' }}>Awaiting Processing</small>
              </div>
            </div>
          </div>
          <div className='d-none d-sm-block col-sm-4 col-lg-2 col-xl-2 card bg-danger  mt-auto mb-auto ml-auto mr-auto' style={{ height: '100%' }}>
            <div className='d-flex flex-row'>
              <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
              <div className='d-flex flex-column'>
                <small>{NotDelivary && NotDelivary} Orders</small>
                <span className='text-white' style={{ fontWeight: 'bold' }}>On Hold</span>
              </div>
            </div>
          </div>
          <div className='d-none d-sm-block col-sm-4 col-lg-2 col-xl-2 card bg-warning mt-auto mb-auto ml-auto mr-auto' style={{ height: '100%' }}>
            <div className='d-flex flex-row'>
              <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
              <div className='d-flex flex-column '>
                <small>{OutofStack && OutofStack} Products</small>
                <span className='text-black' style={{ fontWeight: 'bold' }}>out of stock</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 row p-2'>
          <div className=' mt-2 d-block d-sm-none card  bg-primary mt-auto mb-auto col-8 '>
            <div className='col-12'>
              <div className='d-flex flex-row'>
                <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
                <div className='d-flex flex-column'>
                  <small className='text-white'>{NewOrders && NewOrders} New Orders</small>
                  <small className='text-warning' style={{ fontWeight: 'bold' }}>Awaiting Processing</small>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block d-sm-none   bg-danger card mt-auto mb-auto col-8'>
            <div className='col-12'>
              <div className='d-flex flex-row'>
                <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
                <div className='d-flex flex-column'>
                  <small>{NotDelivary && NotDelivary} Orders</small>
                  <span className='text-white' style={{ fontWeight: 'bold' }}>On Hold</span>
                </div>
              </div>
            </div>
          </div>
          <div className='d-block d-sm-none card mt-2  bg-warning mt-auto mb-auto col-8'>
            <div className='col-12'>
              <div className='d-flex flex-row'>
                <div className='ml-2 mr-4' style={{ fontSize: 37 }}><i className="fa-solid fa-arrow-up-wide-short"></i></div>
                <div className='d-flex flex-column '>
                  <small>{OutofStack && OutofStack} Products</small>
                  <span className='text-black' style={{ fontWeight: 'bold' }}>out of stock</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='mod mt-2'>
          <ProductRivie />
        </div>


      </div>

      <div className='d-none d-md-block'>
        <Dsidebar />
      </div>
      {Show && <>
        <div style={{ position: 'absolute', top: '0px', width: '100%' }}>
          <Sidebar2 ShowSide2={ShowSide2} />
        </div>
      </>}
      {Bottom && <>
        <div className='col-7 col-sm-5 col-md-4 col-lg-3 bg-white' style={{ position: 'absolute', top: '50px', right: '30px' }} >
          <div className='d-flex flex-row justify-content-end' onClick={() => { setBottom(!Bottom) }}>
            <i class="fa-regular fa-circle-xmark p-2 text-danger h5 " ></i>

          </div>
          <div className='d-flex flex-row justify-content-center p-1' onClick={() => {
            setBottom(false)
            setPro(true)
          }}>
            <i class="fa-solid fa-user mr-3 mt-auto mb-auto"></i><span span style={{ fontSize: '20px', cursor: 'pointer' }}>Profile</span>
          </div>
          <div className='d-flex flex-row justify-content-center p-1 mb-2 '>
            <i class="fa-solid fa-power-off mr-3 mt-auto mb-auto"></i><span style={{ fontSize: '20px', cursor: 'pointer' }}>Logout</span>
          </div>
        </div>
      </>}
      {Pro && <>
        <div className='col-11 col-sm-7 col-md-5 col-lg-4 col-xl-3' style={{ position: 'absolute', right: '10px', top: '0px' }}>
          <Profile ProF={ProF} />
        </div>
      </>}

    </>
  );
};

export default Dashboard;
