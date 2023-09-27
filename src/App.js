import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Accounts from './components/Accounts';
import Fileuploader from './components/Fileuploader';
import Hemodule from './components/Hemodule';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';




function App() {

  const [files,setFiles] = useState([]);
       const onSuccess =(savedFiles) => {
        setFiles(savedFiles)
       };
  <Fileuploader onSuccess={onSuccess}/>
  return (
    <>
   <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Accounts" element={<Accounts />} />
          <Route path='/Fileuploader' element={<Fileuploader />} />
          <Route path='/Hemodule' element={<Hemodule/>} />
        </Routes>
        <ToastContainer />
      </Router>
      </>
    
  );
}

export default App;
