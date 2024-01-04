import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllContaminacionAcustica } from "../../utils/apicalls";
import Header from "../blog/Header"
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
        <h1>INFORMACION SOBRE LA Contaminacion Acustica</h1> 

      </main>
      </Container>
      
      </ThemeProvider>
    );
    }