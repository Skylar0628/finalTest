
import { useEffect } from 'react';
import { getProductAll } from './API/0101Api';
import Login from './pages/Login';
import { Routes, Route } from 'react-router-dom' 


function App() {
  useEffect(()=>{
    getProductAll();
  },[]);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={Login}></Route>
      </Routes>
      <Login/>
    </div>
  );
}

export default App;
