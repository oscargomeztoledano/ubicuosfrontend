import React,{useState,useEffect} from "react";
import { Row, Col, Container, Badge, CardTitle } from "reactstrap";
import { getAllAforoPersonas } from "../../utils/apicalls";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../blog/Header"

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
         <h1>INFORMACION SOBRE...</h1> 
       </main>
       </Container>
 
       </ThemeProvider>
     );
}