import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import AddItem from './Pages/POS_Modules/AddItem/AddItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link } from "react-router-dom";
import POS from './Pages/POS_Modules/POS/POS';


function App() {
  return (
    <div className="App">

      <Header></Header>
      

      <Routes>

        

        <Route path="/" element={<POS></POS>}></Route>
        <Route path="/addItem" element={<AddItem></AddItem>}></Route>

      </Routes>

      
      <ToastContainer />
    </div>
  );
}

export default App;
