import axios from "axios"
import React, { useEffect, useState } from "react"
import Navbar from "../Navbar"
import Sidebar2 from "./SideBar2"
import Dsidebar from "./Dsidebar"
import Profile from "./Profile"
import './Dash.css'

const Update = () => {
    const [Data, setData] = useState([])
    const [Expired, setExpired] = useState([])

    const Paid = 'lightgreen'
    const Failed = 'pink'
    const [orders, setData2] = useState([])
    const [pw, setpw] = useState('')
    const [rpw, setrpw] = useState('')
    const [un, setun] = useState('')
    const [run, setrun] = useState('')
    const [Con2, setCon2] = useState(false)
    const [Con1, setCon] = useState(false)
    const [Bottom, setBottom] = useState(false)
    const [CEdit, SetCEdit] = useState(false)
    const [CPon, SetCPon] = useState({})
    const [N, setN] = useState(null)
    const [CO, SetCO] = useState(null)
    const [Dt, SetDt] = useState(null)
    const [L, SetL] = useState(null)
    const [ED, SetED] = useState(null)
    const [Pro, setPro] = useState(false)
    const ProF = () => {
        setPro(false)
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/CuponCodeDetails/',).then((d) => {

            const TDate = new Date()
            const Filter = d.data.filter((e) => {
                const EDate = new Date(e.ExpireDate)
                if (TDate.getFullYear() < EDate.getFullYear() ||
                    (TDate.getFullYear() === EDate.getFullYear() && TDate.getMonth() < EDate.getMonth()) ||
                    (TDate.getFullYear() === EDate.getFullYear() && TDate.getMonth() === EDate.getMonth() && TDate.getDate() < EDate.getDate())) {

                    return e;
                } else {
                    return e.Expired = 'Yes'
                }


            })
            setData(Filter)




        })
    }, [])
    const [Show, setShow] = useState(false)
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
    const [Id, setId] = useState(null)

    const EditCupon = (e) => {
        setId(e.id)

        setN(e.Code_Name)
        SetCO(e.Code_Off)
        SetDt(e.Discount_Type)
        SetL(e.Limit)
        SetED(e.ExpireDate)
        SetCEdit(true)

    }
    const handleSave = () => {
        const formData = {
            'pk': Id,
            "Code_Name": N,
            "Discount_Type": Dt,
            "Code_Off": CO,
            "ExpireDate": ED,
            "Limit": L,
        };
        axios.patch("http://127.0.0.1:8000/CuponCodeDetails/", formData).then((d) => {
            window.location.reload()
        }).catch((e) => {

        })
    }
    const handleDelete = (e) => {
        const Data = {
            'pk': e.id
        }
        axios.delete("http://127.0.0.1:8000/CuponCodeDetails/", { data: Data }).then((d) => {
            window.location.reload()
        }).catch((e) => {

        })
    }
    return (
        <>
            <div className='ml-5 ' style={{ overflow: 'hidden' }} >
                <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked} />
            </div>
            <div className=" container ml-4 mr-auto mt-1 row">
                {Data && Data.map((e) => {
                    const tday=new Date()
                    const expirationDate = new Date(e.ExpireDate)
                    const differenceMs = expirationDate - tday
                    const differenceDays = Math.ceil(differenceMs / (1000 * 60 * 60 * 24))
                    return (
                        <>

                            <div className="ml-  col-11 col-md-6 mb-3">
                                <div className={ `card ${e.Expired ? 'border-danger expi'  : 'border-primary val'}`}>
                                    <div className="card-body">
                                        <h6 className="card-title text-light">{e.Code_Name}</h6>
                                        <p className="card-text"><small className="dt">Discount Type:</small> <small className="sm">{e.Discount_Type.includes('Dis') ? 'Discount %' : 'Amount'}</small></p>
                                        <p className="card-text"><small className="dt">Discount Amount:</small> <small className="sm">{e.Code_Off} {e.Discount_Type.includes('Dis') ? '%' : 'Rupees'}</small></p>
                                        <p className="card-text"><small className="dt">ExpireDate:</small> <small className="sm">{new Date(e.ExpireDate).toLocaleDateString()}</small></p>
                                        {e.Expired && <small className="text-danger">Coupon Expired</small>}<br></br>
                                        {!e.Expired && <><small className="text-light">Your Cupon Expired in {differenceDays} days</small></>}<br></br>
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-outline-primary mr-2" onClick={() => {
                                                EditCupon(e)
                                            }}>Edit</button>
                                            <button type="button" className="btn btn-outline-danger" onClick={() => { handleDelete(e) }}>Delete</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
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
            {CEdit && <>
                <form style={{ position: 'absolute', top: '50vh', left: '10px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px' }} className="col-11 ml-3 col-md-6 mx-auto">
                    <div className='d-flex flex-row justify-content-end mt-2'>
                        <i class="fa-solid fa-xmark text-white bg-danger text-dark p-1 btn " onClick={() => {
                            SetCEdit(false)
                        }} style={{ borderRadius: '50px' }}></i>
                    </div>
                    <div className="form-group">
                        <label htmlFor="codeName" className="ml-2">Code Name:</label>
                        <input type="text" className="form-control ml-2" id="codeName" value={N} onChange={(e) => setN(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="discountType" className="ml-2">Discount Type:</label>
                        <select className="form-control ml-2" id="discountType" value={CPon.Discount_Type} onChange={(event) => SetDt(event.target.value)}>
                            <option value="">-----Select Type-----</option>
                            <option value="Discount">Discount</option>
                            <option value="Fixed Amount">Fixed Amount</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="discountAmount" className="ml-2">Discount Amount:</label>
                        <input type="number" className="form-control ml-2" id="discountAmount" value={CO} onChange={(e) => SetCO(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiryDate" className="ml-2">Expiry Date:</label>
                        <input type="date" className="form-control ml-2" id="expiryDate" value={ED} onChange={(e) => SetED(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="limit" className="ml-2">Limit:</label>
                        <input type="number" className="form-control ml-2" id="limit" value={L} onChange={(e) => SetL(e.target.value)} required />
                    </div>
                    <button type="button" className="btn btn-primary ml-2" onClick={handleSave}>Save</button>
                </form>

            </>}

        </>
    )
}
export default Update