import React from 'react';


import './App.css';

import Aluga from'./assets/Aluga.svg';
import Routes from './routes';

function App() {
  


  return (
    <div className="container">
      <img src={Aluga }  style={{width:300, height: 200}} resizemode="contain"  alt="Aluga"  />

      <div className="content">
        <Routes/>
       
      

      </div>


    </div>
    

  );
}

export default App;
