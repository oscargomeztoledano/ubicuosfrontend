import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllAforoPersonas } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../blog/Footer';
import Sidebar from "../blog/Sidebar";
import Grid from '@mui/material/Grid';
import Header from "../blog/Header"
import { Line } from "react-chartjs-2";

export default function AforoPersonasList() {
    const [aforopersonas, setAforoPersonas] = useState([]);
    
    const getAforoPersonas=()=>{
        getAllAforoPersonas().then((aforopersonas) => {
            setAforoPersonas(aforopersonas);
        });
    };

    useEffect(() => {
       getAforoPersonas();
    }, []);

    const getpeatones=()=>{
      const fechas=new Map();
      aforopersonas.forEach((aforopersonas) => {
        if (aforopersonas.FECHA){
        const fechaCompleta = aforopersonas.FECHA;
        const fecha = fechaCompleta.split(' ')[0];       
        const peatones=aforopersonas.PEATONES;
        if(fechas.has(fecha)){
          fechas.set(fecha,fechas.get(fecha)+peatones);
        }
        else{
          fechas.set(fecha,peatones);
        }
      }
      });
      return Array.from(fechas.entries()).map(([fecha,peatones])=>({fecha,peatones}));
    }
    const defaultTheme = createTheme();

    return aforopersonas === null?(
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
         <h1>Aforo de peatones</h1>
         <p>En el siguiente gráfico podemos observar el aforo total de peatones en función de los días</p> 
       {(() => {
            const peatones = getpeatones();
            return(
              <Line
                data={{
                  labels: peatones.map((item) => item.fecha),
                  datasets: [
                    {
                      data: peatones.map((item) => item.peatones),
                      label: 'Peatones',
                      borderColor: 'rgba(64, 224, 208, 1)',
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
        <Footer
        />
        </ThemeProvider>
      );
}