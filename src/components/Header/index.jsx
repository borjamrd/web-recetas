import './component.css';
import {useNavigate  } from "react-router-dom";

import SearchBar from './SearchBar';
import logo from './img/logo.png'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import insta from './img/insta.svg'

function Header() {
  const navigate = useNavigate();
  return (
    <header className='header'>
      <script src="//unpkg.com/react/umd/react.production.min.js"></script>
  <script src="//unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
  <script src="//unpkg.com/babel-standalone"></script>

  <script src="//unpkg.com/d3"></script>

  <script src="//unpkg.com/react-globe.gl"></script>
      <SearchBar/>
      <button onClick={()=>navigate("recipes/new/"+new Date().getTime())}>New</button>
      <button onClick={()=>navigate("recipes/popu/"+new Date().getMonth())}>Popu</button>
      <img className="logo" src={logo}/>
      <img className="media" src={facebook} />
      <img className="media" src={insta} />
      <img className="media" src={twitter} />
    </header>
  );
}

export default Header;