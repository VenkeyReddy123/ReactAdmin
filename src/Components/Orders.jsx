import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../Navbar'
import Sidebar2 from './SideBar2'
import Dsidebar from './Dsidebar'
import { Bar } from 'react-chartjs-2';
import Profile from './Profile';
const DataTable = ({ data }) => {
    const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const containerRef = useRef(null)
    const [scrollStep, setScrollStep] = useState(50)

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {


        if (searchTerm) {
            const Value = searchTerm
            const filteredResults = data.filter(order => {
                if (order.Custamer_Name.Custamer_Name.toLowerCase().includes(Value.toLowerCase()) || String(order.Order_Id.Order_Id).includes(Value)
                    || order.City.toLowerCase().includes(Value) || JSON.parse(order.Adress).State.toLowerCase().includes(Value)
                    || String(order.Order_Id.Product_Name.Price).includes(Value)
                    || String(order.Order_Id.Product_Name.Product_Name.toLocaleLowerCase()).includes(Value.toLocaleLowerCase())
                    || String(new Date(order.Order_Id.Date).toLocaleDateString()).includes(Value)) {
                    return order
                }
            });
            setFilteredData(filteredResults.slice().reverse());
        } else {
            setFilteredData(data.slice().reverse())
        }

    }, [searchTerm, data]);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    const currentItems = filteredData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleItemsPerPageChange = (value) => {
        setItemsPerPage(value);
        setCurrentPage(1); // Reset to first page when items per page changes
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const PaymentStatus = (order) => {
        const Data = {
            'Order_Id': order.Order_Id.Order_Id,
            "Payment_Status": "Compleate"
        }
        axios.patch("http://127.0.0.1:8000/OrderDetails/", Data).then((d) => {

            window.location.reload()
        }).catch((e) => {

        })
    }
    const AdminSide = (order) => {
        const Data = {
            'Order_Id': order.Order_Id.Order_Id,
            "AdminWrite": "the order has not been delivered on the admin side"
        }
        axios.patch("http://127.0.0.1:8000/OrderDetails/", Data).then((d) => {
            window.location.reload()
        }).catch((e) => {

        })
    }
    const DelivaryStatus = (order) => {
        const Data = {
            'Order_Id': order.Order_Id.Order_Id,
            "Delivary": "Yes",
            "Delivary_Date": new Date(),
            "Payment_Status": "Compleate"
        }
        axios.patch("http://127.0.0.1:8000/OrderDetails/", Data).then((d) => {
            window.location.reload()
        }).catch((e) => {

        })
        const data = {
            'Orderid': order.Order_Id.Order_Id,
            "ODate": new Date(order.Order_Id.Date).toLocaleDateString(),
            "DDate": new Date().toLocaleDateString(),
            "Quant": order.Quantity,
            "Email": order.Custamer_Name.Email
        }
        axios.post("http://127.0.0.1:8000/SendingEmailDelivaried/", data).then((d) => {
        }).catch((e) => {
        })
    }
    const handleScroll = (direction) => {
        const container = containerRef.current;
        if (!container) return;

        const scrollStep = 150; // Adjust as needed
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (direction === 'right') {
            
            container.scrollTo({
                left: container.scrollLeft + scrollStep,
                behavior: 'smooth',
            });
          
        } else if (direction === 'left') {
            container.scrollTo({
                left: container.scrollLeft - scrollStep,
                behavior: 'smooth',
            });
        }
    };


    return (
        <div className="" style={{ overflowX: 'auto',scrollbarWidth:'none' }}>
            <div className='d-flex flex-row justify-content-around'>
                <input type="text" className="col-8 col-md-6 mb-2 ml-auto mr-auto mt-auto mb-auto form-control" placeholder="Search by Id or Name" value={searchTerm} onChange={handleSearchChange} />
                <div className='d-none d-md-block'>
                    <select className="" value={itemsPerPage} onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select><small className='mt-auto mb-auto'>Select  Pages</small>
                </div>
            </div>
            <div className='d-flex flex-row col-12 mt-2'>
                <div className='d-block d-md-none ml-2'>
                    <select className="" value={itemsPerPage} onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select><small className='mt-auto mb-auto'>Select  Pages</small>
                </div>
                <ul className="pagination ml-auto  ">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='col-12 d-flex flex-row justify-content-end'>

                <div className=''>
                    <span className='btn btn-success mr-3' onClick={() => handleScroll('left')}   ><i class="fa-solid fa-angles-left"></i></span>
                    <span className='btn btn-warning ml-2' onClick={() => handleScroll('right')} ><i class="fa-solid fa-angles-right"></i></span>
                </div>
            </div>
            <div className="container" style={{ overflowX: 'auto',scrollbarWidth:'none' }} ref={containerRef}>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <td><small>Order ID</small></td>
                            <td><small>Customer Name</small></td>
                            <td><small>State</small></td>
                            <td><small>City</small></td>
                            <td><small>House</small></td>
                            <td><small>Road</small></td>
                            <td><small>Payment Status</small></td>
                            <td><small>Product Name</small></td>
                            <td><small>Quantity</small></td>
                            <td><small>Actual_Price</small></td>
                            <td><small>Selling_Price</small></td>
                            <td><small>Cupon_Using</small></td>
                            <td><small>Delivery Type</small></td>
                            <td><small>Date</small></td>
                            <td><small>Time</small></td>
                            <td><small>Delivary</small></td>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((order, index) => (
                            <tr key={order.Order_Id.Order_Id}>
                                <td><small>{order.Order_Id.Order_Id}</small></td>
                                <td><small>{order.Custamer_Name.Custamer_Name}</small></td>
                                <td style={{ textWrap: 'nowrap' }} ><small>{JSON.parse(order.Adress).State}</small></td>
                                <td><small>{order.City}</small></td>
                                <td ><small>{JSON.parse(order.Adress).Road}</small></td>
                                <td style={{ textWrap: 'wrap' }} ><small>{JSON.parse(order.Adress).House}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{order.Order_Id.Payment_Status === 'Compleate' ? <><span className='bg-success  p-1' style={{ height: 'max-content', fontWeight: 'bold' }}>{order.Order_Id.Payment_Status}</span></> : <><span className='bg-danger btn  p-1' style={{ height: 'max-content', fontWeight: 'bold' }}>{order.Order_Id.Payment_Status}</span><span><i onClick={() => {
                                    PaymentStatus(order)
                                }} class="fa-solid fa-check ml-2 text-dark btn btn-primary p-1"></i></span></>}</small></td>
                                <td style={{ fontSize: '15px', }}><small>{order.Order_Id.Product_Name.Product_Name}</small></td>
                                <td style={{ fontSize: '15px', }}><small>{order.Quantity}</small></td>
                                <td style={{ fontSize: '15px', }}><small>{order.Order_Id.Product_Name.Price}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{order.Order_Id.Selling_Price}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{order.Order_Id.Code_Using == 0 ? <>No</> : <>{order.Order_Id.Code_Using}</>}</small></td>

                                <td style={{ textWrap: 'nowrap' }}><small>{order.Order_Id.Delivary_Type}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{new Date(order.Order_Id.Date).toLocaleDateString()}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{new Date(order.Order_Id.Date).toLocaleTimeString()}</small></td>
                                <td style={{ textWrap: 'nowrap' }}><small>{order.Order_Id.Delivary == 'No' ? <><span style={{ borderRadius: '10px' }} className={`bg-danger  ${order.Order_Id.AdminWrite ? '' : 'btn'} p-1 mt-1`} onClick={() => {
                                    if (!order.Order_Id.AdminWrite) {
                                        AdminSide(order)

                                    }
                                }} >{order.Order_Id.AdminWrite ? <><small className=''><i style={{ fontSize: '20px' }} class="fa-regular fa-circle-xmark text-light "></i></small></> : <><small>{order.Order_Id.Delivary}</small></>}</span><i onClick={() => {
                                    DelivaryStatus(order)
                                }} class="fa-solid fa-check ml-2 text-dark btn btn-primary p-1"></i></> : <><span className='bg-success btn p-2'>{order.Order_Id.Delivary}</span></>}</small></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='d-flex flex-row col-12 mt-2'>
                <div className='ml-2'>
                    <select className="" value={itemsPerPage} onChange={(e) => handleItemsPerPageChange(parseInt(e.target.value))}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select><small className='mt-auto mb-auto'>Select  Pages</small>
                </div>
                <ul className="pagination ml-auto  ">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Orders = () => {
    const [data, setData] = useState([]);
    const [Bottom, setBottom] = useState(false)

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/LCODetails/").then((response) => {
            const Filter = response.data.filter((e) => {
                return (
                    e.Order_Id.OrderCancel == 'No'
                )
            })
            setData(Filter)
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    const BottomClicked = (click) => {
        if (click) {
            setBottom(false)
            return
        }
        setBottom(!Bottom)

    }
    const [Show, setShow] = useState(false)
    const ShowSide2 = () => {
        setShow(!Show)
    }
    const [Pro, setPro] = useState(false)
    const ProF = () => {
        setPro(false)
    }
    return (
        <>
            <div className='mod' style={{ overflow: 'hidden' }}>
                <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked} />
            </div>
            <div className="container py-4" style={{ overflow: 'hidden' }}>
                <DataTable data={data} />
            </div>
            <div className='d-none d-md-block' style={{ overflow: 'hidden' }}>
                <Dsidebar />
            </div>
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

            {Show && <>

                <div style={{ position: 'absolute', top: '0px', width: '100%' }}>
                    <Sidebar2 ShowSide2={ShowSide2} />
                </div>
            </>}
        </>
    );
};

export default Orders


