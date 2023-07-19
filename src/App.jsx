import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import  { Slider }  from './Components/Slider.jsx'
import './App.css'

function App() {

  return (
    <>
    <Slider/>
    {React.createElement('h1', { style: { color: '#999', fontSize: '19px' } }, 'Solar System Planets')}
      <ul className= {isDarkTheme ? 'planet-list dark' : 'planet-list'}>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
      </ul>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;