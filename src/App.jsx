import React from 'react'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";
import SingleMovie from './components/SingleMovie';

const App = () => {
  return ( 
    <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="movie/:id" element={<SingleMovie />} />
    </Routes>
    
    
    
      
      
    </>
  )
}

export default App
