import './App.css';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import HeroHeader from './components/HeroHeader/HeroHeader';
import Navbar from './components/Navbar/Navbar.jsx';


function App() {



  return (
    <div className="App">
      <HeroHeader />
      <BrowserRouter>
        <Navbar />
        <Landingpage />
      </BrowserRouter>
    </div>

  );
}

export default App;
