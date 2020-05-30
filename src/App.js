import React from 'react';
import './App.css';
import Header from './header/Header';
import Down from './down/Down'
const App = () => {
    return (
    <div className="content">
      <div className = "full">
           <Header />   
           
      </div>
          <Down />
    </div>
    )
}

export default App