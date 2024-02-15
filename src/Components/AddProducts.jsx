import axios from 'axios';
import React, { useRef, useState } from 'react';

const AddProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('Electronic')
  const [setOut_Of_Task, SetSelectOutOfTask] = useState("true")
  const PRef = useRef(null)
  const Dref = useRef(null)
  const CNRef = useRef(null)
  const PRRef = useRef(null)
  const SRef = useRef(null)
  const IRef = useRef(null)


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
    const image = IRef.current.files[0]
    const Data = {
      "username": 'Subbu',
      "Product_Name": pname,
      "Category": selectedCategory,
      "Category_Name": cnname,
      "Price": price,
      "Stack": stack,
      "Out_Of_Task": setOut_Of_Task,
      "Description": des

    }
    const Data2={
      'Product_Name':pname,
      "P_Images":image
    }

    axios.post("http://127.0.0.1:8000/ProductDetails/", Data).then(response => {
        console.log('Response:', response);
        // Handle successful response
      }).catch(error => {
        console.error('Error:', error);
        // Handle error
      });
      axios.post("http://127.0.0.1:8000/ImageDetails/", Data2,{
        headers: {
          'Content-Type': 'multipart/form-data'
      }
      }).then(response => {
        console.log('Response:', response);
        // Handle successful response
      }).catch(error => {
        console.error('Error:', error);
        // Handle error
      });





  }

  return (
    <>
   
   <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='p-3'>
            <h4 className='ml-3 text-white'>Add Products</h4>
            <span className='ml-3 text-light'>To Add More Products Follow The Below Rules, Carefully To Add Products</span>
          </div>
          <div className='row justify-content-center'>
            <div className='col-md-5 col-sm-12 p-3 shadow-lg' style={{ background: '#D87E9C', borderRadius: '50px' }}>
              <div className='p-3'>
                <h4>Add Product</h4>
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
                    <label htmlFor="price">Out of Stock</label>
                    <select className='form-control' value={selectedCategory} onChange={handleOutOfTask}>
                      <option value='true'>True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor="image">Select image</label>
                    <input type="file" className='form-control-file' name="image" id="image" accept='image/*' ref={IRef} />
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
    </div>

    </>
  );
};

export default AddProducts;
