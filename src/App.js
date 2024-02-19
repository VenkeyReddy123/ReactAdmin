
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
function App() {
  return (
    
   <>
{/* <Modify/> */}
 
 
 {/* <UserReg></UserReg> */}
 
 {/* <AdminPage/> */}
 
 
 {/* <Sidebar/> */}
 {/* <AdminPage/> */}
 {/* <DashBoard></DashBoard> */}

  
{/* <TodayOrders/> */}


 {/* <Login></Login> */}
 {/* <AddProducts/> */}
       <BrowserRouter>
                <Routes>
                       {/* <Route path='/' element={<Login/>}></Route> */}
                       <Route path='/Reg' element={<UserReg/>}/>
                       <Route path='/Edit' element={<ModifyFIle/>}/>
                       <Route path='/Delete' element={<Delete/>}/>
                       <Route path='/' element={<DashBoard/>}/>
                </Routes>
       </BrowserRouter>
{/* <Modify/> */}
{/* <ModifyFIle/> */}
   
   </>
  );
}

export default App;
