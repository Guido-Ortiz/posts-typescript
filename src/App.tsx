import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Login/Login';
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing';



function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Landing />} />
            
          <Route path='/posts' element={<Home />} />

          <Route path='/login' element={<Form />} />

        </Routes>
          {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}



export default App
