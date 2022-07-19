import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import AddItem from './Pages/POS_Modules/AddItem/AddItem';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Header></Header>

      <AddItem></AddItem>

      
      <ToastContainer />
    </div>
  );
}

export default App;
