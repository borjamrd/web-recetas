import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Main from './components/Main'
import Results from './components/Results';
import DetailView from './components/DetailView';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <Results />
      <DetailView/>
      <Footer/>
    </div>
  );
}

export default App;
