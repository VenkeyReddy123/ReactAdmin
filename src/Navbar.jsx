
import React, { useEffect, useState } from 'react'

const Navbar = ({ ShowSide2,BottomClicked }) => {
  const[Bottom,setBottom]=useState(false)
  const Click = () => {
    ShowSide2()
  }
  return (
    <>
      <div className='d-flex flex-row justify-content-between p-1 shadow-sm' style={{overflow:'hidden',borderBottom:'2px solid black',position:''}}>
        <div className='d-flex flex-row'>
          <span className='text-danger p-1' style={{ fontWeight: 'bolder',fontFamily:'cursive' }}><span className='text-danger' style={{fontSize:'25px',fontFamily:'cursive'}}>D</span>ash<span className='text-danger' style={{fontSize:'25px',fontFamily:'cursive'}}>B</span>oard</span>
          <i className="fas fa-list text-dark btn  p-1 mt-auto mb-auto" onClick={() => { Click() }} style={{ fontSize: '25px' }}></i>
        </div>
      
        <div className='d-block d-lg-none'  >
              <div className='d-flex flex-row'>
              <button className='btn' onClick={()=>{}} style={{backgroundColor:'white'}}><i class="fa-solid fa-magnifying-glass" ></i></button>
               <div className='d-flex flex-row ml-3 mr-2' style={{cursor:'pointer'}} onClick={()=>{
                setBottom(!Bottom)
                BottomClicked("Click")
               }}>
               <li className='mt-auto mb-auto ' style={{marginRight:'-12px'}}></li>
               <li className='mt-auto mb-auto' style={{marginRight:'-12px'}}></li>
               <li className='mt-auto mb-auto' style={{marginRight:'-12px'}}></li>
              </div>
               </div>
        </div>
        <div className='d-none d-lg-block mr-3'>
                   <div className='d-flex flex-row'>
                       <i class="fa-solid fa-gear p-1 " onClick={()=>{
                        BottomClicked()
                       }} style={{fontSize:'30px',color:'black'}}></i>
                       <i class="fa-solid fa-bars p-1" style={{fontSize:'30px',color:'dark'}}></i>
                       
                   </div>
        </div>
      </div>
      {Bottom&&<>
        <div className='d-flex flex-row justify-content-end p-3 col-12' style={{background:'white'}}>
          <div className='d-flex flex-row'>
                       <i class="fa-solid fa-gear p-1 " onClick={()=>{
                        BottomClicked()
                       }} style={{fontSize:'30px',color:'dark'}}></i>
                       <i class="fa-solid fa-bars p-1" style={{fontSize:'30px',color:'dark'}}></i>
                       
            </div>


      </div>
      </>}
      </>



  )
}

export default Navbar