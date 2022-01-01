import { render } from '@testing-library/react';
import './component.css';
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import React, { useState } from "react";
import recipe from './recipes.svg'



function Header() {

  
  return (
    <header>
    
      <SearchBar placeholder="Enter a recipe..." data="" className='searchbar' /* Introducir los datos una vez implementado axios *//>

      <div>New Recipes</div>
      <div>Popular recipes</div>
      <img src={recipe} className='main-logo'></img>
      <h1>Los chicos de Chicote</h1>
      <div className='social'>
        <a href="https://www.instagram.com" target="_blank"><img src={instagram} className='socialIcon'></img></a>
        <a href="https://www.facebook.com" target="_blank" ><img src={facebook} className='socialIcon' ></img></a>
        <a href="https://www.twitter.com" target='_blank' ><img src={twitter}  className='socialIcon'></img></a>
      </div>
        
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