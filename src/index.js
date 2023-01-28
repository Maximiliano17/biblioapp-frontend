import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes,Route, Navigate } from 'react-router-dom';
import App from './App';
import  Home from './componentes/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
         <Route path='*' element={<Navigate repleace to="/"/>} />
         <Route path='/' element={<App/>} />
         <Route path='/home' element={<Home/>} />
      </Routes>
     </BrowserRouter>
  </React.StrictMode>
);
