import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../../Navbar';
import Sidebar2 from '../SideBar2';
import Dsidebar from '../Dsidebar';
import Profile from '../Profile';
const DataTable = ({ data }) => {
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [Pro, setPro] = useState(false)
  const containerRef=useRef(null)
  const ProF = () => {
    setPro(false)
  }

  useEffect(() => {
    setFilteredData(data.slice().reverse());
    data.slice().reverse().map((obj) => {
      console.log(obj.Order_Id.CancelDate ? 'true' : 'false')
      console.log(new Date(obj.Order_Id.CancelDate).toLocaleDateString())
    })
  }, [data]);

  useEffect(() => {


    if (searchTerm) {
      const Value = searchTerm
      const filteredResults = data.filter(order => {
        if (order.Custamer_Name.Custamer_Name.toLowerCase().includes(Value.toLowerCase()) || String(order.Order_Id.Order_Id).includes(Value)
          || order.City.toLowerCase().includes(Value) || JSON.parse(order.Adress).State.toLowerCase().includes(Value)
          || String(order.Order_Id.Product_Name.Product_Name.toLocaleLowerCase()).includes(Value.toLocaleLowerCase())
          || String(new Date(order.Order_Id.CancelDate).toLocaleDateString()).includes(Value)) {
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
  const handleScroll=(direction)=>{
   
    const container = containerRef.current;
    if (!container) return;

    if(direction=='left'){
   
          container.scrollTo({
              left:container.scrollLeft - 150,
              behavior:'smooth'
          })
    }else{
            container.scrollTo({
              left:container.scrollLeft + 150,
              behavior:'smooth'

            })
    }
  }
  return (
    <div className="">
      <div className='d-flex flex-row justify-content-around'>
        <input type="text" className=" form-control col-8 col-md-6 mb-2 ml-auto mr-auto mt-auto mb-auto" placeholder="Search by Id or Name" value={searchTerm} onChange={handleSearchChange} />
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
     <div className='continer' ref={containerRef} style={{overflow:'auto',scrollbarWidth:'none'}}>
     <table className="table table-striped mt-2">
    <thead>
        <tr>
            <td><small>Order ID</small></td>
            <td><small>CancelDate</small></td>
            <td><small>Customer Name</small></td>
            <td style={{ width: '200px' }} ><small>Product Name</small></td>
            <td></td>
            <td><small>Quantity</small></td>
        </tr>
    </thead>
    <tbody>
        {currentItems.map((order, index) => (
            <tr key={order.Order_Id.Order_Id}>
                <td><small>{order.Order_Id.Order_Id}</small></td>
                <td><small>{order.Order_Id.CancelDate && new Date(order.Order_Id.CancelDate).toLocaleDateString()}</small></td>
                <td><small>{order.Custamer_Name.Custamer_Name}</small></td>
                <td style={{ fontSize: '15px', width: '200px' }}><small>{order.Order_Id.Product_Name.Product_Name}</small></td>
                <td></td>
                <td style={{ fontSize: '15px' }}><small>{order.Quantity}</small></td>
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

const CancelOrders = () => {
  const [Data, setData] = useState([])
  const [pw, setpw] = useState('')
  const [rpw, setrpw] = useState('')
  const [un, setun] = useState('')
  const [run, setrun] = useState('')
  const [Con2, setCon2] = useState(false)
  const [Con1, setCon] = useState(false)
  const [Bottom, setBottom] = useState(false)
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/LCODetails/").then((response) => {

      const Filter = response.data.filter((e) => {
        return (
          e.Order_Id.OrderCancel == "Yes"
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
  const[Pro,setPro]=useState(false)
  const ProF=()=>{
    setPro(false)
  }
  return (
    <>
      <div className='mod'>
        <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked} />
      </div>
      <div className="container py-4">
        <DataTable data={Data} />
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
  )
}
export default CancelOrders