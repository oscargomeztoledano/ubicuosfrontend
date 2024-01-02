import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login';
import Home from './Home';
import Acustica from './Lists/AcusticaList';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/home/acustica' element={<Acustica/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
