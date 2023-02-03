import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Onboarding from './pages/OnboardingPage';
import Links from './pages/Links';
import Contact from './pages/Contact';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'





function App() {



  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Onboarding />}></Route>
          <Route path='/main' element={<Landingpage />}></Route>
          <Route path='/links' element={<Links />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Landingpage />}></Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
