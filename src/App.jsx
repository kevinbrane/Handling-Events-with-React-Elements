import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    console.log('entró')
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkTheme]);

  return (
    <>
      <label className="switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick= {changeTheme}/>
        <div className="slider round"></div>
      </label>
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