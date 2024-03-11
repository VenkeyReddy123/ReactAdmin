import React, { useEffect, useState } from 'react'
import { Details } from './DasBoard/RiviewDetails'
import Sidebar from './Sidebar'
import Navbar from '../Navbar'
import axios from 'axios'
import './Orders.css'

const CustemorDetail = () => {
  const [pw, setpw] = useState('')
  const [rpw, setrpw] = useState('')
  const [un, setun] = useState('')
  const [run, setrun] = useState('')
  const [Con1, setCon] = useState(false)
  const [orders, setOrders] = useState([])
  const Data = Details
  const Condition1 = () => {

    setCon(!Con1)
  }
  const HandlePassword = (e) => {
    e.preventDefault()
    if (pw.length > 1) {
      if (pw === rpw) {
        const Data = {
          'pk': Number(localStorage.getItem('id')),
          'password': pw
        }
        axios.patch("http://127.0.0.1:8000/UserDetails/", Data).then((d) => {
          alert("Password CHanged Sucessfully")
        }).catch((e) => {
          alert('Please Try Again LAter ')
        })
      }
      else {
        alert('Password are not matched')
      }
    }
    Condition1()


  }
  // 
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/OrderDispalyDetails/").then((d) => {
      const Filter = d.data.filter((e) => {
        return e.Order_Id.username === Number(localStorage.getItem('id'))
      })
      setOrders(Filter)

    }).catch((e) => {
      alert('Please Try Again LAter ')
    })
  }, [])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Sidebar Condition1={Condition1} />
      </div>
      <div className='text-center'>
        <h6 className='d-inline-block p-2 text-primary bg-dark mt-5 shadow' >Custemor Details</h6>
      </div>
      <div className='div ml-4 mt-5'>
        <div className="admin-orders">
          <div className="admin-orders-container">
            {orders.map(order => (
              <div key={order.order_id} className="admin-order-row">
                <div className="admin-order-row-scroll">
                  <table className="admin-order-table">
                    <thead>
                      <tr>
                        <th>Order_iD</th>
                        <th>Custemers</th>
                        <th>Email</th>
                        <td>Quantity</td>
                        <td>Total Price</td>
                        <th>City</th>
                        <th className='col-2'>State</th>
                        <th className='col-2'>House Details</th>
                        <th className='col-2'>Road Details</th>
                        <th>Order Date</th>
                        <th>Order Time</th>
                      </tr>
                    </thead>
                    <tbody style={{ background: '', color: '' }} >
                      <tr key={order.Order_Id.Order_Id} style={{ overflowx: 'auto' }}>
                        <td>{order.Order_Id.Order_Id}</td>
                        <td>{order.Custamer_Name.Custamer_Name}</td>
                        <td>{order.Custamer_Name.Email}</td>
                        <td>{order.Quantity}</td>
                        <td>{order.Quantity * order.Order_Id.Product_Name.Price}</td>
                        <td>{order.City}</td>
                        <td >{JSON.parse(order.Adress).State}</td>
                        <td >House:-{JSON.parse(order.Adress).House}</td>
                        <td >Road:-{JSON.parse(order.Adress).Road}</td>
                        <td>{new Date(order.Order_Id.Date).toLocaleDateString()}</td>
                        <td>{new Date(order.Order_Id.Date).toLocaleTimeString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
        {Con1 && <>
          <div className='col-sm-5   card bg-primary' style={{ position: 'absolute', top: '105px', right: '10px', overflow: 'hidden' }}>
            <h6 className='text-center mt-2'>Password Change</h6>
            <form onSubmit={HandlePassword}>
              <input type="password" onChange={(e) => { setpw(e.target.value) }} placeholder='Enter New Password' className='form-control ml-2 mr-2 p-2 mb-2 mt-3' />
              <input type="password" onChange={(e) => { setrpw(e.target.value) }} placeholder='Enter  AgainNew Password' className='form-control ml-2 mr-2 mb-2' />
              <div className='text-center mb-2'>
                <input type="submit" value={'Change Password'} className='btn btn-warning ' />
              </div>
            </form>
          </div>
        </>}
      </div>
      {Con1 && <>
        <div className='col-sm-5   card bg-primary' style={{ position: 'absolute', top: '105px', right: '10px', overflow: 'hidden' }}>
          <h6 className='text-center mt-2'>Password Change</h6>
          <form onSubmit={HandlePassword}>
            <input type="password" onChange={(e) => { setpw(e.target.value) }} placeholder='Enter New Password' className='form-control ml-2 mr-2 p-2 mb-2 mt-3' />
            <input type="password" onChange={(e) => { setrpw(e.target.value) }} placeholder='Enter  AgainNew Password' className='form-control ml-2 mr-2 mb-2' />
            <div className='text-center mb-2'>
              <input type="submit" value={'Change Password'} className='btn btn-warning ' />
            </div>
          </form>
        </div>
      </>}


    </>
  )
}

export default CustemorDetail