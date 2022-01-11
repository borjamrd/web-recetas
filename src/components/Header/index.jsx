import './component.css';
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
