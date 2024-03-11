
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import AdminPage from './Components/AdminPage';
import TodayOrders from './Components/DasBoard/TodayOrders';
import DashBoard from './Components/DashBoard';
import Sidebar from './Components/Sidebar';
import Login from './Login'
import SelectExample from './Select';
import UserReg from './UserReg'
import Modify from './Components/Modify';
import ModifyFIle from './Components/ModifyFIle';
import Delete from './Components/DasBoard/Delete';
import CustemorDetail from './Components/CustemorDetail';
import Orders from './Components/Orders';
import CuponCode from './CuponCode';
import Forget from './Forget';
// import ModelCheck from './ModelCheck'

function App() {
       const request=(localStorage.getItem('username')?true:false)    
  return (
    
   <>

       <BrowserRouter>
                <Routes>
                       {request?<Route path='/' element={<DashBoard/>}/>:<Route path='/' element={<Login/>}></Route>}
                       <Route path='/Reg' element={<UserReg/>}/>
                       <Route path='/Mod' element={<Modify/>}/>
                       <Route path='/Delete' element={<Delete/>}/>
                       <Route path='/Das' element={<DashBoard/>}/>
                       <Route path='/Add' element={<AddProducts/>}/>
                       <Route path='/Cust' element={<CustemorDetail/>}/>
                       <Route path='/Ord' element={<Orders/>}/>
                       <Route path='Cupon' element={<CuponCode/>}/>
                       <Route path='/For' element={<Forget/>}/>
                       
                </Routes>
       </BrowserRouter>
{/* <Modify/> */}
{/* <TaskModal/> */}
{/* <ModifyFIle/> */}
   
   </>
  );
}

export default App;
