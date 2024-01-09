import React,{useState,useEffect} from "react";
import { Container} from "reactstrap";
import { getAllContenedores } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Scatter } from "react-chartjs-2";

import Header from "../blog/Header"

export default function ContenedoresList() {
    const [contenedores, setContenedores] = useState([]);
    
    const getcontenedores=()=>{
        getAllContenedores().then((contenedores) => {
            setContenedores(contenedores);
        });
    };

    useEffect(() => {
       getcontenedores();
    }, []);
    const defaultTheme = createTheme();

    const data = contenedores.map((contenedor) => ({
      x: parseFloat(contenedor['COORDENADA X']),
      y: parseFloat(contenedor['COORDENADA Y']),
      size: 2,
      label: contenedor['TIPO CONTENEDOR'],
    }));
    const chartData = {
      datasets: [
        {
          label: 'Contenedores',
          data: data,
          backgroundColor: 'rgba(75,192,192,0.6)',
          borderColor: 'rgba(75,192,192,1)',
          pointRadius: 2,
        },
      ],
    };
    const chartOptions = {
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
        },
        y: {
          type: 'linear',
          position: 'left',
        },
      },
    };

    return contenedores === null?(
        <ThemeProvider theme={defaultTheme}>
         <Container maxWidth="lg">
         <Header/>
         <main style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
           cargando informacion, por favor espere
         </main>
         </Container>
 
         </ThemeProvider>
         
     ):(//TODO hacer graficas
       <ThemeProvider theme={defaultTheme}>
       <Container maxWidth="lg">
       <Header/>
       <main>
         <h1>Localización de los contenedores</h1>
         <p>En el siguiente gráfico podemos observar la localización de los contenedores mediante un grafico de dispersión</p>
         <Scatter data={chartData} options={chartOptions} />

       </main>
       </Container>

       </ThemeProvider>
     );
}