import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContaminacionAcustica } from "../../utils/apicalls";
import Header from "../blog/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Bar } from 'react-chartjs-2';

import{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)

export default function AcusticaList() {
    const [acusticas, setAcusticas] = useState(null);
    
    const getacusticas=()=>{
      getAllContaminacionAcustica().then((acusticas) => {
        setAcusticas(acusticas);
      }).catch((error) => {
        console.error("Error fetching data: ", error);
      });
    };

    useEffect(() => {
       getacusticas();
    }, []);
    const defaultTheme = createTheme();
  
    const getMaxNMTByName = () => {
      const nameNMTMap = new Map();

      acusticas.forEach((acustica) => {
        const name = acustica.Nombre;
        const nmt = acustica.NMT;

        if (!nameNMTMap.has(name) || nmt > nameNMTMap.get(name)) {
          nameNMTMap.set(name, nmt);
        }
      });

      return Array.from(nameNMTMap.entries()).map(([name, maxNMT]) => ({ name, maxNMT }));
    };

    const maxNMTByName = getMaxNMTByName();

  return acusticas === null?(
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
        <h1>Contaminacion Acustica</h1> 

        {/** Gráfico de linea temporal */}
        <Bar
            data={{
              labels: maxNMTByName.map((item)=>item.name),
              datasets: [
                {
                  label: 'NMT (Nivel de Ruido Máximo)',
                  data: maxNMTByName.map((item)=>item.maxNMT),  
                  backgroundColor: 'rgba(255, 99, 132, 0.2)',
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
              ],
            }}
          />

      </main>
      </Container>
      
      </ThemeProvider>
    );
  }