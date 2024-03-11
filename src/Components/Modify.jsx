import React, { useEffect, useState } from 'react'
import { Details } from './DasBoard/RiviewDetails'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Category.css'
import Sidebar from './Sidebar'
import Navbar from '../Navbar'


const Modify = () => {
  const [products, setProducts] = useState([]);
  const [editedProductName, setEditedProductName] = useState("");
  const [editedPrice, setEditedPrice] = useState("");
  const [editedIndex, setEditedIndex] = useState(null); // Add this state variable
  const [editStack, setEditedStack] = useState('')
  const [editimage, setEditImage] = useState()
  const [editDiscount, setEditedDiscount] = useState()
  const [global, setGlobal] = useState([])
  const [change, setChange] = useState("")

  const handleImageChange = (event) => {

    const file = event.target.files[0];
    // Check if file size exceeds 5 MB
    if (file && file.size > 3 * 1024 * 1024) {
      alert('File size exceeds 3 MB. Please select a smaller file.');
      event.target.value = null; // Clear file input
    } else {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const desiredWidth =1000 // Desired width
          const desiredHeight =1000; // Desired height
          canvas.width = desiredWidth;
          canvas.height = desiredHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, desiredWidth, desiredHeight);

          canvas.toBlob((blob) => {
            const resizedFile = new File([blob], file.name, { type: file.type });
            setEditImage(resizedFile);
          }, file.type, 0.10); // Adjust the quality (0.7 means 70% quality)
        };
        img.src = e.target.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      }

    }


  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/ProductDispalyView/").then((d) => {
      const filteredData = d.data.filter((e) => {

        return e.Product_Name.username === Number(localStorage.getItem('id'));
      });
      setGlobal(filteredData)
      setProducts(filteredData)
    })
  }, [])

  const handleEdit = (index, productName, price, stack, Discount) => {
    setEditedIndex(index)
    setEditedProductName(productName);
    setEditedPrice(price);
    setEditedStack(stack)
    setEditedDiscount(Discount)

    // Here you can open a modal or expand the corresponding product for editing
  };

  const handleSave = (index, e) => {
    if (!editimage) {
      alert("please Select Image Path For Image ")
      return
    }
    const Data = {
      "pk": e.Product_Name.id,
      "Product_Name": editedProductName,
      "Stack": editStack,
      "Price": editedPrice,
      "Discount": editDiscount
    }
    axios.patch("http://127.0.0.1:8000/ProductDetails/", Data).then((d) => {
      const ImgData = {
        "pk": e.id,
        "P_Images": editimage
      }
      axios.patch("http://127.0.0.1:8000/ImageDetails/", ImgData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then((d) => {
        console.log(d.data)
        const ImgData = {
          "pk": d.data.id,
          "P_Images": d.data.P_Images
        }
        console.log(ImgData)

        axios.patch("http://127.0.0.1:8000/UpdateDetails/", ImgData).axios((d) => {
          alert("Success")
          return
        }).catch((e) => {
          alert("Please Try Again Later")

        })
      }).catch((e) => {
        alert("SUccess")


      })
    }).catch((e) => {
      alert('Please Try Again Later')
    })

    setEditedIndex(null); // Reset editedIndex after saving
  };

  const handleCatgerory = (type) => {
    if (type == 'All') {
      setProducts(global)
    }
    else {
      const Data = global.filter((e) => {
        return e.Product_Name.Category == type | e.Product_Name.Category_Name == type
      })
      setProducts(Data)
    }


  }
  const HandleDelete = (e) => {
    console.log(e)
    const data = {
      "pk": e.id
    }
    axios.delete("http://127.0.0.1:8000/ImageDetails/", data).then((d) => {
      alert('Success TO Delete')
    }).catch((e) => {
      alert("Please Try AGian")
    })
  }
  const [pw,setpw]=useState('')
  const[rpw,setrpw]=useState('')
  const [un,setun]=useState('')
  const[run,setrun]=useState('')
  const[Con2,setCon2]=useState(false)
  const[Con1,setCon]=useState(false)
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
    Condition1()
    
     
  }
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
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
      <div>
      <Sidebar Condition1={Condition1}/>
      </div>
      </div>
      {/* visible only large screen  */}
      <div className=' bg-dark'>
        <div className=' container-fluid d-none d-sm-block text-white'>
          <div className='d-flex flex-row justify-content-between' style={{ height: '50px', overflowX: 'hidden' }}>
            <h6 className='mt-2'>Filter By You'r Product by Catagery Wise </h6>
            <input className='ml-auto form-control  mt-1' type="text" placeholder='Search by Catagery Name' onChange={(e) => { setChange(e.target.value) }} style={{ height: '40px', borderRadius: '30px' }} />
            <button className='btn btn-primary ml-auto mr-auto mt-1' onClick={() => { handleCatgerory(change) }} style={{ height: '40px' }}>Search</button>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className='d-flex flex-row d-block d-sm-none' >
        <input className='ml-auto col-8 mt-1' type="text" placeholder='Search by Catagery Name' onChange={(e) => { setChange(e.target.value) }} style={{ height: '40px', borderRadius: '40px' }} />
        <button className='btn btn-primary ml-auto mr-auto mt-1' onClick={() => { handleCatgerory(change) }}>Search</button>
      </div>

      {/*  */}
      <div className='d-flex flex-row'>
        <div className=' d-none d-sm-none d-sm-block col-sm-5 col-md-3 bg-info vh-100' style={{ overflowY: 'auto', overflowX: 'hidden', }}>
          <div className='d-flex flex-column text-white'>
            <span className='btn text-white btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'All'
              handleCatgerory(type)
            }}>All</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Electronic'
              handleCatgerory(type)
            }}>Electronics</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Clothing'
              handleCatgerory(type)
            }}>Clothing</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Footware'
              handleCatgerory(type)
            }}>Footware</span>
            <span className='btn text-white  btn1 ' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Accessories'
              handleCatgerory(type)
            }}>Accessories</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Beauty&Person'
              handleCatgerory(type)
            }}>Beauty&Person</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Home&Kichen'
              handleCatgerory(type)
            }}>Home&Kichen</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Furniture'
              handleCatgerory(type)
            }}>Furniture</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Book,Movies&Music'
              handleCatgerory(type)
            }}>Books,Movies&Musics</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Sports'
              handleCatgerory(type)
            }}>Sports</span>
            <span className='btn text-white  btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Health'
              handleCatgerory(type)
            }}>Health</span>
            <span className='btn text-white btn1' style={{ textAlign: 'start' }} onClick={() => {
              const type = 'Toys&Games '
              handleCatgerory(type)
            }}>Toys&Games</span>
          </div>
        </div>
        <div className=' col-sm-7 col-md-10 col-lg-10 row vh-100 ' style={{ overflowY: 'auto', overflowX: 'hidden', }}>
          {products && products.map((e, index) => {
            return (
              <div className='col-sm-12 col-md-6 col-md- d-sm-flex flex-sm-column d-flex-row mt-3' key={index}>
                <div className='row'>
                  <div className='col-12 text-center'>
                    {index === editedIndex ?
                      <>
                        <input type='file' onChange={handleImageChange} capture />
                      </> : <img src={e.ImageUrl} alt="" height={'130px'} />}

                  </div>
                  <div className='col-12 text-center'>
                    {index === editedIndex ? (
                      <>
                        <input style={{ fontSize: '25px', fontWeight: 'bold', color: 'red' }} value={editedProductName} className='form-control' onChange={(e) => setEditedProductName(e.target.value)} />
                        <input style={{ fontSize: '25px', fontWeight: 'bold', }} value={editedPrice} className='form-control' onChange={(e) => setEditedPrice(e.target.value)} />
                        <input style={{ fontSize: '25px', fontWeight: 'bold', }} value={editStack} className='form-control' onChange={(e) => { setEditedStack(e.target.value) }} />
                        <input style={{ fontSize: '25px', fontWeight: 'bold', }} value={editDiscount} className='form-control' onChange={(e) => { setEditedDiscount(e.target.value) }} />
                      </>
                    ) : (
                      <>
                        <h6 className=''>{e.Product_Name.Product_Name}</h6>
                        <h6><i className="fa-solid fa-indian-rupee-sign"></i>{e.Product_Name.Price}</h6>
                        <h6>Stack-:<span className='text-info' style={{ fontWeight: 'bold' }}>{e.Product_Name.Stack}</span></h6>
                        <h5>Discount-:<span className='text-danger'>{e.Product_Name.Discount}%</span></h5>
                      </>
                    )}
                  </div>
                  <div className='col-12 text-center'>
                    {index === editedIndex ? (
                      <button className='btn btn-success' onClick={() => handleSave(index, e)}>Save</button>
                    ) : (
                      <>
                        <button className='btn btn-primary ml-3 mr-3' onClick={() => handleEdit(index, e.Product_Name.Product_Name, e.Product_Name.Price, e.Product_Name.Stack, e.Product_Name.Discount)}>
                          <i className="fa-solid fa-pen-to-square mr-3"></i>Edit
                        </button>
                        <button className='btn btn-danger' onClick={() => { HandleDelete(e) }}><i className="fa-solid fa-trash mr-2"></i>Delete</button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
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
    </>
  )
}

export default Modify;
