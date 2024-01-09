import React,{useState,useEffect} from "react";
import { Container} from "reactstrap";
import { getAllAforoBicicletas } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../blog/Footer';
import Sidebar from "../blog/Sidebar";
import Grid from '@mui/material/Grid';
import Header from "../blog/Header"
import { Line } from "react-chartjs-2";

export default function AforoBicicletas() {
    const [AforoBicicletas, setAforoBicicletas] = useState([]);
    
    const getAforoBicicletas=()=>{
        getAllAforoBicicletas().then((AforoBicicletas) => {
            setAforoBicicletas(AforoBicicletas);
        });
    };

    useEffect(() => {
       getAforoBicicletas();
    }, []);


    const defaultTheme = createTheme();

    const getbicicletas=()=>{
      const fechas=new Map();
      AforoBicicletas.forEach((AforoBicicletas) => {
        if (AforoBicicletas.FECHA){
        const fechaCompleta = AforoBicicletas.FECHA;
        const fecha = fechaCompleta.split(' ')[0];       
        const bicicletas=AforoBicicletas.BICICLETAS;
        if(fechas.has(fecha)){
          fechas.set(fecha,fechas.get(fecha)+bicicletas);
        }
        else{
          fechas.set(fecha,bicicletas);
        }
      }
      });
      return Array.from(fechas.entries()).map(([fecha,bicicletas])=>({fecha,bicicletas}));
    }

    return AforoBicicletas === null?(
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
         <h1>Aforo de bicicletas</h1>
         <p>En el siguiente gráfico podemos observar el aforo total de bicicletas en función de los días</p>

         {(() => {
            const bicicletas = getbicicletas();
            return(
              <Line
                data={{
                  labels: bicicletas.map((item) => item.fecha),
                  datasets: [
                    {
                      data: bicicletas.map((item) => item.bicicletas),
                      label: 'bicicletas',
                      borderColor: 'rgba(255, 99, 132, 1)',
                      fill: true,
                    },
                  ],
                }}
              />
            );
          
          })()}
          <Grid container spacing={4} direction="row-reverse">
            <Sidebar/>
          </Grid>
       </main>
       </Container>
       <Footer/>
       </ThemeProvider>
     );
}