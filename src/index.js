import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MiniCarousel from './Components/MiniCarousel/MiniCarousel.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Router>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/minicarousel' element={<MiniCarousel/>}/>
        </Routes>
    </Router>
     </>
); 