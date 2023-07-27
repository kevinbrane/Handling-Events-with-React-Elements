import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/Slider.css';

const Slider = ({ isDarkTheme, setIsDarkTheme }) => {

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log('entró');
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
            <input type="checkbox" id="checkbox" onClick={changeTheme}/>
            <div className="slider round"></div>
            </label>
        </>
    );
}

export default Slider;