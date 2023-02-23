import React, { useState } from "react";
import './fullbody.css';
const Header = ({ darkTheme, setDarkTheme }) => {
  return (
    <>
      <div className="main"  style={darkTheme} >
        <div className="head">
        <div className="logo">Geekster</div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About Us </li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="button">
          <button type="checkbox" className="checkbox"
            onClick={() => {
              if(darkTheme.color === "white"){
                setDarkTheme({backgroundColor:"white", color:"black"})
            }
              else{
                setDarkTheme({backgroundColor:"black", color:"white"})
              }   
            }}
          >
           {darkTheme.backgroundColor}
          </button>
        </div>
        </div>
        <h2>
          The Wet codeBase
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <h2>
          Good Bye clean Code
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <h2>
          My Decade in reviews
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
        <h2>
          What are the react term principal
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      </div>
    </>
  );
};

export default Header;