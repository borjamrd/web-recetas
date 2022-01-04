import { render } from '@testing-library/react';
import './component.css';
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import React, { useState } from "react";
import recipe from './recipes.svg'



import SearchBar from './SearchBar';
import logo from './img/logo.png'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import insta from './img/insta.svg'

function Header() {

  
  return (
    <header className='header'>
      <SearchBar/>
      <button>New</button>
      <button>Popu</button>
      <img className="logo" src={logo}/>
      <img className="media" src={facebook} />
      <img className="media" src={insta} />
      <img className="media" src={twitter} />
    </header>
  );
}

export default Header;

function SearchBar({placeholder, data}){
  return (
    <div className="search">
      <div className='searchInputs'>
        <input type="text" placeholder={placeholder}/>
        <div className='searchIcon'></div>
      </div>
      <div className='dataResult'>
      </div>
    </div>
  )
}