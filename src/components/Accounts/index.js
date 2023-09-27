import React from 'react';
import { useNavigate } from 'react-router-dom';


function Accountswitch()  {
  const navigate = useNavigate();

  const handleadmin = () => {
    navigate('/Fileuploader');
    };

    const handleclick = () => {
    navigate('/HEmodule');
    };
  
    


  return (
    <>
      <button onClick={handleadmin} type='submit'>
          Administrator
      </button>
      <button onClick={handleclick} type='submit'>
              Excellency
          </button>
    </>
  );
  };
  

export default Accountswitch;