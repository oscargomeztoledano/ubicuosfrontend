import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './login';
import Blog from './blog/Blog';
import Acustica from './Lists/AcusticaList';
import Fotovoltaicas from './Lists/FotovoltaicasList';
import Contenedores from './Lists/ContenedoresList';
import BicicletasDispo from './Lists/BicicletasDispoList';
import AforoPersonas from './Lists/AforoPersonasList';
import AforoBicis from './Lists/AforoBicis';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Blog/>} />
        <Route path='/home/acustica' element={<Acustica/>}/>
        <Route path='/home/fotovoltaicas' element={<Fotovoltaicas/>}/>
        <Route path='/home/contenedores' element={<Contenedores/>}/>
        <Route path='/home/bicicletas' element={<BicicletasDispo/>}/>
        <Route path='/home/aforoPersonas' element={<AforoPersonas/>}/>
        <Route path='/home/aforoBicis' element={<AforoBicis/>}/>
        </Routes>
    </div>
  </Router>
  );
}

export default App;
