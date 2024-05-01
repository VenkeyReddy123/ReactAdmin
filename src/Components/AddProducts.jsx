import axios from 'axios';
import React, { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar';
import Sidebar2 from './SideBar2';
import Dsidebar from './Dsidebar';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Add.css'
import Profile from './Profile';
const AddProducts = () => {
  const [processing, setProcessing] = useState(false);
  const [Con1, setCon] = useState(false)
  const [P, SetP] = useState()
  const [I, SetI] = useState()
  const [image, setEditImage] = useState(null)
  const [Succ, setSucc] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [setOut_Of_Task, SetSelectOutOfTask] = useState("true")
  const [selectedCategoryName, setSelectedCategoryName] = useState(null)
  const PRef = useRef(null)
  const Dref = useRef(null)
  const [highlet, setHighlet] = useState(null)
  const [Brand, setBrand] = useState("")
  const [General, SetGeneral] = useState("")
  const[CPop,setCPop]=useState(false)
  const[CNPop,setCNPop]=useState(false)
  const [Color, setColor] = useState("")
  const [Info,SetInfo]=useState(false)
  const PRRef = useRef(null)
  const SRef = useRef(null)
  const DRef = useRef(null)
  const Href = useRef(null)
  const Delref = useRef(null)
  const [Bottom, setBottom] = useState(false)
  const [Id, SETID] = useState(0)
  const [HTop, SetTop] = useState("No")
  const [SDeal, SetSDeal] = useState("No")
  const [DownCondition, SetDownCondtion] = useState(false)
  const [DropDown, SetDropDown] = useState([])
  const[Pro,setPro]=useState(false)
  const ProF=()=>{
    setPro(false)
  }
  const BottomClicked = (click) => {
    if (click) {
      setBottom(false)
      return
    }
    setBottom(!Bottom)

  }


  const handleCategoryChange = (event) => {
    if ("Electronic".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Mobiles", " Laptops", "Cameras", "Audi", "Video", "Telivision", "Electric Devices"]
      console.log(Data)
      SetDownCondtion(true)
      SetDropDown(Data)
    } else if ("Clothing".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["T-shirts", "Dresses", "Shirts", "Pants", "Jeans", "Skirts", "Jackets", "Sweaters", "Blouses", "Shorts"]
      console.log(Data)
      SetDownCondtion(true)
      SetDropDown(Data)
    }
    else if ("Footware".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Boots", "Sneakers", "Sandals", "Flats", "Heels", "Athletic Shoes", "Slippers", "Loafers", "Oxfords", "Espadrilles"]
      SetDownCondtion(true)
      SetDropDown(Data)

    } else if ("Accessories".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Jewelry", "Bags & Purses", "Hats & Caps", "Scarves & Shawls", "Sunglasses", "Watches", "Belts", "Gloves",
        "Hair Accessories", "Wallets & Cardholders", "Socks & Hosiery", "Ties & Bowties", "Umbrellas", "Keychains", "Handkerchiefs", "Eyewear Accessories"]
      SetDownCondtion(true)
      SetDropDown(Data)
    } else if ("Beauty&Person Care".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Skincare", "Haircare", "Makeup", "Fragrance", "Bath & Body", "Men's Grooming", "Nail Care"
        , "Tools & Accessories", "Personal Care Appliances", "Oral Care", "Shaving & Hair Removal", "Health & Wellness", "Gift Sets"]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Home&Kitchen".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Cookware", "Bakeware", "Kitchen Utensils & Gadgets", "Cutlery & Knife Accessories", "Food Storage & Organization",
        "Kitchen Appliances", "Dining & Entertaining", "Home Décor", "Bedding", "Bath", "Furniture", "Home Improvement", "Cleaning Supplies",
        "Laundry", "Heating, Cooling & Air Quality",]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Furniture".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Living Room Furniture", "Bedroom Furniture", "Dining Room Furniture", "Home Office Furniture", "Kids' Furniture", "Entryway Furniture", "Outdoor Furniture",
        "Accent Furniture", "Mattresses & Box Springs", "Furniture Sets", "Futons, Frames & Covers", "Kitchen & Dining Room Tables",
        "Chairs", "Sofas & Couches", "Ottomans", "TV Stands & Entertainment Centers", "Bookcases",]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Books,Movies&Music".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Books", "Ebooks", "Audiobooks", "Magazines", "Comics & Graphic Novels", "Textbooks", "Movies", "TV Shows", "Music",
        "Vinyl Records", "CDs & DVDs", "Digital Music", "Concert Tickets", "Sheet Music & Songbooks"]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Sports".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Athletic Clothing", "Athletic Shoes", "Team Sports", "Exercise & Fitness", "Outdoor Recreation", "Camping & Hiking",
        "Cycling", "Water Sports", "Winter Sports", "Golf", "Tennis & Racquet Sports", "Running", "Yoga", "Hunting & Fishing", "Fan Shop", "Sports Collectibles", "Sports Memorabilia", "Sports Equipment",]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Health".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Vitamins & Supplements", "Personal Care", "Health Care", "Fitness & Nutrition", "Medical Supplies & Equipment", "Wellness & Relaxation",
        "Sports Nutrition", "First Aid", "Weight Management", "Health Monitors", "Diet & Nutrition", "Alternative Medicine", "Mobility Aids & Equipment", "Braces, Splints & Supports", "Occupational & Physical Therapy",]
      SetDownCondtion(true)
      SetDropDown(Data)

    }
    else if ("Toys&Games".includes(event.target.value)) {
      setSelectedCategory(event.target.value)
      const Data = ["Dolls & Accessories", "Puzzles", "Building Toys", "Outdoor Play", "Ride-On Toys", "Remote Control & Play Vehicles", "Stuffed Animals & Plush",
        "Arts & Crafts", "Learning & Educational Toys", "Board Games", "Card Games", "Electronic Games", "Party Supplies",
        "Kids' Electronics", "Musical Instruments", "Tricycles, Scooters & Wagons", "Video Games",]
      SetDownCondtion(true)
      SetDropDown(Data)

    }

  };
  const HandleCategory_Name = (event) => {
    const name = DropDown[event.target.value]
    setSelectedCategoryName(name)
  }
  const HandleData = async (e) => {
    
    e.preventDefault()
   
    const pname = PRef.current.value
    const des = Dref.current.value
    const price = PRRef.current.value
    const stack = SRef.current.value
    const Delivary = Delref.current.value
    const Highlet = String(highlet)
    const discount = DRef.current.value
    const Out_Of_Task = stack > 0 ? true : false
    if(!selectedCategory){
      setCPop(true)
      return
    }
    if(!selectedCategoryName){
      setCNPop(true)
      return 
    }
    setProcessing(true)
 
    const Data = {
    
      "username": localStorage.getItem('username'),
      "Product_Name": pname,
      "Category": selectedCategory,
      "Category_Name": selectedCategoryName,
      "Price": price,
      "Stack": stack,
      "Out_Of_Task": Out_Of_Task,
      "Description": String(des),
      "Discount": discount,
      "Hightlet": Highlet,
      "Brand": Brand,
      "Color": Color,
      "Delivary_Charges": Delivary,
      "Specifications": String(General)

    }

    await axios.post("http://127.0.0.1:8000/ProductDetails/", Data).then(async response => {
      let Ind = 0
      for (let imge of image) {
        if (Ind === 0) {
          const Data1 = {
            'Product_Name': response.data.id,
            "P_Images": imge,
          }
          await axios.post("http://127.0.0.1:8000/ImageDetails/", Data1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(async (d) => {
            SETID(d.data.id)
            const Data = {
              "pk": d.data.id,
              "P_Images": d.data.P_Images,
              "Ind": Ind
            }
            await axios.patch("http://127.0.0.1:8000/ImageDetails/", Data).then(async (d) => {

              if (HTop == "Yes") {
                
                const Data = {
                  "ImageUrl": d.data.id,
                  "username": Number(localStorage.getItem('id')),
                  "Product_Name": d.data.Product_Name
                }
                await axios.post("http://127.0.0.1:8000/TopDealsDetails/", Data).then(async (d) => {

                }).catch((e) => {
                  alert('Error')
                })
              }
              if (SDeal == "Yes") {

                const Data = {
                  "ImageUrl": d.data.id,
                  "username": Number(localStorage.getItem('id')),
                  "Product_Name": d.data.Product_Name
                }


                await axios.post("http://127.0.0.1:8000/SuggestDetails/", Data).then((d) => {

                }).catch((e) => {

                })
              }

            }).catch((e) => {
              console.log('error')
            })
          })

          Ind++



        }

        else {
          const Data1 = {
            "pk": Id,
            "P_Images": imge,
          }
          await axios.patch("http://127.0.0.1:8000/Image2Details/", Data1, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(async (d) => {

            const Data = {
              "pk": d.data.id,
              "P_Images": d.data.P_Images,
              "Ind": Ind
            }
            await axios.patch("http://127.0.0.1:8000/ImageDetails/", Data).then(async (d) => {
              
            }).catch((e) => {
              console.log('error')
            })
          }).catch((e) => {
            console.log('error')
          })


        }

      }

      window.location.reload()







    }).catch((e) => {
      alert('error')
    })
  }
  const [pw, setpw] = useState('')
  const [rpw, setrpw] = useState('')
  const [un, setun] = useState('')
  const [run, setrun] = useState('')
  const [Con2, setCon2] = useState(false)
  
  const HandleTopDeals = () => {
    console.log(I)
    const Data = {
      "ImageUrl": I.id,
      "username": Number(localStorage.getItem('id')),
      "Product_Name": P.id
    }
    axios.post("http://127.0.0.1:8000/TopDealsDetails/", Data).then((d) => {

    }).catch((e) => {

    })
  }
  const HandleSuggest = () => {

    const Data = {
      "ImageUrl": I.id,
      "username": Number(localStorage.getItem('id')),
      "Product_Name": P.id
    }


    axios.post("http://127.0.0.1:8000/SuggestDetails/", Data).then((d) => {

    }).catch((e) => {

    })


  }
  const [Show, setShow] = useState(false)
  const ShowSide2 = () => {
    setShow(!Show)
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
            localStorage.setItem('username',un)
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
          const desiredWidth =1020 // Desired width
          const desiredHeight = 800; // Desired height
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
    alert('image Reized Done')
    


  };

  
  

  
  return (
    <>
      <div>
        <div className='mod ' style={{ overflow: 'hidden' }} >
          <Navbar ShowSide2={ShowSide2} BottomClicked={BottomClicked} />
        </div>
        <div className='mod' style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
          <div className='row'>
            <div className=''>
              <div className='p-3'>
                <h6 className='mod text-black'>Add Products</h6>
                <span className='mod text-black'>To Add More Products Follow The Below Rules, Carefully To Add Products</span>
              </div>
              <div className='col-12' style={{ background: 'white', overflow: 'hidden' }}>
                <form onSubmit={HandleData} className='col-12 row shadow-lg ml-auto'>
                  <div className='col-12 col-md-6 d-flex flex-column'>
                    <label htmlFor="pn">Product Name</label>
                    <input required className='form-control' type="text" ref={PRef} placeholder='Enter Product Name' />
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-row'>
                    <div className='col-6 d-flex flex-column'>
                      <label htmlFor="pn">Brand</label>
                      <input required className='form-control' onChange={(e) => { setBrand(e.target.value) }} type="text" placeholder='Enter Brand Name' />
                    </div>
                    <div className='col-6 d-flex flex-column'>
                      <label htmlFor="pn">Color</label>
                      <input required className='form-control' onChange={(e) => { setColor(e.target.value) }} type="text" placeholder='Enter Color Names' />
                    </div>
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column'>
                    <label htmlFor="pc">Category</label>
                    <select required className='form-control' value={selectedCategory} onChange={(e) => {
                      handleCategoryChange(e)
                    }}>
                      <option >---Select Category---</option>
                      <option value="Electronic">Electronics</option>
                      <option value="Clothing">Clothing</option>
                      <option value="Footware">Footware</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Beauty&Person Care">Beauty&Person Care</option>
                      <option value="Home&Kitchen">Home&Kitchen</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Books,Movies&Music">Books, Movies&Music</option>
                      <option value="Sports">Sports</option>
                      <option value="Health">Health</option>
                      <option value="Toys&Games">Toys&Games</option>
                    </select>
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column'>

                    {DownCondition && <>    <label htmlFor="price">Category_Name</label>
                      <select required className='form-control' onChange={HandleCategory_Name}>
                        <option >---Select Category_Name---</option>
                        {DropDown.map((categoryName, index) => (
                          <option key={index} value={index}>
                            {categoryName}
                          </option>
                        ))}
                      </select></>}

                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column'>
                    <label htmlFor="price">Price</label>
                    <input required type='number' min={0} className='form-control' ref={PRRef} />
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column'>
                    <label htmlFor="price">Stack</label>
                    <input required min={0} className='form-control' type="number" ref={SRef} />
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column'>
                    <label htmlFor="price">Disount in Pecentage</label>
                    <input required className='form-control' min={0} max={99} type="number" ref={DRef} />
                    <div className='col-12  mt-2 d-flex flex-column'>
                      <label htmlFor="image">Select images(<small className='text-danger' style={{ fontWeight: 'bolder' }}>Limit Only 5</small>)</label>
                      <input required type="file" className='form-control-file' multiple name="image" id="image" accept='image/*' onChange={handleImageChange} />
                      <label className='mt-3' htmlFor="">Delivary Charge</label>
                      <input required type="number" ref={Delref} className='form-control' />
                      <div className='d-flex flex-row'>
                        <label className='mt-2' >Add in Top Deals</label>
                        <input type='checkbox' value={"Yes"} onChange={(e) => {
                          if (e.target.checked) {
                            e.target.readOnly = true;
                            SetTop("Yes")
                          }
                          else {
                            SetTop("No");
                          }
                        }} className='ml-2' />
                        <label className='mt-2 ml-3' >Add in Suggest</label>
                        <input type='checkbox' value={"Yes"} onChange={(e) => {
                          if (e.target.checked) {
                            e.target.readOnly = true;
                            SetSDeal("Yes")
                          }
                          else {
                            SetSDeal("No");
                          }
                        }} className='ml-2' />

                      </div>

                    </div>
                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column' style={{ height: '300px' }}>
                    <label htmlFor="desc">General Specification <i style={{fontWeight:'25px',color:'blue'}} onMouseEnter={()=>{SetInfo(true)}} onMouseLeave={()=>{SetInfo(false)}} class="fa-solid fa-circle-info"></i> {Info&&<><small className='shadow-lg p-2 ' style={{position:'relative',cursor:'pointer',color:'red'}}> to provide detailed content under each heading in the 'General Specifications' section </small></>}

                    </label>
                    <ReactQuill
                      theme="snow"
                      style={{ height: '200px' }}
                      modules={{
                        toolbar: [
                          [{ 'header': ['1', '2', '3', '4', '5', '6', '7'] }, { 'font': [] }],
                          [{ 'size': ['10px', '15px', '20px', '25px'] }],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                          [{ 'color': ["Black", "White", "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Gray", "Brown", "Cyan", "Pink", "Magenta", "Lime", "Teal"] }]
                        ]
                      }}
                      onChange={(e) => { SetGeneral(e) }}
                    />


                  </div>

                  <div className='col-12 col-md-6 d-flex flex-column' style={{ height: '300px' }}>
                    <label htmlFor="desc">Description</label>
                    <ReactQuill
                      theme="snow"
                      style={{ height: '200px' }}
                      modules={{
                        toolbar: [
                          [{ 'header': ['1', '2', '3', '4', '5', '6', '7'] }, { 'font': [] }],
                          [{ 'size': ['10px', '15px', '20px', '25px'] }],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                          [{ 'color': ["Black", "White", "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Gray", "Brown", "Cyan", "Pink", "Magenta", "Lime", "Teal"] }]
                        ]
                      }}
                      ref={Dref}
                    />


                  </div>
                  <div className='col-12 col-md-6 d-flex flex-column' style={{ height: '300px' }}>
                    <label htmlFor="image">Add Highlets</label>

                    <ReactQuill
                      theme="snow"
                      style={{ height: '200px' }}
                      modules={{
                        toolbar: [
                          [{ 'header': ['1', '2', '3', '4', '5', '6', '7'] }, { 'font': [] }],
                          [{ 'size': ['10px', '15px', '20px', '25px'] }],
                          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                          [{ 'color': ["Black", "White", "Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Gray", "Brown", "Cyan", "Pink", "Magenta", "Lime", "Teal"] }]
                        ]
                      }}
                      onChange={(e) => {
                        setHighlet(e)

                      }}


                    />
                  </div>
                  <div className='col-6 col-md-2 d-flex flex-column ml-auto mr-auto mt-3'>
                    <input className='btn btn-warning' type="submit" value="Add" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {Succ && <>
          <div className='col-sm-4 col-md-3 p-2 col-lg-2 bg-light p-2' style={{ position: 'absolute', top: '20%', right: '5%', borderRadius: '20px' }}>
            <button onClick={() => {
              HandleTopDeals()

            }} style={{ borderRadius: '10px' }} className='btn btn-primary p-2 col-12'>Add in Top Deals</button><br></br>
            <button style={{ borderRadius: '10px' }} onClick={() => { HandleSuggest() }} className='btn btn-success mt-2 col-12'>Add In Suggest</button>
          </div>

        </>}
           <div className='d-none d-md-block'>
              <Dsidebar  />
           </div>
        {Show && <>

          <div style={{ position: 'absolute', top: '0px', width: '100%' }}>
            <Sidebar2 ShowSide2={ShowSide2}  />
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
      {CPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '70vh', borderRadius: '30px' }}>
          <div className='  col-10 col-sm-7 col-md-3 bg-primary p-3' style={{ borderRadius: '20px' }}>
            <div className='col-12 d-flex flex-row justify-content-end   '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                setCPop(false)

              }} style={{ fontSize: '20px', borderRadius: '20px' }}></i>

            </div>
            <span className='text-white p-4'>Please select the category of product </span>
          </div>
        </div>
      </>}
      {CNPop && <>
        <div className='col-12 mb-3 d-flex flex-row justify-content-end' style={{ position: 'absolute', top: '70vh', borderRadius: '30px' }}>
          <div className='  col-10 col-sm-7 col-md-3 bg-primary p-2' style={{ borderRadius: '20px' }}>
            <div className='col-12 d-flex flex-row justify-content-end '>
              <i class="fa-regular fa-circle-xmark text-white bg-danger" onClick={() => {
                setCNPop(false)

              }} style={{ fontSize: '20px', borderRadius: '20px' }}></i>

            </div>
            <span className='text-white'>please provide the list of category names of  product</span>
          </div>
        </div>
      </>}
      </div>
    </>
  );
};

export default AddProducts;
