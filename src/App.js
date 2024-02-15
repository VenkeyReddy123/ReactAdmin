
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import AddProducts from './Components/AddProducts';
import AdminPage from './Components/AdminPage';
import TodayOrders from './Components/DasBoard/TodayOrders';
import DashBoard from './Components/DashBoard';
import Sidebar from './Components/Sidebar';
import Login from './Login'
import SelectExample from './Select';
import UserReg from './UserReg'
function App() {
  return (
    
   <>

 
 
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
                       <Route path='/' element={<UserReg/>}></Route>
                </Routes>
       </BrowserRouter>

   
   </>
  );
}

export default App;
