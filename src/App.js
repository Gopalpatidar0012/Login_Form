import React from 'react';

import "./App.css";
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Stores from "./app/Stores"

function App() {
  return (
    <Provider store={Stores}>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<LoginPage/>}/>
         <Route path="/home" element={<HomePage/>}/>
       </Routes>
     </BrowserRouter>
     </Provider>
  
  );
}

export default App;
