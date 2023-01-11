import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Onboarding from './pages/OnboardingPage';
import About from './pages/About';
import Contact from './pages/Contact';




function App() {



  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Onboarding />}></Route>
          <Route path='/main' element={<Landingpage />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
