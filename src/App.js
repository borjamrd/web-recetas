import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main'
import Results from './components/Results';
import DetailView from './components/DetailView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route path="/" element={<Main />}/>
          <Route path="/recipes/:search" element={<Results />}/>
          <Route path="/recipe/:id" element={<DetailView/>}/>
        </Switch>
      </Router>      
      <Footer/>
    </div>
  );
}

export default App;
