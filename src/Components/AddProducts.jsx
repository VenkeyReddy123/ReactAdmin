import axios from 'axios';
import React, { useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from '../Navbar';

const AddProducts = () => {
  const[Con1,setCon]=useState(false)
  const [image,setEditImage]=useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Electronic')
  const [setOut_Of_Task, SetSelectOutOfTask] = useState("true")
  const PRef = useRef(null)
  const Dref = useRef(null)
  const CNRef = useRef(null)
  const PRRef = useRef(null)
  const SRef = useRef(null)
  const DRef = useRef(null)


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleOutOfTask = (event) => {
    SetSelectOutOfTask(event.target.value)
  }
  const HandleData = (e) => {
    e.preventDefault()
    const pname = PRef.current.value
    const des = Dref.current.value
    const cnname = CNRef.current.value
    const price = PRRef.current.value
    const stack = SRef.current.value
    // const image = IRef.current.files[0]
    
    const discount=DRef.current.value
    const Data = {
      "username":localStorage.getItem('username'),
      "Product_Name": pname,
      "Category": selectedCategory,
      "Category_Name": cnname,
      "Price": price,
      "Stack": stack,
      "Out_Of_Task": setOut_Of_Task,
      "Description": des,
      "Discount":discount

    }
    

    axios.post("http://127.0.0.1:8000/ProductDetails/", Data).then(response => {
      console.log(response)
      // Handle successful response 
      const Data2 = {
        'Product_Name':response.data.id,
         "P_Images": image
      }  
      
             axios.post("http://127.0.0.1:8000/ImageDetails/", Data2, {
                   headers: {
                    'Content-Type': 'multipart/form-data'
                     }
                   }).then(response => {
                
                const Data3={
                    "pk":response.data.id ,
                    "P_Images":response.data.P_Images
                  }
                     axios.patch("http://127.0.0.1:8000/UpdateDetails/",Data3).then((d)=>{
                      alert('Thanku FOr POsting')
                     }).catch((e)=>{
                      alert('error')
                     })
               }).catch(error => {
                alert('Please Try Again')
      });
    }).catch(error => {
      alert('Please Try AGain')
    });

    
   

  }
  const [pw,setpw]=useState('')
  const[rpw,setrpw]=useState('')
  const [un,setun]=useState('')
  const[run,setrun]=useState('')
  const[Con2,setCon2]=useState(false)
  // const[Con1,setCon]=useState(false)

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
         <Navbar/>
      </div>
      <div>
      <Sidebar Condition1={Condition1}/>
      </div>
      <div className='container-fluid' style={{ backgroundImage: `url('https://media.istockphoto.com/id/1248542684/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=6aJX8oyUBsSBZFQUCJDP7KZ1y4vrf-wEH_SJsuq7B5I=')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className='row'>
          <div className='col-md-12'>
            <div className='p-3'>
              <h6 className='ml-3 text-white'>Add Products</h6>
              <span className='ml-3 text-light'>To Add More Products Follow The Below Rules, Carefully To Add Products</span>
            </div>
            <div className='row justify-content-center'>
              <div className='col-md-5 col-sm-12 p-3 ' style={{ background: '#D87E9C', borderRadius: '50px' }}>
                <div className='p-3'>
                  <h6>Add Product</h6>
                  <form onSubmit={HandleData}>
                    <div className='form-group'>
                      <label htmlFor="pn">Product Name</label>
                      <input className='form-control' type="text" ref={PRef} placeholder='Enter Product Name' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="desc">Description</label>
                      <textarea className='form-control' type="text" ref={Dref} placeholder='Enter Product Description'></textarea>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="pc">Category</label>
                      <select className='form-control' value={selectedCategory} onChange={handleCategoryChange}>
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
                    <div className='form-group'>
                      <label htmlFor="price">Category Name</label>
                      <input className='form-control' type="text" ref={CNRef} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="price">Price</label>
                      <input className='form-control' ref={PRRef} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="price">Stock</label>
                      <input className='form-control' type="number" ref={SRef} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="price">Disount in Pecentage</label>
                      <input className='form-control' type="number" ref={DRef} />
                    </div>
                    <div className='form-group'>
                      <label htmlFor="price">Out of Stock</label>
                      <select className='form-control' value={selectedCategory} onChange={handleOutOfTask}>
                        <option value='true'>True</option>
                        <option value="false">False</option>
                      </select>
                    </div>
                    <div className='form-group'>
                      <label htmlFor="image">Select image</label>
                      <input type="file" className='form-control-file' name="image" id="image" accept='image/*' onChange={handleImageChange}/>
                    </div>
                    <div className='text-center'>
                      <input className='btn btn-warning' type="submit" value="Click TO Add" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default AddProducts;
