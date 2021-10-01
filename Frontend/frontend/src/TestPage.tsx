import React from 'react';
import logo from './logo.svg';


function Test() {
  return (
    <div className="Test">
      <header className="Test-header">
        <img src={logo} className="Test-logo" alt="logo" />
        <p >
          TESTPAGE
        </p>
        
        <a
          className="Test-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Test;
