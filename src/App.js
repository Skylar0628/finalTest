
import { Routes, Route } from 'react-router-dom' 

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AdminProduct from './pages/adminprodute/AdminProduct';
import Context from './pages/adminprodute/AdminPdcContext';
import React, { useContext } from 'react';

const P_data = {
   data:[]
}

function App() {
  const [ data,setData ] = React.useState(P_data);
  const [ isLogin, setIsLogin ] = React.useState(true); 
  const global = {
     data,setData,
     isLogin, setIsLogin
  }
  return (
    <Context.Provider value={global}>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/admin' element={<Dashboard/>}>
           <Route path='Product' element={<AdminProduct/>}></Route>
        </Route>
      </Routes>
    </div>
    </Context.Provider>
  );
}

export default App;
