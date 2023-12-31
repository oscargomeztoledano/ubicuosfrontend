import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
