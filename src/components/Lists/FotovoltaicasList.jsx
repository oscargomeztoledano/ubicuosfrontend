import React,{useState,useEffect} from "react";
import { Container} from "reactstrap";
import { getAllInstalacionesFotovoltaicas } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Scatter } from "react-chartjs-2";
import Footer from '../blog/Footer';
import Sidebar from "../blog/Sidebar";
import Grid from '@mui/material/Grid';
import Header from "../blog/Header"

export default function FotovoltaicasList() {
    const [fotovoltaicas, setFotovoltaicas] = useState([]);
    
    const getfotovoltaicas=()=>{
        getAllInstalacionesFotovoltaicas().then((fotovoltaicas) => {
            setFotovoltaicas(fotovoltaicas);
        });
    };

    useEffect(() => {
       getfotovoltaicas();
    }, []);
    
  // Extracción de datos para el gráfico de dispersión
  const data = fotovoltaicas.map((instalacion) => ({
    x: parseFloat(instalacion.Latitud),
    y: parseFloat(instalacion.Longitud),
    label: instalacion.Centro,
  }));

  // Configuración del gráfico de dispersión
  const chartData = {
    datasets: [
      {
        label: 'Instalaciones Fotovoltaicas',
        data: data,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        pointRadius: 8,
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
    

    const defaultTheme = createTheme();

    return fotovoltaicas === null?(
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
         <h1>información sobre las placas fotovoltaicas</h1>
         <p>En el siguiente gráfico de dispersión tenemos la información de las coordenadas de las diferentes placas fotovoltaicas instaladas en la ciudad.</p> 
         <Scatter data={chartData} options={chartOptions} />
         <Grid container spacing={4} direction="row-reverse">
            <Sidebar/>
          </Grid>
        </main>
        </Container>
        <Footer
        />
        </ThemeProvider>
      );
}
    