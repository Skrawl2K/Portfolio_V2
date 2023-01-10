import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landingpage from './pages/Landingpage';




function App() {



  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />}></Route>
        </Routes>
      </Router>
    </div >

  );
}

export default App;
