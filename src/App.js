import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle/> 
      </header>
    </div>
  );
}

function Toggle(){
  const [toggle,setToggle]= useState(true);
  return( 
       <button id="toggle" onClick={()=>setToggle(!toggle)} value={toggle?'ON':'OFF'}>{toggle?'ON':'OFF'}</button>
  )
  
};
export default App;
