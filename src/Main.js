import React from 'react'
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import Success from './Success';
import App from './App';

const Main = () => {
  return (
    <div>
        <BrowserRouter>
     <Routes>
       <Route path='/' element={<App/>}/>
       <Route path='/success' element={<Success/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Main